const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.transform = "translateX(0)";
        } else {
            slide.style.transform = "translateX(100%)";
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initially show the first slide
showSlide(currentSlide);

// Set up click event listeners for next and previous buttons
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

function submitForm(){
    console.log("Hello");
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    fetch('http://localhost:3000/submitData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // Include the data you want to send to the server
            // For example, you can send a user object like this
            id: "1",
            username: username,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the API response data here, if needed
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occur during the API request
        console.error('Error making API request:', error);
    });

}
