import React, {Component} from 'react';
import TableHeader from './tableHeader.js';
import TableRow from './tableRow';

class ProductTable extends Component{
    constructor(props){
        super(props);
        this.state={
            sort:{
                column: "price",
                direction:"desc"
            }
        };
        this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
    }

    sortByKeyAndOrder(objectA, objectB){
        let isDesc = this.state.sort.direction === 'desc' ? -1 : 1 ;
        let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
        if (this.state.sort.column === 'price'){
            [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d.]/g, ''), 10));
        }
        if(a>b){
            return 1* isDesc;
        }
        if(a<b){
            return -1* isDesc;
        }
        return 0;
    }

    sortProducts(){
        let productsAsArray = Object.keys(this.props.products).map( (pid) =>  this.props.products[pid]);
        return productsAsArray.sort(this.sortByKeyAndOrder);
    }
    render(){
        let rows = [] ;
        this.sortProducts().forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)){
                return;
            }
            rows.push(
                <TableRow product ={product} key={product.id} />
            )
        });

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                         <TableHeader 
                       currentSort = {this.state.sort}
                       column="Name" />
                         <TableHeader
                          currentSort = {this.state.sort} 
                          column="Price" />
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable