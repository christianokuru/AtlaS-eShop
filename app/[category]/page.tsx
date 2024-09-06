import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";

async function getData(category: string) {
  // The "category" is of type: string.. we are trying to fetch data dynamicaly from categories... if we put "Men", it will only fetch data from the Men's category
  const query = `*[_type == "product" && category->name == "${category}"] { 
  _id,
    "imageUrl": images[0].asset->url,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto mas-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our Products for {params.category}
          </h2>
        </div>
        {/* rendering the products */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="images"
                  className="w-full h-full object-cover lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>
              {/* Adding the details to the product */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 font-semibold">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-700">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
