# useBook hook

1. What does this hook/service/repository do?

The useBook hook is responsible for managing the UI state of books inside React.
It connects the React components to the business logic layer.

The bookService contains the business logic of the application.

The bookRepo is responsible for data storage.

2. How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

There are 4 layers principle. Each layer has a single responsibility:
UI Layer → handles user interaction and rendering: like reset confirm.
Hook Layer → manages React state: like update react.
Service Layer → contains business rules like add books logic.
Repository Layer → handles data persistence: like local storage feature.

3. Where is this implementation made use of in the project and how?

The useBook hook, bookService and bookRepo are used in the NewAdded page now. It can also be used in the PopBooks Page or other similar pages. That's why we want to do that. It ensures the clean code organization, easier debugging and better scalability.
