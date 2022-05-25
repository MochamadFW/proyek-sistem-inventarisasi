import React, { createContext, useState } from "react";

const DateContext = createContext({});

const DateProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
            {children}
        </DateContext.Provider>
    )
}

export { DateContext, DateProvider }