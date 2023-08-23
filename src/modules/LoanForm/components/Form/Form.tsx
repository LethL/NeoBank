import React from 'react';
import './Form.css';
import '../FormItem/FormItem.css';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import sliderImg from '../../../../images/slider.png';
import { TextField } from '../../../../components/TextField/TextField';
import FormBtn from '../FormBtn/FormBtn';
import SelectField from '../../../../components/SelectField/SelectField';
import { Option } from '../../../../components/SelectField/SelectField.types';
import { PrescoringFormEntity } from '../../../../domains/PrescoringForm.entity';
import { PrescoringValidationSchema } from '../../../../helpers/PrescoringValidationSchema';
import { DEFAULT_VALUES } from './Form.utils';
import { Loader } from 'components/Loader/Loader';

export default function Form() {
  // Оставил, чтоб реализовать функционал в следующем модуле
  // const options: Option[] = [
  //   {
  //     title: '6 month',
  //     value: '6 month',
  //   },
  //   {
  //     title: '12 month',
  //     value: '12 month',
  //   },
  //   {
  //     title: '18 month',
  //     value: '18 month',
  //   },
  //   {
  //     title: '24 month',
  //     value: '24 month',
  //   },
  // ];
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const { control, setValue, reset, handleSubmit } = useForm<PrescoringFormEntity>({
    mode: 'all',
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(PrescoringValidationSchema),
  });

  const onChangeLastName = (value: string) => {
    setValue('lastName', value);
  };

  const onChangeFirstName = (value: string) => {
    setValue('firstName', value);
  };

  const onChangeMiddletName = (value: string) => {
    setValue('middleName', value);
  };

  const onChangeEmail = (value: string) => {
    setValue('email', value);
  };

  const onChangeBirthdate = (value: string) => {
    const selectedDate = new Date(value).getFullYear();
    const nowDate = new Date().getFullYear();
    nowDate - selectedDate >= 18 ? setValue('birthdate', value) : setValue('birthdate', '');
  };

  const onChangePassportSeries = (value: string) => {
    setValue('passportSeries', value);
  };

  const onChangePassportNumber = (value: string) => {
    setValue('passportNumber', value);
  };

  // const onChangeTerm = (value: string) => {
  //   setValue('term', value);
  // };

  const onSubmit = () => {
    handleSubmit(async (data: PrescoringFormEntity) => {
      setLoading(true);
      console.log(data);
      reset();

      setTimeout(() => {
        return navigate('/');
      }, 3000);
    })();
  };

  return (
    <section className="form-section">
      <Loader isLoading={loading}>
        <form className="form" onSubmit={handleSubmit(onSubmit)} id="form">
          <div className="form__column">
            <div>
              <div className="form__wrapper">
                <h2 className="form__title">Customize your card</h2>
                <p className="form__steps">Step 1 of 5</p>
              </div>
              {/* Временное решение, чтоб не тратить время, в этом модуле */}
              <img className="form__temp-img" src={sliderImg} alt="select-slider" />
            </div>
            <div className="form__amount-wrapper">
              <h3 className="form__amount-title">You have chosen the amount</h3>
              <p className="form__amount-sum">150 000 ₽</p>
            </div>
          </div>
          <h2 className="form__info-title">Contact Information</h2>
          <div className="form__column form__column_second">
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your last name *"
                  placeholder="For Example Doe"
                  inputType={'text'}
                  value={value}
                  labelClassName="form-item__label"
                  inputClassName={`form-item__input ${error?.message ? 'is-invalid' : ''} ${
                    value.length >= 2 ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangeLastName(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your first name *"
                  placeholder="For Example Jhon"
                  inputType={'text'}
                  value={value}
                  labelClassName="form-item__label"
                  inputClassName={`form-item__input ${error?.message ? 'is-invalid' : ''} ${
                    value.length >= 2 ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangeFirstName(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="middleName"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your patronymic"
                  placeholder="For Example Victorovich"
                  inputType={'text'}
                  value={field.value}
                  labelClassName="form-item__label"
                  inputClassName="form-item__input"
                  onChange={onChangeMiddletName}
                />
              )}
            />
            <Controller
              control={control}
              name="term"
              render={({ field, fieldState: { error } }) => (
                <div className="form-item">
                  <label className="form-item__label">{'Select term *'}</label>
                  <select
                    value={field.value}
                    className="form-item__select"
                    onChange={(e) => {
                      setValue('term', e.target.value);
                    }}>
                    <option value={'6 month'}>6 month</option>
                    <option value={'12 month'}>12 month</option>
                    <option value={'18 month'}>18 month</option>
                    <option value={'24 month'}>24 month</option>
                  </select>
                </div>
              )}
            />
            {/* <Controller
              control={control}
              name="term"
              render={({ field: { value, onBlur }, fieldState: { error } }) => (
                <SelectField
                  options={options}
                  label="Select term *"
                  containerClassName="form-item"
                  value={value}
                  labelClassName="form-item__label"
                  selectClassName="form-item__select"
                  onChange={(value) => {
                    onChangeTerm(value);
                    onBlur();
                  }}
                />
              )}
            /> */}
            <Controller
              control={control}
              name="email"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your email *"
                  placeholder="test@gmail.com"
                  inputType={'text'}
                  value={value}
                  labelClassName="form-item__label"
                  inputClassName={`form-item__input ${error?.message ? 'is-invalid' : ''} ${
                    value.length >= 2 && !error?.message ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangeEmail(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="birthdate"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your date of birth *"
                  placeholder="Select Date and Time"
                  inputType={'date'}
                  value={value}
                  labelClassName="form-item__label"
                  inputClassName={`form-item__input ${error?.message ? 'is-invalid' : ''} ${
                    value.length === 10 ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangeBirthdate(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="passportSeries"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your passport series *"
                  placeholder="0000"
                  inputType={'number'}
                  value={value}
                  labelClassName="form-item__label"
                  inputClassName={`form-item__input ${error?.message ? 'is-invalid' : ''} ${
                    value.length === 4 ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangePassportSeries(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="passportNumber"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your passport number *"
                  placeholder="000000"
                  inputType={'number'}
                  value={value}
                  labelClassName="form-item__label"
                  inputClassName={`form-item__input ${error?.message ? 'is-invalid' : ''} ${
                    value.length === 6 ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangePassportNumber(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
          </div>
          <div className="form-btn__wrapper">
            <FormBtn />
          </div>
        </form>
      </Loader>
    </section>
  );
}
