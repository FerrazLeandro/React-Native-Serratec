
export const login = (userName, passoword) => {
    //return await api.post("/login", {login: email, senha: senha})
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "sadksjdajsdkljsadksajdlkjsddfdçjdçlk", 
                user: {
                    name: "Junior",
                    email: "jr@gmail.com"
                }
            })
        }, 1000)
    })
}