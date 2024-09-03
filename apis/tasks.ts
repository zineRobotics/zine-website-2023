import axios from '../api/axios';

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
    createdDate: Date;
}
export interface ITaskData extends ITaskCreateData {
    id: number;
}

interface ITaskInstanceCreateData {
    completionPercentage: number;
    status: "Not Started" | "In Progress" | "Completed";
    name: string;
}

export interface ITaskInstanceData extends ITaskInstanceCreateData {
    id: number;
    taskId: number;
    roomId: string;
}

export const getAllTasks = async (): Promise<ITaskData[]|undefined> => {
    try{
        const response = await axios.get(tasksURL);
        if(response.status === 200){
            console.log(response.data);
            return response.data.tasks;
        }
        return undefined;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
    //add mentors here
}

export const createTask = async (data: ITaskCreateData, mentors: string[]): Promise<ITaskData|undefined> => {
    try{
        const response = await axios.post(tasksURL, data);
        if(response.status === 200){
            return response.data.task;
        }
        return undefined;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
}

export const editTask = async (data: ITaskData, members: string[]): Promise<ITaskData|undefined> => {
    try{
        const {id, ...restData} = data;
        const response = await axios.put(tasksURL+'/'+id, restData);
        if(response.status === 200){
            return response.data.task;
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
        const data = {taskIds: taskid};
        const response = await axios.delete(tasksURL, {data});
        return response.status;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
}

export const getAllTaskInstances = async (id: number): Promise<ITaskInstanceData[]|undefined> => {
    try{
        const response = await axios.get(tasksURL+"/"+id+"/instance");
        if(response.status === 200){
            const data = response.data.instances;
            const instances: ITaskInstanceData[] = data.map((instance: any) => {
                return {
                    id: instance.taskInstanceId,
                    taskId: instance.taskId.id,
                    roomId: instance.roomId.id,
                    completionPercentage: instance.completionPercentage,
                    status: instance.status,
                    name: instance.name
                }
            })
            console.log(instances);
            return instances;
        }
        else if(response.status === 404){
            return [];
        }
        return undefined;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
}

export const createTaskInstance = async (data: ITaskInstanceCreateData, taskId: number): Promise<ITaskInstanceData|undefined> => {
    try{
        //count the number of instances and add 1 to it. pass as room name
        const response = await axios.post(tasksURL+"/"+taskId+"/instance", data);
        if(response.status === 200){
            console.log(response.data.taskInstance);
            const instance = response.data.taskInstance
            return {
                id: instance.taskInstanceId,
                taskId: instance.taskId.id,
                roomId: instance.roomId.id,
                completionPercentage: instance.completionPercentage,
                status: instance.status,
                name: instance.name
            }
        }
        return undefined;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
}

export const editTaskInstance = async (data: ITaskInstanceCreateData, id: number): Promise<ITaskInstanceData|undefined> => {
    try{
        const {...restData} = data;
        const response = await axios.put(tasksURL+"/"+id+"/instance/"+id, restData);
        if(response.status === 200){
            return response.data.task;
        }
        return undefined;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
}

export const deleteTaskInstance = async (ids: number[], id: number): Promise<number|undefined> => {
    try{
        const data = {instanceIds: ids};
        const response = await axios.delete(tasksURL+'/'+id+'/instance', {data});
        return response.status;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
}

const assignMentors = async (taskId: number, data: string[]): Promise<boolean|undefined> => {
    try{
        const response = await axios.post(tasksURL+'/'+taskId+'/mentor', {mentorEmails: data});
        if(response.status === 200){
            return true;
        }
        return undefined;
    }
}

const assignTask = async (taskId: number, data: IAssignState): Promise<number|undefined> => {
    
}