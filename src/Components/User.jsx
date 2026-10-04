import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  
  const handleUserAdd = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const newUser = { name, email };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...user, data];
        setUser(newUser);
        e.target.reset();
      });
  };
  return (
    <div>
      <h1 className="text-center text-5xl mt-5">User Management</h1>
      <form
        onSubmit={handleUserAdd}
        className="flex flex-col max-w-md mx-auto mt-5"
      >
        <label>Name</label>
        <input
          name="name"
          className="bg-gray-100 border rounded-xl px-4 py-2"
          type="text"
        />
        <label htmlFor="">Email</label>
        <input
          name="email"
          className="bg-gray-100 border rounded-xl px-4 py-2"
          type="email"
        />
        <button
          type="submit"
          className="py-2 px-2 rounded-md bg-gray-200 cursor-pointer mt-5"
        >
          {" "}
          Add User
        </button>
      </form>
      <div className=" max-w-md text-start mt-5 space-y-5 mx-auto list-none">
        {user.map(
          (newUser) =>
            newUser && (
              <li
                className="bg-gray-100 border rounded-2xl px-4 py-2"
                key={newUser.id}
              >
                {newUser.name} : {newUser.email}
              </li>
            ),
        )}
      </div>
    </div>
  );
};

export default User;
