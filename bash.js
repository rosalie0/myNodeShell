const printDirectory = require('./pwd');
const listFiles = require('./ls');
const printFileContents = require('./cat');

//Output a prompt
process.stdout.write('prompt > ');

const done = (output) => {
	process.stdout.write(output);
	process.stdout.write('\nprompt Again! > ');
};

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim(); //remove the newline
	const cmdSplitBySpaces = cmd.split(' '); // used for handling when input is multiple 'words'

	if (cmd === 'pwd') {
		printDirectory(done);
	} else if (cmd === 'ls') {
		listFiles(done);
	} else if (cmdSplitBySpaces[0] === 'cat') {
		const filename = cmdSplitBySpaces[1];
		printFileContents(done, filename);
	} else done('You typed: ' + cmd);
});
