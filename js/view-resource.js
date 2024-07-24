document.addEventListener("DOMContentLoaded", () => {
    const resourceLibrarySection = document.getElementById("resource-library");
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
            `;
            resourceContainer.appendChild(resourceDiv);
        });
    }

    function searchResources(){
        resourceContainer.innerHTML = "";
        const searchText = document.getElementById("search-bar").value;
        const searchTag=searchText.toLocaleLowerCase();
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
                    `;
                    resourceContainer.appendChild(resourceDiv);
                }
            }
            else if(searchCategory===""){
                if (resource.title.toLocaleLowerCase().includes(searchTag)) {
                const resourceDiv = document.createElement("div");
                resourceDiv.classList.add("resource");
                resourceDiv.innerHTML = `
                <h2>${resource.title}</h2>
                <p>${resource.description}</p>
                <a href="${resource.link}" target="_blank">Learn more</a>
                `;
                resourceContainer.appendChild(resourceDiv);     
                }
                
            }
            else{
                if(resource.category===searchCategory && resource.title.toLocaleLowerCase().includes(searchTag)){
                    categoryResource.push(resource)
                    const resourceDiv = document.createElement("div");
                    resourceDiv.classList.add("resource");
                    resourceDiv.innerHTML = `
                    <h2>${resource.title}</h2>
                    <p>${resource.description}</p>
                    <a href="${resource.link}" target="_blank">Learn more</a>
                    `;
                    resourceContainer.appendChild(resourceDiv);
                }
            }
        });
        if(resourceContainer.innerHTML==""){
            const resourceDiv = document.createElement("div");
            resourceDiv.innerText="Resource not found"
            resourceContainer.appendChild(resourceDiv);
        }
    }
    resourceLibrarySection.classList.remove("hidden");
    renderResources();
    search_btn.addEventListener("click",() => {
        resourceLibrarySection.classList.remove("hidden");
        searchResources();
    })

    clear_btn.addEventListener("click",()=>{
        resourceLibrarySection.classList.remove("hidden");
        renderResources()
    })
})