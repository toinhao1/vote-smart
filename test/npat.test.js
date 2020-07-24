const Npat = require('../lib/Npat');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { candidId } = require('./data');

describe('all methods for the NPAT class.', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	it('return an npat for a specific candidate.', async function () {
		const { npat } = await Npat.getNpat(candidId);
		console.log(npat);
		expect(npat).to.not.be.null;
		expect(npat).to.be.an('object');
	});
	it('should throw an error when no id is provdied.', async function () {
		try {
			await Npat.getNpat();
		} catch (err) {
			expect(err).to.not.be.null;
		}
	});
});
