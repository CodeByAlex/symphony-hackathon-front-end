import React from 'react';
import styles from './style.styl';
export default class Navbar extends React.Component {
    componentWillMount() {
        console.log('cat:', this.props.categories)
    }

    render() {
        if (this.props.categories) {
            return (
                <header>
                    <nav>
                        {
                            this.props.categories.map((cat) => {
                                console.log(cat, this.props.chosenCategory);
                                return (
                                    <div
                                        tabIndex={-1} role='button'
                                        className={`${cat === this.props.chosenCategory.toLowerCase() ? 'selected cat-link' : 'cat-link'}` }
                                        onClick={()=>{ this.props.setChosenCategory(cat); }}>
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
