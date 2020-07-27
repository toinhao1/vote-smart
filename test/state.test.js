const State = require('../lib/State');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { stateId } = require('./data');

describe('all methods for the State class.', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	it('should return an array of stateIds.', async function () {
		const {
			stateList: {
				list: { state },
			},
		} = await State.getStateIDs();
		expect(state).to.be.an('array');
		expect(state).length.to.be.greaterThan(1);
	});
	it('should return a data object about a specific state.', async function () {
		const {
			state: { details },
		} = await State.getState(stateId);
		expect(details).to.be.an('object');
		expect(details.capital).to.equal('Austin');
	});
	it('should throw an error when no stateId is provided.', async function () {
		try {
			await State.getState();
		} catch (err) {
			expect(err).to.not.be.null;
		}
	});
});
