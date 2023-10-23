// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section active link
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.setTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href* =" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  //reset: true,
  distance: "80px",
  duratiom: 2000,
  delay: 200,
});

// typed js

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Undergraduate Informatic Students"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// learning path
$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "3%");
  $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "25%");
  $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "50%");
  $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "75%");
  $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "100%");
  $(".analysis").addClass("active").siblings().removeClass("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("getintouch");
  const fullname = document.querySelector('input[placeholder="Fullname"]');
  const email = document.querySelector('input[placeholder="Email Address"]');
  const mobile = document.querySelector('input[placeholder="Mobile Number"]');
  const emailSubject = document.querySelector(
    'input[placeholder="Email Subject"]'
  );
  const message = document.querySelector("textarea");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    if (fullname.value.trim() === "") {
      alert("Fullname harus diisi.");
      valid = false;
    }

    if (email.value.trim() === "" || !email.value.endsWith("@gmail.com")) {
      alert("Email harus diisi dengan benar (contoh: example@gmail.com).");
      valid = false;
    }

    if (mobile.value.trim() === "" || mobile.value.length < 10) {
      alert("Mobile Number harus diisi dengan minimal 10 karakter.");
      valid = false;
    }

    if (emailSubject.value.trim() === "") {
      alert("Email Subject harus diisi.");
      valid = false;
    }

    if (message.value.trim() === "") {
      alert("Your Message harus diisi.");
      valid = false;
    }

    if (valid) {
      // Kirim formulir jika semua validasi berhasil
      form.submit();
    }
  });
});
