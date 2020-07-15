const setApiKey = require('./lib/setApiKey');
const Address = require('./lib/Address/index');
const BallotMeasure = require('./lib/Ballot-Measure/index');
const CandidateBio = require('./lib/CandidateBio/index');
const Candidates = require('./lib/Candidates/index');
const Committee = require('./lib/Committee/index');

module.exports = voteSmart = {
	setApiKey,
	Address,
	BallotMeasure,
	CandidateBio,
	Candidates,
	Committee,
};
