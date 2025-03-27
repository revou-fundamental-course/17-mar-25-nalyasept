console.log('JavaScript is working!');

// Form Validation
function validateForm() {
    const sisiInput = document.getElementById('sisi-input');

    // Check if the input is empty
    if (sisiInput.value == '') {
        alert('Sisi harus diisi!');
    } else {
        // Process the Calculation
        console.log(sisiInput.value);
    }
}