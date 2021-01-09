import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [newUser, setNewAuthor] = useState({
    name: "",
    praise: "",
    highFive: "",
    photo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newUser.photo);
    formData.append("praise", newUser.praise);
    formData.append("highFive", newUser.highFive);
    formData.append("name", newUser.name);

    axios
      .post("http://localhost:5000/users/add/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewAuthor({ ...newUser, photo: e.target.files[0] });
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="photo"
        onChange={handlePhoto}
      />

      <input
        type="text"
        placeholder="name"
        name="name"
        value={newUser.name}
        onChange={handleChange}
      />

      <input
        type="Number"
        name="praise"
        value={newUser.praise}
        onChange={handleChange}
      />

      <input
        type="Number"
        name="highFive"
        value={newUser.highFive}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  );
};

export default AddUser;
