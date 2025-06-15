// Enrollment Notification with Sound
const notification = document.getElementById('enrollment-notification');
const cityElement = document.getElementById('notification-city');
const notificationSound = document.getElementById('notification-sound');

function showNotification() {
    // Get random city
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    cityElement.textContent = randomCity;
    
    // Play notification sound
    notificationSound.currentTime = 0; // Rewind to start
    notificationSound.play().catch(e => console.log("Audio play failed:", e));
    
    // Show notification
    notification.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}