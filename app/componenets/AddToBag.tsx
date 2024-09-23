"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart(); //Adds items to the cart and also opens the cart too

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id, // this id has to be dynamically unique, so that products can be differentated from each other
  };

  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}
