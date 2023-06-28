import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const productList = [
    {
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      title: "Test1",
      price: 5,
      description: "This is a 2nd product - amazing!",
    },
    {
      title: "Test2",
      price: 4,
      description: "This is a 3nd product - amazing!",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          productList.map( x=> 
            <ProductItem
            key = {x.title}
              title = {x.title}
              price = {x.price}
              description = {x.description}
            />
            
          )
        }
      </ul>
    </section>
  );
};

export default Products;
