import React from 'react';
import styles from './style.styl';
export default class Navbar extends React.Component {
    componentWillMount() {
        console.log('cat:', this.props.categories)
    }

    render() {
        if(this.props.categories){
            return (
                <header>
                    <nav>
                        {
                            this.props.categories.map((cat) => {
                                return (
                                    <div tabIndex={-1} role='button' 
                                        className='cat-link' 
                                        onClick={()=>{ this.props.setChosenCategory(cat) }}>
                                        <span>{cat}</span>
                                    </div>
                                );
                            })
                        }
                    </nav>
                </header>
            );
        }        
    }
}
