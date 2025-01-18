import api from "../api/axios";
import {IMessage, UploadResponse} from "./interfaces/message"
const roomURL = "/rooms";
const memberURL = "/members";
const userURL = "/user";

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
  // dpUrl: string;
}
export interface IRoomData extends IRoomCreateData {
  id: number;
  unreadMessages: number;
  dpUrl: string;
}
export interface IRoomEditData extends IRoomCreateData{
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
    const response = await api
    .post(roomURL + "/create", roomData)
    if(response.status === 200){
      return response.data as IRoomData;
    }
    else{
      return undefined;
    }
  }
  catch(err){
    // console.log(err);
    return undefined;
  }
};

export const getRoom = async (roomID: number) => {
    try{
      const response = await api.get(roomURL + "/get?roomId=" + roomID);
      if(response.status === 200){
        return response.data;
      }
      return response.status;
    }
    catch(err){
      // console.log(err);
      return undefined;
    }
};

export const getAnnouncementRoom = async (email: string) => {
  try{
    const response = await api.get(roomURL + "/announcement", {params: {
      "email": email
    }});
    let res: any;
    if(response.status === 200){
      let ele = response.data.announcementRoom;
      let body: IRoomData = {
        description: ele.room.description,
          dpUrl: ele.room.dpUrl,
          id: ele.room.id,
          name: ele.room.name,
          type: ele.room.type,
          unreadMessages: ele.unreadMessages,
      }
      // console.log("info ann", body);
      
      return body;
    }
    return res;
  }
  catch(err){
    // console.log(err);
    return undefined;
  }
};

export const editRoom = async (data: IRoomEditData):  Promise<number|undefined> => {
  try{
    const {id, ...datatopass} = data;
    const response = await api.post(roomURL + "/update?roomId=" + id, datatopass)
    return response.status;
  }
  catch(err){
    // console.log(err);
    return undefined;
  }
};

export const deleteRoom = async (roomIDList: number[]): Promise<number|undefined> => {
  try{
    const response = await api.post(roomURL + "/delete", roomIDList);
    return response.status;
  }
  catch(err){
    // console.log(err);
    return undefined;
  }
};

export const getMembers = async (roomID: number): Promise<IRoomMember[]|undefined> => {
  try{
    const response = await api.get(memberURL + "/get?roomId=" + roomID);
    if(response.status === 200){
      return response.data as IRoomMember[];
    }
    return undefined;
  }
  catch(err){
    // console.log(err);
    return undefined;
  }
};

export const removeMembers = async (roomID: number, emailList: string[]): Promise<number|undefined> => {
  try{
    const response = await api.post(memberURL + "/remove", {room: roomID, members: emailList});
    return response.status;
  }
  catch(err){
    // console.log(err);
    return undefined;
  }
}

export const editMemberRole = async (roomID: number, email: string, role: string): Promise<IRoomMember|undefined> => {
  try{
    const response = await api.post(memberURL + "/update", {room: roomID, memberEmail: email, role: role});
    if(response.status === 200){
      return response.data as IRoomMember;
    }
    return undefined;
  }
  catch(err){
    // console.log(err);
    return undefined;
  }
}

export const fetchRoomsByUser = async (email: string): Promise<IRoomData[]> => {
  try {
    const response = await api.get(`${roomURL}/user?email=${email}`);
    
    if (response.status === 200) {
      const roomsInfo: any[] = response.data; 
      // console.log(roomsInfo);

      const roomsList: IRoomData[] = roomsInfo.map((ele: any) => {
        return {
          description: ele.room.description,
          dpUrl: ele.room.dpUrl,
          id: ele.room.id,
          name: ele.room.name,
          type: ele.room.type,
          unreadMessages: ele.unreadMessages,
        };
      });

      return roomsList;
    } else {
      console.error('Failed to fetch rooms: ', response.statusText);
      return []; 
    }
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return []; 
  }
}

export const addUsersToRoom = async (memList: IMembersList): Promise<{status: string; unassignedEmails:string[]; alreadyAssignedEmails:string[]}|undefined> => {
  if (!memList.members.length) return;
  try{
    const response = await api.post(memberURL + "/add", memList)
    if(response.status){
      if(response.status === 200){
        // console.log(response);
        
        return response.data;
      }
      //add for other error codes?
      return undefined;
    }
  }
  catch(err){
    // console.log(err);
    return undefined;
  }
};

export const sendMessage = async (msgBody: IMessageCreateData) => {
  api
    .post("/messages/http-msg", msgBody)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      // console.log(err);
    });
};

export const fetchRoomMessages = async (roomID: number): Promise<IMessage[]> => {
  try {
    let jwt = localStorage.getItem("token")
    const response = await api.get("/messages/roomMsg", {
      params: {
        roomId: roomID,
      },
      headers: {
        "Authorization": `Bearer ${jwt}`,
      },
    }
  );
    return response.data as IMessage[];
  } catch (error) {
    console.error("Error fetching room messages:", error);
    return [];
  }
};

export const fetchAllRooms = async (): Promise<IRoomData[]> => {
  try {
    let token = localStorage.getItem("token")
    const response = await api.get(roomURL + "/get-all");
    return response.data as IRoomData[];
  } catch (error) {
    console.error("Error fetching all rooms:", error);
    return [];
  }
}

export const updateLastSeen = async (userEmail: string, roomID: number) => {
  try {
    await api.put(userURL + `/${userEmail}/${roomID}/seen`);
  } catch (error) {
    console.error("Error updating last seen:", error);
  }
}

export const lastSeen = async (userEmail: string, roomID: number): Promise<number> => {
  try {
    const response = await api.get(userURL + `/${userEmail}/${roomID}/last-seen`);
    // console.log(response.data.info.userLastSeen);
    
    return response.data.info.userLastSeen as number;
  } catch (error) {
    console.error("Error fetching last seen:", error);
    return 0;
  }
}

export const uploadFile = async (
  file: File,
  description: string
): Promise<UploadResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description); 

    const response = await api.post<UploadResponse>('/file/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data; 
  } catch (error: any) {
    console.error('Error uploading file:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to upload file');
  }
};

export const deleteFile = async (publicKey: string = "", url: string = ""): Promise<string> => {
  try {
    const response = await api.post<{ message: string }>('/file/delete', null, {
      params: { publicKey, url },
    });

    return response.data.message; 
  } catch (error: any) {
    console.error('Error deleting file:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to delete file');
  }
};
