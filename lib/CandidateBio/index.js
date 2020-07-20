const endPoint = require('../endPoint');

module.exports = CandidateBio = {
	getBio: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing param candidateId');
		}
		try {
			const response = await endPoint.get('/CandidateBio.getBio', {
				params: {
					candidateId,
				},
			});

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
			const response = await endPoint.get('/CandidateBio.getDetailedBio', {
				params: {
					candidateId,
				},
			});

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
			const response = await endPoint.get('/CandidateBio.getAddlBio', {
				params: {
					candidateId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
