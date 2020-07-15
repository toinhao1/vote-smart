const setApiKey = require('./lib/setApiKey');
const Address = require('./lib/Address/index');
const BallotMeasure = require('./lib/Ballot-Measure/index');

module.exports = voteSmart = {
	setApiKey,
	Address,
	BallotMeasure,
};
