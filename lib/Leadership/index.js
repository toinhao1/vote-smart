const axios = require('axios');

module.exports = Leadership = {
	getPositions: async (stateId, officeId) => {
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Leadership.getPositions?key=${
					global.voteSmartApiKey
				}&o=JSON${stateId ? `&stateId=${stateId}` : ''}${
					officeId ? `&officeId=${officeId}` : ''
				}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Leadership.getOfficials?key=${
					global.voteSmartApiKey
				}&o=JSON&leadershipId=${leadershipId}${
					stateId ? `&stateId=${stateId}` : ''
				}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
