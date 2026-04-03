# Activity Feature Architecture Grady Mooney

1. What does this hook/service/repository do?

The useActivity hook manages the Activity page state in React.
It loads the made activity records and then has functions to add, remove, and reset the activity entries.

The activityService handles the application logic related to activity logging.

The activityRepo is responsible for saving and retrieving the data into local storage.



2. How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

This feature follows a layered architecture pattern:

UI Layer -> displays activity records and handles user interaction.

Hook Layer -> controls React state and connects UI actions to services.

Service Layer -> contains logic for creating and managing activity entries.

Repository Layer -> deals only with data storage and retrieval.

Seperating these responsibilities it helps in reading the code,
debugging the code and keeping everything organized.

3. Where is this implementation made use of in the project and how?

The useActivity hook, activityService and the Repo are all used in the Activity page of the library.

whenever the user adds, deletes or resets the book list in Pop Books or New added
it changes the activity record so then it updates the list in the activity page.


# Addbook feature
1.
The useAddBook form hook manages the Add Book form state in React.
It is storing the einput values and then valadating them.
Calls the on addBook function when the form is filled out and submitted.

AddBookForm coomponent is responsible for displaying the form UI.

The hook gives the component everything it needs to run the form, including the input values and the submit logic.

The bookService handles the application logic for creating a new book entry.
The bookRepo is responsible for saving and retrieving book data using localStorage.

2.
This feature follows a layered architecture pattern:

UI Layer -> AddBookForm displays the inputs and handles user interaction.

Hook Layer -> useAddBookForm manages form state, validation, and submission logic.

Service Layer -> bookService creates and prepares new book entries.

Repository Layer -> bookRepo handles data storage and retrieval.

Separating these responsibilities makes the code easier to read, maintain, and debug.

3.
The useAddBookForm hook is used inside the AddBookForm.tsx.

When the form is submitted it is validated with the hook and the data calls onAddBook.
The onAddBook function comes from the book management hook, which then 
calls the service layer and repository to save the new book and update the displayed list.