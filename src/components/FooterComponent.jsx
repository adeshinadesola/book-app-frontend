/* eslint-disable no-unused-vars */
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComponent = () => {
    return (
      <footer className="bg-dark text-white">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-3">
              <h5 className="mb-4">Learn On</h5>
              <p>
              Learn On is your ultimate destination for exploring a vast array of educational resources. With a user-friendly interface and a wide range of topics, our platform empowers learners to discover, engage, and excel.Student, educator, or lifelong learner, dive into our curated collection of courses, books, and articles to embark on your learning journey today.
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="mb-4">Products</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Become Author</a></li>
                <li><a href="#" className="text-white text-decoration-none">Enquier</a></li>
                <li><a href="#" className="text-white text-decoration-none">BrandFlow</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="mb-4">Contact</h5>
              <p><i className="fas fa-building me-3"></i>5700 Yonge St, Toronto ON, M2M 4K5,Ca</p>
              <p><i className="fas fa-envelope me-3"></i> Adeolaadeshina112@outlook.com</p>
              <p><i className="fas fa-phone me-3"></i>+1 437 236 1136</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            <div className="col-md-2">
              <h5 className="mb-4">Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white"><i className="fab fa-facebook-f me-2"></i></a></li>
                <li><a href="#" className="text-white"><i className="fab fa-twitter me-2"></i></a></li>
                <li><a href="#" className="text-white"><i className="fab fa-google me-2"></i></a></li>
                <li><a href="#" className="text-white"><i className="fab fa-instagram me-2"></i></a></li>
                <li><a href="#" className="text-white"><i className="fab fa-linkedin-in me-2"></i></a></li>
                <li><a href="#" className="text-white"><i className="fab fa-github me-2"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3 bg-secondary">
          © 2024 Learn On. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default FooterComponent;
  