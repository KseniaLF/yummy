const UNSPLASH_KEY = process.env.UNSPLASH_KEY;

export const getImgFromUnsplash = async (title) => {
  if (UNSPLASH_KEY) {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=${title}&orientation=landscape&client_id=${UNSPLASH_KEY}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.urls.regular;
    } catch (e) {
      console.log(e);
    }
  }
};
