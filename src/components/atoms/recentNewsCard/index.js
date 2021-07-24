import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMGPolitics } from '../../../assets';
const RecentNewsCard = () => {
  return (
    <Link href="/news" passHref>
      <a className="recent-news-card">
        <div className="img-thumb">
          <Image src={IMGPolitics} alt="" />
        </div>
        <div className="card-news-title">
          <p className="title">
            Obama looms over divied by the democratic primary
          </p>
          <p className="category">In Politics</p>
        </div>
      </a>
    </Link>
  );
};

export default RecentNewsCard;
