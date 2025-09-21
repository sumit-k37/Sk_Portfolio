// document.getElementById('contact-form').addEventListener('submit', function(e) {
//   e.preventDefault();
//   alert('Thanks for reaching out! I will get back to you soon.');
// });


// Basic interactivity for the portfolio

document.addEventListener('DOMContentLoaded', function () {
  // set current year
  document.getElementById('curYear').textContent = new Date().getFullYear();

  // mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  menuBtn?.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)';
    nav.style.padding = expanded ? '' : '12px';
  });

  // animate skill bars when in viewport
  const skillBars = document.querySelectorAll('.skill-bar');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percent = bar.getAttribute('data-percent') || '0';
        const fill = bar.querySelector('.skill-fill');
        fill.style.width = percent + '%';
      }
    });
  }, { threshold: 0.35 });

  skillBars.forEach(b => observer.observe(b));

  // contact form handler
  window.handleContact = function (e) {
    e.preventDefault();
    const name = document.getElementById('visitorName').value.trim();
    const email = document.getElementById('visitorEmail').value.trim();
    const msg = document.getElementById('visitorMsg').value.trim();
    if (!name || !email || !msg) {
      alert('Please fill all fields.');
      return;
    }
    // open default mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:sumitkaulage37@gmail.com?subject=${subject}&body=${body}`;
  };

  // copy phone button
  const copyPhone = document.getElementById('copyPhone');
  copyPhone?.addEventListener('click', async function () {
    try {
      await navigator.clipboard.writeText('+919359656497');
      copyPhone.textContent = 'Copied!';
      setTimeout(() => { copyPhone.textContent = 'Copy Phone'; }, 1800);
    } catch (err) {
      alert('Please copy phone manually: +91 93596 56497');
    }
  });

  // optional: show placeholder if profile photo missing
  const img = document.getElementById('profilePhoto');
  img.addEventListener('error', function () {
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="%230b1220"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%238aa4c9" font-family="Arial" font-size="22">Place your photo at assets/profile.jpg</text></svg>';
  });
});
