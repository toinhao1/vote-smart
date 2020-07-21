# A Wrapper For Project Vote Smart API

A simple package which makes interacting with the Vote Smart api trivial.

Go to the Vote Smart documentation to understand how to best interact with their API: http://api.votesmart.org/docs/index.html

# Examples

Set your api key

```
const { setApiKey } = require('vote-smart');

// have to get API key from Vote Smart
setApiKey(VOTE_SMART_API_KEY)
```

Importing

```
// specific methods
const { Votes } = require('vote-smart');

Votes.getBill(billId)

// entire package
const voteSmart = require('vote-smart');

voteSmart.Votes.getBill(billid)
```

Using with chaining

```
const { Votes } = require('vote-smart');

  Votes.getBill(billId)
    .then(response => {
      return response.data

  }).catch(error => {
      console.log(err)
  })


```

Using with async/await

```
const { Votes } = require('vote-smart');

const getBillData = async (billId) => {

  const response = await Votes.getBill(billId)

  return response.data
}

```

# All Methods

Address

```
const { Address } = require('vote-smart');

Address.getCampaign(candidateId)
Address.getCampaignWebAddress(candidateId)
Address.getCampaignByElection(electionId)
Address.getOffice(candidateId)
Address.getOfficeWebAddress(candidateId)
Address.getOfficeByOfficeState(officeId, stateId)

```

Measure (Ballot Measure)

```
Measure.getMeasuresByYearState(year, stateId)
Measure.getMeasure(measureId)

```

CandidateBio

```
CandidateBio.getBio(candidateId)
CandidateBio.getDetailedBio(candidateId)
CandidateBio.getAddlBio(candidateId)

```

Candidates

```
Candidates.getByOfficeState(officeId, stateId, electionYear(default: >= current year), stageId)
Candidates.getByOfficeTypeState( officeTypeId, stateId, electionYear(default: >= current year), stageId)
Candidates.getByLastname(lastName, electionYear(default: >= current year), stageId)
Candidates.getByLevenshtein(lastName, electionYear(default: >= current year), stageId)
Candidates.getByElection(electionId, stageId)
Candidates.getByDistrict(districtId, electionYear(default: >= current year), stageId
)
// only 5 digit zip or zip5 is required
Candidates.getByZip(zip5*, electionYear(default: >= current year), zip4(default: NULL), stageId)

```

Committee

```
Committee.getTypes()
Committee.getCommitteesByTypeState(typeId, stateId)
Committee.getCommittee(committeeId)
Committee.getCommitteeMembers(committeeId)

```

District

```
District.getByOfficeState(officeId*, stateId*, districtName)

// only 5 digit zip or zip5 is required
District.getByZip(zip5*, zip4)

```

Election

```
Election.getElection(electionId)
Election.getElectionByYearState(year, stateId)
Election.getElectionByZip( zip5*, zip4, year)
Election.getStageCandidates( electionId, stageId, party (Default: ALL(NULL)), districtId (Default: All(NULL)))

```

Leadership

```
Leadership.getPositions(stateId(default: 'NA'), officeId(default: All))
Leadership.getOfficials(leadershipId*, stateId(default: 'NA'))

```

Local

```
Local.getCounties(stateId*)
Local.getCities(stateId*)
Local.getOfficials(localId*)

```

Npat

```
Npat.getNpat(candidateId*)

```

Office

```
Office.getTypes()
Office.getBranches()
Office.getLevels()
Office.getOfficesByType(officeTypeId*)
Office.getOfficesByLevel(levelId*)
Office.getOfficesByTypeLevel(officeTypeId*, officeLevelId*)
Office.getOfficesByBranchLevel(branchId*, levelId*)

```

Officials

```
Officials.getStatewide(stateId*)
Officials.getByOfficeState(officeId*, stateId*)
Officials.getByOfficeTypeState(officeTypeId*, stateId*)
Officials.getByLastname(lastName*)
Officials.getByLevenshtein(lastName*)
Officials.getByDistrict(districtId*)
// to get best results provide both 5 digit zip and 4 digit extension
Officials.getByZip(zip5*, zip4)

```

Rating

```
Rating.getCategories(stateId*)
Rating.getSigList(categoryId*, stateId*)
Rating.getSig(sigId*)
Rating.getSigRatings(sigId*)
Rating.getCandidateRating(candidateId*, sigId)
Rating.getRating(raitingId*)

```

State

```
State.getStateIDs()
State.getState(stateId*)

```

Votes

```
Votes.getCategories(year*, stateId*)
Votes.getBill(billId*)
Votes.getBillAction(actionId*)
Votes.getBillActionVotes(actionId*)
Votes.getBillActionVoteByOfficial(actionId*, candidateId*)
Votes.getByBillNumber(billNumber*)
Votes.getBillsByCategoryYearState(categoryId*, year*, stateId)
Votes.getBillsByYearState(year*, stateId)
Votes.getBillsByOfficialYearOffice(candidateId*, year*, officeId)
Votes.getBillsByOfficialCategoryOffice(candidateId*, categoryId*, officeId)
Votes.getByOfficial(candidateId*, officeId, year)
Votes.getBillsBySponsorYear(candidateId*, year*)
Votes.getBillsBySponsorCategory(candidateId*, categoryId*)
Votes.getBillsByStateRecent(amount*, stateId*)
Votes.getVetoes(candidateId*)

```
