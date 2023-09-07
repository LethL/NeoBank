import { BasicAgent } from './Basic.agent';
import { OffersDataProps } from 'modules/Offers/components/OffersCard/OffersCard.types';
import { PrescoringFormEntity } from 'domains/PrescoringForm.entity';
import { ScoringFormEntity } from 'domains/ScoringForm.entity';
import { APPLICATIONID } from 'constants/paths';

class ApplicationAgent extends BasicAgent {
  constructor() {
    super('http://localhost:8080/');
  }

  async createLoanRequest(requestData?: PrescoringFormEntity) {
    const { data } = await this._http.post('/application', requestData);
    return data;
  }

  async sendPrescoringRequest(requestData?: OffersDataProps) {
    const { data } = await this._http.post(`/application/apply`, requestData);
    return data;
  }

  async sendScoringRequest(requestData?: ScoringFormEntity) {
    const { data } = await this._http.put(`/application/registration/${APPLICATIONID}`, requestData);
    return data;
  }

  async getDocumentRequest() {
    const { data } = await this._http.get(`admin/application/${APPLICATIONID}`);
    return data;
  }

  async sendPaymentScheduleRequest() {
    const { data } = await this._http.post(`document/${APPLICATIONID}`);
    return data;
  }

  async sendDocumentSignRequest() {
    const { data } = await this._http.post(`document/${APPLICATIONID}/sign`);
    return data;
  }
}

export const ApplicationAgentRequest = new ApplicationAgent();
