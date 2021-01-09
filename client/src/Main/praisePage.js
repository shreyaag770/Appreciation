import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Praise = (props) => {
  const history = useHistory();
  let hash = props.match.params.id;

  const submitHandler = (id) => {
    axios
      .put(`/users/praise/${id}`)
      .then((res) => {
        history.push("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>Do you want to praise ?</div>
      <button onClick={() => submitHandler(hash)}>Yes</button>
      <Link to="/">
        <button>No</button>
      </Link>
    </div>
  );
};

export default Praise;