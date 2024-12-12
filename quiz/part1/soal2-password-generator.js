function changeVocals(str) {
    const nextVocal = { a: "b", i: "j", u: "v", e: "f", o: "p", A: "B", I: "J", U: "V", E: "F", O: "P", };

    let changed = "";
    for (const char of str) {
        if (nextVocal[char]) {
            changed += nextVocal[char];
        } else {
            changed += char;
        }
    }

    return changed;
}

function reverseWord(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

function setLowerUpperCase(str) {
    let converted = "";

    for (const char of str) {
        if (char === char.toLowerCase()) {
            converted += char.toUpperCase();
        } else if (char === char.toUpperCase()) {
            converted += char.toLowerCase();
        } else {
            converted += char;
        }
    }

    return converted;
}

function removeSpaces(str) {
    let removed = "";

    for (const char of str) {
        if (char !== " ") {
            removed += char;
        }
    }

    return removed;
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }

    const changeVocal = changeVocals(name);
    const reverse = reverseWord(changeVocal);
    const convertCase = setLowerUpperCase(reverse);
    const removeSpace = removeSpaces(convertCase);
    const generatedPassword = removeSpace;

    return generatedPassword;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
