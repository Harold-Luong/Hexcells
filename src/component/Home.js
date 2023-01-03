import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);
  return <div>{JSON.stringify(ip)}</div>;
};

export default Home;
