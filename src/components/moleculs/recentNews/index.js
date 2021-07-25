import React, { useEffect, useState } from 'react';
import Gap from '../../atoms/gap';
import RecentNewsCard from '../../atoms/recentNewsCard';

const RecentNews = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getPosts = () => {
    fetch('http://localhost:4000/v1/blog/posts?perPage=3&currentPage=1')
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (posts.length <= 0) {
      getPosts();
    }
  }, [posts]);
  return (
    <div className="recent-news">
      <h2 className="heading-2">Recent News</h2>
      <Gap height={23} />
      <div className="recent-news-wrapper">
        {posts.map((post) => {
          return (
            <RecentNewsCard
              key={post.slug}
              image={post.image}
              title={post.title}
              category={post.category}
              slug={post.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentNews;
