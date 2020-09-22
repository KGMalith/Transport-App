import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'

export class UserForm extends Component {
    state = {
        step : 1,
        userName:'',
        email:'',
        password:'',
        repassword: '',
        firstName:'',
        lastName:'',
        address:'',
        mobileNumber:''
    }

    //proceed to next step
    nextStep = () =>{
        const {step} = this.state;
        this.setState({
            step:step + 1
        });
    }

    //proceed to perv step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //handle fields inputs
    handleChange = input =>e =>{
        this.setState({[input]:e.target.value});
    }


    render() {

        const {step} = this.state;
        const { userName, email, password, repassword, firstName, lastName, address, mobileNumber} = this.state;
        const values = { userName, email, password, repassword, firstName, lastName, address, mobileNumber}
       
        switch(step){
            case 1:
                return(
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values = {values}
                    />
                    
                )
            case 2:
                return (
                    <FormPersonalDetails/>
                )

            case 3:
                return <h1>testing</h1>

        }
    }
}

export default UserForm;
