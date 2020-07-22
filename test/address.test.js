const Address = require('../lib/Address');
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;

var candidId = 15723;
var electionId = 3916;
var officeId = 1;

describe('tests all methods from the address class', function () {
	before(function () {
		setApiKey('API KEY');
	});
	describe('getCampaign method', function () {
		it('returns data when providing correct params to getCampaign', async function () {
			const response = await Address.getCampaign(candidId);
			expect(response.address.office).length.to.be.greaterThan(0);
		});
		it('throws an error when no input is provided', async function () {
			try {
				await Address.getCampaign();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getCampaignWebAddress method', function () {
		it('returns data when providing correct params to getCampaignWebAddress', async function () {
			const response = await Address.getCampaignWebAddress(candidId);
			expect(response.webaddress.address).length.to.be.greaterThan(0);
		});
		it('throws an error when no input is provided', async function () {
			try {
				await Address.getCampaignWebAddress();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getCampaignByElection method', function () {
		it('returns data when providing correct params to getCampaignByElection', async function () {
			const response = await Address.getCampaignByElection(electionId);
			expect(response.address.office).length.to.be.greaterThan(0);
		});
		it('throws an error when no input is provided', async function () {
			try {
				await Address.getCampaignByElection();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getOffice method', function () {
		it('returns data when providing correct param to getOffice', async function () {
			const response = await Address.getOffice(candidId);
			expect(response.address.office.address).to.haveOwnProperty('street');
		});
		it('throws an error when no input is provided', async function () {
			try {
				await Address.getOffice();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getOfficeWebAddress method', function () {
		it('returns data when providing correct param to getOfficeWebAddress', async function () {
			const response = await Address.getOfficeWebAddress(candidId);
			expect(response.webaddress.address).length.to.be.greaterThan(0);
		});
		it('throws an error when no input is provided', async function () {
			try {
				await Address.getOfficeWebAddress();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getOfficeByOfficeState method', function () {
		it('returns data when providing correct param to getOfficeByOfficeState', async function () {
			const response = await Address.getOfficeByOfficeState(officeId);
			expect(response.address.office.address).to.haveOwnProperty('street');
		});
		it('throws an error when no input is provided', async function () {
			try {
				await Address.getOfficeByOfficeState();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
