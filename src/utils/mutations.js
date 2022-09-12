import { addDoc, doc, setDoc, updateDoc, deleteDoc, collection } from "firebase/firestore";
import { db } from './firebase';

// Functions for database mutations - Firebase

export const emptyEntry = {
   name: "",
   link: "",
   description: "",
   user: "",
   category: 0,
}

// add entry
export async function addEntry(entry) {
   await addDoc(collection(db, "entries"), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      userid: entry.userid,
   });
}

// update entry
export async function updateEntry(entry, updatedEntry) {
   await updateDoc(doc(db, "entries", entry.id), {
      name: updatedEntry.name,
      link: updatedEntry.link,
      description: entry.description,
      user: entry.user,
      category: updatedEntry.category,
      userid: entry.userid,
   })
}

// delete entry
export async function deleteEntry(entry) {
   await deleteDoc(doc(db, "entries", entry.id));
}