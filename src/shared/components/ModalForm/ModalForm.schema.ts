import * as yup from 'yup';

const schema = yup
  .object({
    city: yup.string().required('Выберите город').typeError('Выберите город'),
    name: yup.string().required('Введите имя'),
    category: yup.string().required('Введите тип мебели'),
    address: yup.string().required('Введите адрес'),
    phoneNumber: yup.string().required('Введите номер телефона'),
    agreement: yup
      .bool()
      .oneOf([true], 'Подтвердите согласие на обработку персональных данных')
      .required('Подтвердите согласие на обработку персональных данных'),
  })
  .required();

export default schema;
