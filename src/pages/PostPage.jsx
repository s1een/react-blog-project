import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import avatar from "../assets/avatar6.png";

function PostPage() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchUser();
  }, []);
  async function fetchUser() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUser({
        id: data.id,
        name: data.name,
        username: data.username,
        email: data.email,
        city: data.address.city,
        street: data.address.street,
        phone: data.phone,
        website: data.website,
        company: data.company.name,
        company_bs: data.company.bs,
      });
    } catch (error) {
      console.log(error);
    }
  }
  console.log(user);
  return (
    <div className="single-post-container">
      <div className="post-img">
        <img src={avatar} alt="avatar" className="avatar single" />
      </div>
      <div className="user-name-countiner">
        <div className="username">
          <h2>{user.name}</h2>
          <span>{user.username}</span>
        </div>
        <div className="info-user">
          <div className="info-block">
            <h4 className="info-title">Location</h4>
            <p>{user.city}</p>
            <p>{user.street}</p>
          </div>
          <div className="info-block">
            <h4 className="info-title">Contacts</h4>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <p>{user.website}</p>
          </div>
          <div className="info-block">
            <h4 className="info-title">Company</h4>
            <p>{user.company}</p>
            <p>{user.company_bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
