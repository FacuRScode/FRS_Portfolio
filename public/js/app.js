/*
Selects all elements with class "control" using document.querySelectorAll(".control") and converts it to an array using the spread operator (...).
Loops through each button in the array using forEach() and adds a "click" event listener to it.
When a button is clicked, the function removes the "active-btn" class from the current active button and adds it to the clicked button.
The same happens for the corresponding elements with class "active". The related element is selected based on the data-id attribute of the clicked button.
Additionally, it adds a "click" event listener to the element with class "theme-btn". When the theme button is clicked, the function toggles the "light-mode" class on the <body> element.
*/

(function() {
    const controlButtons = document.querySelectorAll(".control");
    const themeButton = document.querySelector(".theme-btn");
  
    function handleControlButtonClick(event) {
        const activeButton = document.querySelector(".active-btn");
        activeButton.classList.remove("active-btn");
        event.target.classList.add("active-btn");
  
        const activeElement = document.querySelector(".active");
        activeElement.classList.remove("active");
  
        const targetId = event.target.dataset.id;
        const targetElement = document.getElementById(targetId);
        targetElement.classList.add("active");
    }
  
    controlButtons.forEach(button => {
        button.addEventListener("click", handleControlButtonClick);
    });
  
    function handleThemeButtonClick() {
        document.body.classList.toggle("light-mode");
    }
  
    themeButton.addEventListener("click", handleThemeButtonClick);
})();

