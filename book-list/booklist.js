class Book{

    constructor(title, genre, author){
       this.title = title
       this.genre = genre
       this.author = author
       this.read = false
       this.readDate = null
    }

    markIsRead(){
        this.read = true
        this.readDate = new Date(Date.now())
    }

    // get read(){
    //     return this.read
    // }

    // set read(read){
    //     this.read = read
    // }



}

class BookList{
    constructor(){
        this.booklist = []
        this.numberBookRead = 0
        this.indexCurrentBook = undefined
    }

    get currentBook(){
        return this.booklist[this.indexCurrentBook]
    }

    get nextBook(){
        return this.booklist[this.indexCurrentBook + 1]
    }

    get lastBook(){
        return this.booklist[this.indexCurrentBook - 1]
    }
    

    addBook(book){
        this.booklist = [...this.booklist, book]

        if(this.booklist.length === 1){
            this.indexCurrentBook = 0
        }
    }

    finishCurrentBook(){
        this.currentBook.markIsRead()
        this.numberBookRead += 1
        this.indexCurrentBook =+ 1
    }

}

const book1 = new Book("Teste", "terror", "Murilo")
const book2 = new Book("Teste2", "comedeia", "lala")
const book3 = new Book("Teste3", "ficcao", "alal")
// book1.read = true

const bookList = new BookList()
bookList.addBook(book1)
// console.log(bookList)
bookList.addBook(book2)
bookList.addBook(book3)


bookList.finishCurrentBook()
bookList.finishCurrentBook()
console.log(bookList.currentBook)
console.log(bookList.nextBook)
console.log(bookList.lastBook)

