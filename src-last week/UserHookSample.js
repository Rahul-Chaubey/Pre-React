import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [userList, setUserList] = useState([]);
  // const [name, setName] = useState("");
  const [nameEditMode, setNameEditMode] = useState("");
  //const [username, setUserName] = useState("");
  const [userNameEditMode, setUserNameEditMode] = useState("");
  //const [email, setEmail] = useState("");
  const [emailEditMode, setEmailEditMode] = useState("");
  const [userId, setUserId] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [userObject, setUserObject] = useState({
    name: "",
    username: "",
    email: "",
  });
  const [editObject, setEditObject] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(-1);

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

  // const onNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const onEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const onUsernameChange = (event) => {
  //   setUserName(event.target.value);
  // };

  //  console.log(name, email, username);

  const onResetEditRow = () => {
    setSelectedUserId(-1);
    setEditObject({ name: "", username: "", email: "" });
  };

  const onReset = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    // setName("");
    // setEmail("");
    // setUserName("");
  };

  const onUpdateEditRow = () => {
    if (userId > 0) {
      axios
        .put("https://jsonplaceholder.typicode.com/users/" + userId, {
          ...userObject,
          userId: 1,
        })
        .then((response) => {
          if (response) {
            fetchData();
            alert("Updated...!");
            onReset();
            onResetEditRow();
          }
        });
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!isEditMode) {
      axios
        .post("https://jsonplaceholder.typicode.com/users", {
          ...userObject,
          userId: 1,
        })
        .then((response) => {
          console.log(response);
          alert("Added");
          fetchData();
          setUserObject({
            name: "",
            username: "",
            email: "",
          });
          // setName("");
          // setEmail("");
          // setUserName("");
        });
    }
    // else {
    //   if(userId > 0) {
    //     axios.put("https://jsonplaceholder.typicode.com/users/" + userId, {
    //    ...userObject,
    //     userId: 1,
    //     })
    //     .then((response) => {
    //       if (response) {
    //         fetchData();
    //         alert("Updated...!");
    //         onResetClickHandler();
    //       }
    //   });
    // }
    // }
  };

  const onEditObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setEditObject({
        ...editObject,
        [name]: value,
      });
    }
  };

  const onUserObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setUserObject({
        ...userObject,
        [name]: value,
      });
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

  const onEdit = (userObject) => {
    console.log(userObject.id);
    //  setIsEditMode(true);
    //  setNameEditMode(userobject.name);
    setUserId(userObject.id);
    setSelectedUserId(userObject.id);
    setEditObject({
      ...userObject
    });

    const onEditClickHandler = (userObject) => {
      console.log(userObject);
      setIsEditMode(true);
      // setName(userObject.name);
      // setEmail(userObject.email);
      // setUserName(userObject.username);
      setUserId(userObject.id);
    };
  };
  return (
    <>
      <h1>From Userhooks</h1>
      <h2>User Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={userObject.name}
          onChange={onUserObjectChangeHandler}
        />{" "}
        <br />
        <label>username</label>
        <input
          name="username"
          value={userObject.username}
          onChange={onUserObjectChangeHandler}
        />{" "}
        <br />
        <label>Email</label>
        <input
          name="email"
          value={userObject.email}
          onChange={onUserObjectChangeHandler}
        />{" "}
        <br />
        <button type="submit">{isEditMode ? "Update" : "Submit"}</button>
        {isEditMode && <button onClick={onReset}>Reset</button>}
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
                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="name"
                      value={editObject.name}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.name
                  )}
                </td>

                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="username"
                      value={editObject.username}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.username
                  )}
                </td>

                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="email"
                      value={editObject.email}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  <>
                    {selectedUserId === user.id ? (
                      <>
                        <button onClick={onUpdateEditRow}>Update</button>
                        <button onClick={onResetEditRow}>Reset</button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            onDeleteClickHandler(user.id);
                          }}
                        >
                          Delete
                        </button>

                        <button
                          onClick={() => {
                            onEdit(user);
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
