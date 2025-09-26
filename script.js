const Strategies = [
  "A line has two sides",
  "Abandon desire",
  "Abandon normal instructions",
  "Accept advice",
  // … toutes tes citations …
  "Your mistake was a hidden intention"
];

function pickStrategy() {
  const index = Math.floor(Math.random() * Strategies.length);
  document.getElementById("Strategy").innerHTML = Strategies[index];
}

// Au chargement
pickStrategy();

// Bouton
document.getElementById("newBtn").addEventListener("click", pickStrategy);

// Espace = nouvelle stratégie
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    event.preventDefault();
    pickStrategy();
  }
});

// Recherche Google sur Enter
document.getElementById('searchInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const query = this.value.trim();
    if (query) {
      const googleUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
      window.open(googleUrl, '_blank');
    }
  }
});