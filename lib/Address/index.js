const axios = require('axios');

module.exports = Address = {
	getCampaign: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing param candidateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Address.getCampaign?key=${global.voteSmartApiKey}&o=JSON&candidateId=${candidateId}`
			);

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getCampaignWebAddress: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing param candidateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Address.getCampaignWebAddress?key=${global.voteSmartApiKey}&o=JSON&candidateId=${candidateId}`
			);

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getCampaignByElection: async (electionId) => {
		if (!electionId) {
			throw new Error('Missing param electionId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Address.getCampaignByElection?key=${global.voteSmartApiKey}&o=JSON&electionId=${electionId}`
			);

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getOffice: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing param candidateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Address.getOffice?key=${global.voteSmartApiKey}&o=JSON&candidateId=${candidateId}`
			);

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getOfficeWebAddress: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing param candidateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Address.getOfficeWebAddress?key=${global.voteSmartApiKey}&o=JSON&candidateId=${candidateId}`
			);

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getOfficeByOfficeState: async (officeId, stateId = 'NA') => {
		if (!officeId) {
			throw new Error('Missing param candidateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Address.getOfficeByOfficeState?key=${global.voteSmartApiKey}&o=JSON&officeId=${officeId}&stateId=${stateId}`
			);

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
