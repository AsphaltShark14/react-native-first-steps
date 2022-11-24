import * as yup from "yup";

export const formSchema = yup.object({
    title: yup.string().required(),
    text: yup.string().min(12).required(),
    rating: yup.string().required().matches(/[1-5]/),
})