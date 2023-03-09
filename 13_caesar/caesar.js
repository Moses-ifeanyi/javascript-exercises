function caesar(str, shift) {
    shift = ((shift % 26) + 26) % 26;
    return str.split('').map(char => {
      const code = char.charCodeAt(0);
      if (/[a-z]/i.test(char)) {
        let newCode = code + shift;
        if (char.match(/[a-z]/) && newCode > 122) {
          newCode -= 26;
        } else if (char.match(/[A-Z]/) && newCode > 90) {
          newCode -= 26;
        } else if (newCode < 65) {
          newCode += 26;
        }
        return String.fromCharCode(newCode);
      } else {
        return char;
      }
    }).join('');
  }
  

// Do not edit below this line
module.exports = caesar;
