const axios = require('axios');

const instance = axios.create({
	baseURL: 'http://api.votesmart.org',
});

instance.interceptors.request.use((config) => {
	config.params = {
		// add your default ones
		key: global.voteSmartApiKey,
		o: 'JSON',
		// spread the request's params
		...config.params,
	};
	return config;
});

module.exports = instance;
