import React, { Component } from "react";

//components
import Graph from "./graphs/graphs";

class DashboardDemo extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-8 ml-auto">
              <div className="row pt-md-5 mt-md-3 mb-5">
                {/* <AdminDashCard /> */}
              <Graph/>
                
                
              </div>
              <div className="row pt-md-5 mt-md-3 mb-5">
              </div>
              <div className="row align-items-center">
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DashboardDemo;
