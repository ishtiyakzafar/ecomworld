import cartService from "../services/cart";

export const addLocalCart = async () => {
  const products = JSON.parse(localStorage.getItem('cart'));
  let data = []

  for (const element of products) {
    data.push({
      productId: element.product._id,
      quantity: element.quantity,
      size: element.size
    })
  }

  try {
    const res = await cartService.addCartItems({ cartItems: data });
    localStorage.removeItem('cart');
  } catch (error) {
    console.log(error)
  }
}