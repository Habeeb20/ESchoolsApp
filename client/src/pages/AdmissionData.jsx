// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdmissionData = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:4000/api/data')
//             .then(response => {
//                 // Ensure the response data is an array
//                 const responseData = Array.isArray(response.data) ? response.data : [];
//                 setData(responseData);
//             })
//             .catch(error => {
//                 console.error('Error fetching scraped data', error);
//                 // Set data to an empty array in case of error to prevent map issues
//                 setData([]);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>University of Lagos Data</h1>
//             <ul>
//                 {data.map((item, index) => (
//                     <li key={index}>
//                         <h2>{item.title}</h2>
//                         <a href={item.link}>Link</a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default AdmissionData;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdmissionData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/data')
            .then(response => {
                console.log('Response Data:', response.data); // Log the response data
                const responseData = Array.isArray(response.data) ? response.data : [];
                setData(responseData);
            })
            .catch(error => {
                console.error('Error fetching scraped data', error);
                setData([]);
            });
    }, []);

    return (
        <div>
            <h1>University of Lagos Data</h1>
            <ul>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <li key={index}>
                            <h2>{item.title}</h2>
                            <a href={item.link}>Link</a>
                        </li>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </ul>
        </div>
    );
};

export default AdmissionData;
