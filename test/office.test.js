const Office = require('../lib/Office');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { officeTypeId, officeLevelId } = require('./data');

describe('all methods for the Office class.', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	describe('getTypes method', function () {
		it('should return an array of office types.', async function () {
			const {
				officeTypes: { type },
			} = await Office.getTypes();
			expect(type).to.not.be.null;
			expect(type).to.be.an('array');
			expect(type).length.to.be.greaterThan(1);
		});
		it('should throw an error with any input.', async function () {
			try {
				await Office.getTypes('type');
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getBranches method', function () {
		it('should return an array of office types.', async function () {
			const {
				branches: { branch },
			} = await Office.getBranches();
			expect(branch).to.not.be.null;
			expect(branch).to.be.an('array');
			expect(branch).length.to.be.greaterThan(1);
		});
		it('should throw an error with any input.', async function () {
			try {
				await Office.getBranches('type');
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getLevels method', function () {
		it('should return an array of office types.', async function () {
			const {
				levels: { level },
			} = await Office.getLevels();
			expect(level).to.not.be.null;
			expect(level).to.be.an('array');
			expect(level).length.to.be.greaterThan(1);
		});
		it('should throw an error with any input.', async function () {
			try {
				await Office.getLevels('type');
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getOfficesByType method', function () {
		it('should return an array of offices associated with the officeId.', async function () {
			const {
				offices: { office },
			} = await Office.getOfficesByType(officeTypeId);
			expect(office).to.be.an('array');
			expect(office).length.to.be.greaterThan(1);
		});
		it('should throw an error when no param is provided.', async function () {
			try {
				await Office.getOfficesByType();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getOfficesByLevel method', function () {
		it('should return an array of offices associated with the levelId.', async function () {
			const {
				offices: { office },
			} = await Office.getOfficesByLevel(officeLevelId);
			expect(office).to.be.an('array');
			expect(office).length.to.be.greaterThan(1);
		});
		it('should throw an error when no param is provided.', async function () {
			try {
				await Office.getOfficesByLevel();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getOfficesByTypeLevel method', function () {
		it('should return an array with both params provided.', async function () {
			const {
				offices: { office },
			} = await Office.getOfficesByTypeLevel(officeTypeId, officeLevelId);
			expect(office).to.be.an('array');
			expect(office).length.to.be.greaterThan(1);
		});
		it('should throw an error with only one param.', async function () {
			try {
				await Office.getOfficesByTypeLevel(officeTypeId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error with only one param.', async function () {
			try {
				await Office.getOfficesByTypeLevel(null, officeLevelId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error with no params.', async function () {
			try {
				await Office.getOfficesByTypeLevel();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});

	describe('getOfficesByBranchLevel method', function () {
		it('should return an array of offices when both params are provided.', async function () {
			const {
				offices: { office },
			} = await Office.getOfficesByBranchLevel('L', officeLevelId);
			expect(office).to.be.an('array');
			expect(office).length.to.be.greaterThan(1);
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Office.getOfficesByBranchLevel(null, officeLevelId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Office.getOfficesByBranchLevel('L');
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when missing all params.', async function () {
			try {
				await Office.getOfficesByBranchLevel();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
