import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='d-flex justify-between items-center text-lg'>
        <span>
          <a href='/'>
            <i className='fab fa-facebook-square'></i>
          </a>
          <a href='/'>
            <i className='fab fa-twitter-square'></i>
          </a>
          <a href='/'>
            <i className='fab fa-youtube-square'></i>
          </a>
        </span>
        <span>
          <a href='/'>
            <i className='far fa-caret-square-up'></i>
          </a>
        </span>
      </div>
      <div>
        <div className='footer-heading'>Resources</div>
        <div>
          <div className='d-flex gap-sm'>
            <div className='d-flex flex-column gap-xxxs'>
              <a href='/'>Support-A-Creator</a>
              <a href='/'>Publish on Epic Games</a>
              <a href='/'>Careers</a>
              <a href='/'>Company</a>
            </div>
            <div className='d-flex flex-column gap-xxxs'>
              <a href='/'>Fan Art policy</a>
              <a href='/'>UX Research</a>
              <a href='/'>Store</a>
            </div>
            <div className='d-flex flex-column gap-xxxs'>
              <a href='/'>Online Services</a>
              <a href='/'>Community Rules</a>
              <a href='/'>Newsletter</a>
            </div>
          </div>
        </div>
        <div>
          <div className='footer-heading'>Made by Gamotore</div>
          <div>
            <div className='d-flex gap-sm'>
              <div className='d-flex flex-column gap-xxxs'>
                <a href='/'>Fan Art policy</a>
                <a href='/'>UX Research</a>
                <a href='/'>Store</a>
              </div>
              <div className='d-flex flex-column gap-xxxs'>
                <a href='/'>Online Services</a>
                <a href='/'>Community Rules</a>
                <a href='/'>Newsletter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        © 2022, Gamotore, Inc. All rights reserved. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Doloremque alias praesentium cum
        repellendus veritatis inventore nemo velit necessitatibus magnam
        officiis ipsa dignissimos omnis, eius quasi facere excepturi incidunt id
        blanditiis? Molestiae vitae voluptatibus accusamus, rerum voluptatum
        commodi veniam quos alias, laudantium suscipit ex nihil blanditiis
        adipisci a pariatur similique labore deleniti.
      </div>
      <div className='d-flex justify-between items-center'>
        <span>
          <a href='/'>Terms of Services</a>
          <a href='/'>Privacy Policy</a>
          <a href='/'>Store Refund Policy</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
