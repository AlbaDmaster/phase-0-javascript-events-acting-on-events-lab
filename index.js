// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


  function moveDodgerRight() {
    // Get the current left position of the dodger
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // Move the dodger 1 pixel to the right
    dodger.style.left = `${left + 1}px`;
}

// Add event listener to listen for keydown events
document.addEventListener("keydown", function(e) {
    // Check if the left arrow key is pressed
    if (e.key === "ArrowLeft") {
        // Call the moveDodgerLeft function
        moveDodgerLeft();
    }

    // Check if the right arrow key is pressed
    if (e.key === "ArrowRight") {
        // Call the moveDodgerRight function
        moveDodgerRight();
    }
});

