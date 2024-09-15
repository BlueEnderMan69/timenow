let tempTimeOverride = null;

// Function to fetch the user's IP address and location info using a public IP API
async function fetchIPDetails() {
    try {
        // Fetch user details based on IP
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
        let now;
        if (tempTimeOverride === 69) {
            now = "69:69:69";
        } else {
            now = new Date().toLocaleString("en-US", { timeZone: timezone });
        }
        timeDisplay.textContent = now;
    }
    
    // Initial call and then update every second
    updateTime();
    setInterval(updateTime, 1000);
}

// Fetch the user's IP and display the time
fetchIPDetails();

// Expose a function to set the temporary time override
window.setTempTime = function(time) {
    if (time === 69) {
        tempTimeOverride = 69;
    } else {
        tempTimeOverride = null;
    }
}

// Function to handle Twitter sharing
function handleTwitterShare() {
    const text = "Check out this cool content!";
    const url = "https://example.com"; // The URL you want to share
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    
    window.open(twitterUrl, '_blank');
}

// Attach event listener to the Twitter share button
document.getElementById('twitter-share').addEventListener('click', handleTwitterShare);
