import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Gap from '../../src/components/atoms/gap';
import HomeLayout from '../../src/components/layouts/HomeLayout';
import { RelatedNewsCard } from '../../src/components/moleculs';

export default function CategoryName() {
  return (
    <div>
      <HomeLayout>
        <h2 className="heading-2">Category: Politics</h2>
        <Gap height={23} />
        <div className="news-item-wrapper">
          <RelatedNewsCard />
          <RelatedNewsCard />
          <RelatedNewsCard />
          <RelatedNewsCard />
          <RelatedNewsCard />
        </div>
      </HomeLayout>
    </div>
  );
}
