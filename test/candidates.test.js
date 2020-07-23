const Candidates = require('../lib/Candidates');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const {
	officeId,
	stateId,
	year,
	officeTypeId,
	candidateLastName,
	electionId,
	stageId,
	districtId,
	zip5,
	zip4,
} = require('./data');

describe('all methods for the Candidates class', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	describe('getByOfficeState method', function () {
		it('should return a valid array of canddiates when providing correct params.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByOfficeState(officeId, stateId, year);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should return a valid array of canddiates when providing only required param.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByOfficeState(officeId);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should throw an error when required param not provided.', async function () {
			try {
				await Candidates.getByOfficeState();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByOfficeTypeState method', function () {
		it('should return a valid array of canddiates when providing correct params.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByOfficeTypeState(officeTypeId, stateId, year);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should return a valid array of canddiates when providing only required param.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByOfficeTypeState(officeTypeId);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should throw an error when required param not provided.', async function () {
			try {
				await Candidates.getByOfficeTypeState();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when required param not provided, but others are.', async function () {
			try {
				await Candidates.getByOfficeTypeState('', stateId, year);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByLastname method', function () {
		it('should return a valid array of canddiates when providing correct params.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByLastname(candidateLastName, year);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should return a valid array of canddiates when providing only required param.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByLastname(candidateLastName);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should throw an error when required param not provided, but others provided.', async function () {
			try {
				await Candidates.getByLastname('', year);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when required param not provided.', async function () {
			try {
				await Candidates.getByLastname();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByLevenshtein methods', function () {
		it('should return an array of candidates close to the name provided.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByLevenshtein(candidateLastName, year);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});

		it('should return an array of possible matches with just the lastname.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByLevenshtein(candidateLastName);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});

		it('should throw an error without required param.', async function () {
			try {
				await Candidates.getByLevenshtein('', year);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});

		it('should throw an error without any params.', async function () {
			try {
				await Candidates.getByLevenshtein();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByElection method', function () {
		it('should return an array of candidates with both params.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByElection(electionId, stageId);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should return an array of candidates with required param.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByElection(electionId);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should throw an error with no params.', async function () {
			try {
				await Candidates.getByElection();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error with optional param.', async function () {
			try {
				await Candidates.getByElection('', stageId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByDistrict method', function () {
		it('should retun an array with candidates', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByDistrict(districtId, year, stageId);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should retun an array with candidates, only required param', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByDistrict(districtId);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should throw an error without required param', async function () {
			try {
				await Candidates.getByDistrict('', year, stageId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error without any params', async function () {
			try {
				await Candidates.getByDistrict();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByZip method', function () {
		it('should return an array of candidates with all params.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByZip(zip5, year, zip4, stageId);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should return an array of candidates with just zip5.', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByZip(zip5);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should throw an error without zip5.', async function () {
			try {
				await Candidates.getByZip(null, year, zip4);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error without params.', async function () {
			try {
				await Candidates.getByZip();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
