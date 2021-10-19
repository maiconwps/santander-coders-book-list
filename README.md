# santander-coders-team

**Grupo: Alan Patrik, Fernanda Faria, Maicon Pantoja e Yuri March**



### Class Book:


Contém como atributos: *<b>título, gênero</b>* e *<b>autor</b>* do livro.

O método `markAsRead()` define se um livro foi lido e adiciona a este livro uma data de leitura.


### Class Booklist:

* `bookList` : array com todos os livros.
* `numBooksRead` : número de livros já lidos.
* `numBooksUnread` : número de livros não lidos.
* `refNextBookRead` : referência ao próximo livro a ser lido (objeto).
* `refLastBookRead` : referência ao último livro que foi lido (objeto).
* `refCurrentBookRead` : referência ao livro que está sendo lido no momento (objeto).
* `indexCurrentBook` : índice do livro que está sendo lido no momento.

**Métodos:**

* `get currentBook()` : retorna o livro que está sendo lido atualmente.
* `get nextBook()` : retorna o próximo livro a ser lido. Se não houver mais livros a serem lidos, retorna a mensagem "*No more books*".
* `get lastBook()` : retorna o último livro lido. Se não houver livros lidos anteriormente, retorna a mensagem "*This is your first book*."
* `listAll()` : lista todos os livros (lidos e não lidos).



* `addBook(book)` : adiciona um livro na bookList (esse livro inicialmente é classificado como não lido). Se esse for o primeiro livro a ser adicionado, então esse livro será considerado o atual (currentBook).


* `finishCurrentBook()` : marca o livro atual como lido, incrementa o número de livros lidos e decrementa o número de livros não lidos. Além disso, transforma o próximo livro não lido em currentBook.





**Métodos adicionais:**
* `searchByGenre(genre)`: filtra livros através do gênero.
* `searchByAuthor(author)`: filtra livros através do autor ou autora.
* `searchByTitle(title)` : filtra livros através do título.
* `listAllBooksRead()` : retorna todos os livros que ja foram lidos.
* `listAllUnreadBooks()` : retorna os livros que ainda não foram lidos.

