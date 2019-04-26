import React, { Component } from "react";
import NewsItems from "./components/NewsItems";

function Header(props) {
  return (
    <nav className="navbar navbar-light bg-primary-light m-0 px-0">
      <a className="navbar-brand" href="#!">
        HackerWeb
      </a>
    </nav>
  );
}
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* <Header /> */}
            <div className="card">
              <div className="card-header bg-white">
                <h4 style={{ color: "#f60" }}> HackerWeb</h4>
              </div>
              <div className="card-body p-0">
                <NewsItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
