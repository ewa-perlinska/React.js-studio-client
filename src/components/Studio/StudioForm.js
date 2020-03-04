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
    <form onSubmit={handleSubmit}>
      <label>Studio Name :</label>
      <input onChange={handleChange} name="studioName" value={studioName} />
      <label>Street: </label>
      <input onChange={handleChange} name="street" value={street} />
      <label>City: </label>
      <input onChange={handleChange} name="city" value={city} />
      <label>Country: </label>
      <input onChange={handleChange} name="country" value={country} />
      <label>Email: </label>
      <input onChange={handleChange} name="email" value={email} />
      <label>Number: </label>
      <input onChange={handleChange} name="number" value={number} />
      <label>About studio: </label>
      <input
        onChange={handleChange}
        name="descriptionOfStudio"
        value={descriptionOfStudio}
      />
      <label>About studio: </label>
      <input
        onChange={handleChange}
        name="descriptionOfStudio"
        value={descriptionOfStudio}
      />
      <label>Case studies: </label>
      <input
        onChange={handleChange}
        name="descriptionOfCaseStudies"
        value={descriptionOfCaseStudies}
      />
      <label>Graphic design practice: </label>
      <input
        onChange={handleChange}
        name="descriptionOfPractie"
        value={descriptionOfPractie}
      />
      <label>Graphic design Education: </label>
      <input
        onChange={handleChange}
        name="descriptionOfDesignEducation"
        value={descriptionOfDesignEducation}
      />
      <input type="submit" />
    </form>
  );
}

export default StudioForm;
