import { ImSpinner } from "react-icons/im";
import pendingImage from "../images/pending.png";
import PokemonDataView from "../PokemonDataView";
import css from './PokemonPendingView.module.css'

export default function PokemonPendingView({ pokemonName }) {
    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: pendingImage,
                },
            },
        },
        stats: [],
    };

    return (
        <div
            className={css.pending}
            role="alert">
            <div>
                <ImSpinner size="32" className="iconSpinner" />
                Loading..
            </div>
            <PokemonDataView pokemon={pokemon}/>
        </div>
    )
}