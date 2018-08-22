import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList/ProductList';

// const products = [
//   { name: 'dva', id: 1 },
//   { name: 'antd', id: 2 },
// ]

const Products = (props) => {
// const Products = ({ dispatch, products }) => {
// const Products = ({ dispatch }) => {
  function handleDelete(id) {
    console.log("now you have clicked delete and now i am going to model ");
    props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  return (
    <div>
      {console.log(typeof(props.products))}
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={props.products} />
      <a href='http://localhost:8000/#/users'>to users</a>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);
