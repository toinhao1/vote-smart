const endPoint = require('../endPoint');

module.exports = Local = {
	getCounties: async (stateId) => {
		if (!stateId) {
			throw new Error('Missing required param stateId');
		}
		try {
			const response = await endPoint.get('/Local.getCounties', {
				params: {
					stateId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getCities: async (stateId) => {
		if (!stateId) {
			throw new Error('Missing required param stateId');
		}
		try {
			const response = await endPoint.get('/Local.getCities', {
				params: {
					stateId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getOfficials: async (localId) => {
		if (!localId) {
			throw new Error('Missing required param localId');
		}
		try {
			const response = await endPoint.get('/Local.getOfficials', {
				params: {
					localId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
