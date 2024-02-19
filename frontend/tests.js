// Mock the getNextPrayer function to return a specific next prayer time
function getNextPrayerMock() {
    return {
        nextPrayer: "maghrib",
        nextPrayerTime: new Date(new Date().setHours(17, 45, 0, 0)), // Setting next prayer time to 5:45 PM
        nextPrayerHour: 17 // 24-hour format
    };
}

// Assuming current time is 3:00 PM, we manually set it for the test case
const currentTime = new Date(new Date().setHours(15, 0, 0, 0)); // Setting current time to 3:00 PM

// Replace the actual Date object with a mock or manually set the system time if possible
// For the purpose of this example, assume we can directly use the mock time

const {nextPrayer, nextPrayerTime, nextPrayerHour} = getNextPrayerMock();
const timeDifference = Math.abs(currentTime - nextPrayerTime); // Difference in milliseconds
const hours = Math.floor(timeDifference / 3600000); // Convert milliseconds to hours
const minutes = Math.round((timeDifference % 3600000) / 60000); // Convert remaining milliseconds to minutes

// Expected output calculation
const expectedHours = 2; // 5:45 PM - 3:00 PM = 2 hours 45 minutes
const expectedMinutes = 45;

// Call your modified function or directly use the logic here if it's a mock
const prayerMessage = `Next prayer is ${nextPrayer.charAt(0).toUpperCase() + 
    nextPrayer.slice(1)} at ${nextPrayerHour > 12 ? 
    (nextPrayerHour - 12) + ":" + (nextPrayerTime.getMinutes() >= 10 ?
    nextPrayerTime.getMinutes() :
    "0" + nextPrayerTime.getMinutes()) + "pm" :
    nextPrayerHour + ":" + (nextPrayerTime.getMinutes() >= 10 ? 
    nextPrayerTime.getMinutes() : "0" + nextPrayerTime.getMinutes()) + "am"} (${hours > 0 ? hours + " hour" + (hours > 1 ? "s" : "") + " and " : ""}${minutes} min)`;

console.log(prayerMessage); // This should output the formatted message with the time until the next prayer

// Assertion (for demonstration, assuming a simple check)
if (hours === expectedHours && minutes === expectedMinutes) {
    console.log("Test passed: Correct time difference calculated.");
} else {
    console.log("Test failed: Incorrect time difference.");
}
