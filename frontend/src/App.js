import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'


import './App.css';
import axios from 'axios';

const UserProfiles = () => {

  const [userProfiles, setUserProfiles]  = useState([])

  const fetchUserProfiles = () => {
    axios.get("http://localhost:8080/api/v1/user-profile").then(res => {
      console.log(res);
      const data = res.data;  
      setUserProfiles(res.data);

    })
  }

  useEffect(() => {
    fetchUserProfiles();
  },[]);

  return userProfiles.map((userProfile, index) => {
    return <div key={index}>
      {userProfile.userProfileId ? (<img src = {`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`} />) : null}
      {console.log("Hello", userProfile, userProfile.userProfileId)}
      <br/>
        <h1>{userProfile.username}</h1>
        {/* <p>{userProfile.userProfileId}</p> */}
        <MyDropzone {...userProfile} />
      <br/>
    </div>
  })
}


function MyDropzone({userProfileId}) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    console.log(file)
    const formData = new FormData();
    formData.append("file", file);

    axios.post(
      `http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`, 
      formData,
      {
        headers: {
          "Content-Type" : "multipart/form-data"
        }
      }
    ).then(() => {
      console.log("file uploaded successfully")
    }).catch(err => {
      console.log(err);
    });
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the image here ...</p> :
          <p>Drag 'n' drop profile image here, or click to select profile image</p>
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <UserProfiles />
    </div>
  );
}

export default App;
