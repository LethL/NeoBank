import { makeAutoObservable, runInAction } from 'mobx';
import dataStore from './PrescoringResponse.store';
import { PrescoringFormEntity } from 'domains/PrescoringForm.entity';
import { ApplicationAgentRequest } from 'http/Application.agent';
import { ScoringFormEntity } from 'domains/ScoringForm.entity';
import { OffersDataProps } from 'modules/Offers/components/OffersCard/OffersCard.types';

class FormStoreProto {
  constructor() {
    makeAutoObservable(this);
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

  handleScoringFormSend = async (data: ScoringFormEntity) => {
    runInAction(() => {
      this._loading = true;
    });
    try {
      await ApplicationAgentRequest.sendScoringRequest(data);
    } catch {
      if (!data) return null;
    } finally {
      runInAction(() => {
        this._loading = false;
      });
    }
  };

  handleLoadDocument = async () => {
    try {
      const response = await ApplicationAgentRequest.getDocumentRequest();
      localStorage.setItem('Document', JSON.stringify(response));
    } catch (error) {
      return null;
    }
  };

  handleSendPaymentSchedule = async () => {
    try {
      await ApplicationAgentRequest.sendPaymentScheduleRequest();
    } catch (error) {
      return null;
    }
  };

  handleSendPDocumentSign = async () => {
    try {
      await ApplicationAgentRequest.sendDocumentSignRequest();
    } catch (error) {
      return null;
    }
  };
}

export const FormStore = new FormStoreProto();
