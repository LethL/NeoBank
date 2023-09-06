import React from 'react';
import '../Form/Form.css';
import '../FormItem/FormItem.css';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import sliderImg from '../../../../images/slider.png';
import { TextField } from '../../../../components/TextField/TextField';
import FormBtn from '../FormBtn/FormBtn';
import SelectField from '../../../../components/SelectField/SelectField';
import { PrescoringFormEntity } from '../../../../domains/PrescoringForm.entity';
import { PrescoringValidationSchema } from '../../../../helpers/PrescoringValidationSchema';
import { DEFAULT_VALUES } from '../Form/Form.utils';
import { Loader } from 'components/Loader/Loader';
import { FormStore } from 'modules/LoanForm/store/Form.store';
import { prescoringTermsOptions } from 'src/__mocks__/FormSelect.mock';

export default function StepOneForm() {
  const { handleFormSend, loading } = FormStore;

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

  const onChangeTerm = (event: React.MouseEvent<HTMLSelectElement>) => {
    setValue('term', Number(event.currentTarget.value.slice(0, 2)));
  };

  const onSubmit = () => {
    handleSubmit(async (data: PrescoringFormEntity) => {
      handleFormSend(data);
      reset();
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
              render={({ field }) => (
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
              render={({ field: { value, onBlur } }) => (
                <SelectField
                  options={prescoringTermsOptions}
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
            />
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
            <FormBtn text="Continue" />
          </div>
        </form>
      </Loader>
    </section>
  );
}
