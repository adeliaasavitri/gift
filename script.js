document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.querySelector(".buttonNo");

  noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const vhValue = 80; // Replace with your desired vh value
    const pixelValueHeight = vhValue * window.innerHeight / 100;
    const pixelValueWidth = vhValue * window.innerWidth / 100;
    const maxX = pixelValueWidth - noBtnRect.width;
    const maxY = pixelValueHeight - noBtnRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });
});