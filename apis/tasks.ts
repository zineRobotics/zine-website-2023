import axios from '../api/axios';
import { db } from '../firebase';
import { collection, addDoc, getDoc, DocumentReference, Timestamp, updateDoc, doc, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { createRoom, getRoom, IRoomCreateData } from './room';
import { IUserProject, createProject, deleteProject } from './projects';
import sendFCMMessage from './sendFcm';

export const tasksCollection = collection(db, "tasks");

const tasksURL = "/tasks";

interface ITaskCreateData {
    title: string;
    subtitle: string;
    description: string;
    dueDate: Date;
    psLink: string;
    submissionLink: string;
    type: "Team" | "Individual";
    recruitment: number;
    visible: boolean;
}
export interface ITaskData extends ITaskCreateData {
    id: number;
    createdDate: Date;
}
export const fetchTasks = async () => {
    return getDocs(tasksCollection)
}



// export const createTask = async (data: ITaskCreateData) => {
//     var roomid = null;
//     if (data.createRoom == false && data.roomName) roomid = getRoom(data.roomName)

//     const taskData = {
//         ...data,
//         createdDate: Timestamp.fromDate(new Date()),
//         roomid,
//         dueDate:  Timestamp.fromDate(data.dueDate)
//     }
    
//     return addDoc(tasksCollection, taskData)
// }

export const createTask = async (data: ITaskCreateData): Promise<ITaskData|undefined> => {
    try{
        const response = await axios.post(tasksURL + "/create", data);
        if(response.status === 200){
            return response.data;
        }
        return undefined;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
}

export const editTask = async (data: ITaskData): Promise<ITaskData|undefined> => {
    try{
        const response = await axios.post(tasksURL + "/edit", data);
        if(response.status === 200){
            return response.data;
        }
        return undefined;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
}

export const deleteTask = async (taskid: number[]): Promise<number|undefined> => {
    try{
        const response = await axios.post(tasksURL + "/delete", taskid);
        return response.status;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
}

const createTaskRoom = async (task: ITaskData, groups: IUser[][]) => {
    const mentorSnapshot = await getUserEmailIn(task.mentors)
    const mentors = mentorSnapshot.docs.map(d => d.data() as IUser)
    console.log('mentors', mentors)

    //see how to include option of creating room. for now each task creates room with no choice
    // if (task.createRoom) {
        // Create room automatically
        return Promise.all(groups.map(async (g) => {
            console.log('group', g)
            const roomName = task.roomName || `${task.title.split(' ')[0]}-${g[0].email.slice(4).split('@')[0]}`
            let roomData: IRoomCreateData = {
                name: roomName,
                type: 'project',
                description: '', //figure out a way where description works
                dpUrl: '',
            }
            const room = await createRoom(roomData)
            const members = g.concat(mentors)
    
            await Promise.all(members.map(m => addUserRoom(m, [roomName], [room.id])))
            return sendFCMMessage(roomName, `Project Room Created`, `Ask your doubts related to ${task.title} project to your mentors in this channel`)
        }))
    // } 
    // else {
    //     // Add user to already existing room
    //     const room = await getRoom(task.roomName!)
    //     return Promise.all(groups.map(async (g) => {
    //         await Promise.all(g.map(async u => await addUserRoom(u, [task.roomName!], [room.docs[0].id])))
    //     }))
    // }
}

export const assignTask = async (task: ITaskData, users: IUser[]) => {
    if (!users.length) return
    if (task.type === 'Individual') {
        const projects = await Promise.all(users.map(async u => await createProject(task.id, [u.uid])))
        
        // All in seperate groups
        await createTaskRoom(task, users.map(u => [u]))
        return projects
    } else {
        const projects = await createProject(task.id, users.map(u => u.uid))

        // All in one group
        await createTaskRoom(task, [users])
        return projects
    }
}