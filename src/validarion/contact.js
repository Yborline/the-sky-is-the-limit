import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("Має бути рядком")
    .min(3, "Ім'я має містити від 3 до 100 символів")
    .max(100, "Ім'я має містити від 3 до 100 символів")
    .matches(
      /^[^-\s=]([a-zа-яzабвгдеёжзийклмнопрстуфхцчшщьыъэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯіїюґҐІЮЇєЄжЖA-Z0-9@$!_\s,%*\-.#?& ]{1,50})$/,
      "Ім'я має бути валідним"
    ),
  email: yup
    .string()
    .min(10, "Email має містити від 10 до 63 символів")
    .max(63, "Email має містити від 3 до 63 символів")
    .matches(
      /^[^-.#!?,%$&^*()][\w-.#!?,%$&^*()]+[^-.#!?,%$&^*()]@([\w-]+\.)+[\w-.][^-.,!?#$]{1,4}$/,
      "Email має бути валідним"
    )
    .required("This is a required fiel"),
});

export default validationSchema;
