import toast from "react-hot-toast";

export const getFavourites = () => {
  const favourites = localStorage.getItem("favourites");
  if (favourites) return JSON.parse(favourites);
  return [];
};

export const addFavourite = (phone) => {
  const favourites = getFavourites();
  const isExist = favourites.find((p) => p.id == phone.id);
  if (isExist) toast.error("Already Exists");
  else {
    favourites.push(phone);
    toast.success("Added Successfully");
  }
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

export const removeFavpurite = (id) => {
  const favourites = getFavourites();
  const remainingFavourites = favourites.filter((phone) => phone.id != id);
  localStorage.setItem("favourites", JSON.stringify(remainingFavourites));
  toast.success("Removed Successfully");
};

export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return [];
};

export const addCart = (phone) => {
  const cart = getCart();
  const isExist = cart.find((p) => p.id == phone.id);
  if (isExist) toast.error("Already Exists");
  else {
    cart.push(phone);
    toast.success("Added Successfully");
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCart = (id) => {
  const cart = getCart();
  const remainingCart = cart.filter((phone) => phone.id != id);
  localStorage.setItem("cart", JSON.stringify(remainingCart));
};
