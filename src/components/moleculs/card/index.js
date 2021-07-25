/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Card = ({ title, slug, image, onClickDelete }) => {
  return (
    <div className="card w-100">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <Link href={`/writer/home/my-post/${slug}`}>
            <a className="btn btn-info mr-3">Detail</a>
          </Link>
          <a className="btn btn-danger" id={slug} onClick={onClickDelete}>
            Hapus
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
