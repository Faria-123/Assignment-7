import React, { Children, createContext, use, useState } from 'react';
import toast from 'react-hot-toast';
export const keencontext = createContext();
const pro = fetch('/promise.json').then(res => res.json());

const ContextProvider = ({ children }) => {
    const keen = use(pro);
    const [call, setcall] = useState([]);
    const [video, setvideo] = useState([]);
    const [text, settext] = useState([]);


    const handlecall = (profile) => {
        const isExist = call.find(c => c.id == Number(profile.id));
        // console.log(isExist);
        if (isExist) {
            toast.error('already exist!!!')
        }
        else {
            toast.success(`Call with ${profile.name}`);
            setcall([...call, profile]);
        }
    }

    const handlevideo = (profile) => {
        const isExist = call.find(c => c.id == Number(profile.id));
        console.log(isExist);
        if (isExist) {
            toast.error('video already exist!!!')
        }
        else {
            toast.success(`Video with ${profile.name}`);
            setvideo([...video, profile]);
        }
    }

    const handletext = (profile) => {
        const isExist = call.find(c => c.id == Number(profile.id));
        console.log(isExist);
        if (isExist) {
            toast.error('text already exist!!!')
        }
        else {
            toast.success(`Text with ${profile.name}`);
            settext([...text, profile]);
        }
    }

    const data = {
        keen, handlecall, setcall, call, handlevideo, video, setvideo, text, settext, handletext
    }
    return (
        <keencontext.Provider value={data}>{children}</keencontext.Provider>

    );
};

export default ContextProvider;