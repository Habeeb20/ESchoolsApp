import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
export default function FinanceDashboard() {
    const [students, setStudents] = useState([]);
    const [expenditures, setExpenditures] = useState([]);
    const [summary, setSummary] = useState({});
    const [view, setView] = useState('daily');
    const token = localStorage.getItem('token');
  

    useEffect(() => {
        if(!token){
            window.location.href='/finance'
        }
    }, [token])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentResponse = await axios.get('http://localhost:4000/api/getfinancestudent', {headers:{'Authorization': token}});
                console.log('Student Data:', studentResponse.data);
                setStudents(Array.isArray(studentResponse.data) ? studentResponse.data : []);

                const expenditureResponse = await axios.get('http://localhost:4000/api/getexpenditure', {headers:{'Authorization': token}});
                console.log('Expenditure Data:', expenditureResponse.data);
                setExpenditures(Array.isArray(expenditureResponse.data) ? expenditureResponse.data : []);

                const summaryResponse = await axios.get('http://localhost:4000/api/summary', {headers:{'Authorization': token}});
                console.log('Summary Data:', summaryResponse.data);
                setSummary(summaryResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [token]);

    const filterExpenditures = (timeFrame) => {
        const now = moment();
        return expenditures.filter(exp => {
            const expDate = moment(exp.date);
            switch (timeFrame) {
                case 'daily':
                    return expDate.isSame(now, 'day');
                case 'weekly':
                    return expDate.isSame(now, 'week');
                case 'monthly':
                    return expDate.isSame(now, 'month');
                default:
                    return false;
            }
        });
    };

    const getFilteredExpenditures = () => filterExpenditures(view);

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
            color: "green",
            fontSize: "100%",
            fontWeight: "bolder"
        },
        listItem1: {
            padding: '10px',
            borderBottom: '1px solid #ddd',
            color: "red",
            fontWeight: "bolder"
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
        },
        toggleButton: {
            margin: '5px',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: '#6c757d',
            color: '#fff'
        },
        activeToggleButton: {
            backgroundColor: '#343a40'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1>Financial Summary</h1>
                <p style={styles.subheader}></p>
                <p style={styles.address}></p>
            </div>
            <div style={styles.summaryContainer}>
                <div style={styles.summaryItem}>
                    <h2>Total Amount Paid</h2>
                    <p style={styles.amount}>#{summary.totalAmountPaid || 0}</p>
                </div>
                <div style={styles.summaryItem}>
                    <h2>Total Expenditure</h2>
                    <p style={{ ...styles.amount, ...styles.red }}>#{summary.totalExpenditure || 0}</p>
                </div>
                <div style={styles.summaryItem}>
                    <h2>Balance</h2>
                    <p style={styles.amount}>#{summary.balance || 0}</p>
                </div>
                <div style={styles.summaryItem}>
                    <h2>Number of Students Paid</h2>
                    <p style={{ ...styles.amount, ...styles.red }}>#{summary.numberOfStudentPaid || 0}</p>
                </div>
                <div style={styles.summaryItem}>
                    <h2>Outstanding</h2>
                    <p style={styles.amount}>#{summary.totalOutstanding || 0}</p>
                </div>
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
                <div style={styles.buttonContainer}>
                    <button
                        style={{ ...styles.toggleButton, ...(view === 'daily' && styles.activeToggleButton) }}
                        onClick={() => setView('daily')}
                    >
                        Daily
                    </button>
                    <button
                        style={{ ...styles.toggleButton, ...(view === 'weekly' && styles.activeToggleButton) }}
                        onClick={() => setView('weekly')}
                    >
                        Weekly
                    </button>
                    <button
                        style={{ ...styles.toggleButton, ...(view === 'monthly' && styles.activeToggleButton) }}
                        onClick={() => setView('monthly')}
                    >
                        Monthly
                    </button>
                </div>
                <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.2em' }}>
                    {getFilteredExpenditures().length > 0 ? getFilteredExpenditures().map(exp => (
                        <li key={exp._id} style={styles.listItem1}>
                            {exp.description} - Amount: #{exp.amount} - Date: {moment(exp.date).format('YYYY-MM-DD')}
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
