document.addEventListener("DOMContentLoaded", () => {
    const addResourceSection = document.querySelector(".add-resource");
    addResourceSection.classList.remove("hidden");
    const resourceForm = document.getElementById("resource-form");

    const resources = JSON.parse(localStorage.getItem("resources")) || [];

    function addResource(resource) {
        resources.push(resource);
        localStorage.setItem("resources", JSON.stringify(resources));
        renderResources();
    }

    resourceForm.addEventListener("submit", (e) => {
        alert("Resource added successfully!");
        e.preventDefault();
        const title = document.getElementById("title").value;
        const link = document.getElementById("link").value;
        const category = document.getElementById("category").value
        const description = document.getElementById("description").value;
        addResource({ title, link, category, description });
        resourceForm.reset();
        
    });
});