const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    return expr.match(/(.{10})/g).map((i)=>i.replace(/^0+/, '')).map(morse).join('');
}

function morse(str){
	switch(str){
		case '1011':
			return 'a';
		case '11101010':
			return 'b';
		case '11101110':
			return 'c';
		case '111010':
			return 'd';
		case '10':
			return 'e';
		case '10101110':
			return 'f';
		case '111110':
			return 'g';
		case '10101010':
			return 'h';
		case '1010':
			return 'i';
		case '10111111':
			return 'j';
		case '111011':
			return 'k';
		case '10111010':
			return 'l';
		case '1111':
			return 'm';
		case '1110':
			return 'n';
		case '111111':
			return 'o';
		case '10111110':
			return 'p';
		case '11111011':
			return 'q';
		case '101110':
			return 'r';
		case '101010':
			return 's';
		case '11':
			return 't';
		case '101011':
			return 'u';
		case '10101011':
			return 'v';
		case '101111':
			return 'w';
		case '11101011':
			return 'x';
		case '11101111':
			return 'y';
		case '11111010':
			return 'z';
		case '1011111111':
			return '1';
		case '1010111111':
			return '2';
		case '1010101111':
			return '3';
		case '1010101011':
			return '4';
		case '1010101010':
			return '5';
		case '1110101010':
			return '6';
		case '1111101010':
			return '7';
		case '1111111010':
			return '8';
		case '1111111110':
			return '9';
		case '1111111111':
			return '0';
		case '**********':
			return ' ';
	}
}

module.exports = {
    decode
}