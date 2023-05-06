import "./App.css";
import React, { useState } from "react";
import useFetch from "./fetchdata";
import MovieSummary from "./component/Moviesummary";
import MovieCard from "./component/MovieCard";

const App = () => {
  const { apiData } = useFetch("https://api.tvmaze.com/search/shows?q=all");

  const [summary, setSummary] = useState(null);
  const [image, setSelectedImage] = useState("");
  const [showWebsite, setShowWebsite] = useState("");
  const [showUrl, setShowUrl] = useState("");
  const [showStatus, setShowStatus] = useState("");
  const [showSchedule, setShowSchedule] = useState("");
  const [showtime, setShowtime] = useState("");
  const [showLinks, setShowLinks] = useState("");
  const [movieId, setMovieId] = useState("");

  function handleClick(
    showSummary,
    image,
    show,
    url,
    status,
    schedule,
    time,
    links,
    id
  ) {
    setSummary(showSummary);
    setSelectedImage(image);
    setShowWebsite(show);
    setShowUrl(url);
    setShowStatus(status);
    setShowSchedule(schedule);
    setShowtime(time);
    setShowLinks(links);
    setMovieId(id);
  }

  const [hours, minutes] = showtime.split(":");
  const hoursNum = Number(hours);
  const suffix = hoursNum >= 12 ? "PM" : "AM";
  const hours12 = hoursNum % 12 || 12;
  const time12 = `${hours12}:${minutes} ${suffix}`;

  // const fetchUserData = () => {
  //   fetch("https://api.tvmaze.com/search/shows?q=all")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //       console.log(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  return (
    <div className="layout">
      <div className="Tv-shows">
        <h1>TV Shows</h1>
        {/* movieCard */}
        <MovieCard apiData={apiData} handleClick={handleClick} />
      </div>
      {/* summary started  */}
      <MovieSummary
        summary={summary}
        image={image}
        showWebsite={showWebsite}
        showUrl={showUrl}
        showStatus={showStatus}
        showSchedule={showSchedule}
        showtime={showtime}
        showLinks={showLinks}
        movieId={movieId}
        time={time12}
        apiData={apiData}
      />
    </div>
  );
};

export default App;
