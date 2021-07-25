/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Gap from '../../../src/components/atoms/gap';
import Spinner from '../../../src/components/atoms/spinner';
import AuthLayout from '../../../src/components/layouts/AuthLayout';
import { NavbarWriter } from '../../../src/components/moleculs';
import Link from 'next/link';

function index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [isFilled, setIsFilled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      window.localStorage.getItem('currentUser') === null ||
      window.localStorage.getItem('currentUser') === 'null'
    ) {
      router.push('/writer/auth/login');
    } else {
      setIsLoggedIn(true);
      setAuthor(window.localStorage.getItem('currentUser'));
    }
  }, [router]);

  const handleChangeCategory = (e) => {
    setCategory(e.target.innerHTML);
  };

  const handleChangeForm = (e) => {
    switch (e.target.id) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'body':
        setBody(e.target.value);
        break;
      case 'image':
        setImage(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (
      title.length <= 0 &&
      category.length <= 0 &&
      body.length <= 0 &&
      image.length <= 0
    ) {
      setIsFilled(false);
    }
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      title,
      category: category.toLowerCase(),
      body,
      image,
      author,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:4000/v1/blog/post', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.message === 'Create blog post success') {
          setIsSubmitted(true);
        }
      })
      .then((res) => {
        setTimeout(() => {
          setIsSuccess(true);
          setIsSubmitted(false);
          setTitle('');
          setBody('');
          setCategory('');
          setImage('');
          scrollTo(top);
        }, 1500);
      })
      .catch((error) => console.log('error', error));
  };

  if (isLoggedIn) {
    return (
      <AuthLayout title="Home">
        <NavbarWriter />
        <Gap height={80} />
        <div className="container mt-3 pb-5">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="row mb-4">
                  <div className="col-md">
                    <h3>Tambah Post Baru</h3>
                  </div>
                  <div className="col-md">
                    <Link href="home/my-posts">
                      <a className="btn btn-primary float-right">
                        Lihat Semua Postingan Saya
                      </a>
                    </Link>
                  </div>
                </div>
                {!isFilled ? (
                  <div className="alert alert-danger">
                    Semua kolom wajib diisi
                  </div>
                ) : (
                  ''
                )}
                {isSuccess ? (
                  <div className="alert alert-success">
                    Post berhasil dibuat
                  </div>
                ) : (
                  ''
                )}

                <div className="form-group">
                  <label htmlFor="judul">Judul</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="title"
                    value={title}
                    onChange={(e) => handleChangeForm(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Kategori</label> <br />
                  <input
                    placeholder={'Pilih kategori'}
                    className="form-control mb-3"
                    id="category"
                    disabled
                    value={category}
                  />
                  <small className="d-block mb-3">Pilih salah satu</small>
                  <button
                    className="btn btn-light mr-3 mb-3 border"
                    onClick={(e) => handleChangeCategory(e)}
                  >
                    Politics
                  </button>
                  <button
                    className="btn btn-light mr-3 mb-3 border"
                    onClick={(e) => handleChangeCategory(e)}
                  >
                    National
                  </button>
                  <button
                    className="btn btn-light mr-3 mb-3 border"
                    onClick={(e) => handleChangeCategory(e)}
                  >
                    International
                  </button>
                  <button
                    className="btn btn-light mr-3 mb-3 border"
                    onClick={(e) => handleChangeCategory(e)}
                  >
                    Sport
                  </button>
                  <button
                    className="btn btn-light mr-3 mb-3 border"
                    onClick={(e) => handleChangeCategory(e)}
                  >
                    Business
                  </button>
                </div>
                <div className="form-group">
                  <label htmlFor="gambar">Link Gambar</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="image"
                    placeholder="image"
                    value={image}
                    onChange={(e) => handleChangeForm(e)}
                  />
                  {image.length > 0 ? (
                    <div className="row">
                      <div className="col-sm-6">
                        <p>Preview</p>
                        <img
                          className="img-fluid"
                          src={image}
                          alt="image preview"
                        />
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="body">Body (Isi post)</label>
                  <textarea
                    className="form-control"
                    id="body"
                    rows={10}
                    onChange={(e) => handleChangeForm(e)}
                    value={body}
                  ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  {isSubmitted ? <Spinner /> : ''}Tambah
                </button>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    );
  } else {
    return <div className="container"></div>;
  }
}

export default index;
