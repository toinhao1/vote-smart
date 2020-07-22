const Measure = require('../lib/Ballot-Measure');
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { year, stateId } = require('./data');

describe('tests all methods from the Measure class', function () {
	before(function () {
		setApiKey('APIKEY');
	});
	describe('getMeasureByYearState method', function () {
		it('should return correct value with both params provided', async function () {
			const {
				measures: { measure },
			} = await Measure.getMeasuresByYearState(year, 'CA');
			expect(measure).length.to.be.greaterThan(0);
		});
		it('should throw an error with only year provided', async function () {
			try {
				await Measure.getMeasuresByYearState(year);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error with only stateId provided', async function () {
			try {
				await Measure.getMeasuresByYearState(null, stateId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error with no params provided', async function () {
			try {
				await Measure.getMeasuresByYearState();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getMeasure method', function () {
		it('should return a measure when provided a measureId', async function () {
			const {
				measure: { title },
			} = await Measure.getMeasure(2494);
			expect(title).to.not.be.null;
		});
		it('should throw as error with no params', async function () {
			try {
				await Measure.getMeasure();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
