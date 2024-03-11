document.addEventListener("DOMContentLoaded", function () {
    // Fetch user profile data from localStorage or server, depending on your application's architecture
    const user = getUserData(); // Implement this function to retrieve user data

    // Fetch and display all schemes initially
    displaySchemes(getAllSchemes());
});

function getUserData() {
    // Retrieve user data from localStorage or server, and return the user object
    // Example:
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
}

function getAllSchemes() {
    // Add logic to fetch all schemes
    // Example:
    return [
        { name: "Scheme 1", details: "Details of Scheme 1" },
        { name: "Scheme 2", details: "Details of Scheme 2" },
        // Add more schemes as needed
    ];
}

function displaySchemes(schemes) {
    const schemeList = document.getElementById("schemeList");
    schemeList.innerHTML = "";

    schemes.forEach((scheme) => {
        const schemeItem = document.createElement("div");
        schemeItem.innerHTML = `<h3>${scheme.name}</h3><p>${scheme.details}</p>`;
        schemeList.appendChild(schemeItem);
    });
}

function searchSchemes() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const allSchemes = getAllSchemes();

    const matchingSchemes = allSchemes.filter((scheme) => {
        return scheme.name.toLowerCase().includes(searchInput) || scheme.details.toLowerCase().includes(searchInput);
    });

    displaySchemes(matchingSchemes);
}
