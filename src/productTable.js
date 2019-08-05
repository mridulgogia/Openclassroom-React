import React, {Component} from 'react';
import TableHeader from './tableHeader.js';
import TableRow from './tableRow';

class ProductTable extends Component{
    render(){
        let productsAsArray = Object.keys(this.props.products).map( (pid) =>  this.props.products[pid]);
        let rows = [];
        productsAsArray.forEach( product => {
            rows.push(
                <TableRow product ={product} key={product.id} />
            )
        })

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                       <td>   <TableHeader column="Name" /> </td>
                          <td><TableHeader column="Price" /></td>
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