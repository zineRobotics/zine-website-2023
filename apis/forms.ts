import api from "../api/axios";

export interface ICreateRegistrationForm {
    name: string;
    description: string;
    eventId: number;
    questions: (TextQuestion|PollQuestion)[];
    active: boolean;
}

export interface IRegistrationForm extends ICreateRegistrationForm {
    id: number;
}
  
export interface TextQuestion {
    type: "text";
    text: TextMessageBody;
}

export interface PollQuestion {
    type: "poll";
    poll?: PollBody;
}

export interface TextMessageBody {
    content: string;
}

export interface PollBody {
    title: string;
    description: string;
    pollOptions: string[];
}

export interface IFormRetrievedData {
    id: number
    name: string;
    description: string;
    eventId: number;
    questions: (RetrievedTextQuestion|RetrievedPollQuestion)[];
    active: boolean;
}

export interface RetrievedTextQuestion{
    id: number
    required: boolean
    type: "text"
    text: RetrievedTextMessageBody
    poll: null
}

export interface RetrievedPollQuestion{
    id: number
    required: boolean
    type: "poll"
    text: null
    poll: RetrievedPollBody
}

export interface RetrievedTextMessageBody{
    id: number
    content: string
}

export interface RetrievedPollBody{
    id: number
    title: string
    description: string
    pollOptions: RetrivedPollOption[]
}

export interface RetrivedPollOption{
    id: number
    value: string
}

export interface ITextResponse{
    questionId: number
    textResponse: { content: string }
}

export interface IPollResponse{
    questionId: number
    pollResponse: { optionId: number }
}

const endpoint = "/form";

export const getAllRegistrationForms = async (): Promise<IFormRetrievedData[] | undefined> => {
    try {
      const response = await api.get(endpoint); 
      if (response.status === 200) {
        return response.data.forms;
      }
      return undefined;
    } catch (err) {
      console.error(err);
      return undefined;
    }
};

export const getRegistrationForm = async (id: number): Promise<IFormRetrievedData | undefined> => {
    try {
      const response = await api.get(`${endpoint}/${id}`); // Replace with your actual endpoint
      if (response.status === 200) {
        return response.data.form; // Adjust based on the actual response structure
      }
      return undefined;
    } catch (err) {
      console.error(err);
      return undefined;
    }
};

export const createRegistrationForm = async (data: ICreateRegistrationForm): Promise<IFormRetrievedData | undefined> => {
    try {
      const response = await api.post(endpoint, data); // Replace with your actual endpoint
      if (response.status === 200) {
        return response.data.form; // Adjust based on the actual response structure
      }
      return undefined;
    } catch (err) {
      console.error(err);
      return undefined;
    }
}

// export const updateRegistrationForm = async (data: IRegistrationForm): Promise<IRegistrationForm | undefined> => {
//     try {
//       const response = await api.put(`${endpoint}/${data.id}`, data); // Replace with your actual endpoint
//       if (response.status === 200) {
//         return response.data.form; // Adjust based on the actual response structure
//       }
//       return undefined;
//     } catch (err) {
//       console.error(err);
//       return undefined;
//     }
// }

export const deleteRegistrationForms = async (id:number): Promise<boolean> => {
    try {
      const response = await api.delete(`${endpoint}/${id}`); // Replace with your actual endpoint
      if (response.status === 200) {
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
}

export const addResponse = async (id: number, data: (ITextResponse|IPollResponse)[]): Promise<boolean> => {
    try {
        const response = await api.post(`${endpoint}/${id}/responses`, data);
        if (response.status === 200) {
            return true;
        }
        return false;
    }
    catch(err){
        console.error(err);
        return false;
    }
}

export const getUnfilledIds = async (): Promise<number[] | undefined> => {
    try {
        const response = await api.get(`${endpoint}/unfilled`);
        if (response.status === 200) {
            return response.data['form-ids'];
        }
        return undefined;
    }
    catch(err){
        console.error(err);
        return undefined;
    }
}