import React from 'react';
import './LatestNews.css';

// Assets for the latest news section
import latestBlog1 from '../../assets/blog-1.png';
import latestBlog2 from '../../assets/blog-2.png';
import latestBlog3 from '../../assets/blog-3.png';
import { FaArrowRight } from 'react-icons/fa';

const LatestNews = () => {
  return (
    <div className="latest-news">
      <h2 className="latest-news-title">Latest News From Us</h2>
      <p className="latest-news-subtitle">Stay updated with our latest articles, updates, and stories.</p>
      <div className="news-cards">
        <div className="news-card">
          <img src={latestBlog1} alt="Blog 1" className="news-image" />
          <div className="news-content">
            <p className="news-date">20 March 2022 | 3 Comments</p>
            <h3 className="news-title">Charter flight of the Death Penalty in America</h3>
            <p className="news-description">
              With a vast array of popular private planes to choose from, traveling by private jet charter is the most efficient.
            </p>
            <a href="#" className="news-read-more">
              Read More <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="news-card">
          <img src={latestBlog2} alt="Blog 2" className="news-image" />
          <div className="news-content">
            <p className="news-date">23 February 2022 | 4 Comments</p>
            <h3 className="news-title">Our technology consistently delivers</h3>
            <p className="news-description">
              Private jet hire for leisure purposes allows yourself, your family, and friends to travel in luxury, comfort, and privacy.
            </p>
            <a href="#" className="news-read-more">
              Read More <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="news-card">
          <img src={latestBlog3} alt="Blog 3" className="news-image" />
          <div className="news-content">
            <p className="news-date">18 June 2022 | 6 Comments</p>
            <h3 className="news-title">Search the world with ease and transparency</h3>
            <p className="news-description">
              It's fast gaining in popularity as leisure time becomes increasingly precious and we value the experience of the journey.
            </p>
            <a href="#" className="news-read-more">
              Read More <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
