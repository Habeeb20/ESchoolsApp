import React,{useState, useEffect} from 'react';
import im from "../assets/food/img3.png"
import toast from 'react-hot-toast';
import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
import { useNavigate } from 'react-router-dom';
const FormComponent = () => {
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
        contAdd: '',
        insAtt: '',
        grade: '',
        password: '',
      });

      const [isLoading, setIsLoading] = useState(false); // Loading state for user feedback
      const navigate = useNavigate();
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true when submitting
        try {
          const response = await fetch('http://localhost:4000/api/teacherprofile/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const result = await response.json();
    
          if (response.ok) {
            toast.success('Registration successful');
            navigate('/teacherprofile');
          } else {
            console.log(result.message)
            toast.error(result.message || 'Registration failed');
          }
        } catch (error) {
          console.error('Error during registration:', error);
          toast.error('Error during registration. Please try again later.');
        } finally {
          setIsLoading(false); 
        }
      };
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    },
    profileImg: {
      display: 'block',
      margin: '0 auto 20px',
      borderRadius: '50%',
      width: '100px',
      height: '100px',
    },
    header: {
      fontSize: '1.5rem',
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    formGroup: {
      marginBottom: '15px',
      display: 'flex',
      flexDirection: 'column',
    },
    formLabel: {
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    formInput: {
      padding: '10px',
      fontSize: '1.2rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    column: {
      flex: '0 0 48%',
    },
    fullColumn: {
      flex: '0 0 100%',
    },
    saveButton: {
      display: 'block',
      width: '100%',
      backgroundColor: 'green',
      color: '#fff',
      border: 'none',
      padding: '15px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
      textAlign: 'center',
    },
    divider: {
      borderBottom: '1px solid #ccc',
      margin: '20px 0',
    },
  };

  return (
    <>
    <HomeNavbar />
    <div style={styles.container}>
        <form onSubmit={handleSubmit}>
             {/* Header */}
      <h2 style={styles.header}>Add your Information as a Teacher</h2>

{/* Profile image */}
<img
  src={im}
  alt="Profile"
  style={styles.profileImg}
/>

{/* Form starts here */}
<div style={styles.row}>
  <div style={styles.fullColumn}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>First Name</label>
      <input type="text" name='fName'    value={formData.fName}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>
</div>

<div style={styles.row}>
  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Last Name</label>
      <input type="text" name='lName'   value={formData.lName}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>

  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Email</label>
      <input type="email" name='email' value={formData.email}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>
</div>

<div style={styles.row}>
  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Phone number</label>
      <input type="number" name='phone'   value={formData.phone}
          onChange={handleInputChange}
          requiredstyle={styles.formInput} />
    </div>
  </div>

  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Address</label>
      <input type="text" name='address'  value={formData.address}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>

  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Contact address(e.g linkedIn)</label>
      <input type="text" name='contAdd'   value={formData.contAdd}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>
</div>
<div style={styles.header}>Education</div>
<div style={styles.divider}></div>

{/* Next of kin */}



<div style={styles.row}>
  <div style={styles.fullColumn}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Institution Attended</label>
      <input type="text" name='insAtt' value={formData.insAtt}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>
</div>

<div style={styles.row}>
  <div style={styles.fullColumn}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Course Studied</label>
      <input type="text" name='courseStud'   value={formData.courseStud}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>
</div>

<div style={styles.row}>
  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Grade you graded with:</label>
      <input type="text" name='grade'   value={formData.grade}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>
  </div>
  <div style={styles.header}>Work Experience</div>
<div style={styles.divider}></div>




<div style={styles.row}>
  <div style={styles.fullColumn}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Work Experience</label>
      <textarea type="text" name='workExp'  value={formData.workExp}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>
</div>

<div style={styles.row}>
  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Years of Experience</label>
      <input type="text" name='yrsOfExp'   value={formData.yrsOfExp}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>

  
</div>

<div style={styles.row}>
  <div style={styles.fullColumn}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Profile Summary/Bio</label>
      <textarea type="text"  name='profSum'  value={formData.profSum}
          onChange={handleInputChange}
          required style={styles.formInput} />
    </div>
  </div>
</div>
<div style={styles.header}>Security</div>
<div style={styles.divider}></div>

{/* Fees expectation */}
<div style={styles.row}>
  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>password</label>
      <input type="password" name='password' value={formData.password}
          onChange={handleInputChange}
          placeholder="please do not forget your password"
          required style={styles.formInput} />
    </div>
  </div>
</div>
{/* 
<div style={styles.row}>
  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Class Fee</label>
      <input type="text" style={styles.formInput} />
    </div>
  </div>

  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Discount</label>
      <input type="text" style={styles.formInput} />
    </div>
  </div>

  <div style={styles.column}>
    <div style={styles.formGroup}>
      <label style={styles.formLabel}>Bloodgroup</label>
      <input type="text" style={styles.formInput} />
    </div>
  </div>
</div> */}

{/* Save button */}
<button style={styles.saveButton}type='submit' disabled={isLoading}>
      {isLoading ? 'Submitting...' : 'Submit'}
</button>

        </form>
     
    </div>
    </>
    
  );
};

export default FormComponent;
