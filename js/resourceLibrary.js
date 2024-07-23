document.addEventListener("DOMContentLoaded", () => {
    const viewResourcesBtn = document.getElementById("view-resources-btn");
    const addResourcesBtn = document.getElementById("add-resources-btn");
    const resourceLibrarySection = document.getElementById("resource-library");
    const addResourceSection = document.querySelector(".add-resource");
    const resourceForm = document.getElementById("resource-form");
    const resourceContainer = document.getElementById("resource-container");

    const resources = JSON.parse(localStorage.getItem("resources")) || [];

    function renderResources() {
        resourceContainer.innerHTML = "";
        resources.forEach((resource, index) => {
            const resourceDiv = document.createElement("div");
            resourceDiv.classList.add("resource");
            resourceDiv.innerHTML = `
                <h2>${resource.title}</h2>
                <p>${resource.description}</p>
                <a href="${resource.link}" target="_blank">Learn more</a>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            resourceContainer.appendChild(resourceDiv);
        });
    }

    function addResource(resource) {
        resources.push(resource);
        localStorage.setItem("resources", JSON.stringify(resources));
        renderResources();
    }

    function deleteResource(index) {
        resources.splice(index, 1);
        localStorage.setItem("resources", JSON.stringify(resources));
        renderResources();
    }

    viewResourcesBtn.addEventListener("click", () => {
        resourceLibrarySection.classList.remove("hidden");
        addResourceSection.classList.add("hidden");
        renderResources();
    });

    addResourcesBtn.addEventListener("click", () => {
        addResourceSection.classList.remove("hidden");
        resourceLibrarySection.classList.add("hidden");
    });

    resourceForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const link = document.getElementById("link").value;
        const description = document.getElementById("description").value;
        addResource({ title, link, description });
        resourceForm.reset();
        alert("Resource added successfully!");
    });

    resourceContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-button")) {
            const index = e.target.dataset.index;
            deleteResource(index);
        }
    });

    renderResources();
});
