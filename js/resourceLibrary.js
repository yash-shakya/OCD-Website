document.addEventListener("DOMContentLoaded", () => {
    const viewResourcesBtn = document.getElementById("view-resources-btn");
    const addResourcesBtn = document.getElementById("add-resources-btn");
    const resourceLibrarySection = document.getElementById("resource-library");
    const addResourceSection = document.querySelector(".add-resource");
    const resourceForm = document.getElementById("resource-form");
    const resourceContainer = document.getElementById("resource-container");
    const search_btn=document.getElementById("search-button");
    const clear_btn=document.getElementById("clear-button");

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

    function searchResources(){
        resourceContainer.innerHTML = "";
        const searchText = document.getElementById("search-bar").value;
        const searchTag=searchText.toLocaleLowerCase().split(" ")
        console.log("tags:",searchTag)
        const searchCategory = document.getElementById("search-category").value;
        const categoryResource=[];
        resources.forEach((resource, index) => {
            if(searchText===""){
                if(resource.category===searchCategory){
                    categoryResource.push(resource)
                    const resourceDiv = document.createElement("div");
                    resourceDiv.classList.add("resource");
                    resourceDiv.innerHTML = `
                    <h2>${resource.title}</h2>
                    <p>${resource.description}</p>
                    <a href="${resource.link}" target="_blank">Learn more</a>
                    <button class="delete-button" data-index="${index}">Delete</button>
                    `;
                    resourceContainer.appendChild(resourceDiv);
                }
            }
            else if(searchCategory===""){
                for (let i=0;i<searchTag.length;i++) {
                    if (resource.title.toLocaleLowerCase().includes(searchTag[i])) {
                    const resourceDiv = document.createElement("div");
                    resourceDiv.classList.add("resource");
                    resourceDiv.innerHTML = `
                    <h2>${resource.title}</h2>
                    <p>${resource.description}</p>
                    <a href="${resource.link}" target="_blank">Learn more</a>
                    <button class="delete-button" data-index="${index}">Delete</button>
                    `;
                    resourceContainer.appendChild(resourceDiv);     
                    }
                }
            }
            else{
                for(let i=0;i<searchTag.length;i++){
                    if(resource.category===searchCategory && resource.title.toLocaleLowerCase().includes(searchTag[i])){
                        categoryResource.push(resource)
                        const resourceDiv = document.createElement("div");
                        resourceDiv.classList.add("resource");
                        resourceDiv.innerHTML = `
                        <h2>${resource.title}</h2>
                        <p>${resource.description}</p>
                        <a href="${resource.link}" target="_blank">Learn more</a>
                        <button class="delete-button" data-index="${index}">Delete</button>
                        `;
                        resourceContainer.appendChild(resourceDiv);
                    }
                }
            }
        });
        if(resourceContainer.innerHTML==""){
            const resourceDiv = document.createElement("div");
            resourceDiv.innerText="Resource not found"
            resourceContainer.appendChild(resourceDiv);
        }
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
    
    search_btn.addEventListener("click",() => {
        resourceLibrarySection.classList.remove("hidden");
        addResourceSection.classList.add("hidden");
        searchResources();
    })

    clear_btn.addEventListener("click",()=>{
        resourceLibrarySection.classList.remove("hidden");
        addResourceSection.classList.add("hidden");
        renderResources()
    })
    
    addResourcesBtn.addEventListener("click", () => {
        addResourceSection.classList.remove("hidden");
        resourceLibrarySection.classList.add("hidden");
    });

    resourceForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const link = document.getElementById("link").value;
        const category = document.getElementById("category").value
        const description = document.getElementById("description").value;
        addResource({ title, link, category, description });
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
