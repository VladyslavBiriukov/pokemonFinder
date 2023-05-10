import { Component } from "react";
import { toast } from "react-toastify";
import { ImSearch } from "react-icons/im";



export default class PokemonForm extends Component {
    state = {
        pokemonName: '',
    };

    handleNameChange = (e) => {
        this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
    };

    handleSumbit = (e) => {
        e.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            toast.error('Input Name of Pokemon before submit.');
            return;
        }

        this.props.onSumbit(this.state.pokemonName);
        this.setState({ pokemonName: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <input
                    type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.handleNameChange}
                />
                <button type="submit">
                    <ImSearch/>
                    Find
                </button>   
            </form>
        );
    };
}