function showAlert() {
    alert("Button was clicked!");
}
const textElement = document.querySelector('.clickable-text');

        // Add a click event listener to the text
        textElement.addEventListener('click', function() {
            // Show a confirmation dialog
            const userConfirmed = window.confirm("Do you want to proceed?");
            
            if (userConfirmed) {
                alert("You clicked OK!");
                // Handle the OK action here
            } else {
                alert("You clicked Cancel!");
                // Handle the Cancel action here
            }
        });