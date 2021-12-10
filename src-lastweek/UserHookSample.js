import { useEffect, useState } from "react";
import axios from "axios";

export default () => {

  const [userList, setUserList] = useState([]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  
  const [username, setUserName] = useState("");

  const [userId, setUserId] = useState(0);

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      if (response && response.data) {
        setUserList(response.data);
      }
    });
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onusernameChange = (event) => {
    setUserName(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, username);
    if(!isEditMode) {
      axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        email,
        username,
        userId: 1,
      })
      .then((response) => {
        console.log(response);
        alert("Added");
        fetchData();
        setName("");
        setEmail("");
        setUserName("");
      });
    }
    else {
      if(userId > 0) {
        axios.put("https://jsonplaceholder.typicode.com/users/" + userId, {
        name,
        email,
        username,
        userId: 1,
        })
        .then((response) => {
          if (response) {
            fetchData();
            alert("Updated...!");
            onResetClickHandler();
          }
      });
    }
    }
  };

  const onDeleteClickHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        alert("Deleted..!");
        fetchData("");
      });
  };

  const onEditClickHandler = (userObject) => {
    console.log(userObject);
    setIsEditMode(true);
    setName(userObject.name);
    setEmail(userObject.email);
    setUserName(userObject.username);
    setUserId(userObject.id);
  };

  const onResetClickHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    setName("");
    setEmail("");
    setUserName("");
  };


  return (
    <>
      <h1>From Userhooks</h1>
      <h2>User Form</h2>
      <form onSubmit={onFormSubmit}>

        <label>Name</label>
        <input name="name" value={name} onChange={onNameChange} /> <br/>

        <label>username</label>
        <input name="username" value={username} onChange={onusernameChange} /> <br/>

        <label>Email</label>
        <input name="email" value={email} onChange={onEmailChange} /> <br/>

        <label>Phone</label>
        <input name="email" value={email} onChange={onEmailChange} /> <br/>

        <label>Website</label>
        <input name="email" value={email} onChange={onEmailChange} /> <br/>

        <button type="submit">{isEditMode ? "Update" : "Submit"}</button>
        {isEditMode && <button onClick={onResetClickHandler}>Reset</button>}

      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>

                <td>
                  <button onClick={() => {
                    onDeleteClickHandler(user.id);
                  }}>Delete</button>
                </td>

                <td>
                  <button
                    onClick={() => {
                      onEditClickHandler(user);
                    }}
                  >
                    Edit
                  </button>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
