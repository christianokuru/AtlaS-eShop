"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/error"
      currency="USD"
      billingAddressCollection={true} //optional if you want to collect their address
      shouldPersist={true} //if it's not set to "true", the shopping cart won't be persistent in local storage: meaning that if the user reloads the page, all the items get lost
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
