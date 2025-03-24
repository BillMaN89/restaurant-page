import HomePage from "./home.js"

export default function initialLoad() {
    const content = document.getElementById("content");
    content.textContent = "";

    content.appendChild(HomePage());
}

