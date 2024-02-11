import React from 'react';
import './ReviewPopup.scss'; 
import PropTypes from 'prop-types';

export default function ReviewPopup({ onClose }) {

  const handleSubmit = () => {
    // Submit rating (send to backend, etc.)
    onClose(); // Close the pop-up after submitting
  };

  return (
    <div className='review-popup'>
      <div className="review-popup-content">
            <h5> # Thankyou !!</h5>
            <h6> Please rate your shopping experience</h6>
            <div className="container">
              <div className="item">
                <label htmlFor="0">
                  <input className="radio" type="radio" name="feedback" id="0" value="0" />
                  <span>🤬</span>
                </label>
              </div>

              <div className="item">
                <label htmlFor="1">
                  <input className="radio" type="radio" name="feedback" id="1" value="1" />
                  <span>🙁</span>
                </label>
              </div>

              <div className="item">
                <label htmlFor="2">
                  <input className="radio" type="radio" name="feedback" id="2" value="2" />
                  <span>😶</span>
                </label>
              </div>

              <div className="item">
                <label htmlFor="3">
                  <input className="radio" type="radio" name="feedback" id="3" value="3" />
                  <span>😁</span>
                </label>
              </div>

              <div className="item">
                <label htmlFor="4">
                  <input className="radio" type="radio" name="feedback" id="4" value="4" />
                  <span>😍</span>
                </label>
              </div>
            </div>  
          <div className='button1'>    
            <button type="button" className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
            <button type="button"  className="close-btn" onClick={onClose}>
              Close
            </button>
          </div> 

        </div>
    </div>
  );
}


ReviewPopup.propTypes = {
  onClose: PropTypes.func.isRequired
};