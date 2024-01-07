import { useState } from "react";

export default function AddCatForm({ onAddCat }) {
  const [name, setName] = useState(" ");
  const [latinName, setLatinName] = useState(" ");
  const [image, setImage] = useState(" ");
  const isUrlValid = (url) => {
    // Regular expression for a more permissive URL validation
    const urlRegex = /^(https?:\/\/)?([^\s:/?#]+)(?:[/?#](?![?#])[^\\s]*)?$/i;
    return urlRegex.test(url);
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
  
    // Validate the image link
    const imageUrl = data.get('image');
    if (!isUrlValid(imageUrl)) {
      // Handle invalid URL (e.g., show an error message)
      console.error('Invalid URL for image');
      return;
    }
  
    // Continue with adding the cat if the URL is valid
    onAddCat(Object.fromEntries(data));
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);

//     // Validate the image link
//     const imageUrl = data.get("image");
//     if (!isUrlValid(imageUrl)) {
//       console.error("Invalid URL for image");
//       return;
//     }

//     // Check if the URL points to an image or SVG
//     const isImageOrSvg = await isImageOrSvgUrl(imageUrl);
//     if (!isImageOrSvg) {
//       console.error("Invalid URL. Please provide a valid URL pointing to an image or SVG.");
//       return;
//     }

//     // Continue with adding the cat if both URL and content type are valid
//     onAddCat(Object.fromEntries(data));
//   };
  
  return (
    <div className="AddCatForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Common Name
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Latin Name:
          <input
            name="latinName"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
        <label>
          Image Link:
          <input
            type="url"
            name="link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button>Add Cat</button>
      </form>
    </div>
  );
}
