import {PortableText} from '@portabletext/react';
import {Link} from '@remix-run/react';
import {useState} from 'react';

interface Props {
  product: any;
  page: any;
}
const ProductDetails = ({product, page}: Props) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  return (
    <div className="flex flex-row	grid grid-flow-col-dense gap-x-24">
      <div className="col-span-2">
        {/* Image */}
        <img
          alt={product.title}
          src={page.image}
          className="not-prose mb-6 mr-6 object-cover float-left rounded-xl"
        />
      </div>
      <div className="col-span-2 ">
        <div>
          <span className="text-xs text-gray-500 uppercase">
            {product.vendor}
            <p className="text-4xl capitalize font-mono ">{product.title}</p>
          </span>
        </div>
        <div className="flex justify-start space-x-2.5 pt-6">
          <p className="text-3xl">Rs. 27.00</p>
          <p className="text-1xl p-2 bg-black text-white rounded-full">Sale</p>
        </div>
        <div className="pt-6">
          <p className="text-lg">Color</p>
          <div className="flex justify-start space-x-2.5 pt-4">
            <button className="box-border h-12 w-20 p-2 border-4 bg-black text-white rounded-full font-bold">
              Blue
            </button>
            <button className="box-border h-12 w-20 p-2 border-4 bg-black text-white rounded-full font-bold">
              Ecru
            </button>
            <button className="box-border h-12 w-20 p-2 border-4 bg-black text-white rounded-full font-bold">
              Pink
            </button>
          </div>
        </div>
        <p className="text-lg pt-6">Quantity</p>
        <div className="max-w-lg mx-auto">
          <div className="flex items-center">
            <button
              type="button"
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-lg focus:outline-none"
              onClick={decrement}
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-16 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
            <button
              type="button"
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-lg focus:outline-none"
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex space-x-4 pt-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
            Add to cart
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 focus:outline-none">
            Buy now
          </button>
        </div>
      </div>
      {/* <p className="text-3xl font-bold">{product.title}</p> */}
      {/* <img
        alt={product.title}
        src={page.image}
        className="size-32 not-prose mb-6 mr-6 object-cover float-left rounded-xl"
      />
      {page?.body?.length > 0 ? <PortableText value={page.body} /> : null} */}
      {/* <p className="text-gray-700">{product.price}</p> */}
    </div>
  );
};

export default ProductDetails;
