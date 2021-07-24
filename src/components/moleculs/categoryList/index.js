import Link from 'next/link';
import React from 'react';
import Gap from '../../atoms/gap';

const CategoryList = () => {
  return (
    <aside className="category-list">
      <h2 className="heading-2">Category</h2>
      <Gap height={23} />
      <div className="category-item-wrapper">
        <Link href="/category/politics">
          <a className="category-item">politics</a>
        </Link>
        <Link href="/category/national">
          <a className="category-item">national</a>
        </Link>
        <Link href="/category/international">
          <a className="category-item">international</a>
        </Link>
        <Link href="/category/sport">
          <a className="category-item">sport</a>
        </Link>
        <Link href="/category/business">
          <a className="category-item">business</a>
        </Link>
      </div>
    </aside>
  );
};

export default CategoryList;
