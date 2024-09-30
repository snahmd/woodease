import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const productsData = [
  {
    id: "jenson",
    name: "Jenson",
    desc: "Jenson is a great product",
  },
  {
    id: "deon",
    name: "Deon",
    desc: "Deon is a great product",
  },
  {
    id: "krisha",
    name: "Krisha",
    desc: "Krisha is a great product",
  },
];

const Products = () => {
  return (
    <Layout>
      <div>
        <div>
          <h3>What we have</h3>
        </div>
        <div>
          <h2>PRODUCTS</h2>
        </div>
      </div>
      <div>
        {productsData.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            {<NavLink to={`/product/${product.id}`}>View Details</NavLink>}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
