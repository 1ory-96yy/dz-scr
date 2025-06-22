const bookList = document.getElementById('bookList');
        const books = bookList.getElementsByTagName('li');
        let selectedBook = null;
        for (let book of books) {
            book.addEventListener('click', function() {
                if (selectedBook) {
                    selectedBook.classList.remove('selected');
                }
                this.classList.add('selected');
                selectedBook = this;
            });
        }