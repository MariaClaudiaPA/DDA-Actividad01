// src/components/BookForm.js
import React, { useState, useEffect } from 'react';
import './BookForm.css'

const BookForm = ({ onSave, currentBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentBook) {
            setTitle(currentBook.title);
            setAuthor(currentBook.author);
            setDescription(currentBook.description);
        }
    }, [currentBook]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, author, description });
        setTitle('');
        setAuthor('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <textarea placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default BookForm;
