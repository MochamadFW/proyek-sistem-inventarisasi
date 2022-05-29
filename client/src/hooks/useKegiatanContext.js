import React, { createContext, useState } from "react";

const KegiatanContext = createContext({});

const KegiatanProvider = ({ children }) => {
    const [selectedKegiatan, setSelectedKegiatan] = useState(
        [
            { namaKegiatan: "Pencatatan barang R. Staf Umum", tanggalKegiatan: new Date(2022, 4, 24) },
            { namaKegiatan: "Pencatatan KIB (B) R. Kepala Dinas", tanggalKegiatan: new Date(2022, 4, 4) }
        ]
    );
    return (
        <KegiatanContext.Provider value={{ selectedKegiatan, setSelectedKegiatan }}>
            {children}
        </KegiatanContext.Provider>
    )
}

export { KegiatanContext, KegiatanProvider }