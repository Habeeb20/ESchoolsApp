// frontend/src/pages/SchoolDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GmailLink from './GmailLink';
const SchoolDetailsPage = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null);

  useEffect(() => {
    const fetchSchool = async () => {
      const res = await axios.get(`http://localhost:4000/api/schools/${id}`);
      setSchool(res.data);
    };
    fetchSchool();
  }, [id]);

  if (!school) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', margin: '20px auto', maxWidth: '600px' }}>
      <h2>{school.name}</h2>
      <p><strong>Email:</strong> {school.email}</p>
      <p><strong>Phone:</strong> {school.phone}</p>
      <p><strong>VC Speech:</strong> {school.vcSpeech}</p>
      <img src={school.vcPicture} alt={`${school.name} VC`} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
      <p><strong>History:</strong> {school.history}</p>
      <h3>Faculties</h3>
      <ul>
        {school.faculties.map((faculty, index) => (
          <li key={index}>
            <strong>{faculty.name}</strong>
            <p>{faculty.description}</p>
          </li>
        ))}
      </ul>
      <h3>Admission Details</h3>
      <p><strong>Start Date:</strong> {school.admissionStartDate}</p>
      <p><strong>End Date:</strong> {school.admissionEndDate}</p>
      <p><strong>Terms and Conditions:</strong> {school.termsConditions}</p>
      <p><strong>Admission Requirements:</strong> {school.admissionRequirements}</p>
      <h3>Tuition Fees</h3>
      <p><strong>Indigene:</strong> {school.tuitionIndigene}</p>
      <p><strong>Non-Indigene:</strong> {school.tuitionNonIndigene}</p>
      <h2>Students</h2>
      <ul>
        {school.students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      {/* Add GmailLink component for the school */}
      <GmailLink recipientEmail={school.email} />
    </div>
  );
};

export default SchoolDetailsPage;
