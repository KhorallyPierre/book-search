import { useState } from "react";

function BookEdit({book}) {
  const [title, setTitle] = useState(book.title);
    console.log(book.title)
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handelSubmit = (event) => {
  event.preventDefault();
  console.log('New title is', title)
  };
  return (
    <form onSubmit={handelSubmit}className="book-edit">
      <label> Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary"> Save</button>
    </form>
  );
}

export default BookEdit;
