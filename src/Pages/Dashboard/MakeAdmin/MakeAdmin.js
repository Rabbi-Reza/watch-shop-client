import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Alert } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user ={email}
        fetch('https://shrouded-dusk-10588.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                sx={{ width: '75%'}}
                label="Email" 
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
                <Button 
                sx={{ width: '50%', mt: 2}} 
                type="submit" 
                variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;