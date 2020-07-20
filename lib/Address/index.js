const axios = require('axios');
const endPoint = require('../endPoint');

module.exports = Address = {
	getCampaign: async (candidateId) => {
		if (!candidateId) {
			throw new Error('Missing param candidateId');
		}
		try {
			const response = await endPoint.get('/Address.getCampaign', {
				params: {
					candidateId,
				},
			});

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
			const response = await endPoint.get('/Address.getCampaignWebAddress', {
				params: {
					candidateId,
				},
			});

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
			const response = await endPoint.get('/Address.getCampaignByElection', {
				params: {
					electionId,
				},
			});

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
			const response = await endPoint.get('/Address.getOffice', {
				params: {
					candidateId,
				},
			});

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
			const response = await endPoint.get('/Address.getOfficeWebAddress', {
				params: {
					candidateId,
				},
			});

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
			const response = await endPoint.get('/Address.getOfficeByOfficeState', {
				params: {
					officeId,
					stateId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
