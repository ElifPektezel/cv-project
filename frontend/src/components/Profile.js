import React from 'react';

function Profile({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.title}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.about}</p>
    </div>
  );
}

export default Profile;
