import * as Yup from 'yup';

export const CreateOqim = Yup.object({
    oqim_name: Yup.string().min(3).max(64).required(),
});
