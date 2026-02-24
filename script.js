const mainImage = document.querySelector(".main-image");
const aboutSection = document.querySelector(".about");
const portfolioBtn = document.querySelector("#portfolio1");
const homeBtn = document.querySelector("#home1");
const portfolio = document.querySelector(".portfolio");
const homeBtn2 = document.querySelector("#home2");
const portfolioBtn2 = document.querySelector("#portfolio2");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.target === mainImage) {
        mainImage.classList.add("show");
        aboutSection.classList.add("show");
      }
    });
  },
  { threshold: 0.5 },
);

observer.observe(mainImage);

portfolioBtn.addEventListener("click", () => {
  aboutSection.classList.add("disappear");
  portfolio.classList.add("appear");
  contactSection.classList.add("disappear");
});
portfolioBtn2.addEventListener("click", () => {
  aboutSection.classList.add("disappear");
  portfolio.classList.add("appear");
  contactSection.classList.add("disappear");
  mblNav.classList.remove("show");
  navBlock.style.display = "none";
});
homeBtn.addEventListener("click", () => {
  portfolio.classList.remove("appear");
  aboutSection.classList.remove("disappear");
  contactSection.classList.add("disappear");
});
homeBtn2.addEventListener("click", () => {
  portfolio.classList.remove("appear");
  aboutSection.classList.remove("disappear");
  contactSection.classList.add("disappear");
  mblNav.classList.remove("show");
  navBlock.style.display = "none";
});

//slide animation

let projectStaringIndex = 0;

function moveslide(direction) {
  const projects = document.querySelectorAll(".project");
  const totalProjects = projects.length;

  projectStaringIndex += direction;

  // Loop forward
  if (projectStaringIndex >= totalProjects) {
    projectStaringIndex = 0;
  }

  // Loop backward
  if (projectStaringIndex < 0) {
    projectStaringIndex = totalProjects - 1;
  }

  const track = document.querySelector(".project-container .track");
  track.style.transform = `translateX(-${projectStaringIndex * 100}%)`;
}
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-text");

  const words = ["Web Developer", "Freelancer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      typingElement.innerText = currentWord.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1400);
      }
    } else {
      typingElement.innerText = currentWord.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();
});

const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[type="email"]');
const textArea = document.querySelector("form textarea");
const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    form.reset();
    document.querySelector(".form-succes-msg").classList.add("show");

    setTimeout(() => {
      document.querySelector(".form-succes-msg").classList.remove("show");
    }, 3000);
  } else {
    document.querySelector(".error-msg").style.opacity = "1";
  }
});
const contactBtn = document.querySelector("#contact1");
const contactBtn3 = document.querySelector("#contact2");
const contactSection = document.querySelector(".contact");
const contactBtn2 = document.querySelector(".hire-me-btn");
contactBtn.addEventListener("click", () => {
  contactSection.classList.remove("disappear");
  aboutSection.classList.add("disappear");
  portfolio.classList.remove("appear");
});
contactBtn2.addEventListener("click", () => {
  contactSection.classList.remove("disappear");
  aboutSection.classList.add("disappear");
  portfolio.classList.remove("appear");
});
contactBtn3.addEventListener("click", () => {
  contactSection.classList.remove("disappear");
  aboutSection.classList.add("disappear");
  portfolio.classList.remove("appear");
  mblNav.classList.remove("show");
  navBlock.style.display = "none";
});
const hamBurger = document.querySelector(".hamburger-container");
const mblNav = document.querySelector(".mbl-nav");
const closeBtn = document.querySelector(".nav-cross-icon-container");
const navBlock = document.querySelector(".nav-block");
hamBurger.addEventListener("click", () => {
  mblNav.classList.add("show");
  navBlock.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  mblNav.classList.remove("show");
  navBlock.style.display = "none";
});
navBlock.addEventListener("click", () => {
  mblNav.classList.remove("show");
  navBlock.style.display = "none";
});
const freelancerBtn = document.querySelector(".freelancer-container");
const fiverrBtn=document.querySelector(".fiverr-container")
freelancerBtn.addEventListener("click", () => {
  window.open("https://www.freelancer.com.bd/u/abirakon185?sb=t", "_self");
});
fiverrBtn.addEventListener("click", () => {
  window.open("https://www.fiverr.com/abir_akon", "_self");
});
