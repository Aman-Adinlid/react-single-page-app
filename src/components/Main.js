import React, { Component } from 'react';
import Table from "./Table";


class Main extends Component {
    state = {
        tables: [
            { category: "Sporting Goods", price: "$49.99", name: "Football" },
            { category: "Game", price: "$9.99", name: "Baseball" },
            { category: "Electronics", price: "$99.99", name: "iPod Touch" },
        ]
    };


    render() {
        const { tables } = this.state;
        return (
            <div>
                <br />
                <div>
                    <h1>React single page app</h1>
                    <br />
                    <Table tables={tables}
                    />
                </div>
                <br />
            </div>
        );
    }
}

export default Main;