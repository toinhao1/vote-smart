const axios = require('axios');

module.exports = State = {
	getStateIDs: async () => {
		try {
			const response = await axios.get(
				`http://api.votesmart.org/State.getStateIDs?key=${global.voteSmartApiKey}&o=JSON`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/State.getState?key=${global.voteSmartApiKey}&o=JSON&stateId=${stateId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
