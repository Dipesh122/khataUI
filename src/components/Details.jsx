import React, { useEffect, useState } from "react";
import { Search } from 'lucide-react';
import Card from "./Card";

function Details() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7004/api/expenditures")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full p-6">
      <div className="flex justify-between">
        <div className="flex">
          <input type="text" placeholder="search.." className="p-1" /> <span className="bg-slate-400 text-white rounded-sm p-1"><Search /></span>
        </div>
        <div>
          Select Options:
          <select name="" id="" className="p-1 ml-2">
            <option value="">Default</option>
            <option value="">Income</option>
            <option value="">Expenditure</option>
          </select>
        </div>
        <div>
          Select Date:
          <input type="date" className="p-1 ml-2"/>
        </div>
      </div>
      {/* <h1>List of Posts</h1> */}
      {/* <ul>
        {data.map((post) => (
          <li key={post.id}>{post.detail}</li>
        ))}
      </ul> */}
      <Card />
    </div>
  );
}
export default Details;
