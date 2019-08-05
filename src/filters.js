import React from 'react';

export default class Filters extends React.Component{
    render(){
        return (
            <div>
                <form>
                    <input type="text" placeholder="Search...." />
                    <p>
                        <input type="checkbox" /> Show only in stock
                    </p>
                </form>
            </div>
        )
    }
}

