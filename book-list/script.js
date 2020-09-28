const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const isbnInput = document.querySelector('#isbn')
// Book class: Represent a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

// UI class: Handles Storage
class UI {
  static displayBooks() {
    const StoreBooks = Store.getBooks()

    const books = StoreBooks

    books.forEach((book) => UI.addBookToList(book))
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list')

    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
    `

    list.appendChild(row)
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove()
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div')
    div.className = `alert alert-${className}`
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')
    container.insertBefore(div, form)

    // vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000)
  }

  static clearField() {
    titleInput.value = ''
    authorInput.value = ''
    isbnInput.value = ''
  }
}

// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books
    if (localStorage.getItem('books') === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }

    return books
  }

  static addBook(book) {
    const books = Store.getBooks()
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
  }

  static removeBook(isbn) {
    const books = Store.getBooks()

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1)
      }
    })

    localStorage.setItem('books', JSON.stringify(books))
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', e => {
  e.preventDefault()

  // get form values
  const title = titleInput.value
  const author = authorInput.value
  const isbn = isbnInput.value

  // validate
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields', 'danger')
  } else {
    // instatiate book
    const book = new Book(title, author, isbn)
  
    // add book to UI
    UI.addBookToList(book)

    // add book to storage
    Store.addBook(book)

    // show success message
    UI.showAlert('Book Added', 'success')
  
    // clear fields
    UI.clearField()
  }
})

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', e => {
  // remove book from UI
  UI.deleteBook(e.target)

  // remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent) // get isbn from previous td

  // show success message
  UI.showAlert('Book Removed', 'success')
})
