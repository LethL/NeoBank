import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormBtn from '../FormBtn/FormBtn';
import { DEFAULT_VALUES_SCORING } from '../Form/Form.utils';
import { Loader } from 'components/Loader/Loader';
import { FormStore } from 'modules/LoanForm/store/Form.store';
import { ScoringFormEntity } from 'domains/ScoringForm.entity';
import { ScoringValidationSchema } from 'helpers/ScoringValidationSchema';
import '../Form/Form.css';
import '../FormItem/FormItem.css';
import SelectField from 'components/SelectField/SelectField';
import {
  dependentSelectOptions,
  employmentStatusSelectOptions,
  genderSelectOptions,
  martialSelectOptions,
  positionSelectOptions,
} from '__mocks__/FormSelect.mock';
import { TextField } from 'components/TextField/TextField';

export default function StepTwoForm() {
  const { loading } = FormStore;

  const { control, setValue, reset, handleSubmit } = useForm<ScoringFormEntity>({
    mode: 'all',
    defaultValues: DEFAULT_VALUES_SCORING,
    resolver: yupResolver(ScoringValidationSchema),
  });

  const onChangeGender = (event: React.MouseEvent<HTMLSelectElement>) => {
    setValue('gender', event.currentTarget.value as string);
  };

  const onChangeMartial = (event: React.MouseEvent<HTMLSelectElement>) => {
    setValue('maritalStatus', event.currentTarget.value as string);
  };

  const onChangeDependents = (event: React.MouseEvent<HTMLSelectElement>) => {
    setValue('dependentAmount', event.currentTarget.value as string);
  };

  const onChangeIssueDate = (value: string) => {
    const selectedDate = new Date(value).toLocaleString();
    const nowDate = new Date().toLocaleString();
    selectedDate < nowDate ? setValue('passportIssueDate', value) : setValue('passportIssueDate', '');
  };

  const onChangeIssueBranch = (value: string) => {
    setValue('passportIssueBranch', value);
  };

  const onChangeEmploymentStatus = (event: React.MouseEvent<HTMLSelectElement>) => {
    setValue('employmentStatus', event.currentTarget.value as string);
  };

  const onChangeEmployerINN = (value: string) => {
    setValue('employerINN', value);
  };

  const onChangeSalary = (value: string) => {
    setValue('salary', value);
  };

  const onChangePosition = (event: React.MouseEvent<HTMLSelectElement>) => {
    setValue('position', event.currentTarget.value as string);
  };

  const onChangeWorkExperienceTotal = (value: string) => {
    setValue('workExperienceTotal', value);
  };

  const onChangeWorkExperienceCurrent = (value: string) => {
    setValue('workExperienceCurrent', value);
  };

  const onSubmit = () => {
    handleSubmit(async (data: any) => {
      console.log(data);
      reset();
    })();
  };

  return (
    <section className="form-section">
      <Loader isLoading={loading}>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__column">
            <div>
              <div className="form__wrapper">
                <h2 className="form__title">Continuation of the application</h2>
                <p className="form__steps form__steps_two">Step 2 of 5</p>
              </div>
            </div>
          </div>
          <div className="form__column form__column_second">
            <Controller
              control={control}
              name="gender"
              render={({ field: { value, onBlur }, fieldState: { error } }) => (
                <SelectField
                  options={genderSelectOptions}
                  label="What's your gender *"
                  containerClassName="form-item"
                  value={value}
                  labelClassName="form-item__label"
                  selectClassName={`form-item__select form-item__select_medium ${
                    error?.message ? 'invalid-select' : ''
                  }`}
                  onChange={(value) => {
                    onChangeGender(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="maritalStatus"
              render={({ field: { value, onBlur }, fieldState: { error } }) => (
                <SelectField
                  options={martialSelectOptions}
                  label="Your marital status *"
                  containerClassName="form-item"
                  value={value}
                  labelClassName="form-item__label"
                  selectClassName={`form-item__select form-item__select_medium ${
                    error?.message ? 'invalid-select' : ''
                  }`}
                  onChange={(value) => {
                    onChangeMartial(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="dependentAmount"
              render={({ field: { value, onBlur }, fieldState: { error } }) => (
                <SelectField
                  options={dependentSelectOptions}
                  label="Your number of dependents *"
                  containerClassName="form-item"
                  value={`${value}`}
                  labelClassName="form-item__label"
                  selectClassName={`form-item__select form-item__select_medium ${
                    error?.message ? 'invalid-select' : ''
                  }`}
                  onChange={(value) => {
                    onChangeDependents(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="passportIssueDate"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Date of issue of the passport *"
                  placeholder="Select Date and Time"
                  inputType={'date'}
                  value={value}
                  labelClassName="form-item__label"
                  inputClassName={`form-item__select form-item__select_big ${error?.message ? 'invalid-select' : ''}`}
                  onChange={(value) => {
                    onChangeIssueDate(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="passportIssueBranch"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Division code *"
                  labelClassName="form-item__label"
                  placeholder="000000"
                  inputType={'number'}
                  value={value}
                  inputClassName={`form-item__input form-item__select_big ${error?.message ? 'is-invalid' : ''} ${
                    value.length === 6 ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangeIssueBranch(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
          </div>
          <h3 className="form__column-title">Employment</h3>
          <div className="form__column form__column_second">
            <Controller
              control={control}
              name="employmentStatus"
              render={({ field: { value, onBlur }, fieldState: { error } }) => (
                <SelectField
                  options={employmentStatusSelectOptions}
                  label="Your employment status *"
                  containerClassName="form-item"
                  value={value}
                  labelClassName="form-item__label"
                  selectClassName={`form-item__select form-item__select_medium ${
                    error?.message ? 'invalid-select' : ''
                  }`}
                  onChange={(value) => {
                    onChangeEmploymentStatus(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="employerINN"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your employer INN *"
                  labelClassName="form-item__label"
                  placeholder="000000"
                  inputType={'number'}
                  value={value}
                  inputClassName={`form-item__input form-item__select_medium ${error?.message ? 'is-invalid' : ''} ${
                    value.length === 12 ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangeEmployerINN(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="salary"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your salary *"
                  labelClassName="form-item__label"
                  placeholder="For example 100 000"
                  inputType={'number'}
                  value={value}
                  inputClassName={`form-item__input form-item__select_medium ${error?.message ? 'is-invalid' : ''} ${
                    value.length > 3 ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangeSalary(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="position"
              render={({ field: { value, onBlur }, fieldState: { error } }) => (
                <SelectField
                  options={positionSelectOptions}
                  label="Your position *"
                  containerClassName="form-item"
                  value={value}
                  labelClassName="form-item__label"
                  selectClassName={`form-item__select form-item__select_medium ${
                    error?.message ? 'invalid-select' : ''
                  }`}
                  onChange={(value) => {
                    onChangePosition(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="workExperienceTotal"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your work experience total *"
                  labelClassName="form-item__label"
                  placeholder="For example 10"
                  inputType={'number'}
                  value={value}
                  inputClassName={`form-item__input form-item__select_medium ${error?.message ? 'is-invalid' : ''} ${
                    value.length < 3 && value.length > 0 ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangeWorkExperienceTotal(value);
                    onBlur();
                  }}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="workExperienceCurrent"
              render={({ field: { onBlur, value }, fieldState: { error } }) => (
                <TextField
                  containerClassName="form-item"
                  label="Your work experience current *"
                  labelClassName="form-item__label"
                  placeholder="For example 2"
                  inputType={'number'}
                  value={value}
                  inputClassName={`form-item__input form-item__select_medium ${error?.message ? 'is-invalid' : ''} ${
                    value.length < 3 && value.length > 0 ? 'is-correct' : ''
                  }`}
                  onChange={(value) => {
                    onChangeWorkExperienceCurrent(value);
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
