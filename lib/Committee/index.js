const axios = require('axios');

module.exports = Committee = {
	getTypes: async () => {
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Committee.getTypes?key=${global.voteSmartApiKey}&o=JSON`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getCommitteesByTypeState: async (typeId, stateId) => {
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Committee.getCommitteesByTypeState?key=${
					global.voteSmartApiKey
				}&o=JSON${typeId ? `&typeid=${typeId}` : ''}${
					stateId ? `&stateId=${stateId}` : ''
				}`
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
			const response = await axios.get(
				`http://api.votesmart.org/Committee.getCommittee?key=${global.voteSmartApiKey}&o=JSON&committeeId=${committeeId}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Committee.getCommitteeMembers?key=${global.voteSmartApiKey}&o=JSON&committeeId=${committeeId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
