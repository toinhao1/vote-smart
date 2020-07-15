const axios = require('axios');

module.exports = District = {
	getByOfficeState: async (officeId, stateId, districtName) => {
		if (!officeId || !stateId) {
			throw new Error('Missing required params.');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/District.getByOfficeState?key=${
					global.voteSmartApiKey
				}&o=JSON&officeId=${officeId}&stateId=${stateId}${
					districtName ? `&districtName=${districtName}` : ''
				}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getByZip: async (zip5, zip4 = null) => {
		if (!zip5) {
			throw new Error('Missing required params zip5!');
		}
		try {
			const response = await axios.get(
				`http://api.votesmart.org/District.getByZip?key=${global.voteSmartApiKey}&o=JSON&zip5=${zip5}&zip4=${zip4}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
