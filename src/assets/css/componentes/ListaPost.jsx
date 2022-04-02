import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../../../api/api';

const ListaPost = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    busca(url, setPosts);
  }, []);

  return (
    <section className="posts container">
      {posts.map((item) => (
        <a className={`cartao-post cartao-post--${item.categoria}`}>
          <article key={item.id}>
            <h3 className="cartao-post__titulo">{item.title}</h3>
            <p className="cartao-post__meta">{item.metadescription}</p>
          </article>
        </a>
      ))}
    </section>
  );
};

export default ListaPost;
