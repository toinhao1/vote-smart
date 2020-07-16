const axios = require('axios');

module.exports = Election = {
	getElection: async (electionId) => {
		if (!electionId) {
			throw new Error('Missing required param electionId!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Election.getElection?key=${global.voteSmartApiKey}&o=JSON&electionId=${electionId}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Election.getElectionByYearState?key=${
					global.voteSmartApiKey
				}&o=JSON&year=${year}${stateId ? `&stateId=${stateId}` : ''}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Election.getElectionByZip?key=${global.voteSmartApiKey}&o=JSON&zip5=${zip5}&zip4=${zip4}&year=${year}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Election.getStageCandidates?key=${
					global.voteSmartApiKey
				}&o=JSON&electionId=${electionId}&stageId=${stageId}${
					party ? `&party=${party}` : ''
				}${districtId ? `&districtId=${districtId}` : ''}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
