import React, {memo } from 'react';
import {useDispatch} from "react-redux"; // Reduxga dispatch qilish uchun
import { Register } from "../../actions/auth.js"; // Thunk funksiyasini import qilish
import style from "../../assets/css/auth.module.css"
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import {SignupSchema} from "../../helpers/authSchema.js";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
    const dispatch = useDispatch(); // dispatch ni olish
    const formik = useFormik({
        initialValues: { username: '', email: '', password: '' },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            dispatch(Register(values.username , values.email, values.password));
        },
    } );



        return (
            <div className={style.WrappedContainer}>
                <div className={style.Main}>
                <div className={style.Title}>
                    <div className={style.Pagetitle}>
                        <p> Hush Kelibsiz</p>
                    </div>
                    <div className={style.pageTipes}>
                        <span>Ro'yhatdan o'tganmisiz ?</span>
                         <Link to="/login" >Kirish</Link>
                    </div>
                 </div>
                 <p style={{textAlign: "center" , marginTop: "12px"}}>Email orqali Ro'yhatdan o'tish</p>
                 <div className={style.forms}>
                     <form onSubmit={formik.handleSubmit}>
                         <input
                             id='username'
                             className='input'
                             placeholder="username"
                             // 'getFieldProps' automatically handles onChange, onBlur, and value for the input.
                             {...formik.getFieldProps('username')}
                         />
                         {formik.touched.username && formik.errors.username && (
                             <div className={style.inputErrorHandling}>{formik.errors.username}</div>
                         )}
                         {/* email */}
                         <input
                             id='email'
                             className='input'
                             placeholder="email"
                             // 'getFieldProps' automatically handles onChange, onBlur, and value for the input.
                             {...formik.getFieldProps('email')}
                         />
                         {formik.touched.email && formik.errors.email && (
                             <div className={style.inputErrorHandling}>{formik.errors.email}</div>
                         )}
                         {/* password*/}
                         <input
                             id='password'
                             className='input'
                             type="password"
                             placeholder="Parolni Kiriting"
                             // 'getFieldProps' automatically handles onChange, onBlur, and value for the input.
                             {...formik.getFieldProps('password')}
                         />
                         {formik.touched.password && formik.errors.password && (
                             <div className={style.inputErrorHandling}>{formik.errors.password}</div>
                         )}
                         <button type="submit">Ro`yhatdan o`tish</button>
                     </form>
                 </div>
                    {/* =================== */}
                    <div className={style.SubtitleFooter}>
                        <div className={style.ForgetPassword}>
                    <Link to="/forget_password" > Parolingizni unutdingizmi</Link>
                    </div>
                 </div>
                </div>
            </div>
    );
};

export default memo(RegisterForm);
