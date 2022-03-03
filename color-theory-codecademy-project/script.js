function scrollToAbout() {
  let e = document.getElementById("about");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}
