import axios from "../api/axios";
import {IRoomData}  from "./room"
const taskURL = "/tasks"
const roleURL = "/role"
export interface ITaskData {
    id: number,
    createdDate: number,
    title: string,
    subtitle: string,
    description: string,
    dueDate: number,
    psLink: string,
    submissionLink: string,
    type: string,
    recruitment: string,
    visible: boolean    
}

export interface ITaskInstanceData {
    id: number,
    type: string,
    name: string,
    status: string, 
    completionPercentage: number,
    task: ITaskData
}

export const getAssignedTaskInstances = async (jwt: string) => {
    try{
        const response = await axios.get(taskURL + "/user", 
            {headers: {"Authorization": `Bearer ${jwt}`}});
        if(response.status==200) {
            let instances: ITaskInstanceData[] = response.data.instances;
            return instances;
        } else {
            console.error("Error fetching assigned task instances", response.statusText);
            return []
        }
    } catch(error) {
        console.error("Error fetching assigned task instances", error);
        return []
    }
}

export const getTasksByRole = async (roleID: string) => {
    try {
        const response = await axios.get(roleURL + `/${roleID}/task`);
        if(response.status==200) {
            let tasks: ITaskData[] = response.data.tasks;
            return tasks;
        } else {
            console.error("Error fetching tasks by role", response.statusText);
            return []
        }
    } catch(error) {
        console.error("Error fetching tasks by role", error);
        return []
    }
}