import React, {Component} from 'react';
import Filters from './filters'
import ProductTable from './productTable'
import ProductForm from './productForm'

var PRODUCTS = {
    '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
    '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Cello'},
    '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
    '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
    '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
    '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
};
  
 class Products extends Component{
     constructor(props){
         super(props);
         this.state= {
            filterText: '',
            inStockOnly: false,
            products: PRODUCTS
        }
        this.changeEvent = this.changeEvent.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
        this.saveProducts = this.saveProducts.bind(this);
    }

    changeEvent(filterInput){
        this.setState(filterInput)
    }

    saveProducts(product) {
        product.id = new Date().getTime();
        this.setState( (prevState) => {
            let products = prevState.products;
            products[product.id] = product;
            return {products};
        });
    }
    handleDestroy(productId) {
        this.setState( (prevState) => {
            let products = prevState.products;
            delete products[productId];
            return {products};
        }) 
    }
     
    render(){
        return (
            <div>
                <Filters 
                filterText={this.state.filterText} 
                inStockOnly= {this.state.inStockOnly}
                onFilter= {this.changeEvent}
                />
                <ProductTable 
                products= {this.state.products}
                filterText={this.state.filterText} 
                inStockOnly= {this.state.inStockOnly}
                onDestroy = {this.handleDestroy}
                 />
                <ProductForm onSave={this.saveProducts} />
            </div>
        );
    }
}

export default Products