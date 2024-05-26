// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import style from "../assets/css/profile.module.css";
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import CloseIcon from '@mui/icons-material/Close';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import {useSelector} from "react-redux";
//
// const modalStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 800,
//     bgcolor: 'background.paper',
//     borderRadius: 3,
//     p: 4,
// };
//
// // eslint-disable-next-line react/prop-types
// export default function Profile({ open, handleClose }) {
//     // const data = useSelector((state) => state.auth);
//     // console.log(data)
//     return (
//         <div>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={modalStyle}>
//                     <div className={style.ProfileContainer}>
//                         {/*TITLE MODAL*/}
//                         <div className={style.title}>
//                             <h3> User Center</h3>
//                             <CloseIcon onClick={handleClose} />
//                         </div>
//                         {/* MENU PROFILE*/}
//                         <div style={{display: 'flex', flexDirection: 'row'}}>
//                             <div className={style.menuProfile}>
//                                 <Button variant="outlined">
//                                     Settings
//                                 </Button>
//
//                             </div>
//                             {/* PROFILE CONTENT*/}
//                             <div className={style.infoProfile}>
//                                 {/* USER IMAGE AND UPLOAD IMAGE*/}
//                                 <div className={style.profileImage}>
//                                     <div style={{display: 'flex', flexDirection: 'row' , gap: '1rem' , alignItems: 'center'}}>
//                                         <Avatar
//                                             alt="Remy Sharp"
//                                             src="/static/images/avatar/1.jpg"
//                                             sx={{ width: 56, height: 56 }}
//                                         />
//                                         <Button  sx={{ width: 100, height: 40 }} variant="contained">
//                                             UPLOAD
//                                             <CloudUploadIcon />
//                                         </Button>
//                                     </div>
//                                     <p style={{fontSize: '15px'}}>The image must be larger than 500*500 pixels. JPEG, PNG and SVG formats are supported</p>
//                                 </div>
//                             {/*  USER INFO  */}
//                                 <div className={style.info}>
//                                     <div className={style.userInfo}>
//                                         <p>username</p>
//                                        <h4>{data.username}</h4>
//                                     </div>
//                                     <div className={style.userInfo}>
//                                         <p>email</p>
//                                         <h4>{data.email}</h4>
//                                     </div>
//                                     <div className={style.userInfo}>
//                                         <p>userID</p>
//                                         <h4>{data._id}</h4>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Box>
//             </Modal>
//         </div>
//     );
// }
