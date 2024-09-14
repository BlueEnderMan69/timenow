// Function to fetch the user's IP address and location info using a public API
async function fetchIPDetails() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        const { city, region, country, timezone } = data;

        // Display the location
        document.getElementById('locationDisplay').textContent = `Location: ${city}, ${region}, ${country}`;

        // Call function to get the local time based on the timezone
        displayTime(timezone);
    } catch (error) {
        console.error("Error fetching IP details: ", error);
        document.getElementById('timeDisplay').textContent = "Error fetching time";
    }
}

// Function to display the local time based on the timezone
function displayTime(timezone) {
    const timeDisplay = document.getElementById('timeDisplay');
    
    // Function to update time every second
    function updateTime() {
        const now = new Date().toLocaleString("en-US", { timeZone: timezone });
        timeDisplay.textContent = now;
    }
    
    // Initial call and then update every second
    updateTime();
    setInterval(updateTime, 1000);
}

// Fetch the user's IP and display the time
fetchIPDetails();
