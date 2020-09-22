import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const {values,handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField
                        hintText="Enter User Name"
                        floatingLabelText="User Name"
                        onChange={handleChange('userName')}
                        defaultValue={values.userName}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
