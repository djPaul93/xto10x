import React from 'react';

import './card_component.css';
class CardComponet extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card-parent">
                <div className="row">
                    <img src="http://assets.myntassets.com/assets/images/2466435/2018/5/21/265434b9-de22-4b2c-9ca2-ded4c01ef5801526878966488-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-1.jpg" alt=""/>
                    <div>Product Name</div>
                    <div>Product Details</div>
                </div>
            </div>
        )
    }
}

export default CardComponet;

