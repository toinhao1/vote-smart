const Rating = require('../lib/Rating');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { stateId, categoryId, sigId, candidId, ratingId } = require('./data');

describe('all methods for the Rating class.', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	describe('getCategories method', function () {
		it('should return an array of categories with stateId provided.', async function () {
			const {
				categories: { category },
			} = await Rating.getCategories(stateId);
			expect(category).to.be.an('array');
			expect(category).length.to.be.greaterThan(1);
		});

		it('should throw an error when no stateId provided.', async function () {
			try {
				await Rating.getCategories();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getSigList method', function () {
		it('should return an array of special interest groups with both params provided.', async function () {
			const {
				sigs: { sig },
			} = await Rating.getSigList(categoryId, stateId);
			expect(sig).to.be.an('array');
			expect(sig).length.to.be.greaterThan(1);
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Rating.getSigList(categoryId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when missing all params.', async function () {
			try {
				await Rating.getSigList();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getSig method', function () {
		it('should return an object with all pertinent info about a sig.', async function () {
			const { sig } = await Rating.getSig(sigId);
			expect(sig.stateId).to.be.an('string');
			expect(sig.description).to.not.be.null;
		});
		it('should throw an error when no sigId is provided.', async function () {
			try {
				await Rating.getSig();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getSigRatings method', function () {
		it('should return a rating when a correct id is provided.', async function () {
			const {
				sigRatings: { rating },
			} = await Rating.getSigRatings(sigId);
			expect(rating).to.be.an('array');
			expect(rating).length.to.be.greaterThan(1);
		});
		it('shoudl throw an error when no id is provided.', async function () {
			try {
				await Rating.getSigRatings();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getCandidateRating method', function () {
		it('should return an array of ratings for a specific candidate.', async function () {
			const {
				candidateRating: { rating },
			} = await Rating.getCandidateRating(candidId);
			expect(rating).to.be.an('array');
			expect(rating).length.to.be.greaterThan(1);
		});
		it('should return a spcific sig rating for the candidate.', async function () {
			const {
				candidateRating: { rating },
			} = await Rating.getCandidateRating(candidId, 2884);
			expect(rating).to.be.an('array');
			expect(rating).length.to.be.greaterThan(1);
		});
		it('should throw an error when no params are provided.', async function () {
			try {
				await Rating.getCandidateRating();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getRating method', function () {
		it('should return a rating from a scorecard by a specific sig.', async function () {
			const {
				rating: { candidateRating },
			} = await Rating.getRating(ratingId);
			expect(candidateRating).to.be.an('array');
			expect(candidateRating).length.to.be.greaterThan(1);
		});
		it('should throw an error when no params are provided.', async function () {
			try {
				await Rating.getRating();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
