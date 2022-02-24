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
    let res = '';
    let kod = expr;
    let tmp = '';

        for (let i = 0; i < expr.length; i = i + 10) {
            tmp = kod.substr(0 + i, 10);
            let simAlf = '';
            if (tmp === '**********') {
                res = res + ' ';
            } else {
                for (let j = 0; j < 9; j = j + 2) {
                    if (tmp[j] !== '0' || tmp[j + 1] !== '0') {
                        let sim = tmp[j] + tmp[j + 1];
                        if (sim === '10') {
                            simAlf = simAlf + '.'; 
                        } else {
                            simAlf = simAlf + '-'; 
                        }
                    }
                }
                res = res + MORSE_TABLE[simAlf];
            } 
    }
 return res;
}

module.exports = {
    decode 
}
