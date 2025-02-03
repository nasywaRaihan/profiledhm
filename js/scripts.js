/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */

// Scripts
window.addEventListener('DOMContentLoaded', (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  // Menangani tombol "Selengkapnya"
  const showMoreBtn = document.getElementById('show-more-btn');
  const hideMoreBtn = document.getElementById('hide-more-btn');

  if (showMoreBtn && hideMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
      // Tampilkan semua item timeline dengan animasi fade-in
      var hiddenItems = document.querySelectorAll('.timeline-hidden');
      hiddenItems.forEach(function (item) {
        item.classList.remove('timeline-hidden');
        item.classList.add('timeline-visible');
      });

      // Sembunyikan tombol 'Selengkapnya' dan tampilkan tombol 'Sembunyikan'
      showMoreBtn.style.display = 'none';
      hideMoreBtn.style.display = 'inline-block';
    });

    hideMoreBtn.addEventListener('click', function () {
      // Sembunyikan semua item timeline dengan animasi fade-out
      var visibleItems = document.querySelectorAll('.timeline-visible');
      visibleItems.forEach(function (item) {
        item.classList.remove('timeline-visible');
        item.classList.add('timeline-hidden');
      });

      // Sembunyikan tombol 'Sembunyikan' dan tampilkan tombol 'Selengkapnya'
      showMoreBtn.style.display = 'inline-block';
      hideMoreBtn.style.display = 'none';

      // Pindahkan halaman ke bagian #about
      const aboutSection = document.getElementById('lintasGenerasi');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
