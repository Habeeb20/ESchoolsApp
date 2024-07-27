// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { getSubjectList } from '../../../redux/sclassRelated/sclassHandle';
// import { deleteUser } from '../../../redux/userRelated/userHandle';
// import PostAddIcon from '@mui/icons-material/PostAdd';
// import {
//     Paper, Box, IconButton,
// } from '@mui/material';
// import DeleteIcon from "@mui/icons-material/Delete";
// import TableTemplate from '../../../components/TableTemplate';
// import { BlueButton, GreenButton } from '../../../components/buttonStyles';
// import SpeedDialTemplate from '../../../components/SpeedDialTemplate';
// import Popup from '../../../components/Popup';

// const ShowSubjects = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { subjectsList = [], loading, error, response } = useSelector((state) => state.sclass);
//     const { currentUser } = useSelector(state => state.user);

//     useEffect(() => {
//         if (currentUser && currentUser._id) {
//             dispatch(getSubjectList(currentUser._id, "AllSubjects"));
//         }
//     }, [currentUser._id, dispatch]);

//     useEffect(() => {
//         if (error) {
//             console.error("Error fetching subjects:", error);
//         }
//     }, [error]);

//     const [showPopup, setShowPopup] = useState(false);
//     const [message, setMessage] = useState("");

//     const deleteHandler = (deleteID, address) => {
//         console.log("Delete ID:", deleteID);
//         console.log("Address:", address);
//         setMessage("Sorry, the delete function has been disabled for now.");
//         setShowPopup(true);

//         dispatch(deleteUser(deleteID, address))
//             .then(() => {
//                 dispatch(getSubjectList(currentUser._id, "AllSubjects"));
//             });
//     };

//     const subjectColumns = [
//         { id: 'subName', label: 'Sub Name', minWidth: 170 },
//         { id: 'sessions', label: 'Sessions', minWidth: 170 },
//         { id: 'sclassName', label: 'Class', minWidth: 170 },
//     ];

//     const subjectRows = Array.isArray(subjectsList) && subjectsList.map((subject) => {
//         return {
//             subName: subject.subName,
//             sessions: subject.sessions,
//             sclassName: subject.sclassName?.sclassName,
//             sclassID: subject.sclassName?._id,
//             id: subject._id,
//         };
//     });

//     console.log("Subjects List:", subjectsList);
//     console.log("Subject Rows:", subjectRows);

//     const SubjectsButtonHaver = ({ row }) => (
//         <>
//             <IconButton onClick={() => deleteHandler(row.id, "Subject")}>
//                 <DeleteIcon color="error" />
//             </IconButton>
//             <BlueButton variant="contained"
//                 onClick={() => navigate(`/Admin/subjects/subject/${row.sclassID}/${row.id}`)}>
//                 View
//             </BlueButton>
//         </>
//     );

//     const actions = [
//         {
//             icon: <PostAddIcon color="primary" />, name: 'Add New Subject',
//             action: () => navigate("/Admin/subjects/chooseclass")
//         },
//         {
//             icon: <DeleteIcon color="error" />, name: 'Delete All Subjects',
//             action: () => deleteHandler(currentUser._id, "Subjects")
//         }
//     ];

//     return (
//         <>
//             {loading ? (
//                 <div>Loading...</div>
//             ) : (
//                 <>
//                     {response ? (
//                         <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
//                             <GreenButton variant="contained"
//                                 onClick={() => navigate("/Admin/subjects/chooseclass")}>
//                                 Add Subjects
//                             </GreenButton>
//                         </Box>
//                     ) : (
//                         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//                             {Array.isArray(subjectsList) && subjectsList.length > 0 ? (
//                                 <TableTemplate buttonHaver={SubjectsButtonHaver} columns={subjectColumns} rows={subjectRows} />
//                             ) : (
//                                 <div>No subjects available.</div>
//                             )}
//                             <SpeedDialTemplate actions={actions} />
//                         </Paper>
//                     )}
//                 </>
//             )}
//             <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
//         </>
//     );
// };

// export default ShowSubjects;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getSubjectList } from '../../../redux/sclassRelated/sclassHandle';
import { deleteUser } from '../../../redux/userRelated/userHandle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import {
    Paper, Box, IconButton, CircularProgress, Typography
} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import TableTemplate from '../../../components/TableTemplate';
import { BlueButton, GreenButton } from '../../../components/buttonStyles';
import SpeedDialTemplate from '../../../components/SpeedDialTemplate';
import Popup from '../../../components/Popup';

const ShowSubjects = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { subjectsList = [], loading, error, response } = useSelector((state) => state.sclass);
    const { currentUser } = useSelector(state => state.user);

    useEffect(() => {
        if (currentUser && currentUser._id) {
            dispatch(getSubjectList(currentUser._id, "AllSubjects"));
        }
    }, [currentUser._id, dispatch]);

    const deleteHandler = (deleteID, address) => {
        dispatch(deleteUser(deleteID, address))
            .then(() => {
                dispatch(getSubjectList(currentUser._id, "AllSubjects"));
            });
    };

    const subjectColumns = [
        { id: 'subName', label: 'Sub Name', minWidth: 170 },
        { id: 'sessions', label: 'Sessions', minWidth: 170 },
        { id: 'sclassName', label: 'Class', minWidth: 170 },
    ];

    const subjectRows = Array.isArray(subjectsList) && subjectsList.map((subject) => ({
        subName: subject.subName,
        sessions: subject.sessions,
        sclassName: subject.sclassName?.sclassName,
        sclassID: subject.sclassName?._id,
        id: subject._id,
    }));

    const SubjectsButtonHaver = ({ row }) => (
        <>
            <IconButton onClick={() => deleteHandler(row.id, "Subject")}>
                <DeleteIcon color="error" />
            </IconButton>
            <BlueButton variant="contained" onClick={() => navigate(`/Admin/subjects/subject/${row.sclassID}/${row.id}`)}>
                View
            </BlueButton>
        </>
    );

    const actions = [
        {
            icon: <PostAddIcon color="primary" />,
            name: 'Add New Subject',
            action: () => navigate("/Admin/subjects/chooseclass")
        },
        {
            icon: <DeleteIcon color="error" />,
            name: 'Delete All Subjects',
            action: () => deleteHandler(currentUser._id, "Subjects")
        }
    ];

    return (
        <Box>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
            )}
            {error && (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography color="error">Error loading subjects.</Typography>
                </Box>
            )}
            {!loading && !error && (
                <>
                    {response && (
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                            <GreenButton variant="contained" onClick={() => navigate("/Admin/subjects/chooseclass")}>
                                Add Subjects
                            </GreenButton>
                        </Box>
                    )}
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        {Array.isArray(subjectsList) && subjectsList.length > 0 ? (
                            <TableTemplate buttonHaver={SubjectsButtonHaver} columns={subjectColumns} rows={subjectRows} />
                        ) : (
                            <Box sx={{ padding: '20px', textAlign: 'center' }}>
                                <Typography>No subjects available.</Typography>
                            </Box>
                        )}
                        <SpeedDialTemplate actions={actions} />
                    </Paper>
                </>
            )}
            <Popup message="Sorry, the delete function has been disabled for now." showPopup={true} setShowPopup={() => {}} />
        </Box>
    );
};

export default ShowSubjects;
