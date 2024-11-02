import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
    return (
        <ul>
            {books.map((book) => (
                <li key={book.id} className="book-item">
                    <div>
                        <h3>{book.title}</h3>
                        <p>Autor: {book.author}</p>
                        <p>ID: {book.id}</p> {/* Mostrar el ID del libro */}
                        <p>{book.description}</p>
                    </div>
                    <div className="actions">
                        <button onClick={() => onEdit(book)}>Editar</button>
                        <button onClick={() => onDelete(book.id)}>Eliminar</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default BookList;
