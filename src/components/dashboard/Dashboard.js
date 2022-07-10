import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategories, getCategory } from "../../actions/categoryActions";
import { useEffect } from "react";
import { useState } from "react";
import "./dashboard.css";

const Dashboard = (props) => {
  const { users } = props;
  const [data, setData] = useState({});

  useEffect(() => {
    setData(users.user);
  }, [data]);
  return (
    <>
      <div className="mb-4 text-center">
        <h2>Property Details</h2>
        <hr />
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12 mb-4">
          <div>
            <img
              src={data.image}
              width="300"
              className="text-center m-auto bg-dark"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30004.247200873684!2d79.26764967134201!3d19.944163340848384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d42fd1af5835%3A0x409a59e363e8eb3d!2sBazar%20Ward%2C%20Chandrapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1657443793429!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <h4>{data.id}</h4>
      <h4 className="text-secondary">{data.address}</h4>
      <div className="col-sm-12 p-4 shadow mb-3">
        <h5>Property Details</h5>
        <table className="table-responsive-sm table">
          <thead className="bg-secondary">
            <tr>
              <th>Property ID </th>
              <th>Property Name</th>
              <th>Colony</th>
              <th>City</th>
              <th>Address</th>
              <th>Landmark</th>
              <th>Pincode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.propertyName}</td>
              <td>{data.colony}</td>
              <td>{data.city}</td>
              <td>{data.address}</td>
              <td>{data.landmark}</td>
              <td>{data.pincode}</td>
            </tr>
          </tbody>
          <thead className="bg-secondary">
            <tr>
              <th>Property Category </th>
              <th>Property Type </th>
              <th>Property Sub Type </th>
              <th>Old Property ID </th>
              <th>Ownership Type </th>
              <th>Length </th>
              <th>Length </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.propertyCategory}</td>
              <td>{data.propertyType}</td>
              <td>{data.propertySubType}</td>
              <td>{data.oldPropertyID}</td>
              <td>{data.ownershipType}</td>
              <td>{data.length}</td>
              <td>{data.breadth}</td>
            </tr>
          </tbody>
          <thead className="bg-secondary">
            <tr>
              <th>Plot Area </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.plotArea}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card p-4 shadow mb-3">
        <h5>Owner/Occupier Details</h5>
        <table className="table-responsive-md table">
          <thead className="bg-secondary">
            <tr>
              <th>Owner/Occupier Name </th>
              <th>Gender</th>
              <th>Father/Husband Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.owner}</td>
              <td>{data.gender}</td>
              <td>{data.father}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card p-4 shadow mb-3">
        <h5>Floor Details</h5>
        <table className="table-responsive-md table">
          <thead className="bg-secondary">
            <tr>
              <th>Floor Number </th>
              <th>Floor Category</th>
              <th>Floor Type</th>
              <th>Floor Sub Type</th>
              <th>Carpet Area</th>
              <th>Usage</th>
              <th>Rebate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.floorNumber}</td>
              <td>{data.floorCategory}</td>
              <td>{data.floorType}</td>
              <td>{data.floorSubType}</td>
              <td>{data.carpetArea}</td>
              <td>{data.usage}</td>
              <td>{data.rebate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  users: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps, { getCategories, getCategory })(
  Dashboard
);
