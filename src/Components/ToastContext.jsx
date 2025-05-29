import React,{createContext, useContext, useState} from 'react'

export const ToastContext= createContext();

 export const ToastProvider = ({ children }) => {
    const [toasts,setToasts]=useState([]);

    const addToast = (message, type) => {
        const id= Date.now();
        setToasts((prev)=> [...prev,{id,message,type}]);

        setTimeout(() => {
            removeToast(id);
        }, 3000);
    }
    const removeToast = (id) => {
        setToasts((prev)=>prev.filter((toast)=> toast.id !==id));
    }

    return (
        <ToastContext.Provider value={{addToast}}>
            {children}
            <div className="toast-container">
                {toasts.map((toast) => (
                    <div key={toast.id} className={`toast ${toast.type}`}>
                        {toast.message} <span onClick={()=>{removeToast(toast.id)}}>x</span>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )}

    export const useToast=()=>useContext(ToastContext);
    
