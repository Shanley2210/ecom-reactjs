import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function Login() {
    const { container, title, boxRememberMe, lostPW } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon
                lable='Username or email'
                type='text'
                isRequired='true'
            />
            <InputCommon lable='Password' type='password' isRequired='true' />
            <div className={boxRememberMe}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button content={'LOGIN'} />
            </div>
            <div className={lostPW}>Lost your password?</div>
        </div>
    );
}

export default Login;
