const searchBooks = () => {
    const query = document.getElementById('search').value;
    const results = document.getElementById('book-results');
    results.innerHTML = '';

    if (!query.trim()) {
        results.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }


    const books = [{
            title: 'The Art of War',
            author: 'Sun Tzu',
            image: 'THE ART OF WAR.jpg'
        },
        {
            title: '1984',
            author: 'George Orwell',
            image: '1984.jpg'
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            image: 'to kill a mockingbird.jpg'
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            image: 'the great gatsby.jpg'
        },
        {
            title: 'ألف ليلة وليلة',
            author: 'Anonymous',
            image: 'one-thousand-and-one-nights.jpg'
        },
        {
            title: 'رواية عزازيل',
            author: 'يوسف زيدان',
            image: 'azazel.jpg'
        },
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            image: 'pride-and-prejudice.jpg'
        },
        {
            title: 'Moby Dick',
            author: 'Herman Melville',
            image: 'moby-dick.jpg'
        }
    ];


    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {

            const bookContainer = document.createElement('div');
            bookContainer.style.margin = '20px';
            bookContainer.style.textAlign = 'center';


            const bookImage = document.createElement('img');
            bookImage.src = book.image;
            bookImage.alt = book.title;
            bookImage.style.width = '150px';
            bookImage.style.height = '200px';
            bookImage.style.borderRadius = '10px';
            bookImage.style.boxShadow = '0 0 10px #76e1ff';
            bookImage.style.cursor = 'pointer';
            bookImage.addEventListener('click', () => {

                window.location.href = `book.html?title=${encodeURIComponent(book.title)}`;
            });


            const bookInfo = document.createElement('p');
            bookInfo.textContent = `${book.title} by ${book.author}`;
            bookInfo.style.color = '#76e1ff';


            bookContainer.appendChild(bookImage);
            bookContainer.appendChild(bookInfo);


            results.appendChild(bookContainer);
        });
    } else {
        results.innerHTML = '<p>No books found.</p>';
    }
};
