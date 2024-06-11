/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 


const ListBooksComponent = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get('http://localhost:8080/books');
         setBooks(response.data);
       } catch (error) {
         console.error('Error fetching books:', error);
       }
     };

     fetchData();
   }, []);

   return (
    <div className="container mt-5 main-content">
      <h1 className="text-center">Latest Books</h1>
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5">
        {books.map(book => (
          <div className="col-md-3 mb-2" key={book.id}>
          <div className="card">
            <img src={book.imageUrl} className="img-fluid" alt={book.imageUrl} />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">Published Year: {book.publishedYear}</p>
              <p className="card-text">Price: ${book.price.toFixed(2)}</p>
              <a href="#" className="btn btn-primary" style={{ marginRight: '10px' }}>Buy</a>
              <Link to={`/books/${book.id}`} className="btn btn-secondary ml-4">View Details</Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default ListBooksComponent;
