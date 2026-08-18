(function () {
  'use strict';

  const wordmarkLink = document.getElementById('dp-wordmark-link');
  const photoCredit = document.getElementById('photo-credit');
  const bgLayers = {};
  document.querySelectorAll('.bg-layer').forEach((el) => {
    bgLayers[el.dataset.bgFor] = el;
  });
  const scrim = document.querySelector('.bg-scrim');

  const sections = document.querySelectorAll('.title-section, .trad-section, .closing-section, #dpf-footer-mount');
  if (sections.length === 0) return;

  let activeBg = null;
  let activeWordmark = null;
  let activeCredit = null;
  let activeSection = null;

  function setActiveBg(key) {
    if (key === activeBg) return;
    activeBg = key;
    Object.keys(bgLayers).forEach((k) => {
      bgLayers[k].classList.toggle('is-active', k === key);
    });
    if (scrim) scrim.classList.toggle('is-active', !!key);
  }

  function setActiveWordmark(mode) {
    if (mode === activeWordmark) return;
    activeWordmark = mode;
    if (wordmarkLink) wordmarkLink.classList.toggle('is-light', mode === 'light');
  }

  function setActiveCredit(name, url, showSuffix) {
    const key = name ? name + '|' + url + '|' + showSuffix : null;
    if (key === activeCredit) return;
    activeCredit = key;
    if (!photoCredit) return;
    if (name) {
      photoCredit.textContent = '';
      if (url) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = name;
        photoCredit.appendChild(link);
      } else {
        photoCredit.appendChild(document.createTextNode(name));
      }
      if (showSuffix) {
        photoCredit.appendChild(document.createTextNode(' / The Daily Pennsylvanian'));
      }
      photoCredit.classList.add('is-visible');
    } else {
      photoCredit.classList.remove('is-visible');
    }
  }

  function setActiveSection(section) {
    if (section === activeSection) return;
    if (activeSection) activeSection.classList.remove('is-active');
    activeSection = section;
    if (activeSection) activeSection.classList.add('is-active');
  }

  function applySection(section) {
    if (!section) return;
    setActiveBg(section.dataset.bgFor || null);
    setActiveWordmark(section.dataset.wordmark === 'light' ? 'light' : 'dark');
    setActiveCredit(
      section.dataset.creditName || null,
      section.dataset.creditUrl || null,
      section.dataset.creditSuffix !== 'false'
    );
    setActiveSection(section);
  }

  const visibility = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibility.set(entry.target, entry.intersectionRatio);
      });
      let best = null;
      let bestRatio = 0;
      visibility.forEach((ratio, el) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = el;
        }
      });
      if (best && bestRatio > 0.15) applySection(best);
    },
    {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: [0, 0.15, 0.25, 0.5, 0.75, 1.0],
    }
  );
  sections.forEach((section) => observer.observe(section));

  let scrollTimeout = null;
  function checkClosestSection() {
    const viewportCenter = window.innerHeight / 2;
    let closest = null;
    let closestDistance = Infinity;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - viewportCenter);
      if (rect.bottom > 0 && rect.top < window.innerHeight && distance < closestDistance) {
        closestDistance = distance;
        closest = section;
      }
    });
    if (closest) applySection(closest);
  }

  window.addEventListener(
    'scroll',
    () => {
      checkClosestSection();
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkClosestSection, 100);
    },
    { passive: true }
  );

  applySection(sections[0]);
  checkClosestSection();
})();
