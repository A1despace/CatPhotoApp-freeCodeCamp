
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("mouseover", () => {
      img.style.opacity = "0.8";
    });
    img.addEventListener("mouseout", () => {
      img.style.opacity = "1";
    });
  });
  

  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  

  fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
      document.getElementById("cat-fact").textContent = data.fact;
    })
    .catch(() => {
      document.getElementById("cat-fact").textContent = "Could not load a cat fact.";
    });
  