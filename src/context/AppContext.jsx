import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props)=>{

    const [userData , setUserData] = useState(null)
    const [chatData, setChatData] = useState(null)

    const loadUserData = async ()=>{
        try {
            
        } catch (error) {
            
        }
    }
        const value = {
            userData,setUserData,
            chatData,setChatData
        }
        return(
            <AppContext.Provider value={value}>
                 {props.clildren}
            </AppContext.Provider>
        )
}

export default AppContextProvider