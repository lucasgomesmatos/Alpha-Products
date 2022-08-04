import { NavLink } from 'react-router-dom';
import './style.sass';
export const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="logo">
          <NavLink to={'/'}>Alpha</NavLink>
        </h1>
        <ul className="menu">
          <li>
            <NavLink to={'/'}>Produtos</NavLink>
          </li>
          <li>
            <NavLink to={'/contato'}>Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
