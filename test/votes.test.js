const Votes = require('../lib/Votes');
require('dotenv').config();
const setApiKey = require('../lib/setApiKey');
var expect = require('chai').expect;
const {
	stateId,
	actionId,
	year,
	candidId,
	categoryId,
	billNumber,
	billId,
} = require('./data');

describe('all methods for the Votes class.', function () {
	before(function () {
		setApiKey(process.env.VOTE_SMART_API_KEY);
	});
	describe('getCategories method', function () {
		it('should return an array of categories with both params provided.', async function () {
			const {
				categories: { category },
			} = await Votes.getCategories(year, 'CA');
			expect(category).to.be.an('array');
			expect(category).length.to.be.greaterThan(1);
		});
		it('should throw an error when one parameter is missing.', async function () {
			try {
				await Votes.getCategories(year);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when one parameter is missing.', async function () {
			try {
				await Votes.getCategories(null, 'NA');
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when all params are missing.', async function () {
			try {
				await Votes.getCategories();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getBill method', function () {
		it('should return an object with all data related to a specific billId.', async function () {
			const { bill } = await Votes.getBill(billId);
			expect(bill).to.be.an('object');
		});
		it('should throw an error when missign a param.', async function () {
			try {
				await Votes.getBill();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getBillAction method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const { action } = await Votes.getBillAction(actionId);

			expect(action).to.be.an('object');
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillAction();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});

	describe('getBillActionVotes method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				votes: { vote },
			} = await Votes.getBillActionVotes(actionId);

			expect(vote).to.be.an('array');
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillActionVotes();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});

	describe('getBillActionVoteByOfficial method', function () {
		// it('should return an object with info associated to an actioon with a bill.', async function () {
		// 	const res = await Votes.getBillActionVoteByOfficial(actionId, candidId);
		// 	console.log(res);
		// 	// expect(action).to.be.an('object');
		// });
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillActionVoteByOfficial(null, candidId);
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillActionVoteByOfficial();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});

	describe('getByBillNumber method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				bills: { bill },
			} = await Votes.getByBillNumber(billNumber);
			expect(bill).to.be.an('object');
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getByBillNumber();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});

	describe('getBillsByCategoryYearState method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				bills: { bill },
			} = await Votes.getBillsByCategoryYearState(categoryId, year, 'CA');
			expect(bill).to.be.an('array');
			expect(bill).length.to.be.greaterThan(1);
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillsByCategoryYearState();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getBillsByYearState method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				bills: { bill },
			} = await Votes.getBillsByYearState(year, 'CA');
			expect(bill).to.be.an('array');
			expect(bill).length.to.be.greaterThan(1);
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillsByYearState();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getBillsByOfficialYearOffice method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				bills: { bill },
			} = await Votes.getBillsByOfficialYearOffice(candidId, year);
			expect(bill).to.be.an('array');
			expect(bill).length.to.be.greaterThan(1);
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillsByOfficialYearOffice();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});

	describe('getBillsByOfficialCategoryOffice method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				bills: { bill },
			} = await Votes.getBillsByOfficialCategoryOffice(candidId, categoryId);
			expect(bill).to.be.an('array');
			expect(bill).length.to.be.greaterThan(1);
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillsByOfficialCategoryOffice();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getByOfficial method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				bills: { bill },
			} = await Votes.getByOfficial(candidId, year, 1);
			expect(bill).to.be.an('array');
			expect(bill).length.to.be.greaterThan(1);
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getByOfficial();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getBillsBySponsorYear method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				bills: { bill },
			} = await Votes.getBillsBySponsorYear(candidId, year);
			expect(bill).to.be.an('object');
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillsBySponsorYear();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getBillsBySponsorCategory method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				bills: { bill },
			} = await Votes.getBillsBySponsorCategory(candidId, categoryId);
			expect(bill).to.be.an('array');
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillsBySponsorCategory();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getBillsByStateRecent method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				bills: { bill },
			} = await Votes.getBillsByStateRecent(20, 'CA');
			expect(bill).to.be.an('array');
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getBillsByStateRecent();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
	describe('getVetoes method', function () {
		it('should return an object with info associated to an actioon with a bill.', async function () {
			const {
				vetoes: { veto },
			} = await Votes.getVetoes(candidId);
			expect(veto).to.be.an('array');
		});
		it('should throw an error when missing a param.', async function () {
			try {
				await Votes.getVetoes();
			} catch (err) {
				expect(err).to.not.be.null;
			}
		});
	});
});
