import React from "react";

function StudioForm(props) {
  const {
    handleChange,
    handleSubmit,
    values: {
      studioName,
      street,
      city,
      country,
      email,
      number,
      descriptionOfStudio,
      descriptionOfCaseStudies,
      descriptionOfPractie,
      descriptionOfDesignEducation
    }
  } = props;

  console.log("whaaaat are my values?", props);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>studio</label>
        <input onChange={handleChange} name="studioName" value={studioName} />

        <label>Street: </label>
        <input onChange={handleChange} name="street" value={street} />

        <label>City: </label>
        <input onChange={handleChange} name="city" value={city} />

        <label>Country: </label>
        <input onChange={handleChange} name="country" value={country} />

        <label className="email">Email: </label>
        <input onChange={handleChange} name="email" value={email} />

        <label>Number: </label>
        <input onChange={handleChange} name="number" value={number} />

        <label>About studio: </label>
        <textarea
          onChange={handleChange}
          name="descriptionOfStudio"
          value={descriptionOfStudio}
        />

        <label>Case studies: </label>
        <textarea
          onChange={handleChange}
          name="descriptionOfCaseStudies"
          value={descriptionOfCaseStudies}
        />

        <label>Graphic design practice: </label>
        <textarea
          type="textarea"
          onChange={handleChange}
          name="descriptionOfPractie"
          value={descriptionOfPractie}
        />

        <label>Graphic design Education: </label>
        <textarea
          rows="10"
          cols="30"
          onChange={handleChange}
          name="descriptionOfDesignEducation"
          value={descriptionOfDesignEducation}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default StudioForm;
