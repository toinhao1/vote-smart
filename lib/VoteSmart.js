const setApiKey = require('./setApiKey');
const Address = require('./Address');
const BallotMeasure = require('./Ballot-Measure');
const CandidateBio = require('./CandidateBio');
const Candidates = require('./Candidates');
const Committee = require('./Committee');
const District = require('./District');
const Election = require('./Election');
const Leadership = require('./Leadership');
const Local = require('./Local');
const Npat = require('./Npat');
const Office = require('./Office');
const Officials = require('./Officials');
const Rating = require('./Rating');

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
	Office,
	Officials,
	Rating,
};
