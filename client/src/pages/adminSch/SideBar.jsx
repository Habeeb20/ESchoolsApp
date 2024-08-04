import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader, List } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';

const SideBar = () => {
    const location = useLocation();

    const menuItems = [
        { to: '/studentlogin', text: 'Home', icon: <HomeIcon />, activePaths: ["/", "/Admin/dashboard"] },
        { to: '/Admin/classes', text: 'Classes', icon: <ClassOutlinedIcon />, activePaths: ['/Admin/classes'] },
        { to: '/Admin/subjects', text: 'Subjects', icon: <AssignmentIcon />, activePaths: ['/Admin/subjects'] },
        { to: '/Admin/teachers', text: 'Teachers', icon: <SupervisorAccountOutlinedIcon />, activePaths: ['/Admin/teachers'] },
        { to: '/Admin/students', text: 'Students', icon: <PersonOutlineIcon />, activePaths: ['/Admin/students'] },
        { to: '/Admin/notices', text: 'Notices', icon: <AnnouncementOutlinedIcon />, activePaths: ['/Admin/notices'] },
        { to: '/Admin/complains', text: 'Complains', icon: <ReportIcon />, activePaths: ['/Admin/complains'] },
    ];

    const userItems = [
        { to: '/Admin/profile', text: 'Profile', icon: <AccountCircleOutlinedIcon />, activePaths: ['/Admin/profile'] },
        { to: '/logout', text: 'Logout', icon: <ExitToAppIcon />, activePaths: ['/logout'] },
    ];

    const renderMenuItems = (items) => {
        return items.map((item, index) => (
            <ListItemButton
                key={index}
                component={Link}
                to={item.to}
                sx={{
                    '&:hover': { backgroundColor: '#333' },
                    '&.Mui-selected': { backgroundColor: '#555', '&:hover': { backgroundColor: 'green' } },
                    backgroundColor: 'black',
                    color: 'white',
                    my: 0.5,
                    px: 2,
                }}
                selected={item.activePaths.includes(location.pathname)}
            >
                <ListItemIcon sx={{ color: item.activePaths.includes(location.pathname) ? 'primary.main' : 'white' }}>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
            </ListItemButton>
        ));
    };

    return (
        <>
            <List>
                {renderMenuItems(menuItems)}
            </List>
            <Divider sx={{ my: 1, borderColor: 'grey.800' }} />
            <List>
                <ListSubheader component="div" inset sx={{ color: 'white', backgroundColor: 'black' }}>
                    User
                </ListSubheader>
                {renderMenuItems(userItems)}
            </List>
        </>
    );
};

export default SideBar;
