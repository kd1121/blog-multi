import React from 'react'
import "../Loading/Loading.css"
import CircularProgress from "@mui/material/CircularProgress";


const Loading = () => {
  return (
<div className="overlay">
      <CircularProgress />
    </div>  )
}

export default Loading
