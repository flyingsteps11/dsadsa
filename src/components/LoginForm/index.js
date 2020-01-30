import React, {useState} from 'react';

const LoginForm = ({
    onSubmit
}) => {

    const [formValues, setFormValues] = useState('');

    const onChangeField = (value, name) => {

    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="formLogin">
                <input id="formLogin" type="text" name="login" placeholder="Enter email" />
            </label>
            <label htmlFor="formPassword">
                <input id="formPassword" type="password" name="password" placeholder="Enter password" />
            </label>
            <label htmlFor="formLanguage">
                <input id="formLanguage" type="text" name="language" placeholder="Enter language" />
            </label>

            <button id="signInButton" type="submit">Sing in</button>
        </form>
    );
};