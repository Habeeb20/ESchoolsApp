import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {
    Paper, Box, IconButton
} from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from "@mui/icons-material/Delete";
import { getAllNotices } from '../../../redux/noticeRelated/noticeHandle';
import { deleteUser } from '../../../redux/userRelated/userHandle';
import TableTemplate from '../../../components/TableTemplate';
import { GreenButton } from '../../../components/buttonStyles';
import SpeedDialTemplate from '../../../components/SpeedDialTemplate';

const ShowNotices = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { noticesList = [], loading, error, response } = useSelector((state) => state.notice);
    const { currentUser } = useSelector(state => state.user);

    useEffect(() => {
        if (currentUser._id) {
            dispatch(getAllNotices(currentUser._id, "Notice"));
        }
    }, [currentUser._id, dispatch]);

    if (error) {
        console.log(error);
    }

    const deleteHandler = (deleteID, address) => {
        dispatch(deleteUser(deleteID, address))
            .then(() => {
                dispatch(getAllNotices(currentUser._id, "Notice"));
            })
    };

    const noticeColumns = [
        { id: 'title', label: 'Title', minWidth: 170 },
        { id: 'details', label: 'Details', minWidth: 100 },
        { id: 'date', label: 'Date', minWidth: 170 },
    ];

    const noticeRows = Array.isArray(noticesList) && noticesList.map((notice) => {
        const date = new Date(notice.date);
        const dateString = date.toString() !== "Invalid Date" ? date.toISOString().substring(0, 10) : "Invalid Date";
        return {
            title: notice.title,
            details: notice.details,
            date: dateString,
            id: notice._id,
        };
    });

    const NoticeButtonHaver = ({ row }) => {
        return (
            <>
                <IconButton onClick={() => deleteHandler(row.id, "Notice")}>
                    <DeleteIcon color="error" />
                </IconButton>
            </>
        );
    };

    const actions = [
        {
            icon: <NoteAddIcon color="primary" />, name: 'Add New Notice',
            action: () => navigate("/Admin/addnotice")
        },
        {
            icon: <DeleteIcon color="error" />, name: 'Delete All Notices',
            action: () => deleteHandler(currentUser._id, "Notices")
        }
    ];

    return (
        <>
            {loading ?
                <div>Loading...</div>
                :
                <>
                    {response ?
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                            <GreenButton variant="contained"
                                onClick={() => navigate("/Admin/addnotice")}>
                                Add Notice
                            </GreenButton>
                        </Box>
                        :
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            {Array.isArray(noticesList) && noticesList.length > 0 &&
                                <TableTemplate buttonHaver={NoticeButtonHaver} columns={noticeColumns} rows={noticeRows} />
                            }
                            <SpeedDialTemplate actions={actions} />
                        </Paper>
                    }
                </>
            }
        </>
    );
};

export default ShowNotices;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { Paper, Box, IconButton, CircularProgress, Typography } from '@mui/material';
// import NoteAddIcon from '@mui/icons-material/NoteAdd';
// import DeleteIcon from "@mui/icons-material/Delete";
// import { getAllNotices } from '../../../redux/noticeRelated/noticeHandle';
// import { deleteUser } from '../../../redux/userRelated/userHandle';
// import TableTemplate from '../../../components/TableTemplate';
// import { GreenButton } from '../../../components/buttonStyles';
// import SpeedDialTemplate from '../../../components/SpeedDialTemplate';

// const ShowNotices = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { noticesList = [], loading, error } = useSelector((state) => state.notice);
//     const { currentUser } = useSelector(state => state.user);

//     useEffect(() => {
//         if (currentUser._id) {
//             dispatch(getAllNotices(currentUser._id, "Notice"));
//         }
//     }, [currentUser._id, dispatch]);

//     const deleteHandler = (deleteID, address) => {
//         dispatch(deleteUser(deleteID, address)).then(() => {
//             dispatch(getAllNotices(currentUser._id, "Notice"));
//         });
//     };

//     const noticeColumns = [
//         { id: 'title', label: 'Title', minWidth: 170 },
//         { id: 'details', label: 'Details', minWidth: 100 },
//         { id: 'date', label: 'Date', minWidth: 170 },
//     ];

//     const noticeRows = Array.isArray(noticesList) && noticesList.map((notice) => {
//         const date = new Date(notice.date);
//         const dateString = date.toString() !== "Invalid Date" ? date.toISOString().substring(0, 10) : "Invalid Date";
//         return {
//             title: notice.title,
//             details: notice.details,
//             date: dateString,
//             id: notice._id,
//         };
//     });

//     const NoticeButtonHaver = ({ row }) => (
//         <>
//             <IconButton onClick={() => deleteHandler(row.id, "Notice")}>
//                 <DeleteIcon color="error" />
//             </IconButton>
//         </>
//     );

