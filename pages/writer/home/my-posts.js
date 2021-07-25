/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Gap from '../../../src/components/atoms/gap';
import Spinner from '../../../src/components/atoms/spinner';
import AuthLayout from '../../../src/components/layouts/AuthLayout';
import { Card, NavbarWriter } from '../../../src/components/moleculs';

function MyPost() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (
      window.localStorage.getItem('currentUser') === null ||
      window.localStorage.getItem('currentUser') === 'null'
    ) {
      router.push('/writer/auth/login');
    } else {
      setIsLoggedIn(true);
      setAuthor(window.localStorage.getItem('currentUser'));

      const getMyPosts = () => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };
        fetch(
          `http://localhost:4000/v1/blog/post/mine/${window.localStorage.getItem(
            'currentUser'
          )}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => setMyPosts(result.data))
          .catch((error) => console.log('error', error));
      };
      if (isLoading) {
        getMyPosts();
      }
      return () => {
        setIsLoading(false);
      };
    }
  }, [router, author, isLoading]);

  const handleDelete = (e) => {
    let confirmDelete = confirm('Yakin hapus?');
    if (confirmDelete) {
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
      };

      fetch(`http://localhost:4000/v1/blog/post/${e.target.id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          alert('Post berhasil dihapus!');
          setIsLoading(true);
        })
        .catch((error) => console.log('error', error));
    }
  };

  if (isLoggedIn) {
    return (
      <AuthLayout title="My Posts">
        <NavbarWriter />
        <Gap height={100} />
        <div className="container-fluid">
          <div className="row">
            {isLoading ? (
              <div className="col-md-12 text-center">
                <Spinner />
              </div>
            ) : (
              ''
            )}
            {myPosts.map((post) => {
              return (
                <div className="col-md-4 mb-3" key={post.slug}>
                  <Card
                    title={post.title}
                    image={post.image}
                    slug={post.slug}
                    onClickDelete={(e) => handleDelete(e)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </AuthLayout>
    );
  } else {
    return <div></div>;
  }
}

export default MyPost;
