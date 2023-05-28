import React, { useState, createContext } from 'react'

export const addJobSeeker = createContext("");
export const updateJobSeeker = createContext("");
export const deleteJobSeeker = createContext("");

const JbSeekContextProvider = ( {JobSeekerChildren} ) => {

    const [JbSeekData, set_JbSeekData] = useState("");
    const [updJbSeekData, setUPD_JbSeekData] = useState("");
    const [dltJbSeekData, setDLT_JbSeekData] = useState("");

    return (
        <addJobSeeker.Provider JbSeek_Value={{ JbSeekData, set_JbSeekData }}>
            <updateJobSeeker.Provider JbSeek_Value={{ updJbSeekData, setUPD_JbSeekData }}>
                <deleteJobSeeker.Provider JbSeek_Value={{dltJbSeekData, setDLT_JbSeekData}}>
                    {JobSeekerChildren}
                </deleteJobSeeker.Provider>
            </updateJobSeeker.Provider>
        </addJobSeeker.Provider>
    )
}

export default JbSeekContextProvider;