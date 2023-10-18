import { db } from '../firebase';
import { collection, addDoc, getDoc, DocumentReference, Timestamp, updateDoc, doc, deleteDoc, getDocs } from "firebase/firestore";
import { createRoom, getRoom } from './room';

const tasksCollection = collection(db, "tasks");
const userTasksCollection = collection(db, "userTasks")

export const fetchTasks = async () => {
    return getDocs(tasksCollection)
}

interface ITaskCreateData {
    title: string;
    type: 'Individual' | 'Team';
    link: string;
    subheading: string;
    description: string;
    submissionLink: string;
    dueDate: Date;
    mentors: string[];
    createRoom: boolean;
    roomName?: string; // if createRoom is true
}

export const createTask = async (data: ITaskCreateData) => {
    var roomid = null;
    if (data.createRoom == false && data.roomName) roomid = getRoom(data.roomName)

    const taskData = {
        ...data,
        createdDate: Timestamp.fromDate(new Date()),
        roomid,
        dueDate:  Timestamp.fromDate(data.dueDate)
    }
    
    return addDoc(tasksCollection, taskData)
}

export const editTask = async (taskid: string, data: ITaskCreateData) => {
    var roomid = null;
    if (data.createRoom == false && data.roomName) roomid = getRoom(data.roomName)

    const taskData = {
        ...data,
        createdDate: new Date(),
        roomid,
        dueDate:  data.dueDate
    }

    console.log(taskData, taskid)
    return updateDoc(doc(tasksCollection, taskid), taskData)
}

export const deleteTask = async (taskid: string) => {
    return deleteDoc(doc(tasksCollection, taskid))
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