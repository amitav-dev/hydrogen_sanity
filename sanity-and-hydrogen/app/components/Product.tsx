import {Link} from '@remix-run/react';

interface Props {
  product: any;
}
const Product = ({product}: Props) => {
  return (
    <div className="border p-4">
      <img
        src={product.images.nodes[0].url}
        alt={product.images.nodes[0].altText ?? 'alt'}
        width={'100'}
        height={'50'}
        className="w-full h-48 object-cover"
      />
      <br />
      <Link to={`/products/${product.handle}`}>{product.title}</Link>
      <p className="text-gray-700"></p>
      {/* <p className="text-gray-700">{product.price}</p> */}
    </div>
  );
};

export default Product;
