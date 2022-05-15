import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastStyle = {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
}

export const ToastNotification = (type, message) => {
    console.log("Toast called, ", type, message);
    switch (type) {
        case 'success':
            toast.success(message, toastStyle);
            break;
        case 'error':
            toast.error(message, toastStyle);
            break;
        case 'warning':
            toast.warning(message, toastStyle);
            break;
        case 'info':
            toast.info(message, toastStyle);
            break;
        default:
            toast.info(message, toastStyle);
    }
    <ToastContainer />
}