const Address = require('../lib/Address');
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
var assert = require('chai').assert;

// Joe bidens candidateId 53279

var joeBidensId = 53279;

describe('tests all methods from the address class', function () {
	before(function () {
		setApiKey('API KEY');
	});
	describe('getCampaign method', function () {
		it('returns data when providing correct params to getCampaign', async function () {
			const response = await Address.getCampaign(joeBidensId);
			expect(response.address.office).length.to.be.greaterThan(0);
		});
		// it('throws an error when no input', async function () {
		// 	assert.isRejected(Address.getCampaign(), Error);
		// });
	});
	describe('getCampaignWebAddress method', function () {
		it('returns data when providing correct params to getCampaign', async function () {
			const response = await Address.getCampaignWebAddress(joeBidensId);
			expect(response.address).length.to.be.greaterThan(0);
		});
		// it('throws an error when no input', async function () {
		// 	assert.isRejected(Address.getCampaign(), Error);
		// });
	});
});
