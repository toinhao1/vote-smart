const setApiKey = require('./lib/setApiKey');
const Address = require('./lib/Address/index');
const BallotMeasure = require('./lib/Ballot-Measure/index');
const CandidateBio = require('./lib/CandidateBio/index');

module.exports = voteSmart = {
	setApiKey,
	Address,
	BallotMeasure,
	CandidateBio,
};
