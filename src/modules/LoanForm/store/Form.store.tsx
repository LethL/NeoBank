import { computed, makeAutoObservable, observable, runInAction } from 'mobx';
import { PrescoringFormEntity } from 'domains/PrescoringForm.entity';

type PrivateFields = '_loading' | '_formData';

class FormStoreProto {
  constructor() {
    makeAutoObservable<this, PrivateFields>(this, {
      _loading: observable,
      _formData: observable,

      formData: computed,
      loading: computed,
    });
  }

  private _loading = false;

  get loading(): boolean {
    return this._loading;
  }

  private _formData: PrescoringFormEntity[] | null = [];

  get formData(): PrescoringFormEntity[] | null {
    return this._formData;
  }

  handleFormSend = async (data: PrescoringFormEntity) => {
    runInAction(() => {
      this._loading = true;
    });
    try {
      runInAction(() => {
        this.formData?.push({
          firstName: data.firstName,
          lastName: data.lastName,
          amount: data.amount,
          term: data.term,
          middleName: data.middleName,
          email: data.email,
          birthdate: data.birthdate,
          passportSeries: data.passportSeries,
          passportNumber: data.passportNumber,
        });
      });
    } catch {
      if (!data) return null;
    } finally {
      runInAction(() => {
        this._loading = false;
      });
    }
  };
}

export const FormStore = new FormStoreProto();
