import React, { useState, ChangeEvent, useEffect } from 'react';
import { Send, X, Upload, Loader, BarChart2 } from 'lucide-react';
import { uploadFile, deleteFile } from '../../apis/room'
import { FileState, IPollCreateBody } from '../../apis/interfaces/message'
import { PollModal } from './pollModal';

interface ChatInputProps {
  onSend: (message: string, file?: File) => void;
}


export function ChatInput({onSend, currMsg, setCurrMsg}: {onSend:any, currMsg:any, setCurrMsg:any} ) {;
  const [fileState, setFileState] = useState<FileState | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isPollModalOpen, setIsPollModalOpen] = useState(false);

  const handleSend = () => {
    if (fileState) {
      onSend("file", fileState, null)
      setFileState(null)
    } else if(!fileState && currMsg) {
      onSend("text", null, null)
    }
  };

  useEffect(() => {
    console.log("file", fileState);

  }, [fileState])
  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const newFileState: FileState = {
        file: selectedFile,
        description: '',
        status: 'pending',
      };

      setFileState(newFileState); // Update the state
      await handleUpload(newFileState); // Pass the new state directly to the upload function
    }
  };

  const handleUpload = async (fileState: FileState) => {
    if (fileState.status === 'uploaded') {
      alert('No file to upload or already uploaded.');
      return;
    }

    setIsUploading(true);
    try {
      const res = await uploadFile(fileState.file, fileState.description);
      setFileState({
        ...fileState,
        publicId: res.publicId,
        url: res.url,
        status: 'uploaded',
      });
    } catch (error) {
      setFileState({ ...fileState, status: 'failed' });
      alert('Failed to upload file.');
    } finally {
      setIsUploading(false);
    }
  };


  const removeFile = async () => {
    if (!fileState) {
      alert('No file to delete.');
      return;
    }
    setIsUploading(true)

    if (fileState.publicId) {
      try {
        await deleteFile(fileState.publicId);
        // alert('File deleted successfully.');
      } catch (error) {
        alert('Failed to delete file.');
      } finally {
        setIsUploading(false)

      }
    }

    setFileState(null);
  };

  const handlePollSubmit = (pollData: IPollCreateBody) => {
    console.log("create body", pollData);
    
    onSend('poll', null, pollData);
    setIsPollModalOpen(false);
  };

  return (
    <div className="space-y-2 mb-3">
      {isUploading && <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-0 z-50">
        {/* <div className="animate-spin w-12 h-12 text-blue-500"> */}
          <Loader />
        {/* </div> */}
      </div>}
      {fileState && (
        <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg mx-2 md:mx-4">
          <span className="text-sm text-blue-600 truncate flex-1">
            {fileState.file.name}
          </span>
          <button
            onClick={removeFile}
            className="p-1 hover:bg-blue-100 rounded-full"
            aria-label="Remove file"
          >
            <X className="w-4 h-4 text-blue-600" />
          </button>
        </div>
      )}

      <div className="flex rounded-xl mx-2 border-2 md:mx-4 bg-white">
        <textarea
          className="w-full px-3 py-3 pl-5 outline-none bg-white rounded-xl"
          placeholder="Send message"
          style={{ resize: "none", overflow: "hidden" }}
          value={currMsg}
          onChange={(e) => setCurrMsg(e.target.value)}
        />
        <div className="flex items-center bg-white px-2">
          <button
            className="px-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsPollModalOpen(true)}
            aria-label="Create poll"
          >
            <BarChart2 className="w-5 h-5 text-gray-500" />
          </button>
          <label className="cursor-pointer px-2 hover:bg-gray-100 rounded-full">
            <input
              type="file"
              className="hidden"
              onChange={handleFileSelect}
              accept="image/*,.pdf,.doc,.docx"
              title="Upload file"
            />
            <Upload className="w-5 h-5 text-gray-500" />
          </label>
          <button
            className="px-2 hover:bg-gray-100 rounded-full"
            onClick={handleSend}
            aria-label="Send message"
          >
            <Send className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>
      <PollModal 
        isOpen={isPollModalOpen}
        onClose={() => setIsPollModalOpen(false)}
        onSubmit={handlePollSubmit}
      />
    </div>
  );
}