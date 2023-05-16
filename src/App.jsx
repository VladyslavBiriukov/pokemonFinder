// import { Component } from "react";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css'
// import PokemonForm from "components/PokemonForm";
// import PokemonInfo from "./components/PokemonInfo";

// export default class App extends Component {
//     state = {
//         pokemonName: '',
//     };

//     handleFormSubmit = (pokemonName) => {
//         this.setState({ pokemonName });
//     };

//     render() {
//         return (
//             <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//                 <PokemonForm onSubmit={this.handleFormSubmit} />
//                 <PokemonInfo pokemonName={this.state.pokemonName} />
//                 <ToastContainer autoClose={2000} />
                
//             </div>
//         )
//     }
// };
// ------------------- HOOKS
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import PokemonForm from "components/PokemonForm";
import PokemonInfo from "./components/PokemonInfo";

export default function App() {
const [pokemonName, setPokemonName] = useState('');
    // const handleFormSubmit = (pokemonName) => {
    //     setPokemonName(pokemonName);
    // };

        return (
            <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
                <PokemonForm onSubmit={setPokemonName} />
                <PokemonInfo pokemonName={pokemonName} />
                <ToastContainer autoClose={2000} />
                
            </div>
        )
};