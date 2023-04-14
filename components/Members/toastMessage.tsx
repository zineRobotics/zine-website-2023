import { useEffect } from "react"

const ToastMessage = ({ message, setMessage }: { message: string, setMessage: React.Dispatch<React.SetStateAction<string>> }) => {
    if (!message) return <></>
    useEffect(() => {
        setTimeout(() => setMessage(""), 10000)
    }, [])

    return (
        <div className="flex items-center justify-center p-4 bg-white rounded-lg absolute bottom-5 right-5" role="alert">
            <p className="">{message}</p>
        </div>
    )
}

export default ToastMessage