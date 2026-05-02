import { useState, useEffect} from "react";
const useOnlinestatus = () => {
    const [onLinestatus, setOnlineStatus]= useState(true);
   


useEffect( () => {
    window.addEventListener("offline", () => {
        setOnlineStatus(false);
    })

    window.addEventListener("online", () => {
        setOnlineStatus(true);
    })
})

return onLinestatus;
}

export default useOnlinestatus;