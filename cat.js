const fs = require('fs');

module.exports = (done, filename) => {
	const fileContent = fs.readFileSync(filename, 'utf8');
	done(fileContent);
};
