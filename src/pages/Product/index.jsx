import { useEffect, useState } from 'react';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { useParams } from 'react-router-dom';
import './style.sass';

export const Product = () => {
  const [product, setProduct] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts(url) {
      try {
        setLoading(true);
        const json = await (await fetch(url)).json();
        setProduct(json);
      } catch (e) {
        setError(`Error ao carregar ${e}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (product === null) return null;
  return (
    <section className="container-product-item animaLeft">
      <Head
        title={`Produto - ${product.nome ?? product.nome}`}
        description="Página de Produtos"
      />
      <div className="products">
        <div className="prod">
          {product && (
            <section className="product-item">
              <div>
                <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
              </div>
              <div className="details">
                <h1>{product.nome}</h1>
                <h3 className="price">R$ {product.preco}</h3>
                <p className="description">{product.descricao}</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};
