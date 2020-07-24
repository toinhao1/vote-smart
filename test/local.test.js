const Local = require('../lib/Local');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { stateId, localId } = require('./data');

describe('all methods for the Local class', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	describe('getCounties method', function () {
		it('should return an array of counties.', async function () {
			const {
				counties: { county },
			} = await Local.getCounties(stateId);
			expect(county).to.not.be.null;
			expect(county).to.be.an('array');
			expect(county).length.to.be.greaterThan(1);
		});
		it('should throw an error with no param.', async function () {
			try {
				await Local.getCounties();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getCities method', function () {
		it('should return an array of cities.', async function () {
			const {
				cities: { city },
			} = await Local.getCities(stateId);
			expect(city).to.not.be.null;
			expect(city).to.be.an('array');
			expect(city).length.to.be.greaterThan(1);
		});
		it('should throw an error with no param.', async function () {
			try {
				await Local.getCities();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getOfficials method', function () {
		it('should return an array of cities.', async function () {
			const {
				candidateList: { candidate },
			} = await Local.getOfficials(localId);
			expect(candidate).to.not.be.null;
			expect(candidate).to.be.an('array');
			expect(candidate).length.to.be.greaterThan(1);
		});
		it('should throw an error with no param.', async function () {
			try {
				await Local.getOfficials();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
