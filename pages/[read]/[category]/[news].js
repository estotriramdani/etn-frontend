import React from 'react';
import Gap from '../../../src/components/atoms/gap';
import HomeLayout from '../../../src/components/layouts/HomeLayout';
import { DetailNews } from '../../../src/components/moleculs';

export default function News() {
  return (
    <>
      <HomeLayout title="Detail News">
        <h2 className="heading-2">Politics</h2>
        <Gap height={23} />
        <DetailNews />
      </HomeLayout>
    </>
  );
}
