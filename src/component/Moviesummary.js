import React from "react";
import Popup from "reactjs-popup";
import MovieTicket from "./MovieTicket";

const MovieSummary = ({
  summary,
  image,
  showWebsite,
  showUrl,
  showStatus,
  showSchedule,
  showtime,
  showLinks,
  movieId,
  time12,
  apiData,
}) => {
  return (
    <div className="summary">
      <h1>Summary</h1>
      {summary ? (
        <div>
          <figure className="image-section">
            <img src={image?.medium || "  "} alt="moive" className="image" />
          </figure>

          <p className="summary-innertext">
            {summary.replace(/(<([^>]+)>)/gi, "")}
          </p>

          <div>
            {
              <ul className="website-list">
                <li>
                  OfficialSite:-
                  {showWebsite ? (
                    <a href={showWebsite}>{showWebsite}</a>
                  ) : (
                    "No Data Found"
                  )}
                </li>
                <li>
                  Previous Episode:-
                  <a href={showLinks || "No Data Found"}>
                    {showLinks || "No Data Found"}
                  </a>
                </li>
                <li>
                  Url:-
                  <a href={showUrl || "No Data Found"}>
                    {showUrl || "No Data Found"}
                  </a>
                </li>

                <li> Status:-{showStatus || "No Data Found"}</li>
                <li>Day:- {showSchedule ? showSchedule : "No Data Found"}</li>

                <li>
                  Time:-
                  {showtime ? time12 : "No Data Found"}
                </li>
              </ul>
            }
          </div>
          <div className="button-align">
            <Popup
              trigger={<button>Movie Ticket</button>}
              modal
              nested
              position="right center"
            >
              <MovieTicket movieId={movieId} movieData={apiData} />
            </Popup>
          </div>
        </div>
      ) : (
        <h3>Select Any TV Show 📺 </h3>
      )}
    </div>
  );
};

export default MovieSummary;
