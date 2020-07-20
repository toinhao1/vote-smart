const endPoint = require('../endPoint');

module.exports = Election = {
	getElection: async (electionId) => {
		if (!electionId) {
			throw new Error('Missing required param electionId!');
		}
		try {
			const response = await endPoint.get('/Election.getElection', {
				params: {
					electionId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getElectionByYearState: async (year, stateId) => {
		if (!year) {
			throw new Error('Missing required param year!');
		}
		try {
			const response = await endPoint.get('/Election.getElectionByYearState', {
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
	getElectionByZip: async (
		zip5,
		zip4 = null,
		year = new Date().getFullYear()
	) => {
		if (!zip5) {
			throw new Error('Missing required param zip5!');
		}
		try {
			const response = await endPoint.get('/Election.getElectionByZip', {
				params: {
					zip5,
					zip4,
					year,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getStageCandidates: async (electionId, stageId, party, districtId) => {
		if (!electionId || !stageId) {
			throw new Error('Missing required params!');
		}
		try {
			const response = await endPoint.get('/Election.getStageCandidates', {
				params: {
					electionId,
					stageId,
					party,
					districtId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
