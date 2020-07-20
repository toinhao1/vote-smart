const endPoint = require('../endPoint');

module.exports = Office = {
	getTypes: async () => {
		try {
			const response = await endPoint.get('/Office.getTypes');
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBranches: async () => {
		try {
			const response = await endPoint.get('/Office.getBranches');

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getLevels: async () => {
		try {
			const response = await endPoint.get('/Office.getLevels');

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getOfficesByType: async (officeTypeId) => {
		if (!officeTypeId) {
			throw new Error('Missing required param officeTypeId!');
		}
		try {
			const response = await endPoint.get('/Office.getOfficesByType', {
				params: {
					officeTypeId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getOfficesByLevel: async (levelId) => {
		if (!levelId) {
			throw new Error('Missing required param levelId!');
		}
		try {
			const response = await endPoint.get('/Office.getOfficesByLevel', {
				params: {
					levelId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getOfficesByTypeLevel: async (officeTypeId, officeLevelId) => {
		if (!officeTypeId || !officeLevelId) {
			throw new Error('Missing required param!');
		}
		try {
			const response = await endPoint.get('/Office.getOfficesByTypeLevel', {
				params: {
					officeTypeId,
					officeLevelId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
	getOfficesByBranchLevel: async (branchId, levelId) => {
		if (!branchId || !levelId) {
			throw new Error('Missing required param!');
		}
		try {
			const response = await endPoint.get('/Office.getOfficesByBranchLevel', {
				params: {
					branchId,
					levelId,
				},
			});

			return response.data;
		} catch (err) {
			return err;
		}
	},
};
