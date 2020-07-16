const axios = require('axios');

module.exports = Office = {
	getTypes: async () => {
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Office.getTypes?key=${global.voteSmartApiKey}&o=JSON`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getBranches: async () => {
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Office.getBranches?key=${global.voteSmartApiKey}&o=JSON`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
	getLevels: async () => {
		try {
			const response = await axios.get(
				`http://api.votesmart.org/Office.getLevels?key=${global.voteSmartApiKey}&o=JSON`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Office.getOfficesByType?key=${global.voteSmartApiKey}&o=JSON&officeTypeId=${officeTypeId}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Office.getOfficesByLevel?key=${global.voteSmartApiKey}&o=JSON&levelId=${levelId}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Office.getOfficesByTypeLevel?key=${global.voteSmartApiKey}&o=JSON&officeTypeId=${officeTypeId}&officeLevelId=${officeLevelId}`
			);
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
			const response = await axios.get(
				`http://api.votesmart.org/Office.getOfficesByBranchLevel?key=${global.voteSmartApiKey}&o=JSON&branchId=${branchId}&levelId=${levelId}`
			);
			return response.data;
		} catch (err) {
			return err;
		}
	},
};
