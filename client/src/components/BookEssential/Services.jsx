// import React from "react";
// import Img1 from "../../assets/books/book2.jpg";
// import Img2 from "../../assets/books/book1.jpg";
// import Img3 from "../../assets/books/book3.jpg";
// import imagebook2 from "../../assets/books/imagebook2.jpg"
// import imagebook4 from "../../assets/books/imagebook4.jpg"
// import imagebook6 from "../../assets/books/imagebook6.jpg"
// import imagebook7 from "../../assets/books/imagebook7.jpg"
// import imagebook3 from "../../assets/books/bookImage3.jpg"
// import book from "../../assets/books/books4.jpg"

// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// const ServicesData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "His Life",
//     price:"5000",
//     description:"good"
    
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Who's there",
//     price:"5000",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Lost Boy",
//     price:"5000",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: imagebook2,
//     title: "Lost Boy",
//     price:"5000",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: imagebook4,
//     title: "Lost Boy",
//     price:"5000",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: imagebook6,
//     title: "Lost Boy",
//     price:"5000",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: imagebook7,
//     title: "Lost Boy",
//     price:"5000",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: imagebook3,
//     title: "Lost Boy",
//     price:"5000",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: book,
//     title: "Lost Boy",
//     price:"5000",
//     description:
//       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

// const Services = ({ handleOrderPopup, product }) => {
//   const navigate = useNavigate()
//   const HandlePayment = () => {
 
//     navigate("/payment", {state:{amount: product.price}})
//   }

//   return (
//     <>
//       <span id="services"></span>
//       <div className="py-10">
//         <div className="container">
//           <div className="text-center mb-20 max-w-[400px] mx-auto">
//             {/* <p style={{fontSize:"150%", fontWeight:"bolder", color:"green"}}  className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
//               Trending Books
//             </p> */}
//             <h1 className="text-3xl font-bold">Best Books</h1>
//             <p style={{fontSize:"150%", fontWeight:"bolder", color:"green"}} className="text-xs text-gray-400">
//               Avalaible books
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
//             {ServicesData.map((service) => (
//               <div
//                 data-aos="zoom-in"
//                 className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
//               >
//                 <div className="h-[100px]">
//                   <img
//                     src={service.img}
//                     alt=""
//                     className="max-w-[100px] block mx-auto transform -translate-y-14
//                   group-hover:scale-105  duration-300 shadow-md"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <div className="w-full flex items-center justify-center gap-1">
//                     <FaStar className="text-yellow-500" />
//                     <FaStar className="text-yellow-500" />
//                     <FaStar className="text-yellow-500" />
//                     <FaStar className="text-yellow-500" />
//                   </div>
//                   <h1 className="text-xl font-bold">{service.title}</h1>
//                   <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
//                     {service.description}
//                   </p>
//                   <p>Price: {product.price} NGN</p>
//                   <button
//                     className="bg-success hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
//                     onClick={HandlePayment}
//                   >
//                     Order Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

import React from "react";
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import imagebook2 from "../../assets/books/imagebook2.jpg";
import imagebook4 from "../../assets/books/imagebook4.jpg";
import imagebook6 from "../../assets/books/imagebook6.jpg";
import imagebook7 from "../../assets/books/imagebook7.jpg";
import imagebook3 from "../../assets/books/bookImage3.jpg";
import book from "../../assets/books/books4.jpg";
import bk1 from "../../assets/books/bk1.jpg"
import bk2 from "../../assets/books/bk2.jpg"
import bk3 from "../../assets/books/bk3.jpg"
import bk5 from "../../assets/books/bk5.jpg"
import bk6 from "../../assets/books/bk6.jpg"
import bk10 from "../../assets/books/bk10.jpg"

import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "His Life",
    price: "5000",
    description: "good",
  },
  {
    id: 2,
    img: Img2,
    title: "Who's there",
    price: "6000",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Lost Boy",
    price: "2000",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: imagebook2,
    title: "Lost Boy",
    price: "1000",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: imagebook4,
    title: "Lost Boy",
    price: "15000",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: imagebook6,
    title: "Lost Boy",
    price: "8000",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    img: imagebook7,
    title: "Lost Boy",
    price: "6000",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    img: imagebook3,
    title: "Lost Boy",
    price: "3000",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    img: book,
    title: "Lost Boy",
    price: "2000",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 10,
    img: bk1,
    title: "I dnt love you",
    price: "4000",
    description:
      "A romantic love story",
  },
  {
    id: 11,
    img: bk2,
    title: "Atomic Habit",
    price: "5000",
    description:
      "A storyline that centers on habit of a young teenager",
  },
  {
    id: 12,
    img: bk3,
    title: "twisted love",
    price: "1500",
    description:
      "the novel centers on a young boy in love with two ladies and seems confused on which to pick",
  },
  {
    id: 13,
    img: bk5,
    title: "Read people like a book",
    price: "5000",
    description:
      "it enlightens more about the ways of people and the culture of a particular set of people",
  },
  {
    id: 14,
    img: bk6,
    title: "money",
    price: "7000",
    description:
      "an interesting novel on the consequence of trying to get money from the worng souce",
  },

  {
    id: 14,
    img: bk10,
    title: "twisted lies",
    price: "10000",
    description:"what goes around will definitely come around"

  },
];

const Services = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  const HandlePayment = (service) => {
    navigate("/payment", { state: { amount: service.price } });
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p
              style={{ fontSize: "150%", fontWeight: "bolder", color: "green" }}
              className="text-xs text-gray-400"
            >
              Available books
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <p style={{color:"black"}}>Price: {service.price} NGN</p>
                  <button
                    className="bg-success hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() => HandlePayment(service)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
