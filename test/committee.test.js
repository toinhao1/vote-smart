const Committee = require('../lib/Committee');
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { stateId, committeetypeId, committeeId } = require('./data');

describe('all methods for Committee class', function () {
	before(function () {
		setApiKey('APIKEY');
	});

	describe('getTypes method', function () {
		it('should return an array of committee types', async function () {
			const {
				committeeTypes: { type },
			} = await Committee.getTypes();
			expect(type).to.not.be.null;
			expect(type).to.be.an('array');
			expect(type).length.to.be.greaterThan(1);
		});
	});
	describe('getCommitteesByTypeState method', function () {
		it('should return an array of committees', async function () {
			const {
				committees: { committee },
			} = await Committee.getCommitteesByTypeState(committeetypeId, stateId);

			expect(committee).to.not.be.null;
			expect(committee).to.be.an('array');
			expect(committee).length.to.be.greaterThan(1);
		});
		it('should throw an error when typeId is not provided', async function () {
			try {
				await Committee.getCommitteesByTypeState('', stateId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when no params provided', async function () {
			try {
				await Committee.getCommitteesByTypeState();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getCommittee method', function () {
		it('should get the data associated with a specific committee.', async function () {
			const {
				committee: { name },
			} = await Committee.getCommittee(committeeId);
			expect(name).to.not.be.null;
			expect(name).to.be.match(/Agriculture/);
		});
		it('should throw an error with no input.', async function () {
			try {
				await Committee.getCommittee();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});

	describe('getCommitteeMembers method', function () {
		it('should get the members from a specific committee.', async function () {
			const {
				committeeMembers: { member },
			} = await Committee.getCommitteeMembers(committeeId);
			expect(member).to.not.be.null;
			expect(member).to.be.an('array');
		});
		it('should throw an error when no param is provided', async function () {
			try {
				await Committee.getCommitteeMembers();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
