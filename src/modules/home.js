import RestaurantImage from "../assets/restaurant.jpg";

export default function HomePage() {
    const HomeDiv = document.createElement("div");
    HomeDiv.classList.add("home");

    const type = document.createElement("h3");
    type.textContent = "Παραδοσιακό Σουβλατζίδικο"

    const HeadLine = document.createElement("h1");
    HeadLine.textContent = "«Ο Βασίλης»"

    const WelcomeMessage = document.createElement("h2");
    WelcomeMessage.textContent = "Καλώς ήλθατε στην σελίδα μας!";

    const Description = document.createElement("p");
    Description.textContent = "Στον χώρο μας θα απολαύσετε τα νοστιμότερα σουβλάκια στην πόλη!"

    const image = document.createElement("img");
    image.src = RestaurantImage;
    image.alt = "Εσωτερικός χώρος μαγαζιού";

    HomeDiv.appendChild(type);
    HomeDiv.appendChild(HeadLine);
    HomeDiv.appendChild(image);
    HomeDiv.appendChild(WelcomeMessage);
    HomeDiv.appendChild(Description);

    return HomeDiv;
}