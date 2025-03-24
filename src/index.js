import "./styles.css";
import initialLoad from "./modules/initial-page.js";
import HomePage from "./modules/home.js";
import Menu, { menuItems } from "./modules/menu.js";
import contactInfo from "./modules/contact.js";

function LoadPage(pageFunction) {
    const content = document.getElementById("content");
    content.style.opacity = "0";

    setTimeout(() => {
        content.textContent = "";
        content.appendChild(pageFunction());

        content.style.opacity = "1";
    }, 200);

}

//button listeners
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

homeBtn.addEventListener("click", () => LoadPage(HomePage));
menuBtn.addEventListener("click", () => LoadPage(() => Menu(menuItems)));
contactBtn.addEventListener("click", () => LoadPage(contactInfo));

document.addEventListener("DOMContentLoaded", initialLoad);

