// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTeacher } from './TeacherRedux/TeacherActions';

// const TeacherProfileForm = () => {
//     const [profile, setProfile] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         profileWriteUp: '',
//         workExperience: '',
//         address: '',
//         courses: '',
//         yearsOfExperience: '',
//     });
//     const [error, setError] = useState(null);
//     const dispatch = useDispatch();

//     const handleChange = (e) => {
//         setProfile({ ...profile, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const coursesArray = profile.courses.split(',').map((course) => course.trim());
//             const newProfile = { ...profile, courses: coursesArray };
//             dispatch(createTeacher(newProfile));
//             setProfile({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 profileWriteUp: '',
//                 workExperience: '',
//                 address: '',
//                 courses: '',
//                 yearsOfExperience: '',
//             });
//             setError(null);
//         } catch (error) {
//             console.error('Error creating profile:', error);
//             setError('Error creating profile');
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.title}>Teacher Work Experience</h2>
//             <form onSubmit={handleSubmit}>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="firstName">First Name</label>
//                     <input
//                         style={styles.input}
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         value={profile.firstName}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="lastName">Last Name</label>
//                     <input
//                         style={styles.input}
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         value={profile.lastName}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="email">Email</label>
//                     <input
//                         style={styles.input}
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={profile.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="profileWriteUp">Bio</label>
//                     <textarea
//                         style={styles.textarea}
//                         id="profileWriteUp"
//                         name="profileWriteUp"
//                         value={profile.profileWriteUp}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="workExperience">Work Experience</label>
//                     <textarea
//                         style={styles.textarea}
//                         id="workExperience"
//                         name="workExperience"
//                         value={profile.workExperience}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="address">Address</label>
//                     <input
//                         style={styles.input}
//                         id="address"
//                         name="address"
//                         value={profile.address}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="courses">Courses</label>
//                     <input
//                         style={styles.input}
//                         id="courses"
//                         name="courses"
//                         value={profile.courses}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label} htmlFor="yearsOfExperience">Years of Experience</label>
//                     <input
//                         style={styles.input}
//                         id="yearsOfExperience"
//                         name="yearsOfExperience"
//                         value={profile.yearsOfExperience}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button style={styles.button} type="submit">Submit</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// const styles = {
//     container: {
//         backgroundColor: '#f0fdf4',
//         color: '#065f46',
//         padding: '20px',
//         borderRadius: '10px',
//         maxWidth: '600px',
//         margin: '0 auto',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         fontFamily: 'Arial, sans-serif',
//     },
//     title: {
//         textAlign: 'center',
//         color: '#065f46',
//     },
//     formGroup: {
//         marginBottom: '15px',
//     },
//     label: {
//         display: 'block',
//         marginBottom: '5px',
//         fontWeight: 'bold',
//     },
//     input: {
//         width: '100%',
//         padding: '10px',
//         borderRadius: '5px',
//         border: '1px solid #065f46',
//         boxSizing: 'border-box',
//     },
//     textarea: {
//         width: '100%',
//         padding: '10px',
//         borderRadius: '5px',
//         border: '1px solid #065f46',
//         boxSizing: 'border-box',
//         height: '100px',
//     },
//     button: {
//         display: 'block',
//         width: '100%',
//         padding: '10px',
//         backgroundColor: '#065f46',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
// };

// export default TeacherProfileForm;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTeacher } from './TeacherRedux/TeacherActions';

const TeacherProfileForm = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profileWriteUp: '',
        workExperience: '',
        address: '',
        courses: '',
        yearsOfExperience: '',
    });
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const coursesArray = profile.courses.split(',').map((course) => course.trim());
            const newProfile = { ...profile, courses: coursesArray };
            console.log('Submitting profile:', newProfile); // Log the profile data
            await dispatch(createTeacher(newProfile));
            setProfile({
                firstName: '',
                lastName: '',
                email: '',
                profileWriteUp: '',
                workExperience: '',
                address: '',
                courses: '',
                yearsOfExperience: '',
            });
            setError(null);
        } catch (error) {
            console.error('Error creating profile:', error);
            setError('Error creating profile: ' + (error.message || 'Internal Server Error'));
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Teacher Work Experience</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="firstName">First Name</label>
                    <input
                        style={styles.input}
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="lastName">Last Name</label>
                    <input
                        style={styles.input}
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="email">Email</label>
                    <input
                        style={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="profileWriteUp">Bio</label>
                    <textarea
                        style={styles.textarea}
                        id="profileWriteUp"
                        name="profileWriteUp"
                        value={profile.profileWriteUp}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="workExperience">Work Experience</label>
                    <textarea
                        style={styles.textarea}
                        id="workExperience"
                        name="workExperience"
                        value={profile.workExperience}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="address">Address</label>
                    <input
                        style={styles.input}
                        id="address"
                        name="address"
                        value={profile.address}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="courses">Courses</label>
                    <input
                        style={styles.input}
                        id="courses"
                        name="courses"
                        value={profile.courses}
                        onChange={handleChange}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="yearsOfExperience">Years of Experience</label>
                    <input
                        style={styles.input}
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        value={profile.yearsOfExperience}
                        onChange={handleChange}
                    />
                </div>
                <button style={styles.button} type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f0fdf4',
        color: '#065f46',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '600px',
        margin: '0 auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        textAlign: 'center',
        color: '#065f46',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #065f46',
        boxSizing: 'border-box',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #065f46',
        boxSizing: 'border-box',
        height: '100px',
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '10px',
        backgroundColor: '#065f46',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default TeacherProfileForm;
