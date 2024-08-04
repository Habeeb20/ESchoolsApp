// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from 'react';
// import { Link } from "react-router-dom";

// export default function FinanceDashboard() {
//     const [students, setStudents] = useState([]);
//     const [expenditures, setExpenditures] = useState([]);
//     const [summary, setSummary] = useState({});

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const studentResponse = await axios.get('http://localhost:4000/api/getfinancestudent');
//                 console.log('Student Data:', studentResponse.data); // Debugging line
//                 setStudents(Array.isArray(studentResponse.data) ? studentResponse.data : []);

//                 const expenditureResponse = await axios.get('http://localhost:4000/api/getexpenditure');
//                 console.log('Expenditure Data:', expenditureResponse.data); // Debugging line
//                 setExpenditures(Array.isArray(expenditureResponse.data) ? expenditureResponse.data : []);

//                 const summaryResponse = await axios.get('http://localhost:4000/api/summary');
//                 console.log('Summary Data:', summaryResponse.data); // Debugging line
//                 setSummary(summaryResponse.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
//             <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
//             <div style={{ marginBottom: '20px' }}>
//                 <h2 style={{textAlign:"center"}}>Financial Summary</h2>
//                 <p style={{color: "green", fontWeight:"bolder"}}>Total Amount Paid: #{ summary.totalAmountPaid || 0}</p>
//                 <p style={{color: "red", fontWeight:"bolder"}}>Total Expenditure: #{summary.totalExpenditure || 0}</p>
//                 <p style={{color: "black", fontWeight:"bolder"}}>Balance: #{summary.balance || 0}</p>
//                 <p>Number of Students Paid: {summary.numberOfStudentsPaid || 0}</p>
//                 <p>Total Outstanding: #{summary.totalOutstanding || 0}</p>
//             </div>
//             <div style={{ marginBottom: '20px' }}>
//                 <h2>Names of Students</h2>
//                 <ul style={{ listStyleType: 'none', padding: 0,  fontSize:"150%", color:"green" }}>
//                     {students.length > 0 ? students.map(student => (
//                         <li key={student._id} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
//                             {student.name} - Paid: #{student.amountPaid}
//                         </li>
//                     )) : <p>No students available.</p>}
//                 </ul>
//             </div>
//             <div style={{ marginBottom: '20px' }}>
//                 <h2>Expenditures</h2>
//                 <ul style={{ listStyleType: 'none', padding: 0, fontSize:"150%", color:"red" }}>
//                     {expenditures.length > 0 ? expenditures.map(exp => (
//                         <li key={exp._id} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
//                             {exp.description} - Amount: #{exp.amount}
//                         </li>
//                     )) : <p>No expenditures available.</p>}
//                 </ul>
//             </div>
//             <div style={{ textAlign: 'center' }}>
//                 <Link to='/financestudentform'>
//                     <button style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
//                         Add Student
//                     </button>
//                 </Link>
//                 <Link to='/financeexpenditure'>
//                     <button style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}>
//                         Add Expenditure
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }




import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import { Link } from "react-router-dom";

