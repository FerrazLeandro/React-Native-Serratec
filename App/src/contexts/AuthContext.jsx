import { createContext, useContext, useState } from 'react'
import { login } from '../services/auth'


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const loginContext = async () => {
        const response = await login()
    }

    const logoutContext = () => {

    }

    return(
        <AuthContext.Provider value={{logado: !!user, loginContext}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext