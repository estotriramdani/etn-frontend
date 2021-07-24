import React from 'react';
import Image from 'next/image';
import { IMGPlaceholder } from '../../../assets';
import Link from 'next/link';
const RelatedNewsCard = () => {
  return (
    <div className="related-news-card">
      <div>
        <div className="related-thumb">
          <Image
            src="https://placeimg.com/1000/1000/tech"
            alt=""
            layout="responsive"
            placeholder="blur"
            width={`100%`}
            height={`100%`}
            blurDataURL={IMGPlaceholder}
            objectFit="contain"
          />
        </div>
        <div className="related-detail">
          <div className="related-title">Related Title</div>
          <div className="related-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type spe...
          </div>
          <Link href="#">
            <a className="read-more">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedNewsCard;
