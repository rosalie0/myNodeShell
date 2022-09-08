const printDirectory = require('./pwd');
const listFiles = require('./ls');
const printFileContents = require('./cat');
const printDate = require('./date');
const echo = require('./echo');
//Output a prompt
process.stdout.write('prompt > ');

const done = (output) => {
	process.stdout.write(output);
	process.stdout.write('\nprompt > ');
};

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
	const args = data.toString().trim().split(' '); //remove the newline
	const cmd = args.shift(); // 'cmd' === first 'word' user entered.

	switch (cmd) {
		case 'pwd':
			printDirectory(done);
			break;
		case 'ls':
			listFiles(done);
			break;
		case 'cat':
			const filename = args[0];
			printFileContents(done, filename);
			break;
		case 'date':
			printDate(done);
			break;
		case 'echo':
			echo(done, args.join(' '));
			break;
		default:
			done(`Command not found: ${cmd}`);
			break;
	}
});
