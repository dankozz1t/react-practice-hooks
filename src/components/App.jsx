// import { Tabs } from "./Tabs";
// import { data } from '../data/tabs';
import {Component} from "react";
import { ProductList } from "./ProductList";
import { fetchProducts, postProducts, deleteProducts } from "services/api-products";
import { Form } from "./Form";


export class App extends Component  {
  state = {
    products: [],
    isError: false,
  }
  async componentDidMount() {
    try {
      const result = await fetchProducts();
      // add filter for id 71 to fix bug with id duplication
      this.setState({products: result.filter(el => el.id !== '71')})
    } catch {
      this.setState({isError: true})
    }
  
  }
  handleSubmit =  async(newProduct)=> {
    const result = await postProducts(newProduct);
    console.log(result);
    this.setState(({products})=> ({products: [result, ...products]}))
  }
  
  handleDelete = async (e) => {
     const result = await deleteProducts(e.target.id);
    console.log(result);
    this.setState(({products})=> ({products:products.filter(el=> el.id !== result.id)  }))

  }
  
  render() {
    const { products, isError } = this.state;
    const { handleDelete, handleSubmit } = this;
    return (
      <div>
        <Form onSubmit={ handleSubmit} />
        {isError ? <p>Smth went wrong, try again, please</p> : <ProductList products={products} onDelete={handleDelete}/>}
        
      {/* <Tabs items={data} /> */}
    </div>
  );
  }
};
