import React from "react";
import "./styles.css";
import { useState } from "react";

const movieList = {
  action: [
    {
      url:
        "https://c4.wallpaperflare.com/wallpaper/827/407/783/game-of-thrones-emilia-clarke-daenerys-targaryen-dragon-wallpaper-preview.jpg",
      name: "Game of Thrones",
      year: "2011-2019",
      rate: "9.2 ⭐",
      desc:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
    },
    {
      url: "https://images2.alphacoders.com/120/thumbbig-1209249.webp",
      name: "The Batman",
      year: "2022",
      rate: "7.9 ⭐",
      desc:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
    },
    {
      url:
        "https://wallpapers.com/images/hd/the-boys-character-cutouts-1xba4ywhbt3tgy3c.webp",
      name: "The Boys",
      year: "2019-",
      rate: "8.7 ⭐",
      desc:
        "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers."
    }
  ],
  sciFi: [
    {
      url:
        "https://c4.wallpaperflare.com/wallpaper/853/336/948/stranger-things-eleven-colorful-tv-wallpaper-preview.jpg",
      name: "Stranger Things",
      year: "2016-",
      rate: "8.7 ⭐",
      desc:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back."
    },
    {
      url:
        "https://c4.wallpaperflare.com/wallpaper/996/743/625/pascal-blanche-dune-movie-dune-series-artwork-science-fiction-hd-wallpaper-preview.jpg",
      name: "Dune",
      year: "2021",
      rate: "8.0 ⭐",
      desc:
        "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
    },
    {
      url:
        "https://c4.wallpaperflare.com/wallpaper/536/846/466/interstellar-movie-movies-wallpaper-preview.jpg",
      name: "Interstellar",
      year: "2014",
      rate: "8.6 ⭐",
      desc:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    }
  ],
  crime: [
    {
      url: "https://images.alphacoders.com/106/thumbbig-1069116.webp",
      name: "Better Call Saul",
      year: "2015-2022",
      rate: "8.9 ⭐",
      desc:
        "The trials and tribulations of criminal lawyer Jimmy McGill before his fateful run-in with Walter White and Jesse Pinkman."
    },
    {
      url:
        "https://c4.wallpaperflare.com/wallpaper/281/173/77/cillian-murphy-peaky-blinders-thomas-shelby-arthur-shelby-wallpaper-preview.jpg",
      name: "Peaky Blinders",
      year: "2013-2022",
      rate: "8.8 ⭐",
      desc:
        "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby."
    },
    {
      url:
        "https://c4.wallpaperflare.com/wallpaper/61/55/822/prison-break-wallpaper-preview.jpg",
      name: "Prison Break",
      year: "2005-2017",
      rate: "8.3 ⭐",
      desc:
        "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("action");

  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>My Movie Recommendations</h1>
      <p className="heading">
        {" "}
        These are my top movie recommendations in three different geners.
      </p>
      <div className="movieGenere">
        {Object.keys(movieList).map((genre) => (
          <button onClick={() => clickHandler(genre)}>{genre}</button>
        ))}
      </div>

      <hr />

      <ul>
        {movieList[selectedGenre].map((movie) => (
          <li key="movie.name" className="card">
            <div className="card-img">
              <img src={movie.url} alt="This is poster" />
            </div>
            <div className="card-about">
              <h2>{movie.name}</h2>
              <h3>
                ({movie.year}) <span>{movie.rate}</span>
              </h3>
              <p>{movie.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
