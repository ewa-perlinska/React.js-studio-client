import React from "react";
import { loadExhibitions, selectWorkshop } from "../../actions/workshops";
import { connect } from "react-redux";
import ExhibitionList from "./ExhibitionList";

class ExhibitionListContainer extends React.Component {
  componentDidMount() {
    this.props.loadExhibitions();
  }

  onClick = async exhibitionId => {
    console.log("this button does something! and this is the id: ", this.props);

    try {
      this.props.selectExhibition(exhibitionId);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  render() {
    return (
      <div>
        {!this.props.exhibitions ? (
          <div>Loading...</div>
        ) : (
          <div>
            {this.props.exhibitions.map(exhibition => (
              <ExhibitionList
                id={exhibition.id}
                key={exhibition.id}
                title={exhibition.title}
                from={exhibition.from}
                dateOfOpening={exhibition.dateOfOpening}
                dateOfOclosing={exhibition.dateOfOclosing}
                street={exhibition.street}
                city={exhibition.city}
                country={exhibition.country}
                price={exhibition.price}
                descriptionOfExhibition={exhibition.descriptionOfExhibition}
                featuredImage={exhibition.featuredImage}
                onClick={this.onClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  studios: state.studios.allStudios,
  studio: state.studios.selectedStudio,
  exhibitions: state.exhibitions.allExhibitions
});

export default connect(mapStateToProps, { loadExhibitions, selectExhibition })(
  ExhibitionListContainer
);
