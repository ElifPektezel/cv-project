import React from 'react';

function Profile({ data }) {
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.title}</p>
      <p>Email: {data.contact.email}</p>
      <p>Phone: {data.contact.phone}</p>
      <p>Address: {data.contact.address}</p>
      <p>GitHub: <a href={data.contact.github} target="_blank" rel="noopener noreferrer">{data.contact.github}</a></p>
      <p>LinkedIn: <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">{data.contact.linkedin}</a></p>
      
      <h3>Work Experience</h3>
      {data.work_experience.map((job, index) => (
        <div key={index}>
          <p><strong>{job.position}</strong> at {job.company}</p>
          <p>{job.location}</p>
          <p>{job.dates}</p>
        </div>
      ))}

      <h3>Education</h3>
      {data.education.map((edu, index) => (
        <div key={index}>
          <p><strong>{edu.degree}</strong> at {edu.institution}</p>
          <p>{edu.dates}</p>
        </div>
      ))}

      <h3>Skills</h3>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>References</h3>
      {data.references.map((ref, index) => (
        <div key={index}>
          <p>{ref.name} - {ref.phone}</p>
          <p>{ref.company}</p>
        </div>
      ))}
    </>
  );
}

export default Profile;