//     const actions = [
//         {
//             icon: <NoteAddIcon color="primary" />, 
//             name: 'Add New Notice',
//             action: () => navigate("/Admin/addnotice")
//         },
//         {
//             icon: <DeleteIcon color="error" />, 
//             name: 'Delete All Notices',
//             action: () => deleteHandler(currentUser._id, "Notices")
//         }
//     ];

//     return (
//         <Box>
//             {loading && (
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//                     <CircularProgress />
//                 </Box>
//             )}
//             {error && (
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//                     <Typography color="error">Error loading notices.</Typography>
//                 </Box>
//             )}
//             {!loading && !error && (
//                 <>
//                     <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
//                         <GreenButton variant="contained" onClick={() => navigate("/Admin/addnotice")}>
//                             Add Notice
//                         </GreenButton>
//                     </Box>
//                     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//                         {Array.isArray(noticesList) && noticesList.length > 0 ? (
//                             <TableTemplate buttonHaver={NoticeButtonHaver} columns={noticeColumns} rows={noticeRows} />
//                         ) : (
//                             <Box sx={{ padding: '20px', textAlign: 'center' }}>
//                                 <Typography>No notices available.</Typography>
//                             </Box>
//                         )}
//                         <SpeedDialTemplate actions={actions} />
//                     </Paper>
//                 </>
//             )}
//         </Box>
//     );
// };

// export default ShowNotices;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { Paper, Box, IconButton, CircularProgress, Typography } from '@mui/material';
// import NoteAddIcon from '@mui/icons-material/NoteAdd';
// import DeleteIcon from "@mui/icons-material/Delete";
// import { getAllNotices } from '../../../redux/noticeRelated/noticeHandle';
// import { deleteUser } from '../../../redux/userRelated/userHandle';
// import TableTemplate from '../../../components/TableTemplate';
// import { GreenButton } from '../../../components/buttonStyles';
// import SpeedDialTemplate from '../../../components/SpeedDialTemplate';

// const ShowNotices = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { noticesList = [], loading, error } = useSelector((state) => state.notice);
//     const { currentUser } = useSelector(state => state.user);

//     useEffect(() => {
//         if (currentUser._id) {
//             dispatch(getAllNotices(currentUser._id, "Notice"));
//         }
//     }, [currentUser._id, dispatch]);

//     const deleteHandler = (deleteID, address) => {
//         dispatch(deleteUser(deleteID, address)).then(() => {
//             dispatch(getAllNotices(currentUser._id, "Notice"));
//         });
//     };

//     const noticeColumns = [
//         { id: 'title', label: 'Title', minWidth: 170 },
//         { id: 'details', label: 'Details', minWidth: 100 },
//         { id: 'date', label: 'Date', minWidth: 170 },
//     ];

//     const noticeRows = Array.isArray(noticesList) && noticesList.map((notice) => {
//         const date = new Date(notice.date);
//         const dateString = date.toString() !== "Invalid Date" ? date.toISOString().substring(0, 10) : "Invalid Date";
//         return {
//             title: notice.title,
//             details: notice.details,
//             date: dateString,
//             id: notice._id,
//         };
//     });

//     const NoticeButtonHaver = ({ row }) => (
//         <IconButton onClick={() => deleteHandler(row.id, "Notice")}>
//             <DeleteIcon color="error" />
//         </IconButton>
//     );

//     const actions = [
//         {
//             icon: <NoteAddIcon color="primary" />, 
//             name: 'Add New Notice',
//             action: () => navigate("/Admin/addnotice")
//         },
//         {
//             icon: <DeleteIcon color="error" />, 
//             name: 'Delete All Notices',
//             action: () => deleteHandler(currentUser._id, "Notices")
//         }
//     ];

//     return (
//         <Box>
//             {loading && (
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//                     <CircularProgress />
//                 </Box>
//             )}
//             {error && (
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//                     <Typography color="error">Error loading notices.</Typography>
//                 </Box>
//             )}
//             {!loading && !error && (
//                 <>
//                     <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
//                         <GreenButton variant="contained" onClick={() => navigate("/Admin/addnotice")}>
//                             Add Notice
//                         </GreenButton>
//                     </Box>
//                     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//                         {Array.isArray(noticesList) && noticesList.length > 0 ? (
//                             <TableTemplate buttonHaver={NoticeButtonHaver} columns={noticeColumns} rows={noticeRows} />
//                         ) : (
//                             <Box sx={{ padding: '20px', textAlign: 'center' }}>
//                                 <Typography>No notices available.</Typography>
//                             </Box>
//                         )}
//                         <SpeedDialTemplate actions={actions} />
//                     </Paper>
//                 </>
//             )}
//         </Box>
//     );
// };

// export default ShowNotices;
