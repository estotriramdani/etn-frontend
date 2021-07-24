/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import AuthLayout from '../../../src/components/layouts/AuthLayout';
import { NavbarWriter } from '../../../src/components/moleculs';

function index() {
  const router = useRouter();
  useEffect(() => {
    if (
      window.localStorage.getItem('currentUser') === null ||
      window.localStorage.getItem('currentUser') === 'null'
    ) {
      router.push('/writer/auth/login');
    }
  }, []);
  return (
    <AuthLayout title="Home">
      <NavbarWriter />
      <div className="container">
        <p>Hah</p>
      </div>
    </AuthLayout>
  );
}

export default index;
