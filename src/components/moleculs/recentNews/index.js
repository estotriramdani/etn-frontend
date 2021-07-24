import React from 'react';
import Gap from '../../atoms/gap';
import RecentNewsCard from '../../atoms/recentNewsCard';
import RelatedNewsCard from '../relatedNewsCard';

const RecentNews = () => {
  return (
    <div className="recent-news">
      <h2 className="heading-2">Recent News</h2>
      <Gap height={23} />
      <div className="recent-news-wrapper">
        <RecentNewsCard />
        <RecentNewsCard />
        <RecentNewsCard />
      </div>
    </div>
  );
};

export default RecentNews;
