import React from "react";

const MovieCard = ({ apiData, handleClick }) => {
  return (
    <ul>
      {Object.values(apiData).map((name) => (
        <div key={name.show.id} className="movie-detail">
          <li>
            {name.show.name} - {name.score}
          </li>
          <ul className="movie-Indetails">
            <li>Language: {name.show.language}</li>
            <li>Genres: {name.show.genres.join(", ")}</li>
            <li>Premiered: {name.show.premiered || "No Data Found"}</li>
            <li>Rating: {name.show.rating.average || "No Data Found"}</li>
          </ul>
          <button
            onClick={() =>
              handleClick(
                name.show.summary,
                name.show.image,
                name.show.officialSite,
                name.show.url,
                name.show.status,
                name.show.schedule.days,
                name.show.schedule.time,
                name.show._links?.previousepisode?.href,
                name.show.id
              )
            }
          >
            Show Summary
          </button>
        </div>
      ))}
    </ul>
  );
};

export default MovieCard;
