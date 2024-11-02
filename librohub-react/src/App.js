// src/App.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { addBook, updateBook, deleteBook } from './redux/bookSlice';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import AllBooks from './components/AllBooks';
import LinkedList from './dataStructures/LinkedList';
import NavBar from './components/NavBar'; 
import './App.css';

let idCounter = 0;
const bookList = new LinkedList(); 

function App() {
    const dispatch = useDispatch();
    const [currentBook, setCurrentBook] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSaveBook = (book) => {
        if (currentBook) {
            dispatch(updateBook({ ...currentBook, ...book }));
            bookList.update({ ...currentBook, ...book });
            setCurrentBook(null);
        } else {
            const newBook = { id: idCounter++, ...book };
            dispatch(addBook(newBook)); 
            bookList.add(newBook); 
        }
    };

    const handleEditBook = (book) => {
        setCurrentBook(book);
    };

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id)); 
        bookList.delete(id); 
    };

    const filteredBooks = searchTerm 
        ? [bookList.searchByTitle(searchTerm)] 
        : bookList.getAll(); 

    return (
        <div className="app-container">
            <NavBar /> 
            <h1 className="app-title">LibroHub</h1>
            <BookForm onSave={handleSaveBook} currentBook={currentBook} />
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar por título"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <BookList books={filteredBooks.filter(book => book !== null)} onEdit={handleEditBook} onDelete={handleDeleteBook} />
            <Routes>
                <Route path="/all-books" element={<AllBooks />} />
            </Routes>
        </div>
    );
};

export default App;
