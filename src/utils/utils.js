const utils = {
	getStringId: (id) => {
		if (!id) return null;
		const result = id < 10 ? `00${id}` : `0${id}`;

		return result;
	},

	getHeightInFeetInches: (height) => {
		const heightInCenti = height * 10;
		let feetValue = parseInt(heightInCenti / 30.48);
		let inches = parseInt(((heightInCenti % 30.48) / 2.54).toFixed(0));

		return `${feetValue}'${inches}''`;
	},

	getWeightInKgs: (weight) => {
		const weightInKgs = weight / 10;
		return `${weightInKgs} Kg`;
	},

	getStringMatchingPercentange: (str1, str2) => {
		const string1 = str1?.replaceAll(' ', '');
		const string2 = str2?.replaceAll(' ', '');

		if (Math.abs(string1.length - string2.length > 5)) return 0;
		const obj = {};
		[...string1]?.forEach((char) => {
			if (!obj[char]) {
				obj[char] = 1;
			} else {
				obj[char] += 1;
			}
		});

		[...string2]?.forEach((char) => {
			if (!obj[char]) {
				obj[char] = -1;
			} else {
				obj[char] -= 1;
			}
		});

		const totalDeviation = Object?.keys(obj).reduce((acc, key) => {
			return (acc += obj[key]);
		}, 0);
		const percentage = 100 * (totalDeviation / string2?.length);
		return Math.abs(percentage);
	},

	isStringsMatching: (string1, string2) => {
		let isStringsMatching = false;
		const parentString = string1?.split('.');
		parentString?.forEach((string) => {
			const matchingPercentage = utils.getStringMatchingPercentange(
				string,
				string2
			);

			if (matchingPercentage < 20) isStringsMatching = true;
		});

		return isStringsMatching;
	},
	isMobile: () => {
		const ua = navigator.userAgent;
		if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			return true;
		}
		return false;
	},
};

export default utils;
