export const login = (email, senha) => {
    //return await api.post("/login", {login: email, senha: senha})
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "sadksjdajsdkljsadksajdlkjsddfdçjdçlk", 
                user: {
                    name: "Leandro",
                    email: "leandro@test.com"
                }
            })
        }, 1000)
    })
}