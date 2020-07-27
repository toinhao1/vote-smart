const endPoint = require('../endPoint');

module.exports = Votes = {
	getCategories: async (year, stateId) => {
		if (!year || !stateId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get('/Votes.getCategories', {
				params: {
					year,
					stateId,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBill: async (billId) => {
		if (!billId) {
			throw new Error('Missing required param billId!');
		}
		try {
			const response = await endPoint.get('/Votes.getBill', {
				params: {
					billId,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBillAction: async (actionId) => {
		if (!actionId) {
			throw new Error('Missing required param actionid!');
		}
		try {
			const response = await endPoint.get('/Votes.getBillAction', {
				params: {
					actionId,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBillActionVotes: async (actionId) => {
		if (!actionId) {
			throw new Error('Missing required param actionid!');
		}
		try {
			const response = await endPoint.get('/Votes.getBillActionVotes', {
				params: {
					actionId,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBillActionVoteByOfficial: async (actionId, candidateId) => {
		if (!actionId || !candidateId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get(
				'/Votes.getBillActionVoteByOfficial',
				{
					params: {
						actionId,
						candidateId,
					},
				}
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByBillNumber: async (billNumber) => {
		if (!billNumber) {
			throw new Error('Missing required param billNumber!');
		}
		try {
			const response = await endPoint.get('/Votes.getByBillNumber', {
				params: {
					billNumber,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBillsByCategoryYearState: async (categoryId, year, stateId) => {
		if (!categoryId || !year || !stateId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get(
				'/Votes.getBillsByCategoryYearState',
				{
					params: {
						categoryId,
						year,
						stateId,
					},
				}
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBillsByYearState: async (year, stateId) => {
		if (!year || !stateId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get('/Votes.getBillsByYearState', {
				params: {
					year,
					stateId,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBillsByOfficialYearOffice: async (candidateId, year) => {
		if (!year || !candidateId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get(
				'/Votes.getBillsByOfficialYearOffice',
				{
					params: {
						year,
						candidateId,
					},
				}
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBillsByOfficialCategoryOffice: async (candidateId, categoryId) => {
		if (!categoryId || !candidateId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get(
				'/Votes.getBillsByOfficialCategoryOffice',
				{
					params: {
						categoryId,
						candidateId,
					},
				}
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByOfficial: async (candidateId, year, officeId) => {
		if (!candidateId || !year) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get('/Votes.getByOfficial', {
				params: {
					candidateId,
					year,
					officeId,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBillsBySponsorYear: async (candidateId, year) => {
		if (!candidateId || !year) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get('/Votes.getBillsBySponsorYear', {
				params: {
					candidateId,
					year,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBillsBySponsorCategory: async (candidateId, categoryId) => {
		if (!candidateId || !categoryId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get('/Votes.getBillsBySponsorCategory', {
				params: {
					candidateId,
					categoryId,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBillsByStateRecent: async (amount, stateId) => {
		if (!amount || !stateId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get('/Votes.getBillsByStateRecent', {
				params: {
					amount,
					stateId,
				},
			});
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getVetoes: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get('/Votes.getVetoes', {
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
