import {useState,useEffect} from 'react';
import axios from 'axios';
const  UserList =()=> {
  const [listOfUSer ,setlistOfUSer ]= useState([])
  useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then (response =>setlistOfUSer (response.data ))
  .catch (error =>console.log(error))},[])
  
return (
    <div>
    {listOfUSer.map(profile=>(
        <ul>
          <li>
            {profile.name}
          </li>
        </ul>
      ))}
      </div>
) }
export default UserList;