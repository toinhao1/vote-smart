const endPoint = require('../endPoint');

module.exports = District = {
	getByOfficeState: async (officeId, stateId, districtName) => {
		if (!officeId || !stateId) {
			throw new Error('Missing required params.');
		}
		try {
			const response = await endPoint.get('/District.getByOfficeState', {
				params: {
					officeId,
					stateId,
					districtName,
				},
			});

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
			const response = await endPoint.get('/District.getByZip', {
				params: {
					zip5,
					zip4,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
