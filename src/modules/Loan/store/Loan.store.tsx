import { makeAutoObservable, runInAction } from 'mobx';
import dataStore from './PrescoringResponse.store';
import { PrescoringFormEntity } from 'domains/PrescoringForm.entity';
import { ApplicationAgentRequest } from 'http/Application.agent';
import { ScoringFormEntity } from 'domains/ScoringForm.entity';
import { OffersDataProps } from 'modules/Offers/components/OffersCard/OffersCard.types';

class LoanStoreProto {
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

  handleChangeCreditStep = (key: string, value: string) => {
    localStorage.setItem(key, value);
    const event = new Event('localStorageChange');
    window.dispatchEvent(event);
  };

  handlePrescoringSend = async (data: PrescoringFormEntity) => {
    runInAction(() => {
      this._loading = true;
    });
    try {
      const response = await ApplicationAgentRequest.createLoanRequest(data);
      await dataStore.setData(response);
      await localStorage.setItem('offersData', JSON.stringify(response));
      await this.handleChangeCreditStep('credit', 'step_prescoring');
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
      await localStorage.setItem('offerChoose', 'true');
      await this.handleChangeCreditStep('credit', 'step_offers');
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

  handleLoadAppData = async () => {
    try {
      const response = await ApplicationAgentRequest.getDocumentRequest();
      return response;
    } catch (error) {
      return null;
    }
  };

  handleScoringFormSend = async (data: ScoringFormEntity) => {
    runInAction(() => {
      this._loading = true;
    });
    try {
      await ApplicationAgentRequest.sendScoringRequest(data);
      await this.handleChangeCreditStep('credit', 'step_scoring');
      await this.handleLoadDocument();
    } catch {
      if (!data) return null;
    } finally {
      runInAction(() => {
        this._loading = false;
      });
    }
  };

  handleSendPaymentSchedule = async () => {
    try {
      await ApplicationAgentRequest.sendPaymentScheduleRequest();
      await this.handleChangeCreditStep('credit', 'step_payment');
    } catch (error) {
      return null;
    }
  };

  handleSendPDocumentSign = async () => {
    try {
      await ApplicationAgentRequest.sendDocumentSignRequest();
      await this.handleChangeCreditStep('credit', 'step_signing');
    } catch (error) {
      return null;
    }
  };

  handleSendCodeSign = async (code: string) => {
    try {
      await ApplicationAgentRequest.sendCodeSignRequest(code);
      await this.handleChangeCreditStep('credit', 'step_code');
    } catch (error) {
      return null;
    }
  };
}

export const LoanStore = new LoanStoreProto();
