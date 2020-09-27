import React from 'react';
import { BrowserRouter ,Router, Route, Switch,Redirect } from 'react-router-dom';

//Layouts
import CustomerDashboard from '../containers/layouts/Customer/CustomerDashboard';
import AdminDashboard from '../containers/layouts/Admin/AdminDashboard';

//Customer Views
import Dashboard from '../containers/views/Customer/Dashboard';
import Login from '../containers/views/Customer/Login';
import Register from '../containers/views/Customer/Register';

//Admin Views
import AdDashboard from '../containers/views/Admin/Dashboard';
import Settings from '../containers/views/Admin/Settings';

//Not Found
import NotFound from '../containers/views/NotFound';

export default () => {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} />
                

                <Route path='/admin/:path?' exact>
                    <AdminDashboard>
                        <Switch>
                            <Route exact path='/admin'  component={AdDashboard} />
                            <Route exact path='/admin/setting'  component={Settings} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </AdminDashboard>
                </Route>

                <Route>
                    <CustomerDashboard>
                        <Switch>
                            <Route exact path='/dashboard'  component={Dashboard} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </CustomerDashboard>
                </Route>
                
            </Switch>
        </BrowserRouter>
    )

}