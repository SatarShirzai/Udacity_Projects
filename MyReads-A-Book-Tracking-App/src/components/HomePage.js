import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
//import SearchBook from './search'

class HomePage extends Component {


    render() {
        return <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
                <span className="fork">
                    <a href="https://github.com/SatarShirzai/Udacity_Projects/fork" target="_blank">
                        <i className="fab fa-github"></i> Fork
                    </a>
                </span>
                <span className="fork">
                    <a href="https://github.com/SatarShirzai/Udacity_Projects/tree/master/MyReads-A-Book-Tracking-App" target="_blank">
                        <i className="fab fa-github"></i> Github
                    </a>
                </span>
            </div>
            <div className="list-books-content">
                <BookShelf updateShelf={this.props.updateShelf} shelf="Currently Reading" books={this.props.books.filter(book => book.shelf === 'currentlyReading')} />,
                <BookShelf updateShelf={this.props.updateShelf} shelf="Want to Read" books={this.props.books.filter(book => book.shelf === 'wantToRead')} />,
                <BookShelf updateShelf={this.props.updateShelf} shelf="Read" books={this.props.books.filter(book => book.shelf === 'read')} />
                
            </div>


            <div className="open-search">
                <Link
                    to="/search">
                    Add a book
                </Link>
            </div>
        </div>
    }
}

export default HomePage;