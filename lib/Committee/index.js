const endPoint = require('../endPoint');

module.exports = Committee = {
	getTypes: async () => {
		try {
			const response = await endPoint.get('/Committee.getTypes');

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getCommitteesByTypeState: async (typeId, stateId) => {
		try {
			const response = await endPoint.get(
				'/Committee.getCommitteesByTypeState',
				{
					params: {
						typeId,
						stateId,
					},
				}
			);

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getCommittee: async (committeeId) => {
		if (!committeeId) {
			throw new Error('Missing required param committeeId!');
		}
		try {
			const response = await endPoint.get('/Committee.getCommittee', {
				params: {
					committeeId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getCommitteeMembers: async (committeeId) => {
		if (!committeeId) {
			throw new Error('Missing required param committeeId!');
		}
		try {
			const response = await endPoint.get('/Committee.getCommitteeMembers', {
				params: {
					committeeId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
