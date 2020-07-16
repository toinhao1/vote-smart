const axios = require('axios');

module.exports = Rating = {
	getCategories: async (stateId) => {
		if (!stateId) {
			throw new Error('Missing required param stateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Rating.getCategories?key=${global.voteSmartApiKey}&o=JSON&stateId=${stateId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getSigList: async (categoryId, stateId) => {
		if (!categoryId || !stateId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Rating.getSigList?key=${global.voteSmartApiKey}&o=JSON&categoryId=${categoryId}&stateId=${stateId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getSig: async (sigId) => {
		if (!sigId) {
			throw new Error('Missing required param sigId!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Rating.getSig?key=${global.voteSmartApiKey}&o=JSON}&sigId=${sigId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getSigRatings: async (sigId) => {
		if (!sigId) {
			throw new Error('Missing required param sigId!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Rating.getSigRatings?key=${global.voteSmartApiKey}&o=JSON&sigId=${sigId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getCandidateRating: async (candidateId, sigId) => {
		if (!candidateId || !sigId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Rating.getCandidateRating?key=${global.voteSmartApiKey}&o=JSON&candidateId=${candidateId}&sigId=${sigId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getRating: async (ratingId) => {
		if (!ratingId) {
			throw new Error('Missing required param ratingId!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Rating.getRating?key=${global.voteSmartApiKey}&o=JSON&ratingId=${ratingId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
