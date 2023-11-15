function viewGeneratePass(req, res) {
    const length = parseInt(req.query.length) || 10;
    const includeNumbers = req.query.includeNumbers === 'true';
    const includeSymbols = req.query.includeSymbols === 'true';
    const includeLowercase = req.query.includeLowercase === 'true';
    const includeUppercase = req.query.includeUppercase === 'true';

    if (!(includeNumbers || includeSymbols || includeLowercase || includeUppercase)) {
        return res.status(400).send('Please specify at least one type of character to include in the password.');
    }

    const password = generatePassword(length, includeNumbers, includeSymbols, includeLowercase, includeUppercase);
    res.send(`Generated password: ${password}`);
}

function generatePassword(length=10, 
    includeNumbers=true, 
    includeSymbols=true, 
    includeLowercase=true, 
    includeUppercase=true) {
    let charset = '';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-={}[]|;:,.<>?';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let password = '';
    for (let i = 0; i < length; ++i) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}


module.exports = viewGeneratePass