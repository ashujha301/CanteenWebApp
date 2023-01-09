import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "Canteen_Slots");
class BookDataService {
  details = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "Canteen_Slots", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "Canteen_Slots", id);
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };

  getBook = (id) => {
    const bookDoc = doc(db, "Canteen_Slots", id);
    return getDoc(bookDoc);
  };
  
}

export default new BookDataService();
