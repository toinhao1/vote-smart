const axios = require('axios');

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
			const response = await axios.get(
				`http://api.votesmart.org/Candidates.getByOfficeState?key=${
					global.voteSmartApiKey
				}&o=JSON&officeId=${officeId}&stateId=${stateId}&electionYear=${electionYear}${
					stageId ? `&stageId=${stageId}` : ''
				}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Candidates.getByOfficeTypeState?key=${
					global.voteSmartApiKey
				}&o=JSON&officeTypeId=${officeTypeId}&stateId=${stateId}&electionYear=${electionYear}${
					stageId ? `&stageId=${stageId}` : ''
				}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Candidates.getByLastname?key=${
					global.voteSmartApiKey
				}&o=JSON&lastName=${lastName}&electionYear=${electionYear}${
					stageId ? `&stageId=${stageId}` : ''
				}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Candidates.getByLevenshtein?key=${
					global.voteSmartApiKey
				}&o=JSON&lastName=${lastName}&electionYear=${electionYear}${
					stageId ? `&stageId=${stageId}` : ''
				}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Candidates.getByElection?key=${
					global.voteSmartApiKey
				}&o=JSON&electionId=${electionId}${
					stageId ? `&stageId=${stageId}` : ''
				}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Candidates.getByDistrict?key=${
					global.voteSmartApiKey
				}&o=JSON&districtId=${districtId}&electionYear=${electionYear}${
					stageId ? `&stageId=${stageId}` : ''
				}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Candidates.getByZip?key=${
					global.voteSmartApiKey
				}&o=JSON&zip5=${zip5}&zip4=${zip4}&electionYear=${electionYear}${
					stageId ? `&stageId=${stageId}` : ''
				}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
