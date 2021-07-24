/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import AuthLayout from '../../../src/components/layouts/AuthLayout';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';

export default function register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isUsernameExist, setIsUsernameExist] = useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAllFilled, setIsAllFilled] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (
      window.localStorage.getItem('currentUser') !== null &&
      window.localStorage.getItem('currentUser') !== 'null'
    ) {
      router.push('/writer/home');
    } else {
      setIsLoggedIn(false);
    }
  }, [router, setIsLoggedIn]);

  const handleChangeForm = (e) => {
    switch (e.target.id) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'password-confirm':
        setPasswordConfirm(e.target.value);
        break;
    }
  };
  const handleSubmit = () => {
    if (password.length <= 0 && username.length <= 0) {
      setIsAllFilled(false);
    }
    if (password !== passwordConfirm) {
      setIsPasswordMatch(false);
      setIsLoading(false);
    } else {
      const data = JSON.stringify({
        username,
        password,
      });

      const config = {
        method: 'post',
        url: 'http://localhost:4000/v1/auth/register',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then((res) => {
          if (res) {
            setIsRegisterSuccess(true);
            setIsPasswordMatch(true);
            setIsUsernameExist(false);
            setIsAllFilled(true);
            setIsLoading(true);
          }
        })
        .then((res) => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsUsernameExist(true);
        });
    }
  };

  if (!isLoggedIn) {
    return (
      <AuthLayout title="Register">
        <div className="container mt-5 pt-3" style={{ position: 'relative' }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1 className="mb-4">Register Writer</h1>
              {!isAllFilled ? (
                <div className="alert alert-danger">Isi semua kolom!</div>
              ) : (
                ''
              )}
              {!isPasswordMatch ? (
                <div className="alert alert-danger">Password tidak sesuai</div>
              ) : (
                ''
              )}
              {isUsernameExist ? (
                <div className="alert alert-danger">
                  Username sudah digunakan
                </div>
              ) : (
                ''
              )}
              {isRegisterSuccess ? (
                <div className="alert alert-success">
                  Pendaftaran Berhasil &nbsp;
                  <Link href="/writer/auth/login">
                    <a>
                      <u>Login di sini</u>
                    </a>
                  </Link>
                </div>
              ) : (
                ''
              )}

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="username"
                  onChange={(e) => handleChangeForm(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => handleChangeForm(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password-confirm"
                  placeholder="Repeat Password"
                  onChange={(e) => handleChangeForm(e)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary d-block w-100"
                onClick={handleSubmit}
              >
                {isLoading ? (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  'Daftar'
                )}
              </button>
              <br />
              <Link href="/writer/auth/login">
                <a className="d-block">Sudah punya akun? Login di sini</a>
              </Link>
              <Link href="/">
                <a className="d-block mt-3">Kembali ke beranda</a>
              </Link>
            </div>
          </div>
        </div>
      </AuthLayout>
    );
  } else {
    return <div></div>;
  }
}
