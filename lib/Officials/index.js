const axios = require('axios');

module.exports = Officials = {
	getStatewide: async (stateId) => {
		if (!stateId) {
			throw new Error('Missing required param stateId');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Officials.getStatewide?key=${global.voteSmartApiKey}&o=JSON&stateId=${stateId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByOfficeState: async (officeId, stateId) => {
		if (!stateId || !officeId) {
			throw new Error('Missing a required param!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Officials.getByOfficeState?key=${global.voteSmartApiKey}&o=JSON&officeId=${officeId}&stateId=${stateId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByOfficeTypeState: async (officeTypeId, stateId) => {
		if (!stateId || !officeTypeId) {
			throw new Error('Missing a required param!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Officials.getByOfficeState?key=${global.voteSmartApiKey}&o=JSON&officeTypeId=${officeTypeId}&stateId=${stateId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByLastname: async (lastName) => {
		if (!lastName) {
			throw new Error('Missing reqired param lastName!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Officials.getByLastname?key=${global.voteSmartApiKey}&o=JSON&lastName=${lastName}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByLevenshtein: async (lastName) => {
		if (!lastName) {
			throw new Error('Missing reqired param lastName!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Officials.getByLevenshtein?key=${global.voteSmartApiKey}&o=JSON&lastName=${lastName}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByDistrict: async (districtId) => {
		if (!districtId) {
			throw new Error('Missing reqired param districtId!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Officials.getByDistrict?key=${global.voteSmartApiKey}&o=JSON&districtId=${districtId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByZip: async (zip5, zip4 = null) => {
		if (!zip5) {
			throw new Error('Missing reqired param zip5!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Officials.getByZip?key=${global.voteSmartApiKey}&o=JSON&zip5=${zip5}&zip4=${zip4}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
