import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders /ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import UpdateProduct from '../UpdateProduct/UpdateProduct';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { user, admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            {
                user?.email ?
                <div>
                    <p>{user?.displayName}</p>
                </div> 
                :
                ''
            }
            <Divider />
            <Link style={{textDecoration: 'none'}} to="/"><Button color="inherit">Home</Button></Link> <br/>
            {
                !admin && <Box>
                    <Link style={{textDecoration: 'none'}} to={`${url}/pay`}><Button color="inherit">Pay</Button></Link><br/>
                    <Link style={{textDecoration: 'none'}} to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link><br/>
                    <Link style={{textDecoration: 'none'}} to={`${url}/review`}><Button color="inherit">Review</Button></Link><br/>
                </Box>
            }
            {
                admin && <Box>
                    <Link style={{textDecoration: 'none'}} to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link><br/>
                    <Link style={{textDecoration: 'none'}} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link><br/>
                    <Link style={{textDecoration: 'none'}} to={`${url}/addProduct`}><Button color="inherit">Add A Product</Button></Link><br/>
                    <Link style={{textDecoration: 'none'}} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link><br/>
                </Box>
            }
            <Divider />
            <Button sx={{mt: 2}} variant="contained" color="error" onClick={logout}>Logout</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <PrivateRoute exact path={path}>
                        <DashboardHome></DashboardHome>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/pay`}>
                        <Pay />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/myOrders`}>
                        <MyOrders />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <Review />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/updateProduct/:id`}>
                        <UpdateProduct />
                    </PrivateRoute>
                </Switch>
            </Box>
        </Box>
    );
    }

    Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
    };

export default Dashboard;
