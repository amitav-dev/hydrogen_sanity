import {json, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Link, useLoaderData} from '@remix-run/react';
import type {Product as ProductSchema} from '@shopify/hydrogen/storefront-api-types';
import {PortableText} from '@portabletext/react';
import type {SanityDocument} from '@sanity/client';
import {groq} from 'hydrogen-sanity/groq';
import ProductDetails from '~/components/ProductDetails';

export async function loader({
  params,
  context: {storefront, sanity},
}: LoaderFunctionArgs) {
  const {product} = await storefront.query<{product: ProductSchema}>(
    `#graphql
      query Product($handle: String!) {
        product(handle: $handle) { 
          id 
        title 
        vendor
        images(first: 1) {
            nodes {
                    id
                    url
                    altText
                    width
                    height
                  }
          }}
      }
    `,
    {
      variables: {handle: params.handle},
    },
  );

  const query = groq`*[_type == "product" && store.slug.current == $handle][0]{
      body,
      "image": store.previewImageUrl
  }`;
  const initial = await sanity.loadQuery<SanityDocument>(query, params);

  return json({product, initial});
}

export default function Page() {
  const {product, initial} = useLoaderData<typeof loader>();
  const page = initial.data;

  return (
    <div className="mx-auto p-12 max-w-screen-lg">
      <ProductDetails key={product.id} product={product} page={page} />

      <Link to="/products">&larr; Back to All Products</Link>
    </div>
    // <div className="mx-auto p-12 prose prose-a:text-blue-500">
    //   <h1 className="text-3xl font-bold">{product.title}</h1>
    //   <img
    //     alt={product.title}
    //     src={page.image}
    //     className="size-32 not-prose mb-6 mr-6 object-cover float-left rounded-xl"
    //   />
    //   {page?.body?.length > 0 ? <PortableText value={page.body} /> : null}
    //   <p>
    //     <Link to="/products">&larr; Back to All Products</Link>
    //   </p>
    // </div>
  );
}
