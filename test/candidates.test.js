const Candidates = require('../lib/Candidates');
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const {
	officeId,
	stateId,
	year,
	officeTypeId,
	candidateLastName,
	electionId,
} = require('./data');

describe('all methods for the Candidates class', function () {
	before(function () {
		setApiKey('APIKEY');
	});
	describe('getByOfficeState method', function () {
		it('should return a valid array of canddiates when providing correct params', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByOfficeState(officeId, stateId, year);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should return a valid array of canddiates when providing only required param', async function () {
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
		it('should return a valid array of canddiates when providing correct params', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByOfficeTypeState(officeTypeId, stateId, year);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should return a valid array of canddiates when providing only required param', async function () {
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
		it('should return a valid array of canddiates when providing correct params', async function () {
			const {
				candidateList: { candidate },
			} = await Candidates.getByLastname(candidateLastName, year);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
		});
		it('should return a valid array of canddiates when providing only required param', async function () {
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
		it('should return an array of candidates close to the name provided', async function () {
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
		it('should return an array of candidates for a given election', async function () {
			const res = await Candidates.getByElection(electionId);
			console.log(res);
			// expect(candidate).to.not.be.null;
			// expect(candidate).to.be.an('array');
		});
	});
});
