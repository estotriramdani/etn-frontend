import React from 'react';
import Gap from '../../src/components/atoms/gap';
import HomeLayout from '../../src/components/layouts/HomeLayout';

export default function CategoryName() {
  return (
    <div>
      <HomeLayout>
        <h2 className="heading-2">Saved Article(s)</h2>
        <Gap height={23} />
      </HomeLayout>
    </div>
  );
}
