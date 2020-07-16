const axios = require('axios');

module.exports = Local = {
	getCounties: async (stateId) => {
		if (!stateId) {
			throw new Error('Missing required param stateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Local.getCounties?key=${global.voteSmartApiKey}&o=JSON&stateId=${stateId}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Local.getCities?key=${global.voteSmartApiKey}&o=JSON&stateId=${stateId}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Local.getOfficials?key=${global.voteSmartApiKey}&o=JSON&localId=${localId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
