import React, { useEffect, useState } from "react";
import SideNav from "../../sidenav";
import styles from "../../../../constants/styles";
import ProtectedRoute from "../ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";
import { ITaskData, createTask, deleteTask, editTask, getAllTasks } from "../../../../apis/tasks";
import { Control, set, useFieldArray, useForm } from "react-hook-form";
import { IUser } from "../../../../apis/users";
import Modal from "../../modal";
import { ChildProcessWithoutNullStreams } from "child_process";

export interface IState {
    search: string;
    editing: boolean;
    editingID: number;
    deleteTask: ITaskData | null;
    assignTask: ITaskData | null;
}

export interface InstanceState{
    completionPercentage: number;
    status: "Not Started" | "In Progress" | "Completed";
}
export interface ITaskForm {
    title: string;
    type: "Team" | "Individual";
    psLink: string;
    subtitle: string;
    description: string;
    submissionLink: string;
    dueDate: Date;
    mentors: { value: string }[];
    visible: boolean;
    recruitment: number;
    createdDate: Date;
}

export interface ITaskInstanceForm {
    completionPercentage: number;
    status: "Not Started" | "In Progress" | "Completed";
    name: string;
    mentors: { value: string }[];
    
}