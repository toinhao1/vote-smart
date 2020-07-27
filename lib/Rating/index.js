const endPoint = require('../endPoint');

module.exports = Rating = {
	getCategories: async (stateId) => {
		if (!stateId) {
			throw new Error('Missing required param stateId');
		}
		try {
			const response = await endPoint('/Rating.getCategories', {
				params: {
					stateId,
				},
			});
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
			const response = await endPoint.get('/Rating.getSigList', {
				params: {
					categoryId,
					stateId,
				},
			});
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
			const response = await endPoint.get('/Rating.getSig', {
				params: {
					sigId,
				},
			});
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
			const response = await endPoint.get('/Rating.getSigRatings', {
				params: {
					sigId,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getCandidateRating: async (candidateId, sigId) => {
		if (!candidateId) {
			throw new Error('Missing required param candidateId!');
		}
		try {
			const response = await endPoint.get('/Rating.getCandidateRating', {
				params: {
					candidateId,
					sigId,
				},
			});
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
			const response = await endPoint.get('/Rating.getRating', {
				params: {
					ratingId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
