# A Wrapper For Project Vote Smart APi

A simple package which makes interacting with the Vote Smart api much easier.

Go to the Vote Smart documentation to understand how to best interact with their API: http://api.votesmart.org/docs/index.html

# Examples

importing

```
// specific methods
const { Votes } = require('vote-smart');

// entire package
const voteSmart = require('vote-smart');
```

set your api key

```
const voteSmart = require('vote-smart');

// have to get API key from Vote Smart
voteSmart.setApiKey(VOTE_SMART_API_KEY)

```
