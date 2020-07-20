# A Wrapper For Project Vote Smart API

A simple package which makes interacting with the Vote Smart api trivial.

Go to the Vote Smart documentation to understand how to best interact with their API: http://api.votesmart.org/docs/index.html

# Examples

Importing

```
// specific methods
const { Votes } = require('vote-smart');

// entire package
const voteSmart = require('vote-smart');
```

Set your api key

```
const { setApiKey } = require('vote-smart');

// have to get API key from Vote Smart
setApiKey(VOTE_SMART_API_KEY)
```
