const repoOwner = "Mohak1809";
const repoName = "OCD-Website";

const getContributors = async () => {
  const contributorsContainer = document.getElementById("contributors");
  const loadingMessage = document.createElement("div");
  loadingMessage.className = "loading";
  loadingMessage.innerText = "Loading...";
  contributorsContainer.appendChild(loadingMessage);

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`
    );
    if (!response.ok) {
      throw new Error(`Error fetching contributors: ${response.statusText}`);
    }
    const contributors = await response.json();

    contributorsContainer.innerHTML = "";

    for (let i = 0; i < Math.min(contributors.length, 12); i++) {
      const contributor = contributors[i];

      try {
        const userDetailsResponse = await fetch(contributor.url);
        if (!userDetailsResponse.ok) {
          throw new Error(
            `Error fetching user details: ${userDetailsResponse.statusText}`
          );
        }
        const userDetails = await userDetailsResponse.json();

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${userDetails.avatar_url}" alt="${userDetails.login}'s avatar" class="avatar">
          <div class="team-info">
            <h2>${userDetails.login}</h2>
            <p>Commits: ${contributor.contributions}</p>
            <div class="social-icons">
              <a href="${userDetails.html_url}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
            </div>
          </div>
        `;
        contributorsContainer.appendChild(card);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
  } catch (error) {
    console.error("Error fetching contributors:", error);
    contributorsContainer.innerHTML =
      '<h1 style="text-align: center;">Error fetching contributors. Please try again later.</h1>';
  }
};

document.addEventListener("DOMContentLoaded", getContributors);
