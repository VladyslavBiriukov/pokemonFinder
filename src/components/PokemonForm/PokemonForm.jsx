// import { Component } from "react";
// import { toast } from "react-toastify";
// import { ImSearch } from "react-icons/im";
// import css from './PokemonForm.module.css';



// export default class PokemonForm extends Component {
//     state = {
//         pokemonName: '',
//     };

//     handleNameChange = (e) => {
//         this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();

//         if (this.state.pokemonName.trim() === '') {
//             toast.error('Input Name of Pokemon before submit.');
//             return;
//         }

//         this.props.onSubmit(this.state.pokemonName);
//         this.setState({ pokemonName: '' });
//     };

//     render() {
//         return (
//             <form className={css.form} onSubmit={this.handleSubmit}>
            
//                 <input
//                     className={css.form__field}
//                     type="text"
//                     name="pokemonName"
//                     value={this.state.pokemonName}
//                     onChange={this.handleNameChange}
//                     placeholder="Input Pokemon's Name"
//                 />

//                 <button
//                     className={css.form__button}
//                     type="submit">
//                     <ImSearch />
//                     Find
//                 </button>
//             </form>
//         );
//     };
// }

//------------------------------------HOOKS

import { useState } from "react";
import { toast } from "react-toastify";
import { ImSearch } from "react-icons/im";
import css from './PokemonForm.module.css';



export default function PokemonForm({onSubmit}) {
    const [pokemonName, setPokemonName] = useState('');

    const handleNameChange = (e) => {
        setPokemonName(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (pokemonName.trim() === '') {
            toast.error('Input Name of Pokemon before submit.');
            return;
        }

        onSubmit(pokemonName);
        setPokemonName('');
    };

        return (
            <form className={css.form} onSubmit={handleSubmit}>
            
                <input
                    className={css.form__field}
                    type="text"
                    name="pokemonName"
                    value={pokemonName}
                    onChange={handleNameChange}
                    placeholder="Input Pokemon's Name"
                />

                <button
                    className={css.form__button}
                    type="submit">
                    <ImSearch />
                    Find
                </button>
            </form>
        );
}