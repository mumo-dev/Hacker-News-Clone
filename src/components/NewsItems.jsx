import React, { Component } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

class NewsItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      topstories: [],
      newsItemLoading: false,
      initialLoading: false
    };
  }

  componentDidMount() {
    this.fetchTopStoryKeys();
  }

  fetchTopStoryKeys() {
    this.setState({
      initialLoading: true
    });
    axios
      .get(" https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(({ data }) => {
        this.setState({
          topstories: data.slice(0, 20)
        });

        this.state.topstories.forEach((key, index) => {
          //set initial loading to false after first item has loaded
          if (index === 1) {
            this.setState({
              initialLoading: false
            });
          }

          this.fetchStory(key);
        });
      });
  }

  fetchStory(key) {
    axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${key}.json`)
      .then(({ data }) => {
        const stories = [...this.state.news, data];
        this.setState({
          news: stories
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <ul className="list-group  ">
        {this.state.news && this.state.initialLoading && (
          <li className="list-group-item rounded-0 border-right-0 border-left-0">
            {" "}
            Loading ...
          </li>
        )}
        {this.state.news.map((newsItem, index) => {
          return (
            <NewsItem story={newsItem} key={newsItem.id} index={index + 1} />
          );
        })}
      </ul>
    );
  }
}

export default NewsItems;
