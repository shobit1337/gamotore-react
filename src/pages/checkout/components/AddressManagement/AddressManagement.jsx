import React from "react";

const AddressManagement = () => {
  return (
    <div className="address-container d-flex flex-column gap-sm">
      <div className="address-card">
        <input type="radio" name="address-1" id="address-1" />
        <label for="address-1">
          Shobit Deshwal, 123, XYZ Colony, ABC Road, Uttar Pradesh, 123456,
          INDIA, +91-876543219
        </label>
        <i className="far fa-trash-alt delete-btn"></i>
      </div>
      <div className="address-card">
        <input type="radio" name="address-1" id="address-1" />
        <label for="address-1">
          Shobit Deshwal, 123, XYZ Colony, ABC Road, Uttar Pradesh,, XYZ Colony,
          ABC Road, Uttar Pradesh, 123456, INDIA, +91-876543219
        </label>
        <i className="far fa-trash-alt delete-btn"></i>
      </div>
    </div>
  );
};

export default AddressManagement;
