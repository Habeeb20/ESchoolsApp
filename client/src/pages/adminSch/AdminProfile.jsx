import React, { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser } from '../../redux/userRelated/userHandle';
import { useNavigate } from 'react-router-dom';
import { authLogout } from '../../redux/userRelated/userSlice';
import { Button, Collapse, TextField, Box, Container } from '@mui/material';
import styled from 'styled-components';

const AdminProfile = () => {
    const [showTab, setShowTab] = useState(false);
    const buttonText = showTab ? 'Cancel' : 'Edit profile';

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState("");
    const [schoolName, setSchoolName] = useState(currentUser.schoolName);

    const fields = password === "" ? { name, email, schoolName } : { name, email, password, schoolName };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(updateUser(fields, currentUser._id, "Admin"));
    };

    const deleteHandler = () => {
        try {
            dispatch(deleteUser(currentUser._id, "Students"));
            dispatch(deleteUser(currentUser._id, "Admin"));
            dispatch(authLogout());
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container maxWidth="sm">
            <ProfileContainer>
                <ProfileDetails>
                    <DetailItem>Name: {currentUser.name}</DetailItem>
                    <DetailItem>Email: {currentUser.email}</DetailItem>
                    <DetailItem>School: {currentUser.schoolName}</DetailItem>
                    <StyledButton variant="contained" color="error" onClick={deleteHandler}>
                        Delete
                    </StyledButton>
                    <StyledButton variant="contained" onClick={() => setShowTab(!showTab)}>
                        {showTab ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{buttonText}
                    </StyledButton>
                </ProfileDetails>
                <Collapse in={showTab} timeout="auto" unmountOnExit>
                    <FormContainer>
                        <form onSubmit={submitHandler}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                            <TextField
                                label="School"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={schoolName}
                                onChange={(event) => setSchoolName(event.target.value)}
                                required
                            />
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <StyledButton variant="contained" type="submit">
                                Update
                            </StyledButton>
                        </form>
                    </FormContainer>
                </Collapse>
            </ProfileContainer>
        </Container>
    );
};

export default AdminProfile;

const ProfileContainer = styled(Box)`
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const ProfileDetails = styled(Box)`
    margin-bottom: 20px;
`;

const DetailItem = styled(Box)`
    margin: 10px 0;
`;

const FormContainer = styled(Box)`
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
    margin-top: 20px;
    width: 100%;
    background-color: #270843;
    &:hover {
        background-color: #3f1068;
    }
`;
