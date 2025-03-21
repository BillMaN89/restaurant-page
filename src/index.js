import "./styles.css";
import HomePage from "./modules/home.js";
import Menu, { menuItems } from "./modules/menu.js";
import contactInfo from "./modules/contact.js";

function LoadPage() {
    const content = document.getElementById("content");
    content.textContent = "";

    content.appendChild(Menu(menuItems));
}

document.addEventListener("DOMContentLoaded", LoadPage);

