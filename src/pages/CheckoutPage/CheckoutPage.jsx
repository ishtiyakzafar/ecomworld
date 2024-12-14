import React from 'react';
import "./CheckoutPage.scss";
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiBox3Line } from "react-icons/ri";

const CheckoutPage = () => {
  return (
    <div className='checkoutPage'>
      <div className='container'>
        <div className='row g-5'>
          <div className='col-md-6'>
            <div className='billingDetails'>
              <SectionHeading title='Billing Details' />
              <form className="row g-3">
                <div className="col-md-6">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      <span><LiaShippingFastSolid /> Delivery</span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      <span><RiBox3Line /> Pick up</span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="fullname" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullname" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Address</label>
                  <textarea type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">State</label>
                  <select id="inputState" className="form-select">
                    <option>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputZip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-4'>
            <SectionHeading title='Order Summary' />
            <div className='orderSummary'>
              <div className='orderSummaryItem'>
                <p>Subtotal</p>
                <p>₹600</p>
              </div>
              <div className='orderSummaryItem'>
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className='orderSummaryItem'>
                <p>Total</p>
                <p>₹600</p>
              </div>
              <button>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CheckoutPage;