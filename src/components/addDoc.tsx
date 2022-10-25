import React from 'react'
import { doc, setDoc } from "firebase/firestore"
import { db } from '../utils/firebase'

const AddDoc = () => {
    const addDoc = async () => {
        // create a new document with a random id
        const docRef = doc(db, "users", "alovelace")
        // set the data for the document
        await setDoc(docRef, {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
    }
    return (
        <button onClick={addDoc}>Add Doc</button>
    )
}

export default AddDoc