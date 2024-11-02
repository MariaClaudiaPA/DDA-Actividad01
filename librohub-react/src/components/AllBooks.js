// src/components/AllBooks.js
import React from 'react';
import { useSelector } from 'react-redux';
import './AllBooks.css'; 

const AllBooks = () => {
    const books = useSelector((state) => state.books); 

    return (
        <div className="all-books-container">
            <h2>Todos los Libros</h2>
            {books.length === 0 ? (
                <p>No hay libros para mostrar.</p>
            ) : (
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            <h3>{book.title}</h3>
                            <p>Autor: {book.author}</p>
                            <p>Descripción: {book.description}</p> 
                            <p>ID: {book.id}</p> 

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllBooks;