export default function FinanceDashboard() {
    const [students, setStudents] = useState([]);
    const [expenditures, setExpenditures] = useState([]);
    const [summary, setSummary] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentResponse = await axios.get('http://localhost:4000/api/getfinancestudent');
                console.log('Student Data:', studentResponse.data); // Debugging line
                setStudents(Array.isArray(studentResponse.data) ? studentResponse.data : []);

                const expenditureResponse = await axios.get('http://localhost:4000/api/getexpenditure');
                console.log('Expenditure Data:', expenditureResponse.data); // Debugging line
                setExpenditures(Array.isArray(expenditureResponse.data) ? expenditureResponse.data : []);

                const summaryResponse = await axios.get('http://localhost:4000/api/summary');
                console.log('Summary Data:', summaryResponse.data); // Debugging line
                setSummary(summaryResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif'
        },
        header: {
            textAlign: 'center',
            marginBottom: '20px'
        },
        subheader: {
            color: 'gray',
            fontSize: '1em',
            margin: '10px 0'
        },
        address: {
            fontSize: '0.9em',
            color: 'gray'
        },
        summaryContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '20px'
        },
        summaryItem: {
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        },
        amount: {
            fontSize: '1.5em',
            fontWeight: 'bold',
            color: "green"
        },
        red: {
            color: 'red'
        },
        listContainer: {
            marginBottom: '20px'
        },
        listItem: {
            padding: '10px',
            borderBottom: '1px solid #ddd',
            color:"green",
            fontSize:"100%",
            fontWeight:"bolder"
        },
        listItem1: {
            padding: '10px',
            borderBottom: '1px solid #ddd',
            color:"red",
            fontWeight:"bolder"
        },
        buttonContainer: {
            textAlign: 'center',
            marginTop: '20px'
        },
        button: {
            margin: '5px',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        },
        addStudentBtn: {
            backgroundColor: '#007bff',
            color: '#fff'
        },
        addStudentBtnHover: {
            backgroundColor: '#0056b3'
        },
        addExpenditureBtn: {
            backgroundColor: '#28a745',
            color: '#fff'
        },
        addExpenditureBtnHover: {
            backgroundColor: '#218838'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1>Financial Summary</h1>
                <p style={styles.subheader}>
                   
                </p>
                <p style={styles.address}></p>
            </div>
            <div style={styles.summaryContainer}>
                <div style={styles.summaryItem}>
                    <h2>Total Amount paid</h2>
                    <p style={styles.amount}>##{ summary.totalAmountPaid || 0}</p>
                </div>
                <div style={styles.summaryItem}>
                    <h2>Total Expenditure</h2>
                    <p style={{ ...styles.amount, ...styles.red }}>#{summary.totalExpenditure || 0}</p>
                </div>
                <div style={styles.summaryItem}>
                    <h2>Balanace</h2>
                    <p style={styles.amount}> #{summary.balance || 0}</p>
                </div>
                <div style={styles.summaryItem}>
                    <h2>Number of student paid</h2>
                    <p style={{ ...styles.amount, ...styles.red }}>#{summary.numberOfStudentsPaid || 0}</p>
                </div>
                <div style={styles.summaryItem}>
                    <h2>Outstanding</h2>
                    <p style={styles.amount}>#{summary.totalOutstanding || 0}</p>
                </div>
                {/* <div style={styles.summaryItem}>
                    <h2>Total Salary</h2>
                    <p style={styles.amount}>#{summary.totalSalary || 0}</p>
                </div>
                <div style={styles.summaryItem}>
                    <h2>Others</h2>
                    <p style={styles.amount}>#{summary.others || 0}</p>
                </div> */}
            </div>
            <div style={styles.listContainer}>
                <h2>Names of Students</h2>
                <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.2em' }}>
                    {students.length > 0 ? students.map(student => (
                        <li key={student._id} style={styles.listItem}>
                            {student.name} - Paid: #{student.amountPaid}
                        </li>
                    )) : <p>No students available.</p>}
                </ul>
            </div>
            <div style={styles.listContainer}>
                <h2>Expenditures</h2>
                <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.2em' }}>
                    {expenditures.length > 0 ? expenditures.map(exp => (
                        <li key={exp._id} style={styles.listItem1}>
                            {exp.description} - Amount: #{exp.amount}
                        </li>
                    )) : <p>No expenditures available.</p>}
                </ul>
            </div>
            <div style={styles.buttonContainer}>
                <Link to='/financestudentform'>
                    <button style={{ ...styles.button, ...styles.addStudentBtn }}>Add Student</button>
                </Link>
                <Link to='/financeexpenditure'>
                    <button style={{ ...styles.button, ...styles.addExpenditureBtn }}>Add Expenditure</button>
                </Link>
            </div>
        </div>
    );
}

