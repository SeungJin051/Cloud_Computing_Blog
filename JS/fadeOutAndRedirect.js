document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const links = document.querySelectorAll("a.transition");

  body.style.opacity = 0; // 초기에 투명하게 설정

  function fadeIn() {
    let opacity = 0;

    const animationInterval = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.03; // 더 큰 값으로 변경
        body.style.opacity = opacity;
      } else {
        clearInterval(animationInterval);
      }
    }, 20);
  }

  function fadeOutAndRedirect(linkLocation) {
    let opacity = 1;

    const animationInterval = setInterval(function () {
      if (opacity > 0) {
        opacity -= 0.03; // 더 큰 값으로 변경
        body.style.opacity = opacity;
      } else {
        clearInterval(animationInterval);
        window.location = linkLocation;
      }
    }, 10);
  }

  fadeIn();

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const linkLocation = this.href;
      fadeOutAndRedirect(linkLocation);
    });
  });
});
