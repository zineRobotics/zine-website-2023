import { ReactNode } from "react";

interface IModalOptions {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModalOptions) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-y-10 inset-x-10 flex items-center justify-center z-50 ">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-6 rounded-lg z-10 relative ">
          <div className="flex justify-end absolute top-0 right-0 p-4 ">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    );
};

export default Modal;