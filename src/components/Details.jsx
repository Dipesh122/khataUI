import React, { useEffect, useState } from "react";

function Details() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7004/api/expenditures")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.detail}</li>
        ))}
      </ul>
    </div>
  );
}
export default Details;
