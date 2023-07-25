import { db } from '../firebase';
import { collection, addDoc, getDoc, DocumentReference } from "firebase/firestore";
import { createRoom } from './room';

const tasksCollection = collection(db, "tasks");
const userTasksCollection = collection(db, "userTasks")
const roomsCollection = collection(db, "rooms")

interface ITaskCreateData {
    title: string;
    type: 'Individual' | 'Team';
    link: string;
    subheading: string;
    description: string;
    dueDate: string;
    mentors: DocumentReference[];
    createRoom: boolean;
    roomName?: string; // if createRoom is true
    roomid?: DocumentReference;
}

export const createTask = async (taskData: ITaskCreateData) => {
    return addDoc(tasksCollection, taskData)
}


interface ITaskSelectData {
    taskid: DocumentReference;
    members: DocumentReference[];
}
export const selectTask = async (createTaskData: ITaskSelectData) => {
    let result = await getDoc(createTaskData.taskid)
    const task = result.data()
    if (!task) return

    let roomid = null;
    if (task.createRoom) {
        const room = await createRoom(task.roomName, createTaskData.members)
        roomid = room.id
    } else {
        roomid = task.roomid;
    }

    return addDoc(userTasksCollection, {
        status: "Assigned",
        room: roomid,
        task: createTaskData.taskid,
        dueDate: task.dueDate,
        users: createTaskData.members,
        submissionLinks: [],
        checkpoints: [],
    })
}


export const assignTask = async (taskData: ITaskSelectData) => {

}