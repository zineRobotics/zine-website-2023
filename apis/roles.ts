import { db, storage } from '../firebase';
import { deleteObject, ref } from 'firebase/storage';
import { collection, query, where, getDocs, DocumentReference, addDoc, orderBy, limit, doc, Timestamp, deleteDoc, updateDoc, arrayRemove, arrayUnion, getDoc } from "firebase/firestore";
import { IUser } from './users';
import { ITaskData } from './tasks';
export const rolesCollection = collection(db, "roles");
const usersCollection = collection(db, "users");
const tasksCollection = collection(db, "tasks");

export interface IRoleData{
    id: string;
    name: string;
    members: string[]; //emails of members
}

export interface IRoleCreateData{
    name: string;
    members: string[]; //emails of members
}

export const getRole = async (data: IRoleData) => {
    return getDocs(
      query(
        rolesCollection,
        where("name", "==", data.name),
        limit(1)
      )
    );
};

export const fetchRoles = async () =>{
    return getDocs(rolesCollection)
}

export const createRoles = async (data: IRoleCreateData) => {
    return addDoc(rolesCollection, data)
}

export const editRole = async (roleid: string, data: IRoleCreateData) => {

    console.log(data.name, roleid)
    return updateDoc(doc(rolesCollection, roleid), {
        ...data
    })
}

export const assignRole = async (role: IRoleData, users: IUser[]) => {
    if (!users.length) return
    const emailIDs = users.map((doc)=>doc.email)
    await Promise.all(users.map(async(u)=>{
        await updateDoc(doc(db,"users", u.uid), {
            roles: arrayUnion(role.name),
        })
    }))
    return updateDoc(doc(db, "roles", role.id), {
        members: arrayUnion(...emailIDs)
    })
}

export const assignRoleToTask = async (role: IRoleData, tasks: ITaskData[]) => {
    if (!tasks.length) return
    const ids = tasks.map((doc)=>doc.id)
    await Promise.all(tasks.map(async(u)=>{
        await updateDoc(doc(db,"tasks", u.id), {
            roles: arrayUnion(role.name),
        })
    }))
    return updateDoc(doc(db, "roles", role.id), {
        members: arrayUnion(...ids)
    })
}

export const removeUsers = async (role: IRoleData, users: IUser[]) => {
    if (!users.length) return
    const emailIDs = users.map((doc)=>doc.email)
    await Promise.all(users.map(async(u)=>{
        await updateDoc(doc(db,"users", u.uid), {
            roles: arrayRemove(role.name),
        })
    }))
    return updateDoc(doc(db, "roles", role.id), {
        members: arrayRemove(...emailIDs)
    })
}

export const removeTasks = async (role: IRoleData, tasks: ITaskData[]) => {
    if (!tasks.length) return
    const ids = tasks.map((doc)=>doc.id)
    await Promise.all(tasks.map(async(u)=>{
        await updateDoc(doc(db,"users", u.id), {
            roles: arrayRemove(role.name),
        })
    }))
    return updateDoc(doc(db, "roles", role.id), {
        members: arrayRemove(...ids)
    })
}

export const deleteRole = async ( data: IRoleData)=>{
    const users = await getDocs(query(usersCollection, where('roles', 'array-contains', data.name)))
    Promise.all(users.docs.map(async (m) => {
        return updateDoc(m.ref, { roles: arrayRemove(data.name)})
    }))
    const projects = await getDocs(query(query(tasksCollection, where('roles', 'array-contains', data.name))))
    Promise.all(projects.docs.map(async (m) => {
        return updateDoc(m.ref, { roles: arrayRemove(data.name)})
    }))
    return deleteDoc(doc(rolesCollection, data.id))
}

