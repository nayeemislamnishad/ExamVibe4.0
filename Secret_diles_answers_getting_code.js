const correctAnswers = [];

const elements = document.querySelectorAll('.flex.items-center.px-2.bg-green-100.border-2.border-green-200.rounded-md');

elements.forEach(element => {
    const text = element.innerText.trim(); // Get the text and trim any extra spaces
    const answer = text.charAt(0); // Get the first character (option letter)
    correctAnswers.push(answer); // Add to the correctAnswers array
});

// Convert the array to a string without any delimiter
const answersString = correctAnswers.join(''); // No delimiter, just concatenate

console.log(answersString); // This will log something like "daa..."
