import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import HomeNavbar from '../LandingPage/essentialLanding/HomeNavbar';
const TeacherProfile = () => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        profSum: '',
        workExp: '',
        address: '',
        courseStud: '',
        yrsOfExp: '',
        contAdd:'',
        insAtt: '',
        grade: '',
        password: '',
    
    });
    
    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:4000/api/teacherprofile/profile', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await response.json();
            setProfile(data);
            setFormData(data);
        };
        fetchProfile();
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/loginadmission');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await fetch('http://localhost:4000/api/teacherprofile/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });
            toast.success('Profile updated successfully');
            setEditMode(false);
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Error updating profile');
        }
    };

  return (
    <div>
        <HomeNavbar />
            <div style={styles.container}>
                {/* <button onClick={handleLogout} className="btn-secondary">Logout</button> */}
                <h1 style={styles.header}>Profile</h1>
                {editMode ? (
                    <form onSubmit={handleSubmit} style={styles.form}>
                        {Object.keys(formData).map((key) => (
                            <div key={key} style={styles.formGroup}>
                                <label style={styles.label} htmlFor={key}>
                                    {key.replace(/([A-Z])/g, ' $1').toUpperCase()}:
                                </label>
                                {key === 'admissionStartDate' || key === 'admissionEndDate' ? (
                                    <input
                                        id={key}
                                        name={key}
                                        type="date"
                                        value={formData[key]}
                                        onChange={handleInputChange}
                                        style={styles.input}
                                    />
                                ) : (
                                    <input
                                        id={key}
                                        name={key}
                                        value={formData[key]}
                                        onChange={handleInputChange}
                                        placeholder={key.replace(/([A-Z])/g, ' $1')}
                                        style={styles.input}
                                    />
                                )}
                            </div>
                        ))}
                        <button type="submit" style={styles.submitButton}>
                            Save Changes
                        </button>
                        <button onClick={handleLogout} style={styles.button}>
                            Logout
                        </button>
                    </form>
                ) : (
                    <div style={styles.profileInfo}>
                        {Object.keys(profile).map((key) => (
                            <p key={key} style={styles.infoItem}>
                                <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {profile[key]}
                            </p>
                        ))}
                        <button onClick={() => setEditMode(true)} style={styles.editButton}>
                            Edit
                        </button>
                    </div>
                )}
            </div>


    </div>
  )
}



const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: '"Arial", sans-serif',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    header: {
        textAlign: 'center',
        paddingTop: '25px',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '5px',
        color: '#555',
        fontSize: '14px',
    },
    input: {
        padding: '12px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    textarea: {
        padding: '12px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    submitButton: {
        padding: '12px',
        backgroundColor: '#1aac83',
        color: 'white',
        fontSize: '16px',
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
        marginTop: '10px',
    },

    button: {
        backgroundColor: 'red'
    },
    editButton: {
        padding: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        fontSize: '16px',
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
        marginTop: '10px',
    },
    profileInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    infoItem: {
        fontSize: '16px',
        color: '#333',
    },
};
export default TeacherProfile
