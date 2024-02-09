document.addEventListener('DOMContentLoaded', function() {
    const welcomeButton = document.getElementById('welcomeButton');
    const welcomeMessageElement = document.getElementById('welcomeMessage');

    welcomeButton.addEventListener('click', function() {
        welcomeMessageElement.textContent = 'Welcome!';
    });
});
