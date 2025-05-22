'use strict';

const animeList = document.getElementById('animeList');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const themeToggle = document.getElementById('themeToggle');
const showFavorites = document.getElementById('showFavorites');

let allAnime = [];
let showOnlyFavorites = false;

const getStoredFavorites = () => JSON.parse(localStorage.getItem('favorites')) || [];
const saveFavorite = id => {
  let favs = getStoredFavorites();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
  } else {
    favs.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favs));
};

const isFavorite = id => getStoredFavorites().includes(id);

const fetchTopAnime = async () => {
  const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=20');
  const data = await res.json();
  allAnime = data.data;
  renderList();
};

const fetchSearchResults = async (query) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
  const data = await res.json();
  allAnime = data.data;
  renderList();
};

const renderList = () => {
  const query = searchInput.value.toLowerCase();
  const favorites = getStoredFavorites();

  let filtered = allAnime.filter(anime =>
    anime.title.toLowerCase().includes(query)
  );

  if (showOnlyFavorites) {
    filtered = filtered.filter(anime => favorites.includes(anime.mal_id));
  }

  const sortBy = sortSelect.value;
  if (sortBy === 'score') {
    filtered.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  } else if (sortBy === 'year') {
    filtered.sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
  } else {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  animeList.innerHTML = filtered.map(anime => `
    <div class="card">
      <img src="${anime.images.jpg.image_url}" alt="cover ${anime.title}" />
      <h3>${anime.title}</h3>
      <p><strong>Score:</strong> ${anime.score ?? 'n.v.t.'}</p>
      <p><strong>Type:</strong> ${anime.type}</p>
      <p><strong>Jaar:</strong> ${anime.year ?? 'onbekend'}</p>
      <p><strong>Studio:</strong> ${anime.studios?.[0]?.name ?? 'onbekend'}</p>
      <p><a href="${anime.url}" target="_blank">Meer info</a></p>
      <button onclick="toggleFavorite(${anime.mal_id})">
        ${isFavorite(anime.mal_id) ? '⭐ Verwijder' : '☆ Voeg toe'}
      </button>
    </div>
  `).join('');
};

window.toggleFavorite = (id) => {
  saveFavorite(id);
  renderList();
};

searchInput.addEventListener('input', () => {
  if (searchInput.value.length >= 3) {
    fetchSearchResults(searchInput.value);
  } else {
    fetchTopAnime();
  }
});

sortSelect.addEventListener('change', renderList);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

showFavorites.addEventListener('click', () => {
  showOnlyFavorites = !showOnlyFavorites;
  showFavorites.textContent = showOnlyFavorites ? '🔙 Alle Anime' : '⭐ Favorieten';
  renderList();
});

if (localStorage.getItem('theme') === 'dark') {
  themeToggle.textContent = '☀️';
  document.body.classList.add('dark');
}
  fetchTopAnime();
