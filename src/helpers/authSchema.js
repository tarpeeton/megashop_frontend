import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'Foydalanuvchi nomi kamida 4 belgidan iborat bo\'lishi kerak')
        .max(20, 'Foydalanuvchi nomi 20 belgidan ko`p bo`lmasligi kerak')
.matches(
    /^[a-zA-Z0-9_]+$/,
    'Foydalanuvchi nomida faqat harflar, raqamlar va pastki chiziq belgilari bo\'lishi kerak'
)
    .required('Foydalanuvchi nomi majburiy'),

    email: Yup.string()
    .email('Noto`g`ri email formati (@gmail.com)')
    .required('Email majburiy'),

    password: Yup.string()
    .min(8, 'Parol kamida 8 belgidan iborat bo\'lishi kerak')
    .max(16, 'Parol 16 belgidan ko\'p bo\'lmasligi kerak')
    .matches(/[A-Z]/, 'Parolda kamida bir katta harf bo\'lishi kerak')
    .required('Parol majburiy')
});

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Noto\'g\'ri email formati  (@gmail.com)')
        .required('Email majburiy'),
    password: Yup.string()
        .min(8, 'Parol 8 belgidan kam bo\'lmasligi kerak')
        .max(16, 'Parol 16 belgidan ko\'p bo\'lmasligi kerak')
        .matches(/[A-Z]/, 'Parolda kamida bir katta harf bo\'lishi kerak')
        .required('Parol majburiy'),
});
