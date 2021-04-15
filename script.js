// Navigation for mobile
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

// Close hamburger menu if user clicks outside
document.addEventListener("click", (event) => {
  const navigation = document.getElementById("navigation");
  const nav = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelectorAll(".nav-links li");

  if (
    !navigation.contains(event.target) &&
    nav.classList.contains("nav-active")
  ) {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  }
});

navSlide();

//Update value of --vh when the window resizes
window.addEventListener("resize", () => {
  // Get inner height of the viewport
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// Scroll back to top button
let topButton = document.getElementById("topBtn");

window.onscroll = () => {
  scrollFunction();
};

// When the user scrolls down 20px from the top of the document, show the button
const scrollFunction = () => {
  if (
    document.body.scrollTop > window.innerHeight / 2 ||
    document.documentElement.scrollTop > window.innerHeight / 2
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollY = 0;
};
