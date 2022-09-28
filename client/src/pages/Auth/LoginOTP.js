import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './Auth.css'
import icon from '../../assets/icon.png'
import { firebase, auth } from './firebase';
import { loginOTP } from '../../actions/auth'

const LoginOTP = () => {

    const users = useSelector((state) => state.usersReducer)

    const [email, setEmail] = useState("")
    const [mynumber, setMynumber] = useState("");
    const [otp, setotp] = useState("");
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const signin = (e) => {

        e.preventDefault();

        users.filter(user => user.email === email).map(user => (
            setMynumber(user.phone)
        ))
    }
    useEffect(() => {
        if (mynumber === "" || mynumber.length < 10) return;

        // console.log({mynumber})

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            alert("One Time Password (OTP) has been sent on your registered mobile number...")
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }, [mynumber])

    // Validate OTP
    const ValidateOtp = (e) => {

        e.preventDefault()

        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            dispatch(loginOTP({email}, navigate))
            // success
        }).catch((err) => {
            alert("Wrong code");
        })
    }



  return (
    <div>
    <section className='auth-section'>
            <div className='auth-container-2'>
                <img src={icon} alt="stack overflow" className='login-logo'/>
                    <div style={{ display: !show ? "block" : "none" }}>
                        <form >
                            <label htmlFor='email'>
                                <h4>Email</h4>
                                <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
                            </label>
                            <div id="recaptcha-container"></div>
                            <button type='submit' className='auth-btn' onClick={signin}>Send OTP</button>
                        </form>
                    </div>
                    <div style={{ display: show ? "block" : "none" }}>
                        <form>
                            <label htmlFor='number'>
                                <h4>OTP</h4>
                                <input type="number" name='number' id='number' onChange={(e) => {setotp(e.target.value)}}/>
                            </label>
                            <button type='submit' className='auth-btn' onClick={ValidateOtp}>Verify OTP</button>
                        </form>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default LoginOTP