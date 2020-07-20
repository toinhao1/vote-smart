const endPoint = require('../endPoint');

module.exports = Officials = {
	getStatewide: async (stateId) => {
		if (!stateId) {
			throw new Error('Missing required param stateId');
		}
		try {
			const response = await endPoint.get('/Officials.getStatewide', {
				params: {
					stateId,
				},
			});

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
			const response = await endPoint.get('/Officials.getByOfficeState', {
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
	getByOfficeTypeState: async (officeTypeId, stateId) => {
		if (!stateId || !officeTypeId) {
			throw new Error('Missing a required param!');
		}
		try {
			const response = await endPoint.get('/Officials.getByOfficeTypeState', {
				params: {
					officeTypeId,
					stateId,
				},
			});
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
			const response = await endPoint.get('/Officials.getByLastname', {
				params: {
					lastName,
				},
			});

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
			const response = await endPoint.get('/Officials.getByLevenshtein', {
				params: {
					lastName,
				},
			});

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
			const response = await endPoint.get('/Officials.getByDistrict', {
				params: {
					districtId,
				},
			});

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
			const response = await endPoint.get('/Officials.getByZip', {
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
