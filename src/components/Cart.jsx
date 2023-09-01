import React from "react";
import { BsX } from "react-icons/bs";
import CardCart from "./cards/CardCart";
import { useCart } from "@/context/cartContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { customConfirm, showDefaultAlert } from "./sweetAlert";

const Cart = ({ isOpen, closeCart }) => {
  const { push } = useRouter();

  const [cart, setCart] = React.useState([]);
  const { setCartLength } = useCart();

  React.useEffect(() => {
    const getCartFromLocalStorage = () => {
      if (typeof window !== "undefined") {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        return storedCart;
      }
      return [];
    };
    const storedCart = getCartFromLocalStorage();
    setCart(storedCart);
  }, [isOpen]);

  const removeFromCartById = async (id) => {
    const shouldRemove = await customConfirm(
      "¿Estás seguro que deseas eliminar este producto?"
    );
    if (shouldRemove) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCartLength(newCart.length);
      showDefaultAlert("Producto eliminado del carrito", "success");
    }
  };

  const formattedProducts = cart.map((product) => {
    const productName = product.name.replace(/\s/g, "%20");
    const productQuantity = `Cantidad:%20${product.quantity}`;
    return `${productName}%20(${productQuantity})`;
  });
  const whatsappMessage = formattedProducts.join("%0A");
  const whatsappLink = `https://api.whatsapp.com/send?phone=+5491178311503&text=${
    "Hola!%20,%20quisiera%20solicitar%20una%20cotización%20de%20los%20siguientes%20productos%20:%20" +
    whatsappMessage
  }`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed z-[2] bg-[#3d3d3d86] top-0 opacity-50 w-screen h-screen right-0 cursor-pointer"
          onClick={() => closeCart(false)}
        ></div>
      )}

      <div
        id="without-scroll"
        className={`h-screen fixed z-[60] right-0 top-0 flex flex-col justify-between  bg-white shadow-xl rounded-l-lg overflow-scroll text-black duration-300 ease-in-out ${
          isOpen ? "w-screen md:w-[600px] p-3 md:p-6" : "w-0 p-0"
        }`}
      >
        
        <div className="flex items-center justify-between mb-2 md:mb-12">
          <h2 className="font-normal text-3xl">Carrito de cotización</h2>
          <div onClick={() => closeCart(false)}>
            <BsX size={34} />
          </div>
        </div>

        <div className="flex justify-between py-3 gap-2 h-24  md:hidden ">
          <button
            className="bg-primary p-2 rounded-md text-white shadow-lg text-lg w-full text-center h-12"
            onClick={() => {
              if (cart.length === 0) {
                showDefaultAlert(
                  "El carrito está vacío , por favor agrega productos para poder cotizarlos",
                  "warning"
                );
              } else {
                window.open(whatsappLink, "_blank");
              }
            }}
          >
            {" "}
            Cotizar productos
          </button>
          <button
            className="bg-white p-2 rounded-md text-black shadow-lg text-lg w-full text-center border h-12"
            onClick={async () => {
              const shouldRemove = await customConfirm(
                "¿Estás seguro que deseas vaciar el carrito?"
              );
              if (shouldRemove) {
                localStorage.removeItem("cart");
                setCartLength(0);
                setCart([]);
                showDefaultAlert("Carrito vaciado", "success");
              }
            }}
            disabled={cart.length === 0}
          >
            Vaciar carrito
          </button>
        </div>
        <div
          id="without-scroll"
          className="h-full overflow-y-scroll gap-y-4 flex flex-col"
        >
          {cart.length === 0 && (
            <p className="text-gray-600">
              El carrito está vacío , agrega productos para visualizarlos aquí y
              realizar la cotización.
            </p>
          )}

          {cart.map((item, index) => (
            <CardCart
              key={item.id}
              id={item.id}
              title={item.name}
              price={item.totalPrice}
              quantity={item.quantity}
              image={item.images[0].image_url}
              removeFromCartById={removeFromCartById}
            />
          ))}
        </div>

        <div className=" justify-between pt-4 border-t-4 gap-2 h-16  hidden md:flex">
          <button
            className="bg-primary p-2 rounded-md text-white shadow-lg text-lg w-full text-center"
            onClick={() => {
              if (cart.length === 0) {
                showDefaultAlert(
                  "El carrito está vacío , por favor agrega productos para poder cotizarlos",
                  "warning"
                );
              } else {
                window.open(whatsappLink, "_blank");
              }
            }}
          >
            {" "}
            Cotizar productos
          </button>
          <button
            className="bg-white p-2 rounded-md text-black shadow-lg text-lg w-full text-center border"
            onClick={async () => {
              const shouldRemove = await customConfirm(
                "¿Estás seguro que deseas vaciar el carrito?"
              );
              if (shouldRemove) {
                localStorage.removeItem("cart");
                setCartLength(0);
                setCart([]);
                showDefaultAlert("Carrito vaciado", "success");
              }
            }}
            disabled={cart.length === 0}
          >
            Vaciar carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
