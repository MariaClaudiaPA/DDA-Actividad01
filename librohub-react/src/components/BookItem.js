// src/components/BookItem.js
import React from 'react';
import './BookItem.css';


const BookItem = ({ book, onEdit, onDelete }) => {
    const handleDelete = () => {
        onDelete(book.id); 
    };

    const handleEdit = () => {
        onEdit(book);
    };

    return (
        <div className="book-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <div className="actions">
                <button onClick={handleEdit}>Editar</button>
                <button onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    );
};

export default BookItem;
