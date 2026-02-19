var quote = document.getElementById("quote");
const parentElement = document.querySelector(".speaker");
if (parentElement) {
    // 2. Select all descendant elements
    const allElements = parentElement.querySelectorAll("*");

    // Initialize an array to store the extracted data
    const elementData = [];

    // 3. Iterate and extract IDs and classes
    allElements.forEach((element) => {
        const id = element.id;
        // The classList property returns a live DOMTokenList, convert to an array for easier use
        const classes = Array.from(element.classList);

        // 4. Store as objects in the array
        elementData.push({
            id: id,
            classes: classes
        });
    });

    // Example of how to access the stored data as variables
    // The elementData array now holds objects with id and classes
    console.log(elementData);

    // You can access specific elements' data, e.g., the first element's ID
    if (elementData.length > 0) {
        const firstElementId = elementData[0].id;
        const firstElementClasses = elementData[0].classes;
        console.log(`First element ID: ${firstElementId}`);
        console.log(`First element Classes: ${firstElementClasses.join(", ")}`);
    }
} else {
    console.log('Parent element with class "container" not found.');
}
var list = [
    "No meditation, medication, no doctor, no therapist \n Could cure me of the condition of the world that I have to live in",
    1,
    "Working on my rest days, never productive enough \n Even on my best days; will it ever be enough?",
    2
];
function randquote() {
    var rand = Math.floor(Math.random() * list.length);
    quote.innerText = list[rand];
}
