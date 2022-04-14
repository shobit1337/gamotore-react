import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='d-flex justify-between items-center text-lg'>
        <span className='d-flex gap-xxs'>
          <a
            href='https://github.com/shobit1337'
            target='_blank'
            rel='noreferrer'>
            <i className='fab fa-facebook-square'></i>
          </a>
          <a
            href='https://twitter.com/shobit1337'
            target='_blank'
            rel='noreferrer'>
            <i className='fab fa-twitter-square'></i>
          </a>
          <a
            href='https://peerlist.io/shobit1337'
            target='_blank'
            rel='noreferrer'>
            <i className='fab fa-youtube-square'></i>
          </a>
        </span>
        <span className='cursor-pointer' onClick={() => window.scrollTo(0, 0)}>
          <i className='far fa-caret-square-up'></i>
        </span>
      </div>
      <div>
        <div className='footer-heading'>Resources</div>
        <div>
          <div className='d-flex gap-sm'>
            <div className='d-flex flex-column gap-xxxs'>
              <a href='/' target='_blank' rel='noreferrer'>
                Support-A-Creator
              </a>
              <a href='/' target='_blank' rel='noreferrer'>
                Publish on Epic Games
              </a>
              <a href='/' target='_blank' rel='noreferrer'>
                Careers
              </a>
              <a href='/' target='_blank' rel='noreferrer'>
                Company
              </a>
            </div>
            <div className='d-flex flex-column gap-xxxs'>
              <a href='/' target='_blank' rel='noreferrer'>
                Fan Art policy
              </a>
              <a href='/' target='_blank' rel='noreferrer'>
                UX Research
              </a>
              <a href='/' target='_blank' rel='noreferrer'>
                Store
              </a>
            </div>
            <div className='d-flex flex-column gap-xxxs'>
              <a href='/' target='_blank' rel='noreferrer'>
                Online Services
              </a>
              <a href='/' target='_blank' rel='noreferrer'>
                Community Rules
              </a>
              <a href='/' target='_blank' rel='noreferrer'>
                Newsletter
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className='footer-heading'>Made by Gamotore</div>
          <div>
            <div className='d-flex gap-sm'>
              <div className='d-flex flex-column gap-xxxs'>
                <a href='/' target='_blank' rel='noreferrer'>
                  Fan Art policy
                </a>
                <a href='/' target='_blank' rel='noreferrer'>
                  UX Research
                </a>
                <a href='/' target='_blank' rel='noreferrer'>
                  Store
                </a>
              </div>
              <div className='d-flex flex-column gap-xxxs'>
                <a href='/' target='_blank' rel='noreferrer'>
                  Online Services
                </a>
                <a href='/' target='_blank' rel='noreferrer'>
                  Community Rules
                </a>
                <a href='/' target='_blank' rel='noreferrer'>
                  Newsletter
                </a>
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
          <a href='/' target='_blank' rel='noreferrer'>
            Terms of Services
          </a>
          <a href='/' target='_blank' rel='noreferrer'>
            Privacy Policy
          </a>
          <a href='/' target='_blank' rel='noreferrer'>
            Store Refund Policy
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
