// Handle feedback form submission
const feedbackForm = document.getElementById('feedbackForm');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the form from refreshing the page

    // Show loading spinner
    document.getElementById('loadingSpinner').style.display = 'block';

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the form data
    console.log("Form Data:", { name, email, message });

    // Save the feedback to Google Sheets using SheetDB
    const sheetDBUrl = "YOUR_SHEETDB_API_URL"; // Replace with your SheetDB API URL

    fetch(sheetDBUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Name: name,
          Email: email,
          Message: message,
          Timestamp: new Date().toISOString(),
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Feedback saved to Google Sheets:", data);
        alert('Thank you for your feedback!');
        feedbackForm.reset(); // Clear the form
      })
      .catch((error) => {
        console.error("Error saving feedback:", error);
        alert('An error occurred. Please try again.');
      })
      .finally(() => {
        // Hide loading spinner
        document.getElementById('loadingSpinner').style.display = 'none';
      });
  });
}

// Handle contact form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the form from refreshing the page

    // Show loading spinner
    document.getElementById('loadingSpinner').style.display = 'block';

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the form data
    console.log("Form Data:", { name, email, message });

    // Save the contact message to Google Sheets using SheetDB
    const sheetDBUrl = "YOUR_SHEETDB_API_URL"; // Replace with your SheetDB API URL

    fetch(sheetDBUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Name: name,
          Email: email,
          Message: message,
          Timestamp: new Date().toISOString(),
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Contact message saved to Google Sheets:", data);
        alert('Thank you for contacting us!');
        contactForm.reset(); // Clear the form
      })
      .catch((error) => {
        console.error("Error saving contact message:", error);
        alert('An error occurred. Please try again.');
      })
      .finally(() => {
        // Hide loading spinner
        document.getElementById('loadingSpinner').style.display = 'none';
      });
  });
}