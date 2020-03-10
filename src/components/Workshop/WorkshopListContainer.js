import React from "react";
import { loadWorkshops, selectWorkshop } from "../../actions/workshops";
import { connect } from "react-redux";
import WorkshopList from "./WorkshopList";

class WorkshopListContainer extends React.Component {
  componentDidMount() {
    this.props.loadWorkshops();
  }

  onClick = async workshopId => {
    console.log("this button does something! and this is the id: ", this.props);

    try {
      this.props.selectWorkshop(workshopId);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  render() {
    return (
      <div>
        {!this.props.workshops ? (
          <div>Loading...</div>
        ) : (
          <div>
            {this.props.workshops.map(workshop => (
              <WorkshopList
                id={workshop.id}
                key={workshop.id}
                title={workshop.title}
                by={workshop.by}
                date={workshop.date}
                street={workshop.street}
                city={workshop.city}
                country={workshop.country}
                email={workshop.email}
                price={workshop.price}
                descriptionOfWorkshop={workshop.descriptionOfWorkshop}
                featuredImage={workshop.featuredImage}
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
  workshops: state.workshops.allWorkshops
});

export default connect(mapStateToProps, { loadWorkshops, selectWorkshop })(
  WorkshopListContainer
);
