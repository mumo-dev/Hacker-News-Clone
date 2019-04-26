import React, { Component } from "react";
import "./newsItem.css";

class NewsItem extends Component {
  render() {
    return (
      <div className="list-group-item rounded-0 border-right-0 border-left-0">
        <div className="d-flex">
          <div className="news-item-title">2</div>
          <div className="ml-1">
            <section className="news-item-title ">Some titlte</section>

            <section className="news-item-url ">
              <a href="#!" className="">
                Some linke
              </a>
            </section>

            <section className="news-item-footer">footer</section>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
