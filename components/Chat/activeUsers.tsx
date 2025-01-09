import React, { useState } from 'react';
import { User, ChevronDown } from 'lucide-react';

interface ActiveUsersProps {
  users: string[];
}

export function ActiveUsers({ users }: ActiveUsersProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-2 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-blue-500" />
          <h3 className="text-lg font-medium text-gray-900">Active Members</h3>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`absolute top-full left-2 right-2 mt-2 bg-white rounded-lg shadow-lg z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="p-2 space-y-2">
          {users.map((user) => (
            <div
              key={user}
              className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-md"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">{user}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}