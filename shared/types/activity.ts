export type ActivityAction =| "ADD_BOOK"| "DELETE_BOOK"| "RESET_BOOKS";

export interface Activity {
    id: string;
    action: ActivityAction;
    bookTitle?: string; 
    classification?: string; 
    createdAt: string;
}