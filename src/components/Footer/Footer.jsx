import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Discover fashion at its finest on our e-commerce website! Explore a
            vast selection of stylish clothes, from casual wear to elegant
            ensembles. With a seamless shopping experience, convenient size
            guides, and speedy delivery, we're here to make your fashion dreams
            a reality. Stay in the loop with our newsletter and social media for
            the latest trends and exclusive deals. Shop now and elevate your
            wardrobe effortlessly!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Mitrapark Rd, Chabahil, Kathmandu, Nepal, 44600
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +977 9812673512</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: dhaka@store.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Tshirt</span>
          <span className="text">Trousers</span>
          <span className="text">Sweaters</span>
          <span className="text">Jeans</span>
          <span className="text">Traditional Outfits</span>
          <span className="text">New Chothings</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">Texas Csit 6th sem ..</span>
          {/* <img src={Payment} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
