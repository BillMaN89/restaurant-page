export const menuItems = [
    {
        name: "Καλαμάκι Χοιρινό",
        price: "2.20€",
        description: "Ζουμερό χοιρινό κρέας 180γρ.",
        category: "σουβλάκια"
    },
    {
        name: "Καλαμάκι Κοτόπουλο",
        price: "2.20€",
        description: "Τρυφερό κοτόπουλο μπούτι 180γρ.",
        category: "σουβλάκια"
    },
    {
        name: "Κεμπάπ Χοιρινό",
        price: "2.20€",
        description: "Γεμιστό με τυρί",
        category: "σουβλάκια"
    },
    {
        name: "Κεμπάπ Κοτόπουλο",
        price: "2.20€",
        description: "Γεμιστό με philadelphia",
        category: "σουβλάκια"
    },  
    {
        name: "Γύρος χοιρινός",
        price: "3.50€",
        description: "Τυλιχτό σε αλάδωτη πίτα, με ντομάτα, κρεμμύδι, πατάτες, τζατζίκι",
        category: "τυλιχτά"
    },
    {
        name: "Γύρος κοτόπουλο",
        price: "3.50€",
        description: "Τυλιχτό σε αλάδωτη πίτα, με ντομάτα, μαρούλι, πατάτες, σως μαγιονέζας",
        category: "τυλιχτά"
    },
    {
        name: "Καλαμάκι χοιρινό",
        price: "3.50€",
        description: "Τυλιχτό σε αλάδωτη πίτα, με ντομάτα, κρεμμύδι, πατάτες, τζατζίκι",
        category: "τυλιχτά"
    },
    {
        name: "Καλαμάκι κοτόπουλο",
        price: "3.50€",
        description: "Τυλιχτό σε αλάδωτη πίτα, με ντομάτα, μαρούλι, πατάτες, σως μαγιονέζας",
        category: "τυλιχτά"
    },
    {
        name: "Γύρος Χοιρινός",
        price: "8.8€",
        description: "Συνοδεύεται με ντομάτα, 2 αλάδωτες πίτες, τζατζίκι και πατάτες",
        category: "μερίδες"
    },
    {
        name: "Γύρος Κοτόπουλο",
        price: "8.8€",
        description: "Συνοδεύεται με ντομάτα, μαρούλι, 2 αλάδωτες πίτες, πατάτες και σως μαγιονέζας",
        category: "μερίδες"
    },
    {
        name: "Καλαμάκια Χοιρινά",
        price: "8.5€",
        description: "3 καλαμάκια χοιρινά, συνοδεύεται με ντομάτα, 2 αλάδωτες πίτες, πατάτες και τζατζίκι",
        category: "μερίδες"
    },
    {
        name: "Καλαμάκια Κοτόπουλο",
        price: "8.5€",
        description: "3 καλαμάκια κοτόπουλο, συνοδεύεται με ντομάτα, 2 αλάδωτες πίτες, πατάτες και σως μαγιονέζας",
        category: "μερίδες"
    },
    {
        name: "Τζατζίκι",
        price: "3€",
        description: "Σπιτική συνταγή",
        category: "συνοδευτικά"
    },
    {
        name: "Σως μαγιονέζας",
        price: "3€",
        description: "Σπιτική συνταγή",
        category: "συνοδευτικά"
    },
    {
        name: "Σως γιαουρτιού",
        price: "3€",
        description: "Σπιτική συνταγή",
        category: "συνοδευτικά"
    },
    {
        name: "Πατάτες Τηγανητές",
        price: "3.3€",
        description: "Κομμένες στο χέρι",
        category: "συνοδευτικά"
    },
    {
        name: "COCA COLA",
        price: "2€",
        description: "Επιλογή από κανονική, light, zero",
        category: "αναψυκτικά"
    },
    {
        name: "FANTA",
        price: "2€",
        description: "Επιλογή από πορτοκαλάδα και λεμονάδα, με ή χωρίς ανθρακικό",
        category: "αναψυκτικά"
    },
    {
        name: "FIX",
        price: "2€ / 2.5€",
        description: "Επιλογή από 330ml & 500ml",
        category: "αναψυκτικά"
    },
    {
        name: "KAISER",
        price: "2.5€",
        description: "500ml",
        category: "αναψυκτικά"
    }
]


function createItemCategory(menuItems){
    //Map() φιλτραρει το menuItems για να βρει τις καηγορίες φαγητού
    //Set() αφαιρεί τις διπλότυπες κατηγορίες στο νέο Array
    const uniqueCategories = [...new Set(menuItems.map(item => item.category))];

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    uniqueCategories.forEach(category => {
        const foodCategory = document.createElement("div");
        foodCategory.classList.add("category");

        const categoryName = document.createElement("h2");
        categoryName.textContent = category;
        foodCategory.appendChild(categoryName);

        const menuItemsContainer = document.createElement("div");
        menuItemsContainer.classList.add("menu-items");

        //Filter() τα πιάτα που ανήκουν στην κατηγορία
        const categoryItems = menuItems.filter(item => item.category === category);

        categoryItems.forEach(item => {
            const menuItem = createMenuItem(item.name, item.price, item.description);
            menuItemsContainer.appendChild(menuItem);
        });

        foodCategory.appendChild(menuItemsContainer);

        menuContainer.appendChild(foodCategory);
    });

    return menuContainer;
}
    


function createMenuItem(name, price, description){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h3");
    foodName.textContent = name;

    const foodPrice = document.createElement("h4");
    foodPrice.textContent = price;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodPrice);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

export default createItemCategory;