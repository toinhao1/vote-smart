const axios = require('axios');

module.exports = Npat = {
	getNpat: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing required param candidateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Npat.getNpat?key=${global.voteSmartApiKey}&o=JSON&candidateId=${candidateId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
