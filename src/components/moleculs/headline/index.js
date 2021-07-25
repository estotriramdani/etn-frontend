import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMGPlaceholder, IMGPolitics } from '../../../assets';
import Gap from '../../atoms/gap';

const Headline = ({ title, slug, category, body, image, handleSavedPost }) => {
  return (
    <div className="headline">
      <div className="headline-image">
        <Image
          src={image}
          alt=""
          layout="responsive"
          placeholder="blur"
          width={`100%`}
          height={`100%`}
          blurDataURL={IMGPlaceholder}
          style={{ zIndex: '0' }}
        />
      </div>
      <div className="detail-headline">
        <div className="headline-news-header">
          <div className="headline-news-title-wrapper">
            <p
              className="headline-news-category"
              style={{ textTransform: 'capitalize' }}
            >
              {category}
            </p>
            <Gap height={10} />
            <p className="headline-news-title">{title}</p>
          </div>
          <button onClick={handleSavedPost}>
            <i className="bi bi-bookmark"></i>
          </button>
        </div>
        <Gap height={15} />
        <p className="headline-news-description">
          {body}
          <br />
        </p>
        <Link href={`/read/${category}/${slug}`}>
          <a className="read-more">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default Headline;
