import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { createExhibition } from "../../actions/workshops";

function CreateExhibitionContainer() {
  const dispatch = useDispatch();
  const [exhibitionData, setExhibitionData] = useState({
    title: "",
    from: "",
    dateOfOpening: "",
    dateOfOclosing: "",
    street: "",
    city: "",
    country: "",
    price: "",
    descriptionOfExhibition: "",
    featuredImage: ""
  });

  const [loading, setLoading] = useState(false);
  // const state = useSelector(reduxState => {
  //   return {
  //     studioState: reduxState.studio
  //   };
  // });

  const handleSubmit = event => {
    // console.log("---looking for roomId THROUGHT STATE---", state);

    event.preventDefault();
    // console.log(state);
    // const studioDetails = this.state;
    dispatch(createExhibition(exhibitionData));
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

    setExhibitionData(prevState => {
      return { ...prevState, featuredImage: file.url };
    });

    setLoading(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setExhibitionData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const {
    title,
    from,
    dateOfOpening,
    dateOfOclosing,
    street,
    city,
    country,
    price,
    descriptionOfExhibition,
    featuredImage
  } = exhibitionData;

  console.log("DATA", exhibitionData);

  return (
    <div>
      <h1> ADD YOUR EXHIBITION </h1>
      <h3>~ ENTER INFORMATION ABOUT WORKSHOP BELOW ~</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input onChange={handleChange} name="title" value={title} />
        <label>From:</label>
        <input onChange={handleChange} name="from" value={from} />
        <label>Date of opening :</label>
        <input
          onChange={handleChange}
          name="dateOfOpening"
          type="date"
          min={"2020-02-28"}
          value={dateOfOpening}
        />
        <label>Date of closing :</label>
        <input
          onChange={handleChange}
          name="dateOfOclosing"
          type="date"
          min={"2020-02-28"}
          value={dateOfOclosing}
        />
        <label>Street: </label>
        <input onChange={handleChange} name="street" value={street} />
        <label>City: </label>
        <input onChange={handleChange} name="city" value={city} />
        <label>Country: </label>
        <input onChange={handleChange} name="country" value={country} />
        <label>Price: </label>
        <input onChange={handleChange} name="price" value={price} />
        <label>Description: </label>
        <input
          onChange={handleChange}
          name="descriptionOfExhibition"
          value={descriptionOfExhibition}
        />
        <label>Upload image: </label>
        <input type="file" onChange={handleFileSelect} name="featuredImage" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default connect()(CreateExhibitionContainer);
