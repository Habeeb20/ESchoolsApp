

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import imagebook2 from "../../assets/books/imagebook2.jpg";
import imagebook4 from "../../assets/books/imagebook4.jpg";
import imagebook6 from "../../assets/books/imagebook6.jpg";
import imagebook7 from "../../assets/books/imagebook7.jpg";
import imagebook3 from "../../assets/books/bookImage3.jpg";
import book from "../../assets/books/books4.jpg";
import bk1 from "../../assets/books/bk1.jpg";
import bk2 from "../../assets/books/bk2.jpg";
import bk3 from "../../assets/books/bk3.jpg";
import bk5 from "../../assets/books/bk5.jpg";
import bk6 from "../../assets/books/bk6.jpg";
import bk10 from "../../assets/books/bk10.jpg";

const ServicesData = [
  { id: 1, img: Img1, title: "His Life", price: "5000", description: "good" },
  { id: 2, img: Img2, title: "Who's there", price: "6000", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, ." },
  { id: 3, img: Img3, title: "Lost Boy", price: "2000", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, ." },
  { id: 4, img: imagebook2, title: "Lost Boy", price: "1000", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 5, img: imagebook4, title: "Lost Boy", price: "15000", description: "lorem ipsum dolor sit amet,." },
  { id: 6, img: imagebook6, title: "Lost Boy", price: "8000", description: "lorem ipsum dolor sit amet,." },
  { id: 7, img: imagebook7, title: "Lost Boy", price: "6000", description: "lorem ipsum dolor sit amet,." },
  { id: 8, img: imagebook3, title: "Lost Boy", price: "3000", description: "lorem ipsum dolor sit amet,." },
  { id: 9, img: book, title: "Lost Boy", price: "2000", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 10, img: bk1, title: "I dnt love you", price: "4000", description: "A romantic love story" },
  { id: 11, img: bk2, title: "Atomic Habit", price: "5000", description: "A storyline that centers on habit of a young teenager" },
  { id: 12, img: bk3, title: "twisted love", price: "1500", description: "the novel centers on a young boy in love with two ladies and seems confused on which to pick" },
  { id: 13, img: bk5, title: "Read people like a book", price: "5000", description: "it enlightens more about the ways of people and the culture of a particular set of people" },
  { id: 14, img: bk6, title: "money", price: "7000", description: "an interesting novel on the consequence of trying to get money from the worng souce" },
  { id: 15, img: bk10, title: "twisted lies", price: "10000", description: "what goes around will definitely come around" },
];

const Services = ({ handleOrderPopup }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const HandlePayment = (service) => {
    navigate("/payment", { state: { amount: service.price } });
  };

  const filteredServices = ServicesData.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <span id="services"></span>
      <div style={{ padding: "10px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Best Books</h1>
            <p style={{ fontSize: "1.5rem", fontWeight: "bolder", color: "green" }}>Available books</p>
            <input
              type="text"
              placeholder="Search for a book title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {filteredServices.map((service) => (
              <Fade bottom key={service.id}>
                <div
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div style={{ height: "150px", overflow: "hidden" }}>
                    <img
                      src={service.img}
                      alt={service.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center", gap: "5px", marginBottom: "10px" }}>
                      {[...Array(4)].map((_, i) => (
                        <FaStar key={i} style={{ color: "#ffd700" }} />
                      ))}
                    </div>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{service.title}</h1>
                    <p style={{ color: "#777", marginBottom: "10px" }}>{service.description}</p>
                    <p style={{ color: "black" }}>Price: {service.price} NGN</p>
                    <button
                      onClick={() => HandlePayment(service)}
                      style={{
                        backgroundColor: "#28a745",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "10px",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#218838")}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#28a745")}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
