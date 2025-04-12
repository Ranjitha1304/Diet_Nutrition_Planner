const boxes = document.querySelectorAll('.review-box');
let currentIndex = 0;

function animateBox(index) {
    const box = boxes[index];

    // Zoom image + fade in alternate content
    box.classList.add('zoomed');
    box.classList.remove('show-original');
    box.classList.add('show-alternate');

    setTimeout(() => {
        // Revert to original
        box.classList.remove('zoomed');
        box.classList.remove('show-alternate');
        box.classList.add('show-original');

        // Move to next
        currentIndex = (index + 1) % boxes.length;
        setTimeout(() => animateBox(currentIndex), 2000);
    }, 2000); // How long it stays zoomed with alternate content
}

// Start
animateBox(currentIndex);
