import React, { createContext, useState } from "react";

const RoomContext = createContext({});

const RoomProvider = ({ children }) => {
    const [selectedRoom, setSelectedRoom] = useState(["KEPALA DINAS PEKERJAAN UMUM"]);
    return (
        <RoomContext.Provider value={{ selectedRoom, setSelectedRoom }}>
            {children}
        </RoomContext.Provider>
    )
}

export { RoomContext, RoomProvider }