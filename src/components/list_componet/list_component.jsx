import React from 'react';
import CardComponet from '../card-component/card_component';
class ListCompoent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card-list-parent">
                <CardComponet></CardComponet>
            </div>
        )
    }
}

export default ListCompoent;