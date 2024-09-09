import axios from "../api/axios";

const roomURL = "/rooms";
const memberURL = "/members";

export const ANNOUNCEMENT_ROOM_NEW_ID = 452;

export interface IMessageCreateData {
  type: string;
  content: string;
  contentUrl: string | null;
  sentFrom: number | undefined;
  roomId: number | undefined;
  replyTo: number | null;
}

export interface IRoomCreateData {
  name: string;
  type: "project" | "group" | "workshop";
  description: string;
  dpUrl: string;
}
export interface IRoomData extends IRoomCreateData {
  id: number;
}
export interface IRoomResponseData extends IRoomData {
  timestamp: number;
}
export interface IMessageData {
  id: number;
  type: string;
  content: string;
  contentUrl: string;
  timestamp: number;
  sentFrom: {
    id: number;
    name: string;
  };
  roomId: number;
  replyTo: {
    id: number,
  };
}
export interface IMembers {
  userEmail: string;
  role: string;
}
export interface IMembersList {
  room: number;
  members: IMembers[];
}
export interface IRoomMember{
  email: string;
  role: string;
}

// Creates Room and returns as IRoomResponseData. If it fails, it returns undefined or the corersponding 
export const createRoom = async (roomData: IRoomCreateData): Promise<IRoomData|undefined>  => {
  try{
    const response = await axios
    .post(roomURL + "/create", roomData)
    if(response.status === 200){
      return response.data as IRoomData;
    }
    else{
      return undefined;
    }
  }
  catch(err){
    console.log(err);
    return undefined;
  }
};

export const getRoom = async (roomID: number) => {
    try{
      const response = await axios.get(roomURL + "/get?roomId=" + roomID);
      if(response.status === 200){
        return response.data;
      }
      return response.status;
    }
    catch(err){
      console.log(err);
      return undefined;
    }
};

export const editRoom = async (data: IRoomData):  Promise<number|undefined> => {
  try{
    const {id, ...datatopass} = data;
    const response = await axios.post(roomURL + "/update?roomId=" + id, datatopass)
    return response.status;
  }
  catch(err){
    console.log(err);
    return undefined;
  }
};

export const deleteRoom = async (roomIDList: number[]): Promise<number|undefined> => {
  try{
    const response = await axios.post(roomURL + "/delete", roomIDList);
    return response.status;
  }
  catch(err){
    console.log(err);
    return undefined;
  }
};

export const getMembers = async (roomID: number): Promise<IRoomMember[]|undefined> => {
  try{
    const response = await axios.get(memberURL + "/get?roomId=" + roomID);
    if(response.status === 200){
      return response.data as IRoomMember[];
    }
    return undefined;
  }
  catch(err){
    console.log(err);
    return undefined;
  }
};

export const removeMembers = async (roomID: number, emailList: string[]): Promise<number|undefined> => {
  try{
    const response = await axios.post(memberURL + "/remove", {room: roomID, members: emailList});
    return response.status;
  }
  catch(err){
    console.log(err);
    return undefined;
  }
}

export const editMemberRole = async (roomID: number, email: string, role: string): Promise<IRoomMember|undefined> => {
  try{
    const response = await axios.post(memberURL + "/update", {room: roomID, memberEmail: email, role: role});
    if(response.status === 200){
      return response.data as IRoomMember;
    }
    return undefined;
  }
  catch(err){
    console.log(err);
    return undefined;
  }
}

export const fetchRoomsByUser = async (email: string) => {
  try{
    const response = await axios.get(roomURL + "/user?email=" + email);
    if(response.status === 200){
      return response.data;
    }
    return response.status;
  }
  catch(err){
    console.log(err);
    return undefined;
  }
};

export const addUsersToRoom = async (memList: IMembersList): Promise<string | undefined> => {
  if (!memList.members.length) return;
  try{
    const response = await axios.post(memberURL + "/add", memList)
    if(response.status){
      if(response.status === 200){
        console.log(response);
        
        return response.data;
      }
      //add for other error codes?
      return undefined;
    }
  }
  catch(err){
    console.log(err);
    return undefined;
  }
};

export const sendMessage = async (msgBody: IMessageCreateData) => {
  axios
    .post("/messages/http-msg", msgBody)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchRoomMessages = async (roomID: number): Promise<IMessageData[]> => {
  try {
    const response = await axios.get("/messages/roomMsg", {
      params: {
        roomId: roomID,
      },
    });
    return response.data as IMessageData[];
  } catch (error) {
    console.error("Error fetching room messages:", error);
    return [];
  }
};

export const fetchAllRooms = async (): Promise<IRoomData[]> => {
  try {
    const response = await axios.get(roomURL + "/get-all");
    return response.data as IRoomData[];
  } catch (error) {
    console.error("Error fetching all rooms:", error);
    return [];
  }
}