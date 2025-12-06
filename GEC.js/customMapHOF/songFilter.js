/**Suppose you're working on a music app, and you have an array of objects representing different songs that are available to play on the app.




Objectives
1. You need to write a function that takes in an array of songs and returns a new array that contains only songs of a specific genre, and then you need to retrieve all the songs whose duration is longer than the specified duration.
2. Write a function, "filterSongs", which accepts two arguments: 
 
(i): An array of song objects (songs).
(ii): A filter object (filters) containing:
    - genre: The genre of songs you want to include in the result.
    - duration: The minimum duration (in seconds) that a song must have 
      to be included in the result.
 
3. The function should work as follows:
- It takes the list of all songs and a "filters" object as input.
- First, it filters the songs to include only those that match the specified genre.
- Then, it filters those results to include only the songs that are longer than or equal to the specified duration.

Function signature:


The filter object is the following shape:
 

// Complete the filterSongs function
// Do not alter the starter code. */

// Complete the filterSongs function
// Do not alter the starter code.

const songs = [
  { title: "All of Me", artist: "John Legend", genre: "Pop", duration: 248 },
  { title: "Despacito", artist: "Luis Fonsi", genre: "Pop", duration: 279 },
  { title: "Someone Like You", artist: "Adele", genre: "Pop", duration: 285 },
  { title: "Thriller", artist: "Michael Jackson", genre: "Pop", duration: 357 },
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", duration: 354 },
  {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Rock",
    duration: 480,
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "Rock",
    duration: 355,
  },
  {
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genre: "Rock",
    duration: 302,
  },
  { title: "Hotel California", artist: "Eagles", genre: "Rock", duration: 390 },
  {
    title: "Thrash Unreal",
    artist: "Against Me!",
    genre: "Punk",
    duration: 292,
  },
  {
    title: "London Calling",
    artist: "The Clash",
    genre: "Punk",
    duration: 189,
  },
];

// Filter object with the following properties:
// - genre: string  // Desired genre to filter songs by
// - duration: number  // Minimum duration of songs to include in the result
const filters = { genre: "Rock", duration: 350 };

// Implement the filterSongs function
  // Extract genre and duration from the filters object
  function filterSongs(songs, filters) {
  const { genre, duration } = filters;

  return songs.filter(song => {
    return song.genre === genre && song.duration >= duration;
  });
}

  
  // Filter the songs array
  // - Include songs where the genre matches and duration is greater than or equal to the specified duration and then return the desired array of objects

