import "./styles.css";
import HomePage from "./modules/home.js";

function LoadPage() {
    const content = document.getElementById("content");
    content.textContent = "";

    content.appendChild(HomePage());
}

document.addEventListener("DOMContentLoaded", LoadPage);