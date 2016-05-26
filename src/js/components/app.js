import React, { Component } from 'react';

import Data from '../data';
import Header from './header';
import CardList from './cardlist';
import Footer from './footer';

class App extends Component {

    constructor(props){
        super(props);
        this.state = { data: Data[0] };
    }

    render(){
        const { titleIcon, title, subtitle, tagline } = this.state.data;
        return(
            <div className="container">
                <Header
                    titleIcon={ titleIcon }
                    title={ title }
                    subtitle={ subtitle }
                    tagline={ tagline } />
                <CardList features={ this.state.data.features } />
                <Footer footerImage={ this.state.data.footerImage } />
            </div>
        );
    }

}


export default App;
