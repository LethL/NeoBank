import { computed, makeAutoObservable, observable, runInAction } from 'mobx';
import dataStore from './PrescoringResponse.store';
import { PrescoringFormEntity } from 'domains/PrescoringForm.entity';
import { ApplicationAgentRequest } from 'http/Application.agent';
import { ScoringFormEntity } from 'domains/ScoringForm.entity';
import { OffersDataProps } from 'modules/Offers/components/OffersCard/OffersCard.types';

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
      const response = await ApplicationAgentRequest.createLoanRequest(data);
      dataStore.setData(response);
      localStorage.setItem('offersData', JSON.stringify(response));
    } catch {
      if (!data) return null;
    } finally {
      runInAction(() => {
        this._loading = false;
      });
    }
  };

  handleOfferSend = async (data: OffersDataProps) => {
    runInAction(() => {
      this._loading = true;
    });
    try {
      await ApplicationAgentRequest.sendPrescoringRequest(data);
      localStorage.setItem('offerChoose', 'true');
    } catch {
      if (!data) return null;
    } finally {
      runInAction(() => {
        this._loading = false;
      });
    }
  };

  handleFormTwoSend = async (data: ScoringFormEntity) => {
    runInAction(() => {
      this._loading = true;
    });
    try {
      console.log(data);
      // await ApplicationAgentRequest.sendPrescoringRequest(data);
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
