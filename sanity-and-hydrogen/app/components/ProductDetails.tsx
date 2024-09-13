import {PortableText} from '@portabletext/react';
import {Link} from '@remix-run/react';

interface Props {
  product: any;
  page: any;
}
const ProductDetails = ({product, page}: Props) => {
  return (
    <div className="mx-auto p-12 prose prose-a:text-blue-500">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img
        alt={product.title}
        src={page.image}
        className="size-32 not-prose mb-6 mr-6 object-cover float-left rounded-xl"
      />
      {page?.body?.length > 0 ? <PortableText value={page.body} /> : null}
      {/* <p className="text-gray-700">{product.price}</p> */}
    </div>
  );
};

export default ProductDetails;
