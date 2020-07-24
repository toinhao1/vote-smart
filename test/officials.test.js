const Officials = require('../lib/Officials');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const {
	stateId,
	candidateLastName,
	districtId,
	zip5,
	zip4,
} = require('./data');

describe('all methods for the Officials class.', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	describe('getStateWide method', function () {
		it('should return an array officials.', async function () {
			const {
				candidateList: { candidate },
			} = await Officials.getStatewide(stateId);

			expect(candidate).to.be.an('array');
			expect(candidate).length.to.be.greaterThan(1);
		});
		it('should throw an error when no state is provided.', async function () {
			try {
				await Officials.getStatewide();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByOfficeState method', function () {
		it('should return an array of offcials when both params are provided.', async function () {
			const {
				candidateList: { candidate },
			} = await Officials.getByOfficeState(5, stateId);

			expect(candidate).to.be.an('array');
			expect(candidate).length.to.be.greaterThan(1);
		});
		it('should throw an error when one param is missing.', async function () {
			try {
				await Officials.getByOfficeState(5);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when one param is missing.', async function () {
			try {
				await Officials.getByOfficeState(null, stateId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when no params provided.', async function () {
			try {
				await Officials.getByOfficeState();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByOfficeTypeState method', function () {
		it('should return an array of candidates when both params provided.', async function () {
			const {
				candidateList: { candidate },
			} = await Officials.getByOfficeTypeState('C', stateId);
			expect(candidate).to.be.an('array');
			expect(candidate).length.to.be.greaterThan(1);
		});
		it('should throw an error when one param is missing.', async function () {
			try {
				await Officials.getByOfficeTypeState('C');
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when one param is missing.', async function () {
			try {
				await Officials.getByOfficeTypeState(null, stateId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when no params provided.', async function () {
			try {
				await Officials.getByOfficeTypeState();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByLastname method', function () {
		it('should return an array with candidates associated with the name provided.', async function () {
			const {
				candidateList: { candidate },
			} = await Officials.getByLastname(candidateLastName);
			expect(candidate).to.be.an('array');
			expect(candidate).length.to.be.greaterThan(1);
		});
		it('should throw an error with no name provided.', async function () {
			try {
				await Officials.getByLastname();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByLevenshtein method', function () {
		it('should return an array with candidates associated with the name provided.', async function () {
			const {
				candidateList: { candidate },
			} = await Officials.getByLevenshtein(candidateLastName);
			expect(candidate).to.be.an('array');
			expect(candidate).length.to.be.greaterThan(1);
		});
		it('should throw an error with no name provided.', async function () {
			try {
				await Officials.getByLevenshtein();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByDistrict method', function () {
		it('should return an array with candidates associated with the district.', async function () {
			const {
				candidateList: { candidate },
			} = await Officials.getByDistrict(districtId);
			expect(candidate).to.be.an('object');
		});
		it('should throw an error with no district provided.', async function () {
			try {
				await Officials.getByDistrict();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByZip method', function () {
		it('should return an array with candidates when both zips are provided.', async function () {
			const {
				candidateList: { candidate },
			} = await Officials.getByZip(zip5, zip4);
			expect(candidate).to.be.an('array');
		});
		it('should return an array with candidates when zip5 is provided.', async function () {
			const {
				candidateList: { candidate },
			} = await Officials.getByZip(zip5);
			expect(candidate).to.be.an('array');
		});
		it('should throw an error with no district provided.', async function () {
			try {
				await Officials.getByZip();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
