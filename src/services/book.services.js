import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query
} from "firebase/firestore";


const bookCollectionRef = collection(db, "Canteen_Slots");
const phoneRef = collection(db, "Admin");
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
    // return getDocs(bookCollectionRef);
    const q = query(
      collection(db, "Canteen_Slots"),
      orderBy("date","desc")
      
    );
    return getDocs(q);
  };

  getBook = (id) => {
    const bookDoc = doc(db, "Canteen_Slots", id);
    return getDoc(bookDoc);
  };  

  getPhone = () => {
    return getDocs(phoneRef);
  }

}

export default new BookDataService();
