import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Highfive = (props) => {
  const history = useHistory();
  let hash = props.match.params.id;

  const submitHandler = (id) => {
    axios
      .put(`/users/highfive/${id}`)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>Do you want to send Highfive ?</div>
      <button onClick={() => submitHandler(hash)}>Yes</button>

      <Link to="/">
        <button>No</button>
      </Link>
    </div>
  );
};

export default Highfive;