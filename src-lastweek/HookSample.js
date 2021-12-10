import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [postsList, setPostList] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postId, setPostId] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    Fetchdata();
  }, []);

  const Fetchdata = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      if (response && response.data) {
        setPostList(response.data);
      }
    });
  };
  
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onBodyChange = (event) => {
    setBody(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(title, body);
    if (!isEditMode) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title,
          body,
          userId: 1,
        })
        .then((response) => {
          console.log(response);
          alert("Added");
          Fetchdata();
          setTitle("");
          setBody("");
        });
    } else {
      // code on edit the record
      if (postId > 0) {
        axios
          .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
            id: postId,
            title,
            body,
            userId: 1,
          })
          .then((response) => {
            if (response) {
              Fetchdata();
              alert("Updated");
              onReset();
            }
          });
      }
    }
  };
  const onDeleteChangeHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        console.log(response);
        Fetchdata();
        alert("Deleted");
      });
  };
  const onEdit = (postobject) => {
    console.log(postobject);
    setIsEditMode(true);
    setTitle(postobject.title);
    setBody(postobject.body);
    setPostId(postobject.id);
  };

  const onReset = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    setTitle("");
    setBody("");
  };
  return (
    <>
      <h1>From hooksSample</h1>
      <h2>Post Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Title</label>
        <input name="title" value={title} onChange={onTitleChange} />
        <label>Body</label>
        <input name="body" value={body} onChange={onBodyChange} />
        <button type="submit">{isEditMode ? "Update" : "Submit"}</button>
        {isEditMode && <button onClick={onReset}>Reset</button>}
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Options</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map((post, index) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    onClick={() => {
                      onDeleteChangeHandler(post.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      onEdit(post);
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
