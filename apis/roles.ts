import axios from "../api/axios";
import { collection, query, where, getDocs, DocumentReference, addDoc, orderBy, limit, doc, Timestamp, deleteDoc, updateDoc, arrayRemove, arrayUnion, getDoc } from "firebase/firestore";
import { IUser } from './users';
import { ITaskData } from './tasks';

export interface IRoleCreateData{
    permission: string;
}

export interface IRoleData extends IRoleCreateData{
    id: number;
}

export const getAllRoles = async (): Promise<IRoleData[]|undefined> => {
    try{
        const response = await axios.get(`/role`);
        if(response.status === 200){
            return response.data.roles;
        }
        return undefined;
    }
    catch(e){
        return undefined;
    }
};

export const createRole = async (data: IRoleCreateData): Promise<IRoleData|undefined> => {
    try{
        const response = await axios.post(`/role`, data);
        if(response.status === 200){
            return response.data.role;
        }
        return undefined;
    }
    catch(e){
        return undefined;
    }
}

export const editRole = async (data: IRoleCreateData, id: number): Promise<IRoleData|undefined> => {
    try{
        const response = await axios.put(`/role/${id}`, data);
        if(response.status === 200){
            return response.data.role;
        }
        return undefined;
    }
    catch(e){
        return undefined;
    }
}

export const deleteRole = async (ids: number[])=>{
    try{
        const data = {roleIds: ids};
        const response = await axios.delete(`/role`, {data: data});
        if(response.status === 200){
            return response.data;
        }
        return undefined;
    }
    catch(e){
        return undefined;
    }
}

