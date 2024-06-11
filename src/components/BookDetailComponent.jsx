/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookDetailComponent = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      const fetchBook = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/books/${id}`);
          setBook(response.data);
        } catch (error) {
          console.error('Error fetching book:', error);
        }
      };
  
      fetchBook();
    }, [id]);
    console.log(book);
  
    const handleFreeDownload = async () => {
        try {
          // Fetch the PDF URL directly from the backend
          const response = await axios.get(`http://localhost:8080/books/${id}/pdf-url`);
          const pdfUrl = response.data;
      
          // Use the fetched PDF URL to initiate the download
          const anchor = document.createElement('a');
          anchor.href = pdfUrl;
          anchor.target = '_blank'; // Open link in a new tab
          anchor.download = ``; // Set the download attribute to force download
          anchor.click(); // Programmatically trigger the anchor click
        } catch (error) {
          console.error('Error fetching PDF URL:', error);
        }
        console.log(book.title)
      };

        if (!book) {
            console.error('Book data is not available');
            return;
        }
  
  return (
    <div className="container mt-5 border p-4">
      <div className="row">
        <div className="col-md-6">
          <h1>{book.title}</h1>
          <img className="img-fluid mb-3" src={book.imageUrl} alt={book.title} style={{ maxWidth: '300px' }} />
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Edition:</strong> {book.edition}</p>
          <p><strong>Published Year:</strong> {book.publishedYear}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Total Pages:</strong> {book.totalPages}</p>
          <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <button className="btn btn-primary me-2" type="button">Buy</button>
          {/* Add onClick event handler to trigger free download */}
          <button className="btn btn-success" type="button" onClick={handleFreeDownload}>Free Download</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailComponent;
