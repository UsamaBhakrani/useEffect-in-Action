import { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select
        style={{ width: 20 + "rem" }}
        className="form-control"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">HouseHold</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
