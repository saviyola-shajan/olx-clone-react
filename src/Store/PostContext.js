import { createContext,useState } from "react";


export const PostContext=createContext(null)

function Post({children}){
    const [postDeatils,setPostDeatils]=useState()
return(
    <PostContext.Provider value={{postDeatils,setPostDeatils}}>
        {children}
    </PostContext.Provider>
)
}
export default Post;