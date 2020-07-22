const CandidateBio = require('../lib/CandidateBio');
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { candidId } = require('./data');

describe('all methods for the CandidateBio class', function () {
	before(function () {
		setApiKey('APIKEY');
	});
	describe('getBio methods', function () {
		it('should return a candidates bio with correct param provided', async function () {
			const { bio } = await CandidateBio.getBio(candidId);
			expect(bio).to.be.an('object');
		});
		it('should thorw an error with no param provided', async function () {
			try {
				await CandidateBio.getBio();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getDetailedBio methods', function () {
		it('should return a candidates bio with correct param provided', async function () {
			const { bio } = await CandidateBio.getDetailedBio(candidId);
			expect(bio).to.be.an('object');
		});
		it('should thorw an error with no param provided', async function () {
			try {
				await CandidateBio.getDetailedBio();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getAddlBio methods', function () {
		it('should return a candidates bio with correct param provided', async function () {
			const {
				addlBio: {
					additional: { item },
				},
			} = await CandidateBio.getAddlBio(candidId);
			expect(item).to.be.an('array');
		});
		it('should thorw an error with no param provided', async function () {
			try {
				await CandidateBio.getAddlBio();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
