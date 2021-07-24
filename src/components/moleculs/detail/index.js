import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Gap from '../../atoms/gap';
import { IMGPlaceholder } from '../../../assets';

const DetailNews = () => {
  return (
    <div>
      <div className="detail">
        <div className="detail-image">
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
        <div className="detail-detail">
          <div className="detail-news-header">
            <div className="detail-news-title-wrapper">
              <p className="detail-news-category">Politics</p>
              <Gap height={10} />
              <p className="detail-news-title">
                Obama loom over the democratic
              </p>
            </div>
            <button>
              <i className="bi bi-bookmark"></i>
            </button>
          </div>
          <Gap height={10} />
          <p>Esto Triramdani N - Posted at 20201/05/06</p>
        </div>
      </div>
      <Gap height={15} />
      <p className="detail-news-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis,
        nisi nec vestibulum semper, felis augue molestie dui, imperdiet faucibus
        velit ipsum nec massa. Quisque malesuada nisl nec nibh gravida, nec
        consequat eros viverra. Aliquam odio nulla, facilisis vehicula pretium
        id, gravida non felis. Phasellus tincidunt id ligula id semper. Etiam
        condimentum lacus et turpis viverra sollicitudin. Vestibulum aliquam ex
        at erat sagittis sollicitu. <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis,
        nisi nec vestibulum semper, felis augue molestie dui, imperdiet faucibus
        velit ipsum nec massa. Quisque malesuada nisl nec nibh gravida, nec
        consequat eros viverra. Aliquam odio nulla, facilisis vehicula pretium
        id, gravida non felis. Phasellus tincidunt id ligula id semper. Etiam
        condimentum lacus et turpis viverra sollicitudin. Vestibulum aliquam ex
        at erat sagittis sollicitu.
      </p>
    </div>
  );
};

export default DetailNews;
