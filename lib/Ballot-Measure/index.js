const endPoint = require('../endPoint');

module.exports = BallotMeasure = {
	getMeasuresByYearState: async (year, stateId) => {
		if (!year || !stateId) {
			throw new Error(
				'You must provide the year and stateId to use this function.'
			);
		}
		try {
			const response = await endPoint.get('/Measure.getMeasuresByYearState', {
				params: {
					year,
					stateId,
				},
			});

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
			const response = await endPoint.get('/Measure.getMeasure', {
				params: {
					measureId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
