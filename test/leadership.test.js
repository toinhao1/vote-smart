const Leadership = require('../lib/Leadership');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { stateId, officeId, leadershipId } = require('./data');

describe('all methods for the Leadership class', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	describe('getPositions method', function () {
		it('should return an array of positions with one param provided.', async function () {
			const {
				leadership: { position },
			} = await Leadership.getPositions(stateId);
			expect(position).to.not.be.null;
			expect(position).to.be.an('array');
			expect(position).length.to.be.greaterThan(1);
		});
		it('should return an array of positions with one param provided.', async function () {
			const {
				leadership: { position },
			} = await Leadership.getPositions(null, 5);
			expect(position).to.not.be.null;
			expect(position).to.be.an('array');
			expect(position).length.to.be.greaterThan(1);
		});
		it('should return an array of positions without params.', async function () {
			const {
				leadership: { position },
			} = await Leadership.getPositions();
			expect(position).to.not.be.null;
			expect(position).to.be.an('array');
			expect(position).length.to.be.greaterThan(1);
		});
	});
	describe('getOfficals method', function () {
		it('should return an object with an offical with one param.', async function () {
			const {
				leaders: { leader },
			} = await Leadership.getOfficials(leadershipId);
			expect(leader).to.not.be.null;
			expect(leader).to.be.an('object');
		});
		it('should throw an error when missign requried param.', async function () {
			try {
				await Leadership.getOfficials();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
