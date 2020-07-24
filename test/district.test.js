const District = require('../lib/District');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { stateId, zip5, zip4 } = require('./data');

describe('all methods for District class.', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});

	describe('getByOfficeState method', function () {
		it('should return a list of districts.', async function () {
			const {
				districtList: { district },
			} = await District.getByOfficeState(5, stateId);
			expect(district).to.not.be.null;
			expect(district).to.be.an('array');
			expect(district).length.to.be.greaterThan(1);
		});
		it('should throw an error with only officeId provided.', async function () {
			try {
				await District.getByOfficeState(5);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error with only stateId provided.', async function () {
			try {
				await District.getByOfficeState(null, stateId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByZip method', function () {
		it('should return an array of districts with both params.', async function () {
			const {
				districtList: { district },
			} = await District.getByZip(zip5, zip4);

			expect(district).to.not.be.null;
			expect(district).to.be.an('array');
			expect(district).length.to.be.greaterThan(1);
		});
		it('should return an array of districts with one param.', async function () {
			const {
				districtList: { district },
			} = await District.getByZip(zip5);

			expect(district).to.not.be.null;
			expect(district).to.be.an('array');
			expect(district).length.to.be.greaterThan(1);
		});
		it('should throw an error with no params.', async function () {
			try {
				await District.getByZip();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
