import { Head } from '../../components/Head';
import './style.sass';

export const Contact = () => {
  return (
    <section className="container animaLeft">
      <Head title="Contato" description="Página de Contato" />
      <h1>Contato</h1>
      <div className="contato">
        <div>
          <h3>Lucas Gomes Matos</h3>
          <ul>
            <li>
              <a
                href="mailto:lucasgomesmatosdev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">E-mail </span>-
                lucasgomesmatosdev@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lucasgomesmatos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">Github</span> -
                github.com/lucasgomesmatos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
