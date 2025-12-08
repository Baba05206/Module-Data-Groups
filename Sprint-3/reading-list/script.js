// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function readingList() {
  const orderedList = document.querySelector("#reading-list");

  // Base condition: check if books array is empty
  if (!books || books.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent =
      "No books in your reading list yet. Add some books to get started!";
    orderedList.appendChild(emptyMessage);
    return;
  }

  for (const book of books) {
    const listItem = document.createElement("li");

    const bookImage = document.createElement("img");
    bookImage.src = book.bookCoverImage;
    bookImage.alt = "Book cover for " + book.title;

    const bookInfo = document.createElement("p");
    bookInfo.textContent = book.title + " by " + book.author;

    const statusBadge = document.createElement("span");
    statusBadge.className = "status-badge";

    if (book.alreadyRead) {
      listItem.classList.add("read");
      statusBadge.textContent = "✓";
    } else {
      listItem.classList.add("notRead");
      statusBadge.textContent = "○";
    }

    listItem.appendChild(bookImage);
    listItem.appendChild(bookInfo);
    listItem.appendChild(statusBadge);

    orderedList.appendChild(listItem);
  }
}

readingList();
