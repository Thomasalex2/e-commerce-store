
const toastStyle = {
    position: "bottom-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
}

export const ToastNotification = desc => {
    return (
        <div className="snackbar info-toast">
            <p className="snackbar-msg">{desc}</p>
        </div>
    )
}