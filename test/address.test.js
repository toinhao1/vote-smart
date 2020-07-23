const Address = require('../lib/Address');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const { candidId, officeId, electionId } = require('./data');

describe('tests all methods from the address class', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	describe('getCampaign method', function () {
		it('returns data when providing correct params to getCampaign', async function () {
			const {
				address: { office },
			} = await Address.getCampaign(candidId);
			expect(office).length.to.be.greaterThan(0);
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
			const {
				webaddress: { address },
			} = await Address.getCampaignWebAddress(candidId);
			expect(address).length.to.be.greaterThan(0);
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
			const {
				address: { office },
			} = await Address.getCampaignByElection(electionId);
			expect(office).length.to.be.greaterThan(0);
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
			const {
				address: {
					office: { address },
				},
			} = await Address.getOffice(candidId);
			expect(address).to.haveOwnProperty('street');
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
			const {
				webaddress: { address },
			} = await Address.getOfficeWebAddress(candidId);
			expect(address).length.to.be.greaterThan(0);
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
			const {
				address: {
					office: { address },
				},
			} = await Address.getOfficeByOfficeState(officeId);
			expect(address).to.haveOwnProperty('street');
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
