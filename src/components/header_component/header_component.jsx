import React from 'react';
import { connect } from 'react-redux';
import { FILTER_PRODUCTS } from '../../actions';
import './header_componet.css';


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
       console.log(this.props);
    }
    componentDidUpdate(){
        console.log(this.props);   
    }
    render() {
        return (
            <div className="header-wrapper">

                <div className="header-text">10x List</div>
                <div className="filter-button-wrapper">
                    <button type="button">All</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {state}
}

const mapDispatchToProps = { filterProducts: FILTER_PRODUCTS }

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);;
