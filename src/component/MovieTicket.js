import React from "react";
import { useState } from "react";

// import React, { useState } from "react";

const MovieTicket = ({ movieId, movieData }) => {
  // const { apiData } = useFetch("https://api.tvmaze.com/search/shows?q=all");

  const movieFilter = movieData.filter((movie) => movie.show.id === movieId)[0];

  const [formData, setFormData] = useState({
    movieName: movieFilter.show.name,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    numberOfTickets: "",
  });
  const handleNumberOfTicketsChange = (event) => {
    setFormData({
      ...formData,
      numberOfTickets: parseInt(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("movieBookingData", JSON.stringify(formData));
    setFormData({
      movieName: movieFilter.show?.name,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      numberOfTickets: "",
    });
    alert("Booking successful!");
  };

  return (
    <div className="movie-ticket-container">
      <div className="form-data-header">
        <h1>{movieFilter.show.name}</h1>
        <img src={movieFilter.show?.image?.medium} alt="movie poster" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-label-wrapper">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            placeholder="John"
            onChange={(event) =>
              setFormData({ ...formData, firstName: event.target.value })
            }
            required
          />
        </div>
        <div className="input-label-wrapper">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(event) =>
              setFormData({ ...formData, lastName: event.target.value })
            }
            required
          />
        </div>
        <div className="input-label-wrapper">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            placeholder="johndoe@gmail.com"
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            required
          />
        </div>
        <div className="input-label-wrapper">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={formData.phoneNumber}
            maxLength={10}
            required
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            placeholder="999999999"
            onChange={(event) =>
              setFormData({ ...formData, phoneNumber: event.target.value })
            }
          />
        </div>
        <div className="input-label-wrapper">
          <label>
            Number of Tickets:
            <select
              value={formData.numberOfTickets}
              onChange={handleNumberOfTicketsChange}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="input-label-wrapper form-button">
          <button type="submit">Book Ticket</button>
        </div>
      </form>
    </div>
  );
};

export default MovieTicket;
