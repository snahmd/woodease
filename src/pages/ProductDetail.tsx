import Layout from "../components/Layout";
import { NavLink, useParams } from "react-router-dom";
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

const ProductDetail = () => {
  const params = useParams<{ id: string }>();
  const product = productsData.find((p) => p.id === params.id);
  if (!product) {
    return (
      <Layout>
        <div>
          <h1>Product not found</h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div>
        <h1>{product.name}</h1>
        <p>{product.desc}</p>
        <NavLink to="/products">Back to products</NavLink>
      </div>
    </Layout>
  );
};

export default ProductDetail;
