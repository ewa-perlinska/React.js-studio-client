import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
// import { createProject } from "../../actions/studios";

function CreateProjectContainer() {
  const dispatch = useDispatch();
  const [projectData, setProjectData] = useState({
    title: "",
    year: "",
    client: "",
    location: "",
    edition: "",
    size: "",
    publisher: "",
    technique: "",
    category: "",
    descriptionOfProject: "",
    image: ""
  });

  const [loading, setLoading] = useState(false);
  const state = useSelector(reduxState => {
    return {
      projectState: reduxState.project
    };
  });

  const handleSubmit = event => {
    console.log("---looking for roomId THROUGHT STATE---", state);

    event.preventDefault();
    // console.log(state);
    // const studioDetails = this.state;
    dispatch(createProject(projectData));
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
      return { ...prevState, image: file.url };
    });

    setLoading(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setProjectData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const {
    title,
    year,
    client,
    location,
    edition,
    size,
    publisher,
    technique,
    category,
    descriptionOfProject
  } = projectData;

  console.log("DATA", projectData);

  return (
    <div>
      <h1> ADD YOUR PROJECT </h1>
      <h3>~ ENTER INFORMATION ABOUT PROJECT BELOW ~</h3>
      <form onSubmit={handleSubmit}>
        <label>Title :</label>
        <input onChange={handleChange} name="title" value={title} />
        <label>Year: </label>
        <input onChange={handleChange} name="year" value={year} />
        <label>Client: </label>
        <input onChange={handleChange} name="client" value={client} />
        <label>Location: </label>
        <input onChange={handleChange} name="location" value={location} />
        <label>Edition: </label>
        <input onChange={handleChange} name="edition" value={edition} />
        <label>Size: </label>
        <input onChange={handleChange} name="size" value={size} />
        <label>Publisher: </label>
        <input onChange={handleChange} name="publisher" value={publisher} />
        <label>Technique: </label>
        <input onChange={handleChange} name="technique" value={technique} />
        <label>Category: </label>
        <input onChange={handleChange} name="category" value={category} />
        <label>Descritpion: </label>
        <input
          onChange={handleChange}
          name="descriptionOfProject"
          value={descriptionOfProject}
        />
        <label>Upload images: </label>
        <input type="file" onChange={handleFileSelect} name="image" />
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

export default connect()(CreateProjectContainer);
