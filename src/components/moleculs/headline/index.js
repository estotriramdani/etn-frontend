import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMGPlaceholder, IMGPolitics } from '../../../assets';
import Gap from '../../atoms/gap';

const Headline = () => {
  return (
    <div className="headline">
      <div className="headline-image">
        <Image
          src="https://placeimg.com/1000/1000/people"
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
            <p className="headline-news-category">Politics</p>
            <Gap height={10} />
            <p className="headline-news-title">
              Obama loom over the democratic
            </p>
          </div>
          <button>
            <i className="bi bi-bookmark"></i>
          </button>
        </div>
        <Gap height={15} />
        <p className="headline-news-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis, nisi nec vestibulum semper, felis augue molestie dui,
          imperdiet faucibus velit ipsum nec massa. Quisque malesuada nisl nec
          nibh gravida, nec consequat eros viverra. Aliquam odio nulla,
          facilisis vehicula pretium id, gravida non felis. Phasellus tincidunt
          id ligula id semper. Etiam condimentum lacus et turpis viverra
          sollicitudin. Vestibulum aliquam ex at erat sagittis sollicitu...{' '}
          <br />
        </p>
        <Link href="/read/politics/helo">
          <a className="read-more">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default Headline;
