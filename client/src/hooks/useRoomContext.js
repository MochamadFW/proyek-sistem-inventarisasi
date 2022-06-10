import React, { createContext, useState } from "react";

const RoomContext = createContext({});

const RoomProvider = ({ children }) => {
    const [selectedRoom, setSelectedRoom] = useState({name:"", value:""});
    return (
        <RoomContext.Provider value={{ selectedRoom, setSelectedRoom }}>
            {children}
        </RoomContext.Provider>
    )
}

export { RoomContext, RoomProvider }