import * as Yup from 'yup';

export const AdminLogin = Yup.object({
    username: Yup.string().min(3).max(64).required(),
    password: Yup.string().min(4).max(64).required(),
});

export const AdminLoginWithPhoneNumber = Yup.object({
    phone_number: Yup.string()
        .required()
        .matches(/\+998 \([0-9]{2}\) [0-9]{3} [0-9]{2} [0-9]{2}/, {
            message: 'Phone number invalid',
        }),
});
