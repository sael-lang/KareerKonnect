import React, { useState, createContext } from 'react'

export const addData = createContext("");
export const updateData = createContext("");
export const deleteData = createContext("");

const ContextProvider = ( {children} ) => {

    const [sData, setSdata] = useState("");
    const [updData, setUPdata] = useState("");
    const [dltData, setDLTdata] = useState("");

    return (
        <addData.Provider value={{ sData, setSdata }}>
            <updateData.Provider value={{ updData, setUPdata }}>
                <deleteData.Provider value={{dltData, setDLTdata}}>
                    {children}
                </deleteData.Provider>
            </updateData.Provider>
        </addData.Provider>
    )
}

export default ContextProvider;