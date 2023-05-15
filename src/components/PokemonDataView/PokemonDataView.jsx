import css from './PokemonDataView.module.css'

export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
    return (
        <div className={css.pokemonInfo}>
            <img
                src={sprites.other['official-artwork'].front_default}
                alt={name}
                width="300"
            />
            <h2>{name}</h2>
            <ul>
                {stats.map(entry => (
                    <li key={entry.stat.name}>
                        {entry.stat.name}: {entry.base_stat}
                    </li>
                ))}
            </ul>
        </div>
    );
}

