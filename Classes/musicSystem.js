/**Suppose you are building a music streaming application that allows users to listen to different types of music.

You want to create a class hierarchy to represent the different types of music available for streaming.



Objective:
Create a class hierarchy with the following classes:

Media (Base Class):
Properties:
title (string)
artist (string)
duration (number)
Methods:
getTitle() - Returns the title of the media.
getArtist() - Returns the artist of the media.
getDuration() - Returns the duration of the media.
Song (Inherits from Media):
Additional Properties:
album (string)
genre (string)
Additional Methods:
getAlbum() - Returns the album of the song.
getGenre() - Returns the genre of the song.
PopSong (Inherits from Song):
Additional Properties:
danceability (number)
energy (number)
Additional Methods:
getDanceability() - Returns the danceability of the pop song.
getEnergy() - Returns the energy of the pop song.
RockSong (Inherits from Song):
Additional Properties:
distortion (number)
tempo (number)
Additional Methods:
getDistortion() - Returns the distortion of the rock song.
getTempo() - Returns the tempo of the rock song.
Podcast (Inherits from Media):
Additional Properties:
host (string)
topic (string)
Additional Methods:
getHost() - Returns the host of the podcast.
getTopic() - Returns the topic of the podcast.
NewsPodcast (Inherits from Podcast):
Additional Properties:
source (string)
Additional Methods:
getSource() - Returns the source of the news podcast.
getDuration() - Overrides the getDuration() method from Media.
ComedyPodcast (Inherits from Podcast):
Additional Properties:
comedian (string)
rating (number)
Additional Methods:
getComedian() - Returns the comedian of the comedy podcast.
getRating() - Returns the rating of the comedy podcast.


Note:
Each object should be able to access its parent properties and methods.
Your code will be evaluated on this basis only.


Hint:
Use the super keyword in the constructor of each inherited class to call the parent class constructor and initialize its properties.
If you override a method in a child class, you can use super to call the parent class method to reuse or extend its functionality. For example: super.getDuration(); */

//Create the required Classes with each inheriting Class as specified in the Problem Statement.
function main() {
  // Crete your class media with proper constructor properties and methods as mentioned.
  class Media {
    constructor(title, artist, duration) {
      this.title = title;
      this.artist = artist;
      this.duration = duration;
    }

    getTitle() {
      return this.title;
    }

    getArtist() {
      return this.artist;
    }

    getDuration() {
      return this.duration;
    }
  }

  //Create a Class Song extending the Media with proper constructor ,properties and methods
  class Song extends Media {
    constructor(title, artist, duration, album, genre) {
      super(title, artist, duration);
      this.album = album;
      this.genre = genre;
    }

    getAlbum() {
      return this.album;
    }

    getGenre() {
      return this.genre;
    }
  }

  //Create class PopSong and PockSong using Song class
  class PopSong extends Song {
    constructor(title, artist, duration, album, genre, danceability, energy) {
      super(title, artist, duration, album, genre);
      this.danceability = danceability;
      this.energy = energy;
    }

    getDanceability() {
      return this.danceability;
    }

    getEnergy() {
      return this.energy;
    }
  }

  class RockSong extends Song {
    constructor(title, artist, duration, album, genre, distortion, tempo) {
      super(title, artist, duration, album, genre);
      this.distortion = distortion;
      this.tempo = tempo;
    }

    getDistortion() {
      return this.distortion;
    }

    getTempo() {
      return this.tempo;
    }
  }

  //Create a class Podcast inherting from the Media
  class Podcast extends Media {
    constructor(title, artist, duration, host, topic) {
      super(title, artist, duration);
      this.host = host;
      this.topic = topic;
    }

    getHost() {
      return this.host;
    }

    getTopic() {
      return this.topic;
    }
  }

  //Create NewsPodcast and ComedyPodcast using the Podcast class.
  class NewsPodcast extends Podcast {
    constructor(title, artist, duration, host, topic, source) {
      super(title, artist, duration, host, topic);
      this.source = source;
    }

    getSource() {
      return this.source;
    }
  }

  class ComedyPodcast extends Podcast {
    constructor(title, artist, duration, host, topic, comedian, rating) {
      super(title, artist, duration, host, topic);
      this.comedian = comedian;
      this.rating = rating;
    }

    getComedian() {
      return this.comedian;
    }

    getRating() {
      return this.rating;
    }
  }

  //Your code will be evaluated on basis of these operation.
  const popSong = new PopSong(
    "Shape of You",
    "Ed Sheeran",
    235,
    "?",
    "Pop",
    0.825,
    0.652
  );
  console.log(popSong.getTitle()); 
  console.log(popSong.getArtist()); 
  console.log(popSong.getDuration()); 
  console.log(popSong.getAlbum()); 
  console.log(popSong.getGenre()); 
  console.log(popSong.getDanceability()); 
  console.log(popSong.getEnergy()); 

  const rockSong = new RockSong(
    "Stairway to Heaven",
    "Led Zeppelin",
    482,
    "Led Zeppelin IV",
    "Rock",
    0.056,
    63.5
  );
  console.log(rockSong.getTitle()); 
  console.log(rockSong.getArtist()); 
  console.log(rockSong.getDuration()); 
  console.log(rockSong.getAlbum()); 
  console.log(rockSong.getGenre()); 
  console.log(rockSong.getDistortion()); 
  console.log(rockSong.getTempo()); 

  const newsPodcast = new NewsPodcast(
    "The Daily",
    "The New York Times",
    30,
    "Michael Barbaro",
    "News",
    "The New York Times"
  );
  console.log(newsPodcast.getTitle()); 
  console.log(newsPodcast.getArtist()); 
  console.log(newsPodcast.getDuration()); 
  console.log(newsPodcast.getHost()); 
  console.log(newsPodcast.getTopic()); 
  console.log(newsPodcast.getSource()); 

  const comedyPodcast = new ComedyPodcast(
    "My Favorite Murder",
    "Karen Kilgariff and Georgia Hardstark",
    60,
    "Karen Kilgariff and Georgia Hardstark",
    "Comedy",
    "Karen Kilgariff and Georgia Hardstark",
    4.8
  );
  console.log(comedyPodcast.getTitle()); 
  console.log(comedyPodcast.getArtist()); 
  console.log(comedyPodcast.getDuration()); 
  console.log(comedyPodcast.getHost()); 
  console.log(comedyPodcast.getTopic()); 
  console.log(comedyPodcast.getComedian()); 
  console.log(comedyPodcast.getRating()); 

  return {
    Media,
    Song,
    Podcast,
    PopSong,
    RockSong,
    NewsPodcast,
    ComedyPodcast
  };
}
