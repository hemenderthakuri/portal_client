import * as yup from 'yup';

export const ClincalService = yup.object().shape({
    surName:yup.string().required('This field is required').min(2,"Min 2 Charachter"),
    firstName:yup.string().notRequired().min(2,"Min 2 Charachter"),
    postCode:yup.string(),
    nhsNO:yup.string(),
})
