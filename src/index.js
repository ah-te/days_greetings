import React from "react";
import ReactDOM from "react-dom";
const currentTime = new Date(2022, 2, 3, 19).getHours();
let greetings;
const customColor = { color: "" };

if (currentTime < 12) {
  greetings = "good morning";
  customColor.color = "red";
} else if (currentTime < 18) {
  greetings = "good afternoon";
  customColor.color = "green";
} else {
  greetings = "good evening";
  customColor.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={customColor}>
    {greetings}
  </h1>,
  document.getElementById("root")
);

// const img = "https://picsum.photos/200";

// ReactDOM.render(
//   <div>
//     <h1 contentEditable="true" className="heading">
//       My Favourite Foods
//     </h1>
//     <ul>
//       <li>random</li>
//       <li>bacon</li>
//       <li>jamon</li>
//       <li>noodles</li>
//     </ul>
//     <img className="food-img" alt="random" src={img + "?grayscale"} />

//     <img
//       className="food-img"
//       alt="bacon"
//       src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
//     />
//     <img
//       className="food-img"
//       alt="jamon"
//       src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
//     />
//     <img
//       className="food-img"
//       alt="noodles"
//       src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
//     />
//   </div>,
//   document.getElementById("root")document.getElementById("root")
// );
