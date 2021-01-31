import React from 'react'
import { useRouter } from "next/router";


function Post() {
  const router = useRouter(); 
  const {pid} = router.query
  return (
    <div>Post {pid}</div>
  )
}

export default Post

