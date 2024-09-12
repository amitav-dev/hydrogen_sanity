import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Link, useLoaderData} from '@remix-run/react';
import type {Product} from '@shopify/hydrogen/storefront-api-types';
import ProductsList from '~/components/ProductsList';

export async function loader({context: {storefront}}: LoaderFunctionArgs) {
  const {products} = await storefront.query<{products: {nodes: Product[]}}>(
    `#graphql
      query Products {
        products(first: 10) {
          nodes { 
            id 
            title 
            handle,
            images(first: 1) {
            nodes {
                    id
                    url
                    altText
                    width
                    height
                  }
          } }
        }
      }
    `,
  );

  if (!products.nodes.length) {
    throw new Response('Not found', {status: 404});
  }

  return json({products: products.nodes});
}

export default function Index() {
  const {products} = useLoaderData<typeof loader>();
  console.log(products);
  return (
    <div >
      <h1 className="text-3xl font-bold">All Products</h1>
      <ProductsList products={products} />
    </div>
  );
}
