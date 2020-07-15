const axios = require('axios');

module.exports = BallotMeasure = {
	getMeasuresByYearState: async (year, stateId) => {
		if (!year || !stateId) {
			throw new Error(
				'You must provide the year and stateId to use this function.'
			);
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Measure.getMeasuresByYearState?key=${global.voteSmartApiKey}&o=JSON&year=${year}&stateId=${stateId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getMeasure: async (measureId) => {
		if (!measureId) {
			throw new Error('Missing param measureId.');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Measure.getMeasure?key=${global.voteSmartApiKey}&o=JSON&measureId=${measureId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
