



import React, { useState, useEffect } from 'react';
import sch1 from '../assets/u.jfif'
import sch2 from '../assets/u2.jfif'
import sch3 from '../assets/u3.jfif'
import sch4 from '../assets/u4.jfif'
import sch5 from '../assets/u5.jfif'
import sch6 from '../assets/u6.jfif'
import sch7 from '../assets/u7.jfif'
import sch8 from '../assets/u8.jfif'
import sch9 from '../assets/u9.jfif'
import sch10 from '../assets/u10.jfif'
import HomeNavbar from './LandingPage/essentialLanding/HomeNavbar';
import AdmissionHeader from './AdmissionHeader';
import { Link } from 'react-router-dom';
const PublicPage = () => {
    const [schools, setSchools] = useState([]);
    const [filteredSchools, setFilteredSchools] = useState([]);
    const [userEmail, setUserEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editCommentText, setEditCommentText] = useState('');
    const [editCommentImage, setEditCommentImage] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [replyToCommentId, setReplyToCommentId] = useState(null);
    const [newReplyImage, setNewReplyImage] = useState(null);


    const placeholderImages = [sch6, sch7, sch8, sch9, sch10];

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * placeholderImages.length);
        return placeholderImages[randomIndex];
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([
                ...comments,
                {
                    id: Date.now(),
                    text: newComment,
                    image: selectedImage,
                    replies: [],
                },
            ]);
            setNewComment('');
            setSelectedImage(null);
        }
    };

    const handleEditComment = (id) => {
        const commentToEdit = comments.find((comment) => comment.id === id);
        if (commentToEdit) {
            setEditingCommentId(id);
            setEditCommentText(commentToEdit.text);
            setEditCommentImage(commentToEdit.image);
        }
    };

    const handleSaveEdit = () => {
        setComments(
            comments.map((comment) =>
                comment.id === editingCommentId
                    ? { ...comment, text: editCommentText, image: editCommentImage }
                    : comment
            )
        );
        setEditingCommentId(null);
        setEditCommentText('');
        setEditCommentImage(null);
    };

    const handleDeleteComment = (id) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };

    const handleAddReply = (commentId) => {
        if (replyText.trim()) {
            setComments(
                comments.map((comment) =>
                    comment.id === commentId
                        ? {
                            ...comment,
                            replies: [
                                ...comment.replies,
                                { id: Date.now(), text: replyText, image: newReplyImage },
                            ],
                        }
                        : comment
                )
            );
            setReplyText('');
            setNewReplyImage(null);
            setReplyToCommentId(null);
        }
    };

    const handleImageChange = (e) => {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleEditImageChange = (e) => {
        setEditCommentImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleReplyImageChange = (e) => {
        setNewReplyImage(URL.createObjectURL(e.target.files[0]));
    };

    const sortedComments = [...comments].sort((a, b) => a.id - b.id);






    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const response = await fetch('http://localhost:4000/schools');
                const data = await response.json();
                setSchools(data);
                setFilteredSchools(data);
            } catch (error) {
                console.error('Error fetching schools:', error);
            }
        };
        fetchSchools();
    }, []);
    const getRandomSchools = (schools, count) => {
        const shuffled = schools.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    // const randomSchools = getRandomSchools(schools, 5); // Adjust the number as needed
    const randomSchools = schools.map(school => ({
        ...school,
        image: getRandomImage() // Assign a random image
    }));


    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('http://localhost:4000/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                setUserEmail(data.email);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchUserProfile();
    }, []);

    // Function to handle date range filter
    const handleDateRangeChange = () => {
        filterSchoolsByDateRange();
    };

    // Function to filter schools based on admission date range
    const filterSchoolsByDateRange = () => {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
    
        const filtered = schools.filter((school) => {
            const admissionStartDate = new Date(school.admissionStartDate);
            const admissionEndDate = new Date(school.admissionEndDate);
    
            return (
                (admissionStartDate <= endDateObj && admissionEndDate >= startDateObj)
            );
        });
    
        setFilteredSchools(filtered.length > 0 ? filtered : null);
    };
    



    return (
        <>
            <HomeNavbar />
         
            <div style={styles.pageContainer}>
                <div style={styles.container}>
                    <h1 style={styles.header}>Registered Schools</h1>
                    <p style={{ textAlign: 'center' }}>You can search for schools currently doing admission using <br /> the search boxes to discover the date range e.g 02-24-2021 to 03-14-2024</p>

                    {/* Date Range Inputs */}
                    <div style={styles.searchContainer}>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            style={styles.searchInput}
                            placeholder="Start Date"
                        />
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            style={styles.searchInput}
                            placeholder="End Date"
                        />
                        <button onClick={handleDateRangeChange} style={styles.filterButton}>
                            Search
                        </button>
                   
                        
                    </div>
                    <Link to='/registeradmission'><button  style={styles.filterButton}>
                            Register
                        </button> </Link>
                        <Link to='/loginadmission'><button  style={styles.filterButton}>
                            Login
                        </button>

                        </Link>

                    {/* Conditional Rendering based on filteredSchools */}
                    {filteredSchools ? (
                        <ul style={styles.list}>
                            {filteredSchools.map((school) => (
                                <li key={school._id} style={styles.item}>
                                    <h2 style={styles.schoolName}>{school.school}</h2>
                                    <p style={styles.detail}><strong>School Address:</strong> {school.name}</p>
                                    <p style={styles.detail}><strong>Departments:</strong> {school.department?.join(', ') || 'N/A'}</p>
                                    <p style={styles.detail}><strong>Faculties:</strong> {school.faculty?.join(', ') || 'N/A'}</p>
                                    <p style={styles.detail}><strong>History:</strong> {school.history || 'N/A'}</p>
                                    <p style={styles.detail}><strong>Admission Start Date:</strong> {new Date(school.admissionStartDate).toLocaleDateString() || 'N/A'}</p>
                                    <p style={styles.detail}><strong>Admission End Date:</strong> {new Date(school.admissionEndDate).toLocaleDateString() || 'N/A'}</p>
                                    <p style={styles.detail}><strong>Admission Requirements:</strong> {school.admissionRequirements || 'N/A'}</p>
                                    <p style={styles.detail}><strong>Tuition Fees (Indigene):</strong> {school.tuitionFees?.indigene || 'N/A'}</p>
                                    <p style={styles.detail}><strong>Tuition Fees (Non-Indigene):</strong> {school.tuitionFees?.nonIndigene || 'N/A'}</p>
                                    <p style={styles.detail}><strong>Students:</strong> {school.students?.join(', ') || 'N/A'}</p>
                                    <p style={styles.detail}><strong>Phone number:</strong> {school.phone}</p>
                                    <p style={styles.detail}><strong>Location(city or state):</strong> {school.location}</p>
                                    <p style={styles.detail}><strong>School fees  range:</strong> {school.schoolFees}</p>
                                    <p style={styles.detail}><strong>Boarding:</strong> {school.onBoarding ? "yes, it is available" : 'not available'}</p>
                                    {school.email && (
                                       
                                        <a
                                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(school.email)}&su=${encodeURIComponent('Inquiry')}&body=${encodeURIComponent(`Hello, I am interested in your school. Please provide more information.%0A%0ASent by: ${userEmail}`)}`}
                                            style={styles.emailLink}
                                            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.emailLinkHover.backgroundColor)}
                                            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.emailLink.backgroundColor)}
                                        >
                                            <img
                                                src="https://img.icons8.com/material-outlined/24/000000/email.png"
                                                alt="Email"
                                                style={styles.emailIcon}
                                            />
                                            &nbsp; Email Us
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p style={styles.noResults}>No school is currently doing admission within the selected date range</p>
                    )}

                    <div style={styles.imageGallery}>
                        <h2 style={styles.subHeader}>Faculty Images</h2>
                        <div style={styles.imageRow}>
                            <img src={sch1} alt="School" style={styles.image} />
                            <img src={sch2} alt="School" style={styles.image} />
                            <img src={sch3} alt="School" style={styles.image} />
                            <img src={sch4} alt="School" style={styles.image} />
                            <img src={sch5} alt="School" style={styles.image} />
                        </div>
                    </div>










                    <div style={styles.pageContainer}>
                        <div style={styles.commentSection}>
                            <h2 style={styles.subHeader}>Drop a comment</h2>
                            <textarea
                                placeholder="Write your comment here..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                style={styles.commentBox}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={styles.fileInput}
                            />
                            {selectedImage && (
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    style={styles.previewImage}
                                />
                            )}
                            <button onClick={handleAddComment} style={styles.commentButton}>
                                Send
                            </button>
                        </div>

                        <div style={styles.commentsContainer}>
                            <h2 style={styles.subHeader}>Comments</h2>
                            <ul style={styles.commentList}>
                                {sortedComments.map((comment) => (
                                    <li key={comment.id} style={styles.commentItem}>
                                        <div style={styles.commentContent}>
                                            <p style={styles.commentText}>{comment.text}</p>
                                            {comment.image && (
                                                <img
                                                    src={comment.image}
                                                    alt="Comment"
                                                    style={styles.commentImage}
                                                />
                                            )}
                                            {editingCommentId === comment.id ? (
                                                <div style={styles.editSection}>
                                                    <textarea
                                                        value={editCommentText}
                                                        onChange={(e) => setEditCommentText(e.target.value)}
                                                        style={styles.editCommentBox}
                                                    />
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleEditImageChange}
                                                        style={styles.fileInput}
                                                    />
                                                    {editCommentImage && (
                                                        <img
                                                            src={editCommentImage}
                                                            alt="Edit"
                                                            style={styles.previewImage}
                                                        />
                                                    )}
                                                    <button onClick={handleSaveEdit} style={styles.saveButton}>
                                                        Save
                                                    </button>
                                                    <button
                                                        onClick={() => setEditingCommentId(null)}
                                                        style={styles.cancelButton}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <div style={styles.commentActions}>
                                                    <button
                                                        onClick={() => handleEditComment(comment.id)}
                                                        style={styles.editButton}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteComment(comment.id)}
                                                        style={styles.deleteButton}
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        onClick={() => setReplyToCommentId(comment.id)}
                                                        style={styles.replyButton}
                                                    >
                                                        Reply
                                                    </button>
                                                </div>
                                            )}
                                            {replyToCommentId === comment.id && (
                                                <div style={styles.replySection}>
                                                    <textarea
                                                        placeholder="Write your reply here..."
                                                        value={replyText}
                                                        onChange={(e) => setReplyText(e.target.value)}
                                                        style={styles.replyBox}
                                                    />
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleReplyImageChange}
                                                        style={styles.fileInput}
                                                    />
                                                    {newReplyImage && (
                                                        <img
                                                            src={newReplyImage}
                                                            alt="Reply"
                                                            style={styles.previewImage}
                                                        />
                                                    )}
                                                    <button
                                                        onClick={() => handleAddReply(comment.id)}
                                                        style={styles.replyButton}
                                                    >
                                                        Send Reply
                                                    </button>
                                                </div>
                                            )}
                                            <ul style={styles.replyList}>
                                                {comment.replies.map((reply) => (
                                                    <li key={reply.id} style={styles.replyItem}>
                                                        <p style={styles.replyText}>{reply.text}</p>
                                                        {reply.image && (
                                                            <img
                                                                src={reply.image}
                                                                alt="Reply"
                                                                style={styles.replyImage}
                                                            />
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>




                    <div>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Related Searches</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                                {randomSchools.map(school => (
                                    <div key={school.id} style={{ textAlign: 'center', marginBottom: '20px', width: 'calc(100% / 6 - 10px)' }}>
                                        <img src={school.image} alt="School" style={{ width: '100%', height: 'auto' }} />
                                        <div style={{ marginTop: '5px', fontSize: '1rem', color: '#333' }}>
                                            {school.school}
                                            <span style={{ color: 'orange', fontSize: '1rem', marginLeft: '10px' }}>★★★★★</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

  

                </div>
            </div>
        </>
    );
};

const styles = {

    pageContainer: {
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor: '#f4f4f4',
    },
    commentSection: {
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    subHeader: {
        fontSize: '20px',
        marginBottom: '10px',
        color: '#333',
    },
    commentBox: {
        width: '100%',
        height: '80px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        marginBottom: '10px',
        fontSize: '16px',
    },
    fileInput: {
        marginBottom: '10px',
        display: 'block',
    },
    previewImage: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px',
    },
    commentButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    },
    commentsContainer: {
        marginTop: '20px',
    },
    commentList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    commentItem: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    commentContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    commentText: {
        marginBottom: '10px',
        fontSize: '16px',
        color: '#333',
    },
    commentImage: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px',
    },
    editSection: {
        marginTop: '10px',
    },
    editCommentBox: {
        width: '100%',
        height: '80px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        marginBottom: '10px',
        fontSize: '16px',
    },
    saveButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#28a745',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    },
    cancelButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#dc3545',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    },
    commentActions: {
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
    },
    editButton: {
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
    },
    deleteButton: {
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#dc3545',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
    },
    replyButton: {
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#17a2b8',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
    },
    replySection: {
        marginTop: '10px',
        padding: '10px',
        borderTop: '1px solid #ddd',
        paddingTop: '10px',
    },
    replyBox: {
        width: '100%',
        height: '60px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        marginBottom: '10px',
        fontSize: '16px',
    },
    replyList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        marginLeft: '20px',
    },
    replyItem: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    replyText: {
        marginBottom: '10px',
        fontSize: '14px',
        color: '#333',
    },
    replyImage: {
        width: '60px',
        height: '60px',
        borderRadius: '8px',
        objectFit: 'cover',
    },
    pageContainer: {
        backgroundColor: '#F5F5F5',
        minHeight: '100vh',
        padding: '0 10px',
    },
    container: {
        backgroundColor: '#FFF',
        padding: '20px',
        maxWidth: '1000px',
        margin: '0 auto',
        fontFamily: "'Roboto', sans-serif",
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px',
        fontSize: '2.5rem',
        marginTop: '32px',
    },
    searchContainer: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    searchInput: {
        padding: '10px',
        width: '100%',
        maxWidth: '300px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ddd',
        margin: '5px',
    },
    filterButton: {
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ddd',
        backgroundColor: ' #1aac83',
        color: '#FFF',
        cursor: 'pointer',
        marginTop: '10px',
    },
    section: {
        marginBottom: '20px',
    },
    text: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#333',
    },
    list: {
        listStyleType: 'none',
        padding: '0',
    },
    item: {
        marginBottom: '20px',
        borderBottom: '1px solid #ddd',
        paddingBottom: '10px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    schoolName: {
        margin: '0 0 10px 0',
        color: ' #1aac83',
        fontSize: '3.5rem',
    },
    detail: {
        margin: '5px 0',
        color: '#555',
    },
    emailLink: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: ' #1aac83',  // A professional blue color
        padding: '10px 20px',
        borderRadius: '5px',
        color: '#fff',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    emailIcon: {
        width: '24px',
        height: '24px',
        marginRight: '8px',
        filter: 'brightness(0) invert(1)',  // Make the icon white
    },
    emailLinkHover: {
        backgroundColor: ' #004d40',  // Darker blue on hover
    },
    imageGallery: {
        marginTop: '30px',
    },
    subHeader: {
        fontSize: '1.5rem',
        color: '#333',
        marginBottom: '20px',
    },
    imageRow: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    image: {
        width: 'calc(100% / 6 - 10px)',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '10px',
    },
    commentSection: {
        marginTop: '30px',
    },
    commentBox: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ddd',
        minHeight: '100px',
    },
    commentButton: {
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '10px',
        fontSize: '1rem',
    },
    noResults: {
        color: '#999',
        textAlign: 'center',
        fontSize: '1.2rem',
    },
};

export default PublicPage;


















































































































































