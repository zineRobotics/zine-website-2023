export interface IMessage {
  id: number;
  type: "text" | "file" | "poll";
  text: ITextBody | null;
  file: IFileBody | null
  poll: IPollBody | null,
  timestamp: number;
  sentFrom: {
    id: number;
    name: string;
  };
  roomId: number;
  replyTo: {
    id: number,
  };
  deleted: boolean;
}

export interface ITextBody {
  content: string;
}

export interface IFileBody {
  url: string;
  description: string;
  name: string;
}

export interface IPollCreateBody {
  title: string;
  description: string;
  pollOptions: string[];
}

export interface IPollBody {
  id: number;
  title: string;
  description: string;
  options: IPollOptionBody[],
  lastVoted: number
}

export interface IPollOptionBody {
  id: number;
  value: string;
  numVotes: number;
}

export interface UploadResponse {
  publicId: string;
  url: string;
}

export interface FileState {
  file: File;
  description: string;
  publicId?: string;
  url?: string;
  status: 'pending' | 'uploaded' | 'failed';
}