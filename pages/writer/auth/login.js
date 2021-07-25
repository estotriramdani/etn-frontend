/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import AuthLayout from '../../../src/components/layouts/AuthLayout';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import Spinner from '../../../src/components/atoms/spinner';

export default function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const [isUsernameWrong, setisUsernameWrong] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
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
    }
  };

  const handleSubmit = () => {
    setIsClicked(true);
    const data = JSON.stringify({
      username,
      password,
    });

    const config = {
      method: 'post',
      url: 'https://etn-news-api.vercel.app/v1/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        if (response.data.message === 'Username tidak terdaftar') {
          setTimeout(() => {
            setIsLoginSuccess(false);
            setIsPasswordWrong(false);
            setisUsernameWrong(true);
          }, 1500);
        }
        if (response.data.message === 'Password salah') {
          setTimeout(() => {
            setIsLoginSuccess(false);
            setIsPasswordWrong(true);
            setisUsernameWrong(false);
          }, 1500);
        }
        if (response.data.message === 'Login sukses') {
          setTimeout(() => {
            setIsLoginSuccess(true);
            setIsPasswordWrong(false);
            setisUsernameWrong(false);
            window.localStorage.setItem('currentUser', username);
            setTimeout(() => {
              router.push('/writer/home');
            }, 1000);
          }, 1500);
        }
        console.log(response.data);
      })
      .then((res) => {
        setTimeout(() => {
          setIsClicked(false);
        }, 1500);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!isLoggedIn) {
    return (
      <AuthLayout title="Login">
        <div className="container mt-5 pt-3" style={{ position: 'relative' }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1 className="mb-4">Login Writer</h1>
              {isPasswordWrong ? (
                <div className="alert alert-danger">Password salah</div>
              ) : (
                ''
              )}
              {isUsernameWrong ? (
                <div className="alert alert-danger">
                  Username tidak terdaftar
                </div>
              ) : (
                ''
              )}
              {isLoginSuccess ? (
                <div className="alert alert-success">
                  <Spinner />
                  Login sukses. Mohon tunggu.
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
              <button
                type="submit"
                className="btn btn-primary d-block w-100"
                onClick={handleSubmit}
              >
                {isClicked ? <Spinner /> : ''} Login
              </button>
              <br />
              <Link href="/writer/auth/register">
                <a className="d-block">Belum punya akun? Daftar di sini</a>
              </Link>
              <Link href="/">
                <a className="d-block mt-3">Kembali ke Halaman Utama</a>
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
