import React from 'react';
import styles from './style.styl';
export default class Navbar extends React.Component {
    componentWillMount() {
        console.log(this.props);
    }
    render() {
        return (
            <header>
                <nav>
                    {
                        this.props.categories.map((cat) => {
                            return (
                                <div tabIndex={-1} role='button' className='cat-link'>
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
