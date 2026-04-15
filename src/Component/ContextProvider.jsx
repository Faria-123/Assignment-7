import React, { Children, createContext, use } from 'react';

export const keencontext = createContext();
const pro = fetch('/promise.json').then(res => res.json());

const ContextProvider = ({ children }) => {
    const keen = use(pro);

    const data = {
        keen
    }
    return (
        <keencontext.Provider value={data}>{children}</keencontext.Provider>

    );
};

export default ContextProvider;