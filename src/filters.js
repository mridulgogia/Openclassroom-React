import React from 'react';

export default class Filters extends React.Component{
    constructor(props){
        super(props);
        this.handleChanges = this.handleChanges.bind(this);
    }

    handleChanges(event){
        const name = event.target.name;
        const value = event.target[event.target.type === 'checkbox' ? "checked" : "value"];
        this.props.onFilter({[name]: value});
    }
    render(){
        return (  
            <form>
                <input type="text" placeholder="Search...." 
                value={this.props.filterText}
                 name="filterText"
                onChange = {this.handleChanges} />
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly}
                    name= "inStockOnly"
                    onChange = {this.handleChanges} /> 
                    Show only in stock
                </p>
            </form>
        );
    }
}

