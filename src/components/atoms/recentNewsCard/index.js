import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecentNewsCard = ({ title, image, category, slug }) => {
  return (
    <Link href={`/read/${category}/${slug}`} passHref>
      <a className="recent-news-card">
        <div className="img-thumb">
          <Image
            src={image}
            alt=""
            layout="responsive"
            height={70}
            width={70}
          />
        </div>
        <div className="card-news-title">
          <p className="title">{title}</p>
          <p className="category">
            In <span style={{ textTransform: 'capitalize' }}>{category}</span>
          </p>
        </div>
      </a>
    </Link>
  );
};

export default RecentNewsCard;
