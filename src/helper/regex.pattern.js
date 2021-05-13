const regexPatterns = {
    onlyLettersWithSpace() {
        // https://stackoverflow.com/questions/12778083/regex-with-space-and-letters-only/12778207#12778207
        return /^[a-zA-Z\s]*$/
    },
    onlyLettersAndNumbers() {
        // https://stackoverflow.com/questions/39520243/regex-to-allow-only-letters-and-numbers
        return /^[a-zA-Z0-9]*$/
    },
    onlyLettersAndNumbersWithSpace() {
        // https://stackoverflow.com/questions/9052441/regular-expression-to-match-only-letters-numbers-and-spaces
        return /^[\w ]+$/
    },
    onlyLettersNumbersSpaceCommasPeriods() {
        // https://stackoverflow.com/questions/24744375/regex-for-only-allowing-letters-numbers-space-commas-periods
        return /^[\w\n\s,.!?]+$/
    },
    emailAddress() {
        // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        return /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/
    },
}

export default regexPatterns
