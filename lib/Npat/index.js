const endPoint = require('../endPoint');

module.exports = Npat = {
	getNpat: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing required param candidateId');
		}
		try {
			const response = await endPoint.get('/Npat.getNpat', {
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
