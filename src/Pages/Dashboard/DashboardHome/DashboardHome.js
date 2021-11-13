import * as React from 'react';
import { Grid } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders /ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';

const DashboardHome = () => {
    const { admin } = useAuth();

    return (
        <Grid container spacing={2}> 
            <Grid item xs={12}  md={12}>
                {
                    !admin && <MyOrders />
                }
            </Grid>
            <Grid item xs={12}  md={12}>
                {
                    admin && <ManageAllOrders />
                }
            </Grid>
        </Grid>
    );
};

export default DashboardHome;