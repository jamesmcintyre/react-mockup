import React, { Component } from 'react';


class CardList extends Component {

    constructor(props){
        super(props);
    }

    buildCards(){

        return this.props.features.map((feature) => {

            return (
                <div className="features-card col-sm-4" key={ feature.headline }>
                    <img src={ feature.image } alt="image" className="image"/>
                    <div className="headline">{ feature.headline }</div>
                    <div className="summary">{ feature.summary }</div>
                </div>
            )

        });
    }


    render(){
        return(
            <div className="row">
                <div className="col-sm-12 features">
                    {this.buildCards()}
                </div>
            </div>
        );
    }

}


export default CardList;
