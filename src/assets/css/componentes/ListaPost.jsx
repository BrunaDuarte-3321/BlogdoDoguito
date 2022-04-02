import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../../../api/api';

const ListaPost = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    busca(url, setPosts);
  }, [url]);

  return (
    <section className="posts container">
      {posts.map((item) => (
        <Link
          className={`cartao-post cartao-post--${item.categoria}  `}
          to={`/posts/${item.id}`}
        >
          <article key={item.id}>
            <h3 className="cartao-post__titulo">{item.title}</h3>
            <p className="cartao-post__meta">{item.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default ListaPost;
