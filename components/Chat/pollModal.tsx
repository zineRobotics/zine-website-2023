import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { IPollCreateBody } from '../../apis/interfaces/message';
import Modal from '../Members/modal';

interface PollModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (pollData: IPollCreateBody) => void;
}

export function PollModal({ isOpen, onClose, onSubmit }: PollModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pollData: IPollCreateBody = {
      title,
      description,
      pollOptions: options.filter(option => option.trim() !== '')
    };
    onSubmit(pollData);
    setTitle('');
    setDescription('');
    setOptions(['', '']);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold" style={{color: "#b2b2b2"}}>Create Poll</h2>
          {/* <button
            type="button"
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button> */}
        </div>

        <div>
          <label className="block text-normal font-medium text-gray-700" style={{color: "#b2b2b2"}}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-1 block w-full rounded-md border-gray-300"
            style={{ border: '1px solid #b2b2b2' }}
            placeholder='Enter Title'
            required
          />
        </div>

        <div>
          <label className="block text-normal font-medium text-gray-700" style={{color: "#b2b2b2"}}>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 "
            rows={2}
            style={{ border: '1px solid #b2b2b2' }}
            placeholder='Enter Description'
          />
        </div>

        <div className="space-y-2">
          <label className="block text-normal font-medium text-gray-700" style={{color: "#b2b2b2"}}>Options</label>
          {options.map((option, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="p-1 block w-full rounded-md border-gray-300 shadow-sm  focus:border-blue-500 focus:ring-blue-500"
                style={{ border: '1px solid #b2b2b2' }}
                placeholder={`Option ${index + 1}`}
                required
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => handleRemoveOption(index)}
                  className="p-0 text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="w-5 h-5"/>
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddOption}
            className="mt-1 flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700"  style={{color: "#b2b2b2"}}
          >
            <Plus className="w-4 h-4"  style={{color: "#b2b2b2"}} /> Add Option
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {/* <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-normal font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button> */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-normal font-bold text-white rounded-md hover:bg-blue-700"  style={{backgroundColor: "#b2b2b2"}}
          >
            Create Poll
          </button>
        </div>
      </form>
    </Modal>
  );
}