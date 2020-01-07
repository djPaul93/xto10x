import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import HeaderComponent from './components/header_component/header_component';
import ListCompoent from './components/list_componet/list_component';
import { connect } from 'react-redux';
import { fetchProducts } from './actions';




class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getProducts();
  }
  getAllCategories() {
    if (!this.props.isLoading) {
      return this.props.products
        .map((item) => {
          return item.category;
        })
    }

  }
  render() {
    return (
      <div className="App">
        <div style={{ display: !!this.props.isLoading ? 'block' : 'none' }}>
          Loading...
       </div>
        <div className="parent-wrapper" style={{ display: !!this.props.isLoading ? 'none' : 'block' }}>
          <HeaderComponent></HeaderComponent>
          <ListCompoent></ListCompoent>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.json,
  isLoading: state.loading
});
const mapDispatchToProps = { getProducts: fetchProducts }
export default connect(mapStateToProps, mapDispatchToProps)(App);;