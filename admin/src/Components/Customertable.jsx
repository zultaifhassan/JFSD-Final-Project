import React, { useEffect, useState } from "react";
import "../Stylings/Producttable.css";
import { CiSearch } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaEdit } from "react-icons/lia";
import axios from "axios";

const Customertable = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:1213/api/user");
      setUsers(response.data.allUsers);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log(fetchUsers)
  const deleteUsers = async (id) => {
    try {
      await axios.delete(`http://localhost:1213/api/user/${id}`)
      fetchUsers();
    } catch (error) {
      console.log("Unable to Delete", error);
    }
    

  }

  return (
    <div className="producttable">
      <div className="tableoverlay">
        <div className="searchbar">
          <h3>Customer List</h3>
          <div className="search-input">
            <input type="text" placeholder="Search" />
            <CiSearch />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
          </thead>
                
          {users.length > 0 &&
            users.map((user) => (
              <tbody>
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="Delete-icon">
                    <AiOutlineDelete onClick={() => deleteUsers(user._id)} className="delete-i" />
                    <LiaEdit className="edit-i" />
                  </td>
                </tr>
            </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Customertable;
