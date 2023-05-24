import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import axios from "axios"
export const authoptions={providers: [
  CredentialsProvider({
    name :"credentials",
    credentials : {
        username : {type: "text"},
        password : {type : "password"},
    },
    async authorize(credentials,req)
    {
        const res=axios.post('./api/login',{credentials}).then(
            function(res)
            {
                
            }
        )
    }
    })]}
export default NextAuth(authOptions)