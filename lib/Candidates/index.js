const endPoint = require('../endPoint');

module.exports = Candidates = {
	getByOfficeState: async (
		officeId,
		stateId = 'NA',
		electionYear = new Date().getFullYear(),
		stageId
	) => {
		if (!officeId) {
			throw new Error('Missing required param officeId');
		}
		try {
			const response = await endPoint.get('/Candidates.getByOfficeState', {
				params: {
					officeId,
					stateId,
					electionYear,
					stageId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByOfficeTypeState: async (
		officeTypeId,
		stateId = 'NA',
		electionYear = new Date().getFullYear(),
		stageId
	) => {
		if (!officeTypeId) {
			throw new Error('Missing required param officeTypeId');
		}
		try {
			const response = await endPoint.get('/Candidates.getByOfficeTypeState', {
				params: {
					officeTypeId,
					stateId,
					electionYear,
					stageId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByLastname: async (
		lastName,
		electionYear = new Date().getFullYear(),
		stageId
	) => {
		if (!lastName) {
			throw new Error('Missing required param lastName');
		}
		try {
			const response = await endPoint.get('/Candidates.getByLastname', {
				params: {
					lastName,
					electionYear,
					stageId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	// This method grabs a list of candidates according to a fuzzy lastname match.
	getByLevenshtein: async (
		lastName,
		electionYear = new Date().getFullYear(),
		stageId
	) => {
		if (!lastName) {
			throw new Error('Missing required param lastName');
		}
		try {
			const response = await endPoint.get('/Candidates.getByLevenshtein', {
				params: {
					lastName,
					electionYear,
					stageId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByElection: async (electionId, stageId) => {
		if (!electionId) {
			throw new Error('Missing required param electionId');
		}
		try {
			const response = await endPoint.get('', {
				params: {
					electionId,
					stageId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByDistrict: async (
		districtId,
		electionYear = new Date().getFullYear(),
		stageId
	) => {
		if (!districtId) {
			throw new Error('Missing required param districtId');
		}
		try {
			const response = await endPoint.get('/Candidates.getByDistrict', {
				params: {
					districtId,
					electionYear,
					stageId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByZip: async (
		zip5,
		electionYear = new Date().getFullYear(),
		zip4 = null,
		stageId
	) => {
		if (!zip5) {
			throw new Error('Missing required param zip5');
		}
		try {
			const response = await endPoint.get('/Candidates.getByZip', {
				params: {
					zip5,
					electionYear,
					zip4,
					stageId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
