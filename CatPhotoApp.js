document.querySelectorAll("img").forEach(img => {
    img.addEventListener("mouseover", () => {
      img.style.opacity = "0.8";
    });
    img.addEventListener("mouseout", () => {
      img.style.opacity = "1";
    });
  });

  fetch("https://catfact.ninja/fact")
  .then(response => response.json())
  .then(data => {
    let factElement = document.createElement("p");
    factElement.textContent = "Random Cat Fact: " + data.fact;
    document.body.appendChild(factElement);
  });
  
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }
  
  document.body.insertAdjacentHTML("beforeend", "<button onclick='toggleTheme()'>Toggle Dark Mode</button>");
  
  document.head.insertAdjacentHTML("beforeend", "<style>.dark-mode { background-color: black; color: white; }</style>");
  