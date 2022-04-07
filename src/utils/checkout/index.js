const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const displayRazorpay = async (
  totalMRP,
  currentUser,
  successCallback
) => {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
  if (!res) {
    return;
  }

  const options = {
    key: `${process.env.REACT_APP_RAZORPAY_KEY_ID}`,
    amount: parseInt(totalMRP) * 100,
    currency: 'INR',
    name: 'Gamotore',
    description: 'Thank you for shopping with us',
    image:
      'https://res.cloudinary.com/dgwzpbj4k/image/upload/v1647589272/shoemall/logo1_utxkw6.png',
    handler: function (response) {
      successCallback(response);
    },
    prefill: {
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      email: currentUser.email,
      contact: '6969691213',
    },
    notes: {},
    theme: {
      color: '#392F5A',
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export const getDiscountAmount = (amount, discount) => {
  return parseFloat(((amount / 100) * discount).toFixed(2));
};

export const getGSTAmount = (amount) => {
  return parseFloat(((amount / 100) * 18).toFixed(2));
};
