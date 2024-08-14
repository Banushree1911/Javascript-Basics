

function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

const sentence = "My ambition is to become an Software Engineer.";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);