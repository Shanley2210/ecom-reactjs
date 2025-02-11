import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

function Login() {
    const { container, title, boxRememberMe, lostPW } = styles;
    const [isRegister, setIsRegister] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('email is required'),
            password: Yup.string()
                .min(6, 'password must be at least 6 charracter')
                .required('password is requied'),
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Password must match'
            )
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    //console.log(formik.errors);

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    lable='Username or email'
                    type='text'
                    isRequired='true'
                    formik={formik}
                />

                <InputCommon
                    id='password'
                    lable='Password'
                    type='password'
                    isRequired='true'
                    formik={formik}
                />

                {isRegister && (
                    <InputCommon
                        id='cfmpassword'
                        lable='Confirm Password'
                        type='password'
                        isRequired='true'
                        formik={formik}
                    />
                )}

                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}
                <div style={{ textAlign: 'center' }}>
                    <Button
                        content={isRegister ? 'REGISTER' : 'LOGIN'}
                        type='submit'
                    />
                </div>
            </form>
            <Button
                content={
                    isRegister
                        ? 'Already have an account?'
                        : 'Dont have an account?'
                }
                type=''
                isPrimary={false}
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />
            {!isRegister && <div className={lostPW}>Lost your password?</div>}
        </div>
    );
}

export default Login;
