import { useEffect } from "react"

interface ToastMessageData {
    message: string, 
    timer?: number,
    setMessage: React.Dispatch<React.SetStateAction<string>>
}

const ToastMessage = ({ message, timer, setMessage }: ToastMessageData) => {
    if (!message) return <></>
    useEffect(() => {
        setTimeout(() => setMessage(""), timer || 10000)
    }, [])

    return (
        <div className="flex items-center justify-center p-4 bg-white rounded-lg absolute bottom-5 right-5 z-50" role="alert">
            <p className="">{message}</p>
        </div>
    )
}

export default ToastMessage