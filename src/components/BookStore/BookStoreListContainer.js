import React from "react";
import { loadBookStores, selectBookStore } from "../../actions/exhitbitions";
import { connect } from "react-redux";
import BookStoreList from "./BookStoreList";

class BookStoreListContainer extends React.Component {
  componentDidMount() {
    this.props.loadBookStores();
  }

  onClick = async bookstoreId => {
    console.log("this button does something! and this is the id: ", this.props);

    try {
      this.props.selectBookStore(bookstoreId);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  render() {
    return (
      <div>
        {!this.props.bookstores ? (
          <div>Loading...</div>
        ) : (
          <div>
            {this.props.bookstores.map(bookstore => (
              <BookStoreList
                id={bookstore.id}
                key={bookstore.id}
                name={bookstore.title}
                hourOfOpening={bookstore.hourOfOpening}
                hourOfOclosing={bookstore.hourOfOclosing}
                street={bookstore.street}
                city={bookstore.city}
                country={bookstore.country}
                phoneNumber={bookstore.phoneNumber}
                email={bookstore.email}
                website={bookstore.website}
                descriptionOfBookstore={bookstore.descriptionOfBookstore}
                featuredImage={bookstore.featuredImage}
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
  bookstores: state.bookstores.allBookstores
});

export default connect(mapStateToProps, { loadBookStores, selectBookStore })(
  BookStoreListContainer
);
