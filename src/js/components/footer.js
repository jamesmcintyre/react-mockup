import React, { Component } from 'react';

class Footer extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                <div className="col-sm-12 footer">
                    <img src={ this.props.footerImage } alt="footerImage" className="footerImage"/>
                </div>
            </div>
        );
    }

}

export default Footer;
