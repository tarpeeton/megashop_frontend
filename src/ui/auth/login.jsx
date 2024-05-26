import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"; // Reduxga dispatch qilish uchun
import {Login} from "../../actions/auth.js"; // Thunk funksiyasini import qilish
import style from "../../assets/css/auth.module.css"
import { Link } from "react-router-dom";
import {useFormik} from "formik";
import {loginSchema} from "../../helpers/authSchema.js";

const LoginForm = () => {
    const dispatch = useDispatch(); // dispatch ni olish
    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(Login(values.email, values.password));
        },
    });



    return (
        <div className={style.WrappedContainer}>
            <div className={style.Main}>
            <div className={style.Title}>
                <div className={style.Pagetitle}>
                    <p> Hush Kelibsiz</p>
                </div>
                <div className={style.pageTipes}>
                    <span>Ro'yhatdan otmaganmisiz ?</span>
                     <Link to="/register" > Ro'yhatdan o'tish </Link>
                </div>
             </div>
             <p style={{textAlign: "center" , marginTop: "12px"}}> Email orqali Kirish</p>
             <div className={style.forms}>
                     <form onSubmit={formik.handleSubmit}>
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
                         <button type="submit">Kirish</button>
                     </form>
             </div>
                {/* =================== */}
                <div className={style.SubtitleFooter}>
                    <div className={style.ForgetPassword}>
                        <Link href="/auth/register"> Parolingizni unutdingizmi</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;


