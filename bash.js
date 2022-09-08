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

// An array of the Commands we've written to handle, so far.
const commands = ['pwd', 'ls', 'cat', 'date', 'echo'];

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim(); //remove the newline
	const args = cmd.split(' ');

	if (commands.includes(args[0])) {
		if (args[0] === 'pwd') printDirectory(done);
		if (args[0] === 'ls') listFiles(done);
		if (args[0] === 'cat') {
			const filename = args[1];
			printFileContents(done, filename);
		}
		if (args[0] === 'date') printDate(done);
		if (args[0] === 'echo') {
			args.shift(); // Delete first element, in this case, 'echo'
			const restOfString = args.join(' ');
			echo(done, restOfString);
		}
	} else done(`Command not found: ${args[0]}`);
});
