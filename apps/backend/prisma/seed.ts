import "dotenv/config";
import { prisma } from "../src/api/v1/db/prisma";
import { UserCategory } from "@prisma/client";

async function main() {
  const users = [
    {
      id: "U1",
      firstName: "John",
      lastName: "Smith",
      createdAt: new Date("2024-01-03T10:20:00Z"),
      category: UserCategory.Normal,
    },
    {
      id: "U2",
      firstName: "Emily",
      lastName: "Johnson",
      createdAt: new Date("2024-01-05T09:15:00Z"),
      category: UserCategory.Platinum,
    },
    {
      id: "U3",
      firstName: "Michael",
      lastName: "Brown",
      createdAt: new Date("2024-01-10T14:30:00Z"),
      category: UserCategory.Normal,
    },
  ];

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });

  const readings = [
    { userId: "U1", bookId: "n1" },
    { userId: "U1", bookId: "n3" },
    { userId: "U2", bookId: "n2" },
    { userId: "U2", bookId: "n4" },
    { userId: "U3", bookId: "n3" },
    { userId: "U3", bookId: "n4" },
  ];

  await prisma.reading.createMany({
    data: readings,
    skipDuplicates: true,
  });

  const favourites = [
    { userId: "U1", bookId: "p1" },
    { userId: "U1", bookId: "p5" },
    { userId: "U2", bookId: "p2" },
    { userId: "U2", bookId: "p6" },
    { userId: "U2", bookId: "p10" },
  ];

  await prisma.favourite.createMany({
    data: favourites,
    skipDuplicates: true,
  });

  const books = [
    {
      id: "n1",
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      classification: "New Added",
      category: "Programming",
      cover: "https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL.jpg",
      description: "A handbook of agile software craftsmanship.",
    },
    {
      id: "n2",
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      year: 1999,
      classification: "New Added",
      category: "Programming",
      cover: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
      description: "Your journey to mastery.",
    },
    {
      id: "n3",
      title: "Atomic Habits",
      author: "James Clear",
      year: 2018,
      classification: "New Added",
      category: "Self-help",
      cover: "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL.jpg",
      description:
        "An easy & proven way to build good habits and break bad ones.",
    },
    {
      id: "n4",
      title: "Deep Work",
      author: "Cal Newport",
      year: 2016,
      classification: "New Added",
      category: "Productivity",
      cover: "https://covers.openlibrary.org/b/id/10192502-L.jpg",
      description: "Rules for focused success in a distracted world.",
    },
    {
      id: "n5",
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      year: 2017,
      classification: "New Added",
      category: "Computer Science",
      cover: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.jpg",
      description:
        "The big ideas behind reliable, scalable, and maintainable systems.",
    },
    {
      id: "p1",
      title: "1984",
      author: "George Orwell",
      year: 1949,
      classification: "Pop Books",
      category: "Fiction",
      cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      description:
        "A dystopian social science fiction novel and cautionary tale.",
    },
    {
      id: "p2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      classification: "Pop Books",
      category: "Fiction",
      cover: "https://covers.openlibrary.org/b/id/9871040-L.jpg",
      description: "A novel about racial injustice in the Deep South.",
    },
    {
      id: "p3",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      classification: "Pop Books",
      category: "Classic",
      cover: "https://covers.openlibrary.org/b/id/6519015-L.jpg",
      description: "A story of the mysteriously wealthy Jay Gatsby.",
    },
    {
      id: "p4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      classification: "Pop Books",
      category: "Classic",
      cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
      description: "A romantic novel of manners.",
    },
    {
      id: "p5",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      classification: "Pop Books",
      category: "Fantasy",
      cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
      description: "Bilbo Baggins' unexpected journey.",
    },

    {
      id: "p6",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997,
      classification: "Pop Books",
      category: "Fantasy",
      cover: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
      description: "The first book of Harry Potter series.",
    },
    {
      id: "p7",
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
      classification: "Pop Books",
      category: "Fantasy",
      cover: "https://covers.openlibrary.org/b/id/8059256-L.jpg",
      description: "An epic high-fantasy novel.",
    },
    {
      id: "p8",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      classification: "Pop Books",
      category: "Classic",
      cover: "https://covers.openlibrary.org/b/id/8235116-L.jpg",
      description: "A story about teenage alienation.",
    },
  ];

  await prisma.book.createMany({
    data: books,
    skipDuplicates: true,
  });

  const activities = [
    {
      action: "ADD_BOOK",
      bookTitle: "Holes",
      classification: "New Added",
      createdAt: new Date(),
    },
    {
      action: "ADD_BOOK",
      bookTitle: "Sopranos",
      classification: "Pop Books",
      createdAt: new Date(),
    },
  ];

  await prisma.activity.createMany({
    data: activities,
    skipDuplicates: true,
  });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
