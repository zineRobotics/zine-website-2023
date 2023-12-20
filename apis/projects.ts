import { db } from '../firebase';
import { DocumentReference, addDoc, collection, doc } from "firebase/firestore"

const usersCollection = collection(db, "users")
const userTasksCollection = collection(db, 'userTasks')
const tasksCollection = collection(db, "tasks");

export const createProject = async (taskid: string, users: string[]) => {
    return addDoc(userTasksCollection, {
        checkpoints: [],
        status: 'Assigned',
        task: doc(tasksCollection, taskid),
        users: users.map(u => doc(usersCollection, u))
    })
}