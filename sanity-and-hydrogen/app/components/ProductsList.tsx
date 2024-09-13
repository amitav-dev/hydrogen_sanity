import Product from './Product';
interface Props {
  products: any;
}
export default function ProductsList({products}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
