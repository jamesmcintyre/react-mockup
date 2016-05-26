import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const { titleIcon, title, subtitle, tagline } = this.props;

        return(
            <div className="row">
                <div className="col-sm-12 page-header">
                    <img src={titleIcon} alt="icon" className="titleIcon"/>
                    <div className="subtitle">{ subtitle }</div>
                    <div className="tagline">{ tagline }</div>
                </div>
            </div>
        );
    }

}

export default Header;
