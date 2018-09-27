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
        filteredData: []
    };

    componentWillMount() {
        axios.get('https://localhost:4000/api').then((response) => {
            this.setState({ data: response.data });
            const filteredData = this.state.data;
            this.setState({filteredData });
        });
        const categories = getAppCategories();
        this.setState({ categories });
    }

    filterByCategory(chosenCategory){
        const ALL_CATEGORY = 'all';
        if(chosenCategory.toUpperCase() === ALL_CATEGORY.toUpperCase()){
            console.log("ALL", chosenCategory)
            return this.state.data;
        }else{
            const filteredData = [...this.state.data].filter((el) => el.tags.includes(chosenCategory));
            return filteredData;
        }
    }

    setChosenCategory(chosenCategory) {
        this.setState({ chosenCategory }, () => {
            const data = this.filterByCategory(chosenCategory);
            this.setState({ filteredData: data });
        });
    }

    render() {
        return (
            <div className='app-container'>
                <Navbar setChosenCategory={this.setChosenCategory.bind(this)} categories={this.state.categories} />
                <Cards data={this.state.filteredData} />
            </div>
        );
    }
}
