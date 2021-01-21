import React, {useState} from "react";

function Filter(props) {
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(name === ''){
            alert('Obrigatório informar um valor para fazer a busca');
            return;
        }
        props.filterData(name);
        setName('');
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="search-input" className="label__lg">
                    Looking for something more... specific?
            </label>
            </h2>
            <input
                type="text"
                id="search-input"
                className="input input__lg"
                name="text"
                autoComplete="on"
                value = {name}
                onChange = {handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Search
          </button>
        </form>
    )
}

export default Filter;