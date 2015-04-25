exports.apiKey = function() {
	return process.env['API_KEY'] ? process.env['API_KEY'] : 'NONE';
}