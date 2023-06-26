import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DummyItem = [
    {id: "rei", title: "Love and Lies", price: 5, description: "Good books that touches the mind and soul"},
    {id: "ryhfi", title: "Lost", price: 2, description: "Lost in Love tries to portray life in the ways of devil"},
    {id: "rtyi", title: "Ice", price: 6, description: "ice chain pure water"}
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyItem.map(item => <ProductItem id={item.id} title={item.title} price={item.price} description={item.description} />)}
      </ul>
    </section>
  );
};

export default Products;
