import React, { Component } from 'react';
import Table from "./Table";
import axios from "axios";
import Details from './Details';


class Main extends Component {
    state = {
        tables: [
            { id: 1, category: "Sporting Goods", price: "$49.99", name: "Football", details: " sporting goods, are the tools, materials, apparel, and gear used to compete in a sport and varies depending on the sport." },
            { id: 2, category: "Game", price: "$9.99", name: "Basketball", details: "Basketball is a team sport in which two teams, most commonly of five players each." },
            { id: 3, category: "Electronics", price: "$99.99", name: "iPod Touch", details: "The iPod is a portable music player developed by Apple Computer." }
        ],
        showDetails: false,
    };


    async componentDidMount() {
        await axios.get('https://mj-tg-productmanagement.herokuapp.com/api/category/')
            .then(response => {
                this.setState({ showDetails: response.data });
            });
    }
    openDetails = (id) => {

    }
    openCreate = () => {

    }

    render() {
        const { tables } = this.state;
        const { showDetails } = this.state;
        return (
            <div>
                <br />
                <div>
                    <h1>React single page app</h1>
                    <br />
                    <Table tables={tables}
                    />
                    <Details showDetails={showDetails} />
                    <div>
                    </div>

                </div>
                <br />
            </div>
        );
    }
}

export default Main;