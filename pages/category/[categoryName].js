import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Gap from '../../src/components/atoms/gap';
import HomeLayout from '../../src/components/layouts/HomeLayout';
import { RelatedNewsCard } from '../../src/components/moleculs';

export default function CategoryName({ postsFromApi }) {
  const router = useRouter();
  const { categoryName } = router.query;
  return (
    <div>
      <HomeLayout>
        <h2 className="heading-2">
          Category:{' '}
          <span style={{ textTransform: 'capitalize' }}>{categoryName}</span>
        </h2>
        <Gap height={23} />
        <div className="news-item-wrapper">
          {postsFromApi.data.length <= 0 ? 'No data' : ''}
          {postsFromApi.data.map((post) => {
            return (
              <RelatedNewsCard
                key={post.slug}
                title={post.title}
                image={post.image}
                body={post.body}
                category={post.category}
                slug={post.slug}
              />
            );
          })}
        </div>
      </HomeLayout>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { categoryName: 'politics' } },
      { params: { categoryName: 'national' } },
      { params: { categoryName: 'international' } },
      { params: { categoryName: 'sport' } },
      { params: { categoryName: 'business' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const categoryName = context.params.categoryName;
  const res = await fetch(
    `http://localhost:4000/v1/blog/category/${categoryName}`
  );
  const postsFromApi = await res.json();

  // Pass post data to the page via props
  return { props: { postsFromApi } };
}
