import React from 'react';
import Image from 'next/image';
import { IMGPlaceholder } from '../../../assets';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
const RelatedNewsCard = ({ image, slug, body, title, category }) => {
  return (
    <div className="related-news-card">
      <div>
        <div className="related-thumb">
          <Image
            src={image}
            alt=""
            layout="responsive"
            placeholder="blur"
            width={`100%`}
            height={`100%`}
            blurDataURL={IMGPlaceholder}
            objectFit="cover"
          />
        </div>
        <div className="related-detail">
          <div className="related-title">{title}</div>
          <div className="related-desc">{body.substr(0, 120)}...</div>
          <Link href={`/read/${category}/${slug}`}>
            <a className="read-more">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedNewsCard;
