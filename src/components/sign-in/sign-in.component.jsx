import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';

import './sign-in.styles.scss';
class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email : '',
            password : ''
        })
    }
 
    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name] : value }) 
    }
    render() {
        return (
            <div className="sign-in-container">
                <h2>I already have an account</h2>
                <p>Sign In with your email and password</p>

                <form onClick={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        label="email"
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required={true} 
                        
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        label="password"  
                        value={this.state.password}  
                        handleChange={this.handleChange}   
                        required={true}
                        
                    />
                    <CustomButton type="submit"> Sign In </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;