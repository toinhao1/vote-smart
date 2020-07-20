const endPoint = require('../endPoint');

module.exports = Leadership = {
	getPositions: async (stateId, officeId) => {
		try {
			const response = await endPoint.get('/Leadership.getPositions', {
				params: {
					stateId,
					officeId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getOfficials: async (leadershipId, stateId) => {
		if (!leadershipId) {
			throw new Error('Missing required param leadershipId!');
		}
		try {
			const response = await endPoint.get('/Leadership.getOfficials', {
				params: {
					leadershipId,
					stateId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
