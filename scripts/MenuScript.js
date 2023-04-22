var images = [
    "https://creatorofbiontium.github.io/styleth/backgrounds/pic1.jpg",
    "https://creatorofbiontium.github.io/styleth/backgrounds/pic2.jpg"
  ];

  function getRandomImage(images) {
    return images[Math.floor(Math.random() * images.length)];
  }

  var background = document.querySelector(".background");
  background.style.backgroundImage = "url('" + getRandomImage(images) + "')";