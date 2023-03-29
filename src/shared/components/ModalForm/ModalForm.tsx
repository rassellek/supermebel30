import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Swal from 'sweetalert2';

import { Button, Input, SectionTitle } from 'ui';

import schema from './ModalForm.schema';

import styles from './ModalForm.module.scss';

import type { IModalForm, IModalFormProps } from './ModalForm.types';

const ModalForm = (props: IModalFormProps): JSX.Element => {
  const { setIsVisible } = props;

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    register,
    setValue,
    clearErrors,
    handleSubmit,
    reset: formReset,
    formState: { errors },
  } = useForm<IModalForm>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IModalForm) => {
    const {
      name, agreement, category, phoneNumber, city, address,
    } = data;
    const message = `Заявка от: ${name}. Город: ${city}. Какая мебель интересует: ${category}. Адрес: ${address}. Номер телефона: ${phoneNumber}. Согласие на обработку персональных данных: ${
      agreement ? 'согласен' : 'не согласен'
    }`;

    setIsLoading(true);
    await axios
      .get(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHAT_ID}&text=${message}`,
      )
      .then(() => Swal.fire({
        title: 'Спасибо за заявку!',
        text: 'В ближайшее время специалисты свяжутся с вами.',
        showConfirmButton: false,
        timer: 4000,
        icon: 'success',
      }).then(() => {
        setIsVisible(false);
        formReset();
      }))
      .catch(() => Swal.fire({
        title: 'Произошла ошибка',
        text: 'Не удалось отправить заявку. Наши специалисты уже работают над этим. Пожалуйста, оформите заявку по телефону.',
        showConfirmButton: true,
        confirmButtonText: 'Понятно',
        icon: 'error',
      }));
    setIsLoading(false);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <SectionTitle text="Онлайн заявка" className={styles.title} />
      <div className={styles.city}>Выберите город:</div>
      <Controller
        control={control}
        name="city"
        render={({ field }) => (
          <Input.Radio
            label="Астрахань"
            value="Астрахань"
            name={field.name}
            onChange={(event) => {
              setValue('city', event.target.value);
              clearErrors('city');
            }}
            error={errors.city?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        render={({ field }) => (
          <Input.Radio
            label="Атырау"
            value="Атырау"
            name={field.name}
            onChange={(event) => {
              setValue('city', event.target.value);
              clearErrors('city');
            }}
            error={errors.city?.message}
          />
        )}
      />
      <Input.Text
        placeholder="Ваше имя"
        {...register('name')}
        error={errors.name?.message}
        className={styles.field}
      />
      <Input.Text
        placeholder="Какая мебель интересует"
        {...register('category')}
        error={errors.category?.message}
        className={styles.field}
      />
      <Input.Text
        placeholder="Адрес"
        {...register('address')}
        error={errors.address?.message}
        className={styles.field}
      />
      <Input.Text
        placeholder="Номер телефона"
        {...register('phoneNumber')}
        error={errors.phoneNumber?.message}
        className={styles.field}
      />
      <Controller
        control={control}
        name="agreement"
        render={({ field }) => (
          <Input.Checkbox
            name={field.name}
            isChecked={field.value}
            onChange={(event) => {
              setValue('agreement', event.target.checked);
              clearErrors('agreement');
            }}
            error={errors.agreement?.message}
            className={styles.field}
          >
            Принимаю условия обработки данных
          </Input.Checkbox>
        )}
      />
      <Button
        type="submit"
        variant="primary"
        isLoading={isLoading}
      >
        вызвать замерщика
      </Button>
    </form>
  );
};

export default ModalForm;
