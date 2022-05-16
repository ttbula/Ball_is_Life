import React, { useEffect, useState } from "react";
// const cors = require("cors");

function Home() {
    
  //   const url = "https://balldontlie.io/api/v1/teams";
  const url = "https://balldontlie.io/api/v1/players?page=151";
  const [list, setList] = useState();
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setList(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Home Page of all Teams</h2>
      {/* <p>{list}</p> */}
    </div>
  );
}

export default Home;
