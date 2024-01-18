import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

const eventsCollection = collection(db, "events")
export const eventTypes = ["Workshop", "Meeting", "Discussion", "Showcase", "Exhibition"]

interface ICreateEvent {
    name: string;
    description: string;
    eventType: typeof eventTypes[number];
    venue: string;
    timeDate: Date;
    recruitment: boolean;
    isHeading: boolean;
    stage: number;
    image: string;
    imagepath: string;
}

export const fetchEvents = async () => {
    return getDocs(query(eventsCollection, orderBy('timeDate')))
}

export const createEvent = async (data: ICreateEvent) => {
    return addDoc(eventsCollection, { ...data, timeDate: Timestamp.fromDate(data.timeDate) })
}

export const deleteEvent = async (eventid: string) => {
    return deleteDoc(doc(eventsCollection, eventid))
}

export const editEvent = async (eventid: string, data: ICreateEvent) => {
    const eventData = {
        ...data
    } 
    
    if(data.image){
        return updateDoc(doc(eventsCollection, eventid), eventData)
    }
    else return updateDoc(doc(eventsCollection, eventid), {
        name: data.name,
        description: data.description,
        eventType: data.eventType,
        venue: data.venue,
        timeDate: data.timeDate,
        recruitment: data.recruitment,
        isHeading: data.isHeading,
        stage: data.stage,
    })
    
    //return updateDoc(doc(eventsCollection, eventid), { ...data, timeDate: Timestamp.fromDate(data.timeDate) })
}