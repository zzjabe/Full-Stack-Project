export interface User {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  category: "Normal" | "Platinum";

  readingList: string[];
  favouriteList: string[];
}
