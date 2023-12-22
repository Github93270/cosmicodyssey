import {createContext, useState} from 'react';

export const context = createContext({token: '', isLoggedIn: false, userId: '', login() {}, logout() {}});

export function ContextProvider(props) {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState('');
    const [image, setImage] = useState(null);

    const login = (token, userId, image) => {
        setToken(token);
        setUserId(userId);
        setImage(image);
    }
    const logout = () => {
        setToken(null);
        setUserId('');
        setImage(null);
    }

    return (
        <context.Provider value={{token, isLoggedIn: !!token, userId, image, login, logout}}>
            {props.children}
        </context.Provider>
    );
}