import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { createProject } from "../../actions/projects";

function CreateProjectContainer(props) {
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
    image: []
  });

  console.log("DOOOO I HAVE MY PROPS????", props);

  const [loading, setLoading] = useState(false);
  // const state = useSelector(reduxState => {
  //   return {
  //     projectState: reduxState.project
  //   };
  // });

  const handleSubmit = event => {
    // console.log("---looking for roomId THROUGHT STATE---", state);
    event.preventDefault();
    // console.log(state);
    // const studioDetails = this.state;
    props.dispatch(createProject(projectData, props.match.params.id));
    // dispatch(createProject(projectData, studioId));
  };

  const handleFileSelect = async e => {
    setLoading(true);
    const files = e.target.files;
    const arr = Object.values(files);
    console.log(arr, "whaat");

    const requests = arr.map(file => {
      const data = new FormData();
      data.append("file", file);
      console.log("what is dataaaaaaaaa ???", data);

      data.append("upload_preset", "qcq8titl");
      return fetch(`https://api.cloudinary.com/v1_1/eperlinska/image/upload`, {
        method: "POST",
        body: data
      });
    });

    Promise.all(requests)
      .then(allRequests => {
        console.log(allRequests);
        return Promise.all(allRequests.map(r => r.json()));
      })
      .then(data => {
        // console.log(data, "dataaaa");
        data.map(url => {
          // console.log("whaaaat is my state???", projectData);
          setProjectData(prevState => {
            // console.log("DOOOO I HAVE URL ??", url.url);
            console.log(
              " WWWWWWWAAAAAT IS THISSS ? ",
              projectData.image.concat(url.url)
            );

            return {
              ...prevState,
              image: [...prevState.image, projectData.image.concat(url.url)]
            };
          });
        });
      });

    // setProjectData({ image: url.url })

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
        <label for="files">Upload images: </label>
        <input
          type="file"
          id="files"
          onChange={handleFileSelect}
          name="image"
          multiple
        />
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
