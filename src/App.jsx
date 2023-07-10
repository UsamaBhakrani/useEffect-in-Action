import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import axios from "axios";

// const App = () => {
//   const [category, setCategory] = useState("");

//   return (
//     <div>
//       <select
//         style={{ width: 20 + "rem" }}
//         className="form-control"
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">HouseHold</option>
//       </select>
//       <ProductList category={category} />
//     </div>
//   );
// };

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
        setUsers(res.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const deleteUser = (user) => {
    setUsers(users.filter((u) => u.id !== user.id));

    try {
      axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id);
    } catch (err) {
      setError(err.message);
      setUsers(...users);
    }
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between"
              key={user.id}
            >
              {user.name}{" "}
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
