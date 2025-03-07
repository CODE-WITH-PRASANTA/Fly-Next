import React from 'react';
import './LatestNews.css';
import { Link } from "react-router-dom";


// Assets for the latest news section
import latestBlog1 from '../../assets/blog-1.png';
import latestBlog2 from '../../assets/blog-2.png';
import latestBlog3 from '../../assets/blog-3.png';
import { FaArrowRight } from 'react-icons/fa';

const LatestNews = () => {

  const newsData = [
    {
      id: 1,
      title: "Charter flight of the Death Penalty in America",
      description:
        "With a vast array of popular private planes to choose from, traveling by private jet charter is the most efficient.",
      image: latestBlog1,
      date: "20 March 2022 | 3 Comments",
    },
    {
      id: 2,
      title: "Our technology consistently delivers",
      description:
        "Private jet hire for leisure purposes allows yourself, your family, and friends to travel in luxury, comfort, and privacy.",
      image: latestBlog2,
      date: "23 February 2022 | 4 Comments",
    },
    {
      id: 3,
      title: "Search the world with ease and transparency",
      description:
        "It's fast gaining in popularity as leisure time becomes increasingly precious and we value the experience of the journey.",
      image: latestBlog3,
      date: "18 June 2022 | 6 Comments",
    },
  ];


  return (
    <div className="latest-news">
    <h2 className="latest-news-title">Latest News From Us</h2>
    <p className="latest-news-subtitle">
      Stay updated with our latest articles, updates, and stories.
    </p>
    <div className="news-cards">
      {newsData.map((news) => (
        <div key={news.id} className="news-card">
          <img src={news.image} alt={news.title} className="news-image" />
          <div className="news-content">
            <p className="news-date">{news.date}</p>
            <h3 className="news-title">{news.title}</h3>
            <p className="news-description">{news.description.substring(0, 100)}...</p>
            <Link to={`/news/${news.id}`} className="news-read-more">
              Read More <FaArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default LatestNews;
