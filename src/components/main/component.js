import React from 'react';
import { getAppData, getAppCategories } from '../services/service';
import Navbar from 'Components/navbar/component';
import { Cards } from 'Components/cards/component';
import axios from 'axios';

export default class Main extends React.Component {
    state = {
        chosenCategory: null,
        data: [],
        categories: [],
    };

    componentWillMount() {
        axios.get('https://localhost:4000/api').then((response) => {
            this.setState({ data: response.data });
        });
        const categories = getAppCategories();

        this.setState({ categories });
    }

    setChosenCategory(chosenCategory) {
        this.setState({ chosenCategory }, () => {
            const filteredData = [...this.state.data].filter((el) => el.tags.includes(chosenCategory));
            this.setState({ data: filteredData });
        });
    }

    render() {
        return (
            <div className='app-container'>
                <Navbar setChosenCategory={this.setChosenCategory.bind(this)} categories={this.state.categories} />
                <Cards data={this.state.data} />
            </div>
        );
    }
}
