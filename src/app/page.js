"use client";

import Image from "next/image";
import Data from "./data.json";
import { useState } from "react";

export default function Home() {
  const isUserLoggedIn = true;
  const userName = "shakti";

  // converting json file
  const productList = Data.products;

  // utilising the useState function
  const [data, setData] = useState([]);

  //URL for testing JSON with placeholders

  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // fetching users from the API

  const getUsers = async () => {
    const res = await fetch(apiUrl);
    const response = await res.json();

    const newUser = {
      id: 11,
      name: "Shakti",
      email: "shakti234@gmail.com",
      username: "sshakti",
      address: "chennai, tamil nadu",
    };

    // updating response array with new user

    const newData = [...response, newUser];

    setData(newData);

    // access browser's local storage

    localStorage.setItem("CartItems", JSON.stringify([newData[0].name]));
    console.table(localStorage.getItem("CartItems"));
  };

  return (
    <div>
      <div className="welcome-msg">
        {" "}
        {/* Checking whether the user is logged in */}
        {{ isUserLoggedIn } ? <p>Welcome {userName}</p> : <p>Please login..</p>}
      </div>

      {/* Mapping the JSON file containing user details */}
      <div>
        {data?.map((user, index) => (
          <div key={user.id}>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </div>
        ))}

        {/* Button for returning customers on webpage */}
        <button
          onClick={() => {
            getUsers();
          }}
        >
          Show users
        </button>
      </div>
    </div>
  );
}
