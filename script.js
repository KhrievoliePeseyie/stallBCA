const slider = document.querySelector('.slider');

// Function to pause rotation
function pauseRotation() {
    slider.style.animationPlayState = 'paused'; // Pause the animation
}

// Function to resume rotation
function resumeRotation() {
    slider.style.animationPlayState = 'running'; // Resume the animation
}

// Attach event listeners to the slider for mouseover and mouseout
slider.addEventListener('mouseover', pauseRotation);
slider.addEventListener('mouseout', resumeRotation);