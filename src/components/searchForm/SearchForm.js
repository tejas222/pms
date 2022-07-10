import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategories, getCategory } from "../../actions/categoryActions";

const SearchForm = (props) => {
  useEffect((id) => {
    props.getCategories();
  }, []);
  const categories = props.users.users;
  const [searchData, setSearchData] = useState({
    division: "",
    taluka: "",
    landmark: "",
    ownerName: "",
    mobile: "",
    colony: "",
    propertyId: "",
  });
  const subDivision = ["Osmanabad", "Omerga", "Kallam", "Bhoom"];
  const taluka = [
    "Osmanabad",
    "Tuljapur",
    "Omerga",
    "Lohara",
    "Kallam",
    "Washi",
    "Bhoom",
    "Paranda",
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const id = searchData.propertyId;
    await props.getCategory(id, props.history);
  };

  return (
    <>
      <h1 className="text-center mb-4 w-50 m-auto">
        Welcome to Property Tax Management System Osmanabad
      </h1>
      <div className="col-md-4 m-auto ">
        <form>
          <div className="form-container">
            <div className="form-group mb-2">
              <label className="form-contol">Sub Division Name</label>
              <select
                className="form-select"
                name="division"
                value={searchData.division}
                onChange={handleChange}
              >
                <option disabled defaultValue>
                  Select Sub Division
                </option>
                {subDivision.map((item) => (
                  <option>{item}</option>
                ))}
              </select>
            </div>

            <div className="form-group mb-2">
              <label className="form-contol">Taluka Name</label>
              <select
                className="form-select"
                name="taluka"
                value={searchData.taluka}
                onChange={handleChange}
              >
                <option disabled defaultValue>
                  Select Taluka
                </option>
                {taluka.map((item) => (
                  <option>{item}</option>
                ))}
              </select>
            </div>
            <span>* Please select any one of the following search fields.</span>

            <div className="form-group mb-2">
              <label className="form-contol">Near By Landmark</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Nearby Landmark"
                name="landmark"
                value={searchData.landmark}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-2">
              <label className="form-contol">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="ownerName"
                value={searchData.ownerName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-2">
              <label className="form-contol">Mobile</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Mobile"
                name="mobile"
                value={searchData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-2">
              <label className="form-contol">Colony</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Colony"
                name="colony"
                value={searchData.colony}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-2">
              <label className="form-contol">Property Id</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Property Id"
                name="propertyId"
                value={searchData.propertyId}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="submit"
                className="btn btn-success"
                value="View Listing"
                onClick={handleClick}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
SearchForm.propTypes = {
  users: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps, { getCategories, getCategory })(
  SearchForm
);
