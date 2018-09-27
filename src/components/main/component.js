import React from 'react';
import { getAppData, getAppCategories } from '../services/service';
import Navbar from 'Components/navbar/component';
import { Cards } from 'Components/cards/component';
import axios from 'axios';

export default class Main extends React.Component {
    ALL_CATEGORY = 'All';

    state = {
        chosenCategory: 'ALL',
        data: [],
        categories: [],
        filteredData: [],
    };

    componentWillMount() {
        getAppData().then((response) => {
            console.log(response)
            const dataList = [ALL_CATEGORY].concat(response.data);
            this.setState({ data: dataList });
            const filteredData = this.state.data;
            this.setState({ filteredData });
        });
        getAppCategories().then((response) => {
            this.setState({ categories: response.data });
        })
        
    }

    filterByCategory(chosenCategory){
        if(chosenCategory.toUpperCase() === ALL_CATEGORY.toUpperCase()){
            return this.state.data;
        }
        const filteredData = [...this.state.data].filter((el) => el.tags.includes(chosenCategory));
        return filteredData;

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
                <Navbar setChosenCategory={this.setChosenCategory.bind(this)} categories={this.state.categories} chosenCategory={this.state.chosenCategory}/>
                <Cards data={this.state.filteredData} />
            </div>
        );
    }
}
