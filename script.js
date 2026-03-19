// Scroll to contact section
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Contact form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('successMsg').innerText = "Mesajınız göndərildi. Tezliklə əlaqə saxlayacağıq!";
  this.reset();
});