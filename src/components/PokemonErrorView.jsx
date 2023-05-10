import errorImage from 'error.png';

export default function PokemonErrorView({ message }) {
    return (
        <div role="alert">
            <img src={errorImage} width="240" alt="sadPikachu" />
            <p>{message}</p>
        </div>
    );
}
