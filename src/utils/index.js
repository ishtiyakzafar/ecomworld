import cartService from "../services/cart";

export const addCartItemFromLocalStorage = (products) => {
  let data = []

  for (const element of products) {
    data.push({
      productId: element.product._id,
      quantity: element.quantity,
      size: element.size
    })
  }

  cartService.addCartItems({ cartItems: data }).then((res) => {
    localStorage.removeItem('cart');
  }).catch((error) => {
    console.log(error)
  })
}