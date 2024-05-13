import React from "react";
import "./form.scss";

const Form = props => {
  const { loadweather } = props;

  return (
    <div className="container">
      <form onSubmit={loadweather}>
        <div className="row">
          <div className="col-md-4 mb-3">
            <input type="text" name="city" placeholder="City" className="form-control" />
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" name="country" placeholder="Country" className="form-control" />
          </div>
          <div className="col-md-4">
            <button className="btn btn-success">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;