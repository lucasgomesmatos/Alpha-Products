import { useEffect, useState } from 'react';
import { Head } from '../../components/Head';
import { NavLink } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import './style.sass';

export const Products = () => {
  const [products, setProducts] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts(url) {
      try {
        setLoading(true);
        const json = await (await fetch(url)).json();
        setProducts(json);
      } catch (e) {
        setError(`Error ao carregar ${e}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts('https://ranekapi.origamid.dev/json/api/produto');
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (products === null) return null;
  return (
    <section className="container animaLeft">
      <Head title="Produtos" description="Página de Produtos" />
      <h1>Produtos</h1>
      <div className="products">
        {products &&
          products.map((product) => (
            <NavLink
              to={`/produto/${product.id}`}
              className="product"
              key={product.id}
            >
              <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
              <p>{product.nome}</p>
            </NavLink>
          ))}
      </div>
    </section>
  );
};
