import React, { Component } from "react";
import "./newsItem.css";

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: props.story
    };
  }
  render() {
    // console.log(this.props);
    const story = this.props.story;
    return (
      <div className="list-group-item rounded-0 border-right-0 border-left-0">
        <div className="d-flex">
          <div className="news-item-title">{this.props.index}</div>
          <div className="ml-1">
            <section className="news-item-title ">{story.title}</section>

            <section className="news-item-url ">
              <a href={story.url} className="">
                {story.url.slice(8)}
              </a>
            </section>

            <section className="news-item-footer">
              {story.score} Points by {story.by} at 11.00 hrs{" "}
              <span> &#8226;</span> {"  "}
              {story.kids.length} comments
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
