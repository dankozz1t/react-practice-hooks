import { Component } from 'react';



export class Form extends Component { 

    state = {
        name: '',
        price: '',
        description:'',
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]:value,
        })
    }
    handleSubmit = (e) => { 
        
        e.preventDefault();
        this.props.onSubmit(this.state)
    }



    render() {
        const { name, price, description } = this.state;
        const{ handleInputChange, handleSubmit } = this;

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    <input placeholder='Name' type="text" name="name" value={name} onChange={ handleInputChange} />
                </label>
            <label> 
                    <input placeholder='price' type="text" name="price" value={price} onChange={ handleInputChange}  />
                </label>
                <label> 
                    <input placeholder='Description' type="text" name="description" value={description} onChange={ handleInputChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}