import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Link, useLoaderData} from '@remix-run/react';
import type {Product as ProductSchema} from '@shopify/hydrogen/storefront-api-types';
import ProductDetails from '~/components/ProductDetails';

export async function loader({
  params,
  context: {storefront},
}: LoaderFunctionArgs) {
  const {product} = await storefront.query<{product: ProductSchema}>(
    `#graphql
      query Product($handle: String!) {
        product(handle: $handle) { id title images(first: 1) {
            nodes {
                    id
                    url
                    altText
                    width
                    height
                  }
          } }
      }
    `,
    {
      variables: {handle: params.handle},
    },
  );

  return json({product});
}

export default function Page() {
  const {product} = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto p-12 prose prose-xl prose-a:text-blue-500">
      <ProductDetails key={product.id} product={product} />

      <Link to="/products">&larr; Back to All Products</Link>
    </div>
  );
}
