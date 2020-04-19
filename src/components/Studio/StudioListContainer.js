import React from "react";
import { loadStudios, selectStudio } from "../../actions/studios";
import { connect } from "react-redux";
import Studio from "./StudioList";
import _ from "lodash";

// const studios = [
//   {
//     id: 1,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   },
//   {
//     id: 2,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   },
//   {
//     id: 3,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   },
//   {
//     id: 4,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   },
//   {
//     id: 5,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   },
//   {
//     id: 6,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   },
//   {
//     id: 7,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   },
//   {
//     id: 8,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   },
//   {
//     id: 8,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   },
//   {
//     id: 8,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   },
//   {
//     id: 8,
//     studioName: "matias",
//     city: "matias",
//     country: "matias",
//     featuredImage:
//       "http://res.cloudinary.com/eperlinska/image/upload/v1585304413/studios/aedzqujsgyedfam0pu4m.png"
//   }
// ];

class StudioListContainer extends React.Component {
  componentDidMount() {
    this.props.loadStudios();
  }

  onClick = async studioId => {
    console.log("this button does something! and this is the id: ", this.props);

    try {
      this.props.selectStudio(studioId);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  render() {
    if (!this.props.studios.length) {
      return "loading...";
    }
    console.log("fist array", this.props.studios);
    const orderedStudios = this.props.studios.reduce((acc, studio, index) => {
      const row = Math.trunc(index / 4);
      if (!acc[row]) {
        return {
          ...acc,
          [row]: [studio]
        };
      }
      return {
        ...acc,
        [row]: [...acc[row], studio]
      };
    }, {});

    // { 1: [{}, {}, {}, {}], 2: [{}, {}, {}]}
    console.log("my rows", orderedStudios);

    // [[{}, {}, {}, {}], [{}, {}, {}], []]
    const rows = Object.values(orderedStudios);

    console.log("my rows", rows);
    // const arrayFour = _.chunk(
    //   this.props.studios,
    //   this.props.studios.length / 4
    // );
    // console.log("second array", arrayFour);

    const studioRows = rows.map(row => (
      <div style={{ display: "flex", flexWrap: "no-wrap" }}>
        {row.map(studio => (
          <Studio
            id={studio.id}
            key={studio.id}
            studioName={studio.studioName}
            city={studio.city}
            country={studio.country}
            featuredImage={studio.featuredImage}
            onClick={this.onClick}
          />
        ))}
      </div>
    ));

    return (
      <section
        style={{ marginTop: "300px", display: "flex", flexDirection: "column" }}
      >
        {studioRows}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  studios: state.studios.allStudios,
  studio: state.studios.selectedStudio
});

export default connect(mapStateToProps, { loadStudios, selectStudio })(
  StudioListContainer
);

// {studios.map(studio => (
//   <Studio
//     id={studio.id}
//     key={studio.id}
//     studioName={studio.studioName}
//     city={studio.city}
//     country={studio.country}
//     featuredImage={studio.featuredImage}
//     onClick={this.onClick}
//   />
// ))}
