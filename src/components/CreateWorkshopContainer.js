import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudioForm from "./StudioForm";
import { connect } from "react-redux";
import { createStudio } from "../../actions/studios";
import UploadImages from "../ImageUpload/ImageUploadContainer";

function CreateWorkshopContainer() {
  const dispatch = useDispatch();
  const [workshopData, setworkshopData] = useState({
    title: "",
    by: "",
    date: "",
    street: "",
    city: "",
    country: "",
    email: "",
    price: "",
    descriptionOfWorkshop: "",
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
    dispatch(createWorkshop(workshopData));
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

    setStudioData(prevState => {
      return { ...prevState, featuredImage: file.url };
    });

    setLoading(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setStudioData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const {
    title,
    by,
    date,
    street,
    city,
    country,
    email,
    price,
    descriptionOfWorkshop,
    featuredImage
  } = workshopData;

  console.log("DATA", workshopData);

  return (
    <div>
      <h1> ADD YOUR WORKSHOP </h1>
      <h3>~ ENTER INFORMATION ABOUT WORKSHOP BELOW ~</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input onChange={handleChange} name="title" value={title} />
        <label>By:</label>
        <input onChange={handleChange} name="by" value={by} />
        <label>Date:</label>
        <input
          onChange={handleChange}
          name="date"
          type="date"
          min={"2020-02-28"}
          value={date}
        />
        <label>Street: </label>
        <input onChange={handleChange} name="street" value={street} />
        <label>City: </label>
        <input onChange={handleChange} name="city" value={city} />
        <label>Country: </label>
        <input onChange={handleChange} name="country" value={country} />
        <label>Email: </label>
        <input onChange={handleChange} name="email" value={email} />
        <label>Price: </label>
        <input onChange={handleChange} name="price" value={price} />
        <label>Description: </label>
        <input
          onChange={handleChange}
          name="descriptionOfWorkshop"
          value={descriptionOfWorkshop}
        />
        <label>Upload image: </label>
        <input type="file" onChange={handleFileSelect} name="featuredImage" />
        <input type="submit" />
      </form>
    </div>
  );
}

// const mapStateToProps = state => {
//   console.log("STATE IN MSTP", state);
//   return {
//     event: state.events.selectedEvent
//   };
// };

export default connect()(CreateWorkshopContainer);
