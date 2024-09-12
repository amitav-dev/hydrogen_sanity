import {Link} from '@remix-run/react';

interface Props {
  product: any;
}
const ProductDetails = ({product}: Props) => {
  return (
    <div className="border p-3">
      <img
        src={product.images.nodes[0].url}
        alt={product.images.nodes[0].altText ?? 'alt'}
        width={'100'}
        height={'50'}
        className="w-full h-48 object-cover"
      />
      <hr />
      <br />
      <p className="text-gray-700">{product.title}</p>
      {/* <p className="text-gray-700">{product.price}</p> */}
    </div>
  );
};

export default ProductDetails;
