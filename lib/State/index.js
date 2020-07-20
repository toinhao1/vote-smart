const endPoint = require('../endPoint');

module.exports = State = {
	getStateIDs: async () => {
		try {
			const response = await endPoint.get('/State.getStateIDs');

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getState: async (stateId) => {
		if (!stateId) {
			throw new Error('Missing param stateId!');
		}
		try {
			const response = await endPoint.get('/State.getState', {
				params: {
					stateId,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
