document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(`tab-${button.dataset.tab}`).classList.add("active");
  });
});

const fullscreenButton = document.getElementById("fullscreen-button");
const modelWrapper = document.querySelector(".model-wrapper");

fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    modelWrapper.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
