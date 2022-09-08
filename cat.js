const fs = require('fs');

module.exports = function (done, filename) {
	const fileContent = fs.readFileSync(filename, 'utf8');
	done(fileContent);

	// fs.readFile(filename, 'utf8', function (err, data) {
	// 	if (err) throw err;
	// 	else process.stdout.write(data + '\n');
	// });
};
