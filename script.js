// Sample movie data
const movies = [
    { title: "Inception", year: 2010, rating: "8.8", icon: "🎬" },
    { title: "The Dark Knight", year: 2008, rating: "9.0", icon: "🦇" },
    { title: "Interstellar", year: 2014, rating: "8.6", icon: "🚀" },
    { title: "Avatar", year: 2009, rating: "7.8", icon: "🌌" },
    { title: "The Matrix", year: 1999, rating: "8.7", icon: "💊" },
    { title: "Joker", year: 2019, rating: "8.7", icon: "🤡" }
];

// Sample music data
const music = [
    { title: "Bohemian Rhapsody", artist: "Queen", year: 1975, icon: "🎸" },
    { title: "Blinding Lights", artist: "The Weeknd", year: 2019, icon: "✨" },
    { title: "Shape of You", artist: "Ed Sheeran", year: 2017, icon: "🎤" },
    { title: "Rolling in the Deep", artist: "Adele", year: 2010, icon: "🎵" },
    { title: "Uptown Funk", artist: "Bruno Mars", year: 2014, icon: "🕺" },
    { title: "Despacito", artist: "Luis Fonsi", year: 2017, icon: "💃" }
];

// Display movies
function displayMovies() {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';
    
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-icon">${movie.icon}</div>
            <h3>${movie.title}</h3>
            <p>${movie.year} | ⭐ ${movie.rating}</p>
            <button class="card-button" onclick="playMovie('${movie.title}')">Watch Trailer</button>
        `;
        container.appendChild(card);
    });
}

// Display music
function displayMusic() {
    const container = document.getElementById('musicContainer');
    container.innerHTML = '';
    
    music.forEach(song => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-icon">${song.icon}</div>
            <h3>${song.title}</h3>
            <p>${song.artist} | ${song.year}</p>
            <button class="card-button" onclick="playMusic('${song.title}')">Play Song</button>
        `;
        container.appendChild(card);
    });
}

// Search function
function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    if (query) {
        const movieResults = movies.filter(m => 
            m.title.toLowerCase().includes(query)
        );
        
        const musicResults = music.filter(m => 
            m.title.toLowerCase().includes(query) || 
            m.artist.toLowerCase().includes(query)
        );
        
        alert(`Found ${movieResults.length} movies and ${musicResults.length} songs matching "${query}"`);
    } else {
        alert('Please enter a search term');
    }
}

// Play functions (simulated)
function playMovie(title) {
    alert(`🎬 Playing trailer for: ${title}\n(Full version coming soon!)`);
}

function playMusic(title) {
    alert(`🎵 Now playing: ${title}\n(Full version coming soon!)`);
}

// Load everything when page loads
window.onload = function() {
    displayMovies();
    displayMusic();
};