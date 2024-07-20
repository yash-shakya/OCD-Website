// JS for mode toggle button

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle");

  if (!toggleButton) {
    console.error("Dark mode toggle button not found");
    return;
  }

  // Check saved mode in localStorage

  const currentMode = localStorage.getItem("theme") || "light";
  document.body.className = `${currentMode}-mode`;
  toggleButton.textContent =
    currentMode === "light" ? "Dark Mode" : "Light Mode";

  toggleButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
      document.body.className = "light-mode";
      toggleButton.textContent = "Dark Mode";
      localStorage.setItem("theme", "light");
    } else {
      document.body.className = "dark-mode";
      toggleButton.textContent = "Light Mode";
      localStorage.setItem("theme", "dark");
    }
  });
});

// JS code for Pop-up section

document.addEventListener("DOMContentLoaded", function () {
  var popupBanner = document.getElementById("popup-banner");
  //   var closeBtn = document.getElementById("close-btn");

  // Function to show the popup banner
  function showPopup() {
    popupBanner.style.display = "block";
  }
  // function to hide popup banner
  window.hidepopup = function () {
    const popup = document.getElementById("popup-banner");
    popup.style.display = "none";
  };
  setTimeout(showPopup, 700);
});

// JS code for Pop-up section ends here
