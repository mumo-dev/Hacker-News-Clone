import React, { Component } from "react";
import NewsItem from "./NewsItem";

class NewsItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: Array(9).fill(8)
    };
  }

  render() {
    return (
      <ul className="list-group  ">
        {this.state.news.map(newsItems => {
          return <NewsItem />;
        })}
      </ul>
    );
  }
}

export default NewsItems;
