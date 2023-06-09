import { useState } from "react";
//onCreate is passed in as a propr form the App.js file (it represents user clicking on 'create book')
function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3> Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label> Title</label>
        <input className="input" value={title} placeholder="search book" onChange={handleChange} />
        <button className="button"> Add</button>
      </form>
    </div>
  );
}

export default BookCreate;
