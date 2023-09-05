import { BasicAgent } from './Basic.agent';
import { OffersDataProps } from 'modules/Offers/components/OffersCard/OffersCard.types';
import { PrescoringFormEntity } from 'domains/PrescoringForm.entity';

class ApplicationAgent extends BasicAgent {
  constructor() {
    super('http://localhost:8080/');
  }

  async createLoanRequest(requestData?: PrescoringFormEntity) {
    const { data } = await this._http.post('/application', requestData);
    return data;
  }

  async loadLoanOffersRequest(id?: any) {
    const { data } = await this._http.get(`/admin/application/${id}`);
    return data;
  }

  async sendPrescoringRequest(requestData?: OffersDataProps) {
    const { data } = await this._http.post(`/application/apply`, requestData);
    return data;
  }

  // async sendPrescoringRequest(requestData?: OffersDataProps) {
  //   const { data } = await this._http.put(`/application/registration/${requestData?.applicationId}`, requestData);
  //   return data;
  // }
}

export const ApplicationAgentRequest = new ApplicationAgent();
