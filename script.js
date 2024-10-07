// API endpoint
const apiURL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

// Your API Key from API Ninjas
const apiKey = 'aJLvuox1p4y8D9xzt7S+Lw==77Co7RXY2sISjTKa';  // Replace this with your actual API key

// DOM elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

// Function to fetch a new quote
async function getQuote() {
    try {
        const response = await fetch(apiURL, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey  // Passing the API key in the request headers
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Display the quote and author
        quoteText.textContent = `"${data[0].quote}"`;
        authorText.textContent = `- ${data[0].author}`;
    } catch (error) {
        quoteText.textContent = "An error occurred, please try again!";
        authorText.textContent = "";
        console.error('Error fetching quote:', error);
    }
}

// Event listener for button click
newQuoteBtn.addEventListener("click", getQuote);

// Fetch an initial quote on page load
getQuote();
