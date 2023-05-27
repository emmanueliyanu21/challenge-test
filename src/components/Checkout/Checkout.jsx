import React from "react";
import "./checkout.css";
import MasterCard from "../../assets/mastercard.svg";
import MasterCardAlt from "../../assets/mastercard-alt.svg";
import Verified from "../../assets/verified.svg";
import Dots from "../../assets/dots.svg";
import Chip from "../../assets/card-chip.png";
import Wifi from "../../assets/wifi.png";
import Apple from "../../assets/apple-logo.svg";
import Docket from "../../assets/docket.png";
import AceLogo from "../../assets/acelogo.png";
import { useState } from "react";

const Checkout = () => {
  const [csvData, setCSVData] = useState("09/22");
  const [query, setQuery] = useState({ month: '', year: '' });
  const [creditCardNumber, setCreditCardNumber] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    const formattedValue = value
      .replace(/\D/g, '') 
      .slice(0, 16); 

    setCreditCardNumber(formattedValue);
  };

  const formatCreditCardNumber = () => {
    let formattedNumber = creditCardNumber.replace(/(.{4})/g, '$1-');
    if (formattedNumber.length > 19) {
      formattedNumber = formattedNumber.substring(0, 19);
    }
    return formattedNumber;
  };


  const handleInput = (e) => {
    const name = e.target.name;
    console.log(name);
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="wrapper grid grid-cols-12">
        <div className="close-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Close</title>
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
          </svg>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="form">
            <header className="form-header">
              <div className="logo">
                <img src={AceLogo} alt="" />
                <h1>
                  AceCoin<span className="lean">Pay</span>
                </h1>
              </div>
              <div className="timer">
                <span className="timer-box">0</span>
                <span className="timer-box">1</span>
                <span className="timer-divider">:</span>
                <span className="timer-box">1</span>
                <span className="timer-box">9</span>
              </div>
            </header>
            <section className="form-body">
              <form action="" onSubmit={submit}>
                <div className="input-group">
                  <div className="header">
                    <div className="description">
                      <h2 className="title">card number</h2>
                      <p className="desc">
                        Enter the 15-digit card number on the card
                      </p>
                    </div>
                    <button className="edit">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067
                                                c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4
                                                L40.877,471.123z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825
                                                C515.134,119.679,515.134,99.354,502.598,86.818z"
                            />
                          </g>
                        </g>
                      </svg>
                      <span className="btn-desc">Edit</span>
                    </button>
                  </div>
                  <div className="main">
                    <img src={MasterCard} alt="" className="leading-icon" />
                    <input
                      type="text"
                      value={formatCreditCardNumber()}
      onChange={handleInputChange}
                      placeholder="2412   -   7512   -   3412   -   3456"
                    />
                    <img src={Verified} alt="" className="trailing-icon" />
                  </div>
                </div>
                <div className="input-group __col">
                  <div className="header">
                    <div className="description">
                      <h2 className="title">CVV number</h2>
                      <p className="desc">
                        Enter the 3 or 4 digit number on the card
                      </p>
                    </div>
                  </div>
                  <div className="main">
                    <input type="text" placeholder="327" />
                    <img src={Dots} alt="" className="trailing-icon" />
                  </div>
                </div>
                <div className="input-group __col">
                  <div className="header">
                    <div className="description">
                      <h2 className="title">expiry date</h2>
                      <p className="desc">Enter the expiration date of the card</p>
                    </div>
                  </div>
                  <div className="grp">
                    <div className="main __date">
                      <input
                        value={query.month}
                        onChange={(e) => handleInput(e)}
                        type="text"
                        name="month"
                        placeholder="09"
                      />
                    </div>
                    <span className="divider">/</span>
                    <div className="main __date">
                      <input
                        value={query.year}
                        onChange={(e) => handleInput(e)}
                        type="text"
                        name="year"
                        placeholder="22"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-group __col">
                  <div className="header">
                    <div className="description">
                      <h2 className="title">password</h2>
                      <p className="desc">Enter your Dynamic password</p>
                    </div>
                  </div>
                  <div className="main">
                    <input type="password" placeholder="******" />
                    <img src={Dots} alt="" className="trailing-icon" />
                  </div>
                </div>
                <button type="submit" className="btn-submit">
                  pay now
                </button>
              </form>
            </section>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="checkout">
            <span className="blu"></span>
            <div className="card">
              <div className="card__head">
                <img src={Chip} alt="" className="chip" />
                <img src={Wifi} alt="" className="wifi" />
              </div>
              <div className="card__body">
                <span className="holder">jonathan micheal</span>
                <div className="card-digits">
                  <div className="hidden-digits">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                  </div>
                  <span className="visible-digits">3456</span>
                </div>
              </div>
              <div className="card__footer">
                <span className="expiry">{csvData}</span>
                <img src={MasterCardAlt} alt="" className="logo" />
              </div>
              <div className="card__design">
                <span className="inner"></span>
              </div>
            </div>
            <div className="checkout-details">
              <div className="sale-data">
                <div className="data">
                  <span className="title">company</span>
                  <span className="value">
                    <img src={Apple} alt="" />
                    <span className="subtext">apple</span>
                  </span>
                </div>
                <div className="data">
                  <span className="title">order number</span>
                  <span className="value">
                    <span className="subtext">1266201</span>
                  </span>
                </div>
                <div className="data">
                  <span className="title">product</span>
                  <span className="value">
                    <span className="subtext">macbook air</span>
                  </span>
                </div>
                <div className="data">
                  <span className="title">VAT (20%)</span>
                  <span className="value">
                    <span className="subtext">$100.00</span>
                  </span>
                </div>
              </div>
              <div className="divider">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <div className="sale-total">
                <div className="total">
                  <span className="desc">You have to Pay</span>
                  <div className="t-amount">
                    <h1 className="amount">
                      549<sub>.99</sub>
                    </h1>
                    <span className="symbol">USD</span>
                  </div>
                </div>
                <img src={Docket} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
