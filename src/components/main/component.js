import React from 'react';
import { getAppData, getAppCategories } from '../services/service';
import Navbar from 'Components/navbar/component';

export default class Main extends React.Component {
    state = {
        chosenCategory: null,
        data: [],
        categories: []
    };

    componentWillMount() {
        const data = getAppData().data;
        const categories = getAppCategories();
    
        this.setState({ data, categories }) 
    };
    
    setChosenCategory(chosenCategory) {
        this.setState({chosenCategory}, () => {
            const data = [...this.state.data].filter((el) => el.tags.includes(chosenCategory));
            this.setState({ data: filteredData })
        });
    };
    
    render() {
        return (        
            <div className='app-container'>
                <Navbar setChosenCategory={this.setChosenCategory.bind(this)} categories={this.state.categories} />
                {
                    this.state.data.map((el) => {
                        return (
                            <div className='card'>
                                <p>{this.state.chosenCategory}</p>
                                <img src={el.image} />
                                <h3>{el.title}</h3>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
};
