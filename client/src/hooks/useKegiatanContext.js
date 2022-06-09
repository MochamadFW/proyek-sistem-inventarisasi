import React, { createContext, useEffect, useState } from "react";

const KegiatanContext = createContext({});

const KegiatanProvider = ({ children }) => {
    const [selectedKegiatan, setSelectedKegiatan] = useState();
    return (
        <KegiatanContext.Provider value={{ selectedKegiatan, setSelectedKegiatan }}>
            {children}
        </KegiatanContext.Provider>
    )
}

export { KegiatanContext, KegiatanProvider }