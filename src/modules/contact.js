import FrontImage from "../assets/establishment.jpg"

export default function contactInfo(){
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "📞 +30 210 98 76 543"

    const location = document.createElement("p");
    location.textContent = "📍 Πλατεία Εθνικής Αντιστάσεως, Ηλιούπολη, 163 42";

    const image = document.createElement("img");
    image.src = FrontImage;
    image.alt = "Φωτογραφία Μαγαζιού";

    contactDiv.appendChild(image);
    contactDiv.appendChild(location);
    contactDiv.appendChild(phoneNumber);

    return contactDiv;
}