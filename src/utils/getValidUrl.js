import isValidUrl from "./isValidUrl";

const BASE_URL = "https://api.nomoreparties.co";

const getValidUrl = (data) => {
  if (isValidUrl(data.image)) {
    return data.image;
  }
  return `${BASE_URL}${data.image.url}`;
};

export default getValidUrl;
