import React from 'react';

export default class Filters extends React.Component{
    render(){
        return (
            <div>
                <form>
                    <input type="text" placeholder="Search...." 
                    value={this.props.filterText} />
                    <p>
                        <input type="checkbox" checked={this.props.inStockOnly} /> 
                        Show only in stock
                    </p>
                </form>
            </div>
        )
    }
}

