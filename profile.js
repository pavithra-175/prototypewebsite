function submitProfile() {
    // Retrieve form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const category = document.getElementById("category").value;
    const profilePhoto = document.getElementById("profilePhoto").files[0];

    // Perform validation if needed

    // Construct user object
    const user = {
        name,
        age,
        category,
        profilePhoto
    };

    // Save user data to localStorage or send to server, depending on your application's architecture

    // Redirect to schemes.html or fetch schemes based on the profile details
    window.location.href = "schemes.html";
}
