/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples"); // Step 1
let templeList = []; // Step 1


/* async displayTemples Function */
const displayTemples = (temples) => { // Step 3
    temples.forEach((temple) => { // Step 4
        // Create HTML elements
        const article = document.createElement("article"); // Step 5
        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        // Add temple information to elements
        h3.textContent = temple.templeName; // Step 6
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append elements to article
        article.appendChild(h3); // Step 7
        article.appendChild(img);

        // Append article to templesElement
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => { // Step 8
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"); // Step 9
    templeList = await response.json(); // Step 9
    displayTemples(templeList); // Step 10
};


/* reset Function */
const reset = () => { // Step 11
    templesElement.innerHTML = ""; // Clear all articles
};

/* filterTemples Function */
const filterTemples = (temples) => { // Step 12
    reset(); // Step 12.1
    const filter = document.querySelector("#filtered").value; // Step 12.2

    switch (filter) { // Step 12.3
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah"))); // Step 12.4.1
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah"))); // Step 12.4.2
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1))); // Step 12.4.3
            break;
        case "all":
        default:
            displayTemples(temples); // Step 12.4.4
            break;
    }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) }); // Step 13

getTemples();