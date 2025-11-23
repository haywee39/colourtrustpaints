
// // Load the component
// fetch("top-banner/top.html")
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById("top-page").innerHTML = data;

//     // After loading, customize content based on data attributes in the placeholder
//     const container = document.getElementById("top-page");
//     const landingTop = container.querySelector("#landing-top");

//     // Read data from the <div id="top-page"> attributes
//     const bg = container.dataset.bg;
//     const title = container.dataset.title;
//     const b = container.dataset.b;
//     const p = container.dataset.p;
//     const a = container.dataset.a;

//     // Apply background image + title
//     if (bg) landingTop.style.backgroundImage = `url(${bg})`;
//     if (title) landingTop.querySelector(".title").textContent = title;
//     if (b) landingTop.querySelector("b").textContent = b;
//     if (p) landingTop.querySelector("p").textContent = p;
//     if (a) landingTop.querySelector("a").textContent = a;
//   })
//   .catch(error => console.error("Error loading top-page:", error));


// Load the component
fetch("top-banner/top.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("top-page").innerHTML = data;

    // Highlight the active link in the navbar
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename

    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (currentPage === linkPage) {
        link.classList.add('active');
      }
    });

    // Customize content based on data attributes in the placeholder
    const container = document.getElementById("top-page");
    const landingTop = container.querySelector("#landing-top");
    const bg = container.dataset.bg;
    const title = container.dataset.title;
    const b = container.dataset.b;
    const p = container.dataset.p;
    const a = container.dataset.a;

    if (bg) landingTop.style.backgroundImage = `url(${bg})`;
    if (title) landingTop.querySelector(".title").textContent = title;
    if (b) landingTop.querySelector("b").textContent = b;
    if (p) landingTop.querySelector("p").textContent = p;
    if (a) landingTop.querySelector("a").textContent = a;
  })
  .catch(error => console.error("Error loading top-page:", error));
