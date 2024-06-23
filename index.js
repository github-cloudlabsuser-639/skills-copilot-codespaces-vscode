import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;
// Define a function to reverse a sentence and capitalize the first letter
function reverseAndCapitalize(sentence) {
  // Step 1: Reverse the sentence
  // Split the sentence into words, reverse the array of words, and join them back into a string
  const reversedSentence = sentence.split(' ').reverse().join(' ');

  // Step 2: Capitalize the first letter of the reversed sentence
  // Take the first character, convert it to uppercase, and concatenate it with the rest of the sentence
  const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

  // Step 3: Return the modified sentence
  return capitalizedSentence;
}

// Example usage
const inputSentence = "hello world";
const result = reverseAndCapitalize(inputSentence);
console.log(result); // Output: "World hello"
// Flatten the array of arrays and sort by age in ascending order
const flattenedAndSorted = data.flat().sort((a, b) => a.age - b.age);

console.log(flattenedAndSorted);
// Extract names from the nested data array
//const names = data.flat().map(person => person.name);

console.log(names); // Output: ["John", "Jane", "Bob"]

const names = data.flatMap(group => group.map(person => person.name));