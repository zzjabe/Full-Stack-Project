# Sprint 3 Architecture (Riya Jargha)

This document explains the new Sprint 3 structure I added 
to the Agile Library App. The goal of Sprint 3 is to make 
the front-end easier to maintain by keeping UI code separate
from rules and data storage.

## Principles Followed

- Hooks: store UI state and give the page simple functions to call
- Services: contain “rules” and “steps” 
- Repositories: store data and provide basic functions to read/update it (CRUD)

# Search Feature

## Hook: useSearch

1) What does it do?
- Stores the search text the user is typing (`keyword`)
- Lets the UI update that text (`setKeyword`)

2) Why is this logic here?
- The search text is **UI state**
- Keeping it inside a hook allows reuse across multiple components
- Avoids duplicating useState logic in different places

3) Where is it used?
-SearchBar (input field)
-SearchResultPage (to synchronize URL query and UI state)


## Service: searchService

 1) What does it do?
- Contains the search rule:
- keyword must be at least 2 characters after trimming spaces

2) Why is this logic here?
- This is a rule, not UI state
- Keeping rules in one place avoids repeating the same check in multiple components

### 3) Where is it used?
- Called before running a search to decide if searching should happen


## Why there is no searchRepo
- Search does not store or fetch its own data
- Search only looks through existing book data and filters it
- Repositories are most useful when you have a data source (test data now, API later)
- So for Sprint 3, search only needed:
  - a hook for UI state (`useSearch`)
  - a service for the rule (`searchService`)

# User Management Feature

## Hook: useUsers

### 1) What does it do?
- Manages the list of users for the UI 
- Provides simple actions for the page:
  -addUser
  - deleteUser
  - resetUsers
- Refreshes the UI after changes so React rerrenders

### 2) Why is this logic here?
- The users list shown on screen is **UI state**
- The hook is the bridge between pages and the service
- Pages stay clean: they just display `users` and call functions

### 3) Where is it used?
- Used in the UsersPage

## Service: userService

### 1) What does it do?
- Controls the steps for user actions
- When adding a user:
- Generates a short sequential ID (U1, U2, U3…)
- Builds a full User object
- Saves it using the repository

### 2) Why is this logic here?
-ID generation and object preparation are application rules
-The service keeps the repository simple
-The service keeps UI components clean

### 3) Where is it used?
- Used by the useUsers hook

## Repository: userRepo

### 1) What does it do?
- Stores the users list using test data (initialUsers)
- Provides the CRUD operations:
  - getUsers()
  - addUser(user)
  - deleteUser(id)
  - resetUsers()

### 2) Why is this logic here?
-the repository is responsible only for data storage
- UI components should not directly modify stored data
- This allows easy replacement with API calls later

### 3) Where is it used?
- Used only by userService
- Pages/components do NOT call userRepo directly
