/*
    BigCats Component
*/
import { useState } from "react";

import SingleCat from "./SingleCat";

function BigCats() {
  const cats = [
    { name: "Cheetah", latinName: "Acinonyx jubatus" },
    { name: "Cougar", latinName: "Puma concolor" },
    { name: "Jaguar", latinName: "Panthera onca" },
    { name: "Leopard", latinName: "Panthera pardus" },
    { name: "Lion", latinName: "Panthera leo" },
    { name: "Snow leopard", latinName: "Panthera uncia" },
    { name: "Tiger", latinName: "Panthera tigris" },
  ];
  const catImages = [
    {
      name: "Cheetah",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiSZ9ygEI39KQCwxJpRjG13jM0W7QlZEQsVHFddvP9K63yqCv",
    },
    {
      name: "Cougar",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzr_uGnkvvPEIkejJC_wAu3iMvMNz8kUShpNaXQuW-5xcf82Rg",
    },
    {
      name: "Jaguar",
      link: "https://www.balisafarimarinepark.com/wp-content/uploads/2023/06/black-panther-jaguar-wallpaper-preview.jpg",
    },
    {
      name: "Leopard",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AVwjtZ6z7thbIuiEZcEWTdX6qR6GmsylokET89HpkqVk7-dN",
    },
    {
      name: "Lion",
      link: "https://i.natgeofe.com/k/1d33938b-3d02-4773-91e3-70b113c3b8c7/lion-male-roar.jpg?w=1084.125&h=609",
    },
    {
      name: "Snow leopard",
      link: "https://i.natgeofe.com/k/e196909e-a9f9-4437-95db-7cd9a039254f/snow-leopard-fullbody_square.jpg",
    },
    {
      name: "Tiger",
      link: "https://i.natgeofe.com/k/07176791-9577-4e31-b101-b10ca7ca9a3c/Stripes_Tiger-Terrific_KIDS_0722_16x9.jpg",
    },
  ];

  // Maps over array to find matching keys and add the new data.
  const newCats = cats.map((cat, index) => {
    return {
      ...cat,
      ...catImages.find((item) => item.name === cat.name),
      index: index,
    };
  });
  
  //const [currentBigCats, setCurrentBigCats] = useState(newCats)
  const bigCatsList = newCats.map((cat) => (
    <SingleCat
      key = {cat.index}
      name = {cat.name}
      link = {cat.link}
      latinName = {cat.latinName}
    />
  ));
  return(
    <div className="BigCatsList">
        {bigCatsList}
    </div>
  )
}

export default BigCats;
