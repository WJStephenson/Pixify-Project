//add all HTML elements to variable to update dark mode

const modeChanges = document.querySelector("main, body, h1, h2, h3, .see-more");

//load light mode on page load

const defaultColorScheme = () => {
    modeChanges.classList.add("light-mode");
};

//toggle dark mode

const darkMode = () => {
    event.preventDefault();
    const darkModeButton = document.getElementById("dark-mode-button");
    const submitButton = document.getElementById("home-submit");
    if (darkModeButton.innerHTML === "Dark mode") {
        darkModeButton.innerHTML = "Light mode";
    } else {
        darkModeButton.innerHTML = "Dark mode";
    }
    modeChanges.classList.toggle("dark-mode");
    modeChanges.classList.toggle("light-mode");
    submitButton.classList.toggle("submit-dark-mode");
};

defaultColorScheme();