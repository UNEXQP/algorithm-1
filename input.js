function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
    
    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        // Increment the length counter
        length++;
        
        // Count vowels
        if (vowels.includes(char)) {
            vowelCount++;
        }
        
        // Count words by checking for spaces
        // A new word is assumed if the current character is a space and the next character is not a space or period
        if (char === ' ' && sentence[i + 1] !== ' ' && sentence[i + 1] !== '.') {
            wordCount++;
        }
        
        // Stop if the character is a period (end of sentence)
        if (char === '.') {
            break;
        }
    }

    // Add one to wordCount to account for the last word before the period
    wordCount++;
    
    return {
        length: length,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}

// Example usage
const sentence = "This is a sample sentence.";
const result = analyzeSentence(sentence);
console.log(`Length of the sentence: ${result.length} characters.`);
console.log(`Number of words: ${result.wordCount}.`);
console.log(`Number of vowels: ${result.vowelCount}.`);
