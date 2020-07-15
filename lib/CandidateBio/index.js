const axios = require('axios');

module.exports = CandidateBio = {
	getBio: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing param candidateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/CandidateBio.getBio?key=${global.voteSmartApiKey}&o=JSON&candidateId=${candidateId}`
			);

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getDetailedBio: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing param candidateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/CandidateBio.getDetailedBio?key=${global.voteSmartApiKey}&o=JSON&candidateId=${candidateId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getAddlBio: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing param candidateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/CandidateBio.getAddlBio?key=${global.voteSmartApiKey}&o=JSON&candidateId=${candidateId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
