const fs = require('fs');

module.exports = (done) => {
	const files = fs.readdirSync('./', 'utf8');
	done(files.join('\n'));
};
