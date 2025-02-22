async function generateContent(prompt) {
try {
const result = await model.generateContent(prompt);
return result.response.text();
} catch (error) {
console.error("AI Service Error:", error);
throw new Error("Failed to generate content.");
}
}

// ✅ Exporting as an object with a method
module.exports = { getReview: generateContent };
