import React, { Component } from 'react';
import './admin-dash-card.css'

class AdminDashCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4 py-2">
          <div className="card">
            <div className="card-body">
              <h3>5</h3>
              <h5>Total Orders</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 py-2">
          <div className="card">
            <div className="card-body">
              <h3>55</h3>
              <h5>Completed Orders</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 py-2">
          <div className="card">
            <div className="card-body">
              <h3>55</h3>
              <h5>Pending Orders</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 py-2">
          <div className="card">
            <div className="card-body">
              <h3>55</h3>
              <h5>Cancelled Orders</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 py-2">
          <div className="card">
            <div className="card-body">
              <h3>110</h3>
              <h5>Total Products</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashCard;