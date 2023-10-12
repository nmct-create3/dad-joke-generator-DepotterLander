// const init = function () {
//     console.log('script loaded');
// }

// init();

function fetchJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Display the joke in the joke-container
        const jokeContainer = document.getElementById('joke-container');
        jokeContainer.innerHTML = data.joke;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
    });
}

// Add a click event listener to the button
const button = document.querySelector('.c-button');
button.addEventListener('click', fetchJoke);