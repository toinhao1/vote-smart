const setApiKey = require('./lib/setApiKey');
const Address = require('./lib/Address/index');
const BallotMeasure = require('./lib/Ballot-Measure/index');
const CandidateBio = require('./lib/CandidateBio/index');
const Candidates = require('./lib/Candidates/index');
const Committee = require('./lib/Committee/index');
const District = require('./lib/District/index');
const Election = require('./lib/Election/index');
const Leadership = require('./lib/Leadership/index');
const Local = require('./lib/Local/index');
const Npat = require('./lib/Npat/index');

module.exports = voteSmart = {
	setApiKey,
	Address,
	BallotMeasure,
	CandidateBio,
	Candidates,
	Committee,
	District,
	Election,
	Leadership,
	Local,
	Npat,
};
