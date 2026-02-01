export interface User {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  category: "Normal" | "Platinum";
  readingList: string[];
  favouriteList: string[];
}

export const initialUsers: User[] = [
  {
    id: "U1",
    firstName: "John",
    lastName: "Smith",
    createdAt: "2024-01-03T10:20:00Z",
    category: "Normal",
    readingList: ["n1", "n3"],
    favouriteList: ["p1", "p5"],
  },
  {
    id: "U2",
    firstName: "Emily",
    lastName: "Johnson",
    createdAt: "2024-01-05T09:15:00Z",
    category: "Platinum",
    readingList: ["n2", "n4", "n5"],
    favouriteList: ["p2", "p6", "p10"],
  },
  {
    id: "U3",
    firstName: "Michael",
    lastName: "Brown",
    createdAt: "2024-01-10T14:30:00Z",
    category: "Normal",
    readingList: ["n3", "n4"],
    favouriteList: ["p3"],
  },
  {
    id: "U4",
    firstName: "Sarah",
    lastName: "Davis",
    createdAt: "2024-02-01T08:00:00Z",
    category: "Normal",
    readingList: ["n1"],
    favouriteList: ["p4", "p10"],
  },
  {
    id: "U5",
    firstName: "David",
    lastName: "Wilson",
    createdAt: "2024-02-03T11:45:00Z",
    category: "Platinum",
    readingList: ["n2", "n5"],
    favouriteList: ["p7", "p14"],
  },
  {
    id: "U6",
    firstName: "Emma",
    lastName: "Moore",
    createdAt: "2024-02-10T16:20:00Z",
    category: "Normal",
    readingList: ["n3"],
    favouriteList: ["p9"],
  },
  {
    id: "U7",
    firstName: "James",
    lastName: "Taylor",
    createdAt: "2024-02-18T13:10:00Z",
    category: "Normal",
    readingList: ["n4"],
    favouriteList: ["p8"],
  },
  {
    id: "U8",
    firstName: "Daniel",
    lastName: "Anderson",
    createdAt: "2024-03-01T10:00:00Z",
    category: "Platinum",
    readingList: ["n1", "n2", "n5"],
    favouriteList: ["p11", "p12", "p15"],
  },
];
