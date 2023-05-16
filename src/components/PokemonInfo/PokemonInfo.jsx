// import { Component } from "react";

// export default class PokemonInfo extends Component {

//     state = {
//         pokemon: null,
//         loading: false,
//         error: null,
//     }

//     componentDidUpdate(prevProps, prevState) {

//         const prevName = prevProps.pokemonName;
//         const nextName = this.props.pokemonName;

//         if (prevName !== nextName) {
//             console.log('changed name of pokemon');

//             this.setState({ loading: true, pokemon: null });
//             setTimeout(() => {
//                 fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
//                     .then(response => {
//                         if (response.ok) {
//                             return response.json();
//                         }
                        
//                         return Promise.reject(new Error(`Not Found pokemon "${nextName}" `));
//                     })
//                     .then(pokemon => this.setState({ pokemon }))
//                     .catch(error => this.setState({ error }))
//                     .finally(() => this.setState({ loading: false }));
//             }, 500);
//         };

//     };

//     render() {
//         const { loading, pokemon , error} = this.state;
//         const { pokemonName } = this.props
//         return (
//             <div>
//                 {error && <h1>{error.message}</h1>}
//                 {loading && <p>Loadind</p>}
//                 {!pokemonName && <p>Input pokemon's name</p>}
//                 {pokemon && (
//                     <div>
//                         <p>{pokemon.name}</p>
//                         <img  src={pokemon.sprites.other['official-artwork'].front_default} alt="" width="300" />
//                     </div>
//                 )}
//             </div>
//         )
//     }
// }

//---------------------------------STATE MACHINE

// import { Component } from "react";
// import PokemonErrorView from "../PokemonErrorView";
// import PokemonDataView from "../PokemonDataView";
// import PokemonPendingView from "../PokemonPendingView";

// const Status = {
//     IDLE: 'idle',
//     PENDING: 'pending',
//     RESOLVED: 'resolved',
//     REJECTED: 'rejected',
// };

// export default class PokemonInfo extends Component {

//     state = {
//         pokemon: null,
//         error: null,
//         status: Status.IDLE,
//     }

//     componentDidUpdate(prevProps, prevState) {

//         const prevName = prevProps.pokemonName;
//         const nextName = this.props.pokemonName;

//         if (prevName !== nextName) {
//             console.log('changed name of pokemon');

//            this.setState({ status: Status.PENDING });

//             setTimeout(() => {
//                 fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
//                     .then(response => {
//                         if (response.ok) {
//                             return response.json();
//                         }
                        
//                         return Promise.reject(new Error(`Not Found pokemon "${nextName}" `));
//                     })
//                     .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
//                     .catch(error => this.setState({ error, status: Status.REJECTED }))
//             }, 500);
//         };

//     };

//     render() {
//         const { pokemon, error, status } = this.state;
//         const { pokemonName } = this.props;

//         // if (status === 'idle') {
//         //     return <p>Input pokemon's name</p>
//         // }

//         if (status === 'pending') {
//            return <PokemonPendingView pokemonName={pokemonName}/>
//         }

//         if (status === 'rejected') {
//             return <PokemonErrorView message={error.message} />
//         }

//         if (status === 'resolved') {
//             return (
//                 <PokemonDataView pokemon={pokemon}/>

//             );
//         }
//     };
// };

//-----------------------HOOKS


import { useEffect, useState } from "react";
import PokemonErrorView from "../PokemonErrorView";
import PokemonDataView from "../PokemonDataView";
import PokemonPendingView from "../PokemonPendingView";
import pokemonApi from "../../Services/pokemon-api";

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {

    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {
        if (!pokemonName) {
            return;
        }
    setStatus(Status.PENDING);
    
        pokemonApi
            .fetchPokemon(pokemonName)
            .then(pokemon => {
            setPokemon(pokemon);
            setStatus(Status.RESOLVED);
        })
        .catch(error => {
            setError(error);
            setStatus(Status.REJECTED);
        });
}, [pokemonName]);


        if (status === Status.PENDING) {
           return <PokemonPendingView pokemonName={pokemonName}/>
        }

        if (status ===  Status.REJECTED) {
            return <PokemonErrorView message={error.message} />
        }

        if (status ===  Status.RESOLVED) {
            return (
                <PokemonDataView pokemon={pokemon}/>

            );
        }
};