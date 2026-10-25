import { NavLink } from 'react-router-dom';
import style from './navBar.module.css';
const NavBar = () => (
  <nav className={style.navContainer} aria-label="Main navigation">
    {[['/home', 'Home'], ['/form', 'Activities']].map(([path, label]) => (
      <NavLink key={path} to={path} className={style.navLink} activeClassName={style.active}>
        <span className={style.edge} aria-hidden="true" />
        <span className={style.edge} aria-hidden="true" />
        <span className={style.edge} aria-hidden="true" />
        <span className={style.edge} aria-hidden="true" />
        {label}
      </NavLink>
    ))}
  </nav>
);
export default NavBar;
