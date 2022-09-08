const fs = require('fs');

module.exports = function (done) {
	const files = fs.readdirSync('./', 'utf8');
	done(files.join('\n'));

	// Doing it below with make it async.... even though it's official solution.
	// // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
	// fs.readdir('./', 'utf8', (err, files) => {
	// 	if (err) {
	// 		throw err;
	// 	} else {
	// 		process.stdout.write(files.join('\n'));
	// 		process.stdout.write('\nprompt > ');
	// 	}
	// });
};
