const Election = require('../lib/Election');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const {
	stateId,
	zip5,
	zip4,
	electionId,
	year,
	stageId,
	party,
} = require('./data');

describe('all methods for Election class.', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	describe('getElection method', function () {
		it('should return data about a specific election.', async function () {
			const {
				elections: { election },
			} = await Election.getElection(electionId);
			expect(election.name).to.not.be.null;
			expect(election).to.be.an('object');
		});
		it('should throw an error when no id is provided.', async function () {
			try {
				await Election.getElection();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getElectionByYearState method', function () {
		it('should return an array of elections with both params provided.', async function () {
			const {
				elections: { election },
			} = await Election.getElectionByYearState(year, stateId);
			expect(election).to.not.be.null;
			expect(election).to.be.an('array');
		});
		it('should return an election with one param provided.', async function () {
			const {
				elections: { election },
			} = await Election.getElectionByYearState(year);

			expect(election).to.not.be.null;
			expect(election).to.be.an('object');
			expect(election.stateId).to.match(/NA/);
		});
		it('should throw an error when only stateId is provided.', async function () {
			try {
				await Election.getElectionByYearState(null, stateId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('shoild throw an erro when no params provided.', async function () {
			try {
				await Election.getElectionByYearState();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getElectionByZip method', function () {
		it('should return an array of elections with params provided.', async function () {
			const {
				elections: { election },
			} = await Election.getElectionByZip(zip5, zip4, year);
			expect(election).to.not.be.null;
			expect(election).to.be.an('array');
			expect(election).length.to.be.greaterThan(1);
		});
		it('should return an array of elections with only zip params.', async function () {
			const {
				elections: { election },
			} = await Election.getElectionByZip(zip5, zip4);
			expect(election).to.not.be.null;
			expect(election).to.be.an('array');
			expect(election).length.to.be.greaterThan(1);
		});
		it('should return an array of elections missing zip4.', async function () {
			const {
				elections: { election },
			} = await Election.getElectionByZip(zip5, null, year);
			expect(election).to.not.be.null;
			expect(election).to.be.an('array');
			expect(election).length.to.be.greaterThan(1);
		});
		it('should return an array of elections with only zip5.', async function () {
			const {
				elections: { election },
			} = await Election.getElectionByZip(zip5);
			expect(election).to.not.be.null;
			expect(election).to.be.an('array');
			expect(election).length.to.be.greaterThan(1);
		});
		it('should throw an error without params.', async function () {
			try {
				await Election.getElectionByZip();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error without zip5.', async function () {
			try {
				await Election.getElectionByZip(null, zip4, year);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getStageCandidates method', function () {
		it('should return an array of candidates with required params.', async function () {
			const {
				stageCandidates: { candidate },
			} = await Election.getStageCandidates(electionId, stageId);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
			expect(candidate).length.to.be.greaterThan(1);
		});
		it('should return an array of candidates with required params plus party.', async function () {
			const {
				stageCandidates: { candidate },
			} = await Election.getStageCandidates(electionId, stageId, party);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
			expect(candidate).length.to.be.greaterThan(1);
		});
		it('should throw an error when missing a required param.', async function () {
			try {
				await Election.getStageCandidates(null, stageId, party);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when missing a required param.', async function () {
			try {
				await Election.getStageCandidates(electionId, null, party);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error with no params.', async function () {
			try {
				await Election.getStageCandidates();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
