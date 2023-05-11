import errorImage from '../images/error.png';
import css from './PokemonErrorView.module.css'

export default function PokemonErrorView({ message }) {
    return (
        <div
            className={css.errorWrapper}
            role="alert">
            <img src={errorImage} width="240" alt="sadPikachu" />
            <p className={css.error__text}>{message}</p>
        </div>
    );
}
