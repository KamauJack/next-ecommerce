"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.unsplash.com/photo-1481834209647-66e1705e7402?q=80&w=1549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />

              <div className="flex flex-col justify-between w-full">
                {/* TOP SECTION */}
                <div className="">
                  {/* TITLE SECTION */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* DESCRIPTION SECTION */}
                  <div className="text-gray-500 text-sm">Best Product</div>
                </div>
                {/* END TOP SECTION */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>

                {/* BOTTOM SECTION */}
              </div>
            </div>
            {/* ITEM END */}
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.unsplash.com/photo-1481834209647-66e1705e7402?q=80&w=1549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />

              <div className="flex flex-col justify-between w-full">
                {/* TOP SECTION */}
                <div className="">
                  {/* TITLE SECTION */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* DESCRIPTION SECTION */}
                  <div className="text-gray-500 text-sm">Best Product</div>
                </div>
                {/* END TOP SECTION */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>

                {/* BOTTOM SECTION */}
              </div>
            </div>
            {/* ITEM END */}
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shiiping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
