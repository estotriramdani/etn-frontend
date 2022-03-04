import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Gap from '../../atoms/gap';
import { IMGPlaceholder } from '../../../assets';

const DetailNews = ({
  title,
  slug,
  image,
  body,
  category,
  created_at,
  author,
  savePost,
}) => {
  return (
    <div>
      <div className="detail">
        <div className="detail-image">
          <Image
            src={image}
            alt=""
            objectFit="cover"
            layout="responsive"
            placeholder="blur"
            width={`100%`}
            height={`100%`}
            blurDataURL={IMGPlaceholder}
            style={{ zIndex: '0' }}
          />
        </div>
        <div className="detail-detail">
          <div className="detail-news-header">
            <div className="detail-news-title-wrapper">
              <p
                className="detail-news-category"
                style={{ textTransform: 'capitalize' }}
              >
                {category}
              </p>
              <Gap height={10} />
              <p className="detail-news-title">{title}</p>
            </div>
            <button onClick={savePost}>
              <i className="bi bi-bookmark"></i>
            </button>
          </div>
          <Gap height={10} />
          <p>
            Author:{' '}
            <span style={{ textTransform: 'capitalize' }}>{author}</span> -
            Posted at {created_at}
          </p>
        </div>
      </div>
      <Gap height={15} />
      <p className="detail-news-description">{body}</p>
    </div>
  );
};

export default DetailNews;
