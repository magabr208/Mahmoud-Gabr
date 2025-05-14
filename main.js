// Menu on scroll

let header = document.querySelector('.header');
window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
    btnMenu.classList.remove('fa-times');
    NavLinks.classList.remove('active')
}


let btnMenu = document.getElementById('btnMenu');
let NavLinks = document.querySelector('.nav-links');

btnMenu.onclick = function (){
    btnMenu.classList.toggle('fa-times');
    NavLinks.classList.toggle('active')
}

// Swiper

var swiper = new Swiper(".swip-test-imo", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // add class active to link in menu by scroll

  let link = document.querySelectorAll('.nav-links a');
  let sec = document.querySelectorAll('section');

  function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 100 < sec [len].offsetTop){}
    link.forEach(ltx => ltx.classList.remove("active"));
    link[len].classList.add("active")
  }
  window.addEventListener("scroll",activeMenu)










// cards








// اسهم التنقل

let currentIndex = 0;
const cards = document.querySelectorAll('.custom-card');
const dots = document.querySelectorAll('.dot');
const track = document.getElementById('customCardsTrack');

// إضافة حدث لتغيير الكروت عند النقر على الأسهم
document.querySelector('.left-arrow').addEventListener('click', () => moveSlide(-1));
document.querySelector('.right-arrow').addEventListener('click', () => moveSlide(1));

// إضافة حدث لتغيير الكروت عند النقر على المؤشرات
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

// تحديث السلايدر عند النقر على الأسهم
function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = cards.length - 1;
  if (currentIndex >= cards.length) currentIndex = 0;
  updateSlider();
}

// تحديث السلايدر بناءً على الـ currentIndex
function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * (cards[0].offsetWidth + 2 * 16)}px)`; // 2rem => 32px
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentIndex) {
      dot.classList.add('active');
    }
  });
}

// تفعيل الكارت الأول
updateSlider();


// هذا الكود التدريجي




window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#about');
    const rect = aboutSection.getBoundingClientRect();
    
    // إذا كان العنصر ضمن نافذة العرض
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        aboutSection.classList.add('visible');
    }
});

window.addEventListener('scroll', function() {
    const skillElements = document.querySelectorAll('.skill-list .single-skill');
    
    skillElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // إذا كان العنصر ضمن نافذة العرض (viewport)
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
});



// contact form



document.getElementById("contact-form").addEventListener("submit", function(event){
  let isValid = true;

  // Clear any previous error messages
  document.querySelectorAll(".error-message").forEach(function(errorMsg) {
    errorMsg.style.display = "none";
  });

  // Validate each input field
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name.value) {
    isValid = false;
    document.getElementById("name-error").style.display = "block";
  }

  if (!phone.value || !/^\d{11}$/.test(phone.value)) {
    isValid = false;
    document.getElementById("phone-error").style.display = "block";
  }

  if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
    isValid = false;
    document.getElementById("email-error").style.display = "block";
  }

  if (!message.value) {
    isValid = false;
    document.getElementById("message-error").style.display = "block";
  }

  // If any validation fails, prevent form submission
  if (!isValid) {
    event.preventDefault();
  } else {
    // If everything is valid, show thank you message
    document.getElementById("thank-you-message").style.display = "block";
    document.querySelector(".contact-form").style.display = "none";
  }
});
