import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { createBookStore } from "../../actions/bookstores";

function CreateBookStoreContainer() {
  const dispatch = useDispatch();
  const [bookStoreData, setBookStoreData] = useState({
    name: "",
    hourOfOpening: "",
    hourOfOclosing: "",
    street: "",
    city: "",
    country: "",
    phoneNumber: "",
    email: "",
    website: "",
    descriptionOfBookstore: "",
    featuredImage: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = event => {
    // console.log("---looking for roomId THROUGHT STATE---", state);

    event.preventDefault();
    // console.log(state);
    // const studioDetails = this.state;
    dispatch(createBookStore(bookStoreData));
  };

  const handleFileSelect = async e => {
    setLoading(true);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "qcq8titl");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/eperlinska/image/upload`,
      { method: "POST", body: data }
    );
    const file = await res.json();
    console.log(file.url);

    setBookStoreData(prevState => {
      return { ...prevState, featuredImage: file.url };
    });

    setLoading(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setBookStoreData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const {
    name,
    hourOfOpening,
    hourOfOclosing,
    street,
    city,
    country,
    phoneNumber,
    email,
    website,
    descriptionOfBookstore,
    featuredImage
  } = bookStoreData;

  console.log("DATA", bookStoreData);

  return (
    <div>
      <h1> ADD YOUR BOOKSTORE </h1>
      <h3>~ ENTER INFORMATION ABOUT BOOKSTORE BELOW ~</h3>
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input onChange={handleChange} name="name" value={name} />
        <label>From:</label>
        <input
          onChange={handleChange}
          name="hourOfOpening"
          value={hourOfOpening}
        />
        <label>Till:</label>
        <input
          onChange={handleChange}
          name="hourOfOclosing"
          value={hourOfOclosing}
        />
        <label>Street: </label>
        <input onChange={handleChange} name="street" value={street} />
        <label>City: </label>
        <input onChange={handleChange} name="city" value={city} />
        <label>Country: </label>
        <input onChange={handleChange} name="country" value={country} />
        <label>Phone Number: </label>
        <input
          onChange={handleChange}
          name="phoneNumber"
          type="number"
          value={phoneNumber}
        />
        <label>email: </label>
        <input onChange={handleChange} name="email" value={email} />
        <label> website: </label>
        <input onChange={handleChange} name="website" value={website} />
        <label>about : </label>
        <input
          onChange={handleChange}
          name="descriptionOfBookstore"
          value={descriptionOfBookstore}
        />
        <label>Upload image: </label>
        <input type="file" onChange={handleFileSelect} name="featuredImage" />
        <input type="submit" disabled={loading} />
      </form>
    </div>
  );
}

export default connect()(CreateBookStoreContainer);
