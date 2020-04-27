import React from "react";
import Form from './common/form'

export default class MovieForm extends Form {
  state = {
    data: { title: '', genre: '', numberInStock: '', rate: ''},
    genres: [],
    errrors: {}
  }

  schema={
    title: Joi.string()
    .required()
    .label("Title") ,
    genreId: Joi.string()
    .required()
    .label("Genre"),
    numberInStock: Joi.string()
    .required()
    .min(1)
    .max(100) ,
    dailyRentalRate: Joi.string() 
    .required()
    ,
  }

  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
