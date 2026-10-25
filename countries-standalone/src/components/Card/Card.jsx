import { Link } from 'react-router-dom';
import style from './Card.module.css';
const populationFormat = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });
const Card = ({ID, name, flag_img, continent, population}) => {
  const value = Number(population);
  const populationText = population !== null && population !== undefined && population !== '' && Number.isFinite(value) ? populationFormat.format(value) : 'Not available';
  return (
    <article className={style.card}>
      <div className={style.heading}>
        <div className={style.flagFrame}><img className={style.flag} src={flag_img} alt={`Flag of ${name}`} loading="lazy" /></div>
        <h3 className={style.title}>{name}</h3>
      </div>
      <dl className={style.facts}>
        <div className={style.fact}><dt>Continent</dt><dd>{continent}</dd></div>
        <div className={style.fact}><dt>Population</dt><dd>{populationText}</dd></div>
      </dl>
      <Link to={`/Detail/${ID}`} className={style.details} aria-label={`View details of ${name}`}>
        Details <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
};
export default Card;
