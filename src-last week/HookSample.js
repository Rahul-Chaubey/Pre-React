import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [postsList, setPostList] = useState([]);
  //const [title, setTitle] = useState("");
  const [titleEditMode, setTitleEditMode] = useState("");
  //const [body, setBody] = useState("");
  const [editObject, setEditObject] = useState({});
  const [bodyEditMode, setBodyEditMode] = useState("")
  const [postObject, setPostObject] = useState({
     title: "",
     body: "",
  });
  const [postId, setPostId] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(-1);
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
  
  // const onTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  const onTitleEditModeChange = (event) => {
    setTitleEditMode(event.target.value);
  };


  const onResetEditRow = () => {
    setSelectedPostId(-1);
    setEditObject({title:"",body:""});
  };

  const onUpdateEditRow = () => {
    if (postId > 0) {
          axios
            .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
              id: postId,
              ...editObject,
              userId: 1,
            })
            .then((response) => {
              if (response) {
                Fetchdata();
                alert("Updated");
                onReset();
                onResetEditRow();
              }
            });
        }

  }

  const onEditObjectChangeHandler = (event) => {
    // const titleOld = {
    //   title: "a",
    //   body: "b",
    // };
    // const titleNew = {
    //   title: titleOld.title,
    //   body: titleOld.body,
    //   ...titleOld,
    //   title: "c",
    // };
    if(event) {
      const {name,value} = event.target;
      setEditObject({
        ...editObject,
        [name]: value,
      });
    }
  };

  const onPostObjectChangeHandler = (event) => {
    if (event) {
      const {name,value} = event.target;
      setPostObject({
        ...postObject,
        [name]: value,
      });
    }
  };

  // const onBodyChange = (event) => {
  //   setBody(event.target.value);
  // };

  const onBodyEditModeChange = (event) => {
    setBodyEditMode(event.target.value);
  };


  const onFormSubmit = (event) => {
    event.preventDefault();
  //  console.log(title, body);
    if (!isEditMode) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          ...postObject,
          userId: 1,
        })
        .then((response) => {
          console.log(response);
          alert("Added");
          Fetchdata();
          setPostObject({
            title:"",
            body:"",
          });
          // setTitle("");
          // setBody("");
        });
     } //else {
    //   // code on edit the record
    //   if (postId > 0) {
    //     axios
    //       .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
    //         id: postId,
    //         ...postObject,
    //         userId: 1,
    //       })
    //       .then((response) => {
    //         if (response) {
    //           Fetchdata();
    //           alert("Updated");
    //           onReset();
    //         }
    //       });
    //   }
    // }
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
  //  setIsEditMode(true);
  //  setTitleEditMode(postobject.title);
  setEditObject({
    title:postobject.title,
    body:postobject.body,
    ...postobject
  })

    // setTitle(postobject.title);
  //  setBody(postobject.body);
    setBodyEditMode(postobject.body);
    setPostId(postobject.id);
    setSelectedPostId(postobject.id);
    
  };

  const onReset = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    // setTitle("");
    // setBody("");
  };

  return (
    <>
      <h1>From HooksSample</h1>
      <h2>Post Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Title</label>
        <input name="title" value={postObject.title} onChange={onPostObjectChangeHandler} />
        <label>Body</label>
        <input name="body" value={postObject.body} onChange={onPostObjectChangeHandler} />
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
                <td>
                  {
                    selectedPostId === post.id ? (
                    
                      <input 
                            name= "title"
                            value={editObject.title}
                            onChange={onEditObjectChangeHandler} />
                    ):(
                      post.title
                    )}
                  </td>
                <td>
                  {
                    selectedPostId === post.id ? (
                     
                      <input 
                          name="body"
                          value = {editObject.body} 
                          onChange={onEditObjectChangeHandler} />
                     ):(
                      post.body
                     )}
                    </td>
                <td>
                <>
                {
                    selectedPostId === post.id ? (
                     
                      <>
                      <button onClick={onUpdateEditRow}>Update</button>
                      <button onClick={onResetEditRow}>Reset</button>  
                      </>
                     ):(
                      <><button
                      onClick={() => {
                        onDeleteChangeHandler(post.id);
                      }}
                    >
                      Delete
                    </button>
                  
                    <button
                      onClick={() => {
                        onEdit(post);
                      }}
                    >
                      Edit
                    </button></>
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