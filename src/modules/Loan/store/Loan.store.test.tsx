import { OffersMock, DocumentResponseMock } from '../../../__mocks__/Tests.mock';
import { ApplicationAgentRequest } from '../../../http/Application.agent';
import { DEFAULT_VALUES, DEFAULT_VALUES_SCORING } from '../components/Form/Form.utils';
import { LoanStore } from './Loan.store';

describe('LoanStoreProto', () => {
  test('Тест для метода handleChangeCreditStep', () => {
    const key = 'status';
    const value = 'step_prescoring';
    const localStorageSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');
    const dispatchEventSpy = jest.spyOn(window, 'dispatchEvent');

    LoanStore.handleChangeCreditStep(key, value);

    expect(localStorageSpy).toHaveBeenCalledWith(key, value);
    expect(dispatchEventSpy).toHaveBeenCalledWith(new Event('localStorageChange'));
  });

  test('Тест для метода handlePrescoringSend', async () => {
    const mockResponse = {
      status: 200,
    };
    const createLoanRequestSpy = jest
      .spyOn(ApplicationAgentRequest, 'createLoanRequest')
      .mockResolvedValue(mockResponse);

    await LoanStore.handlePrescoringSend(DEFAULT_VALUES);

    expect(LoanStore.loading).toBe(false);
    expect(createLoanRequestSpy).toHaveBeenCalled();
  });

  test('Тест для метода handleOfferSend', async () => {
    const mockResponse = {
      status: 200,
    };
    const sendPrescoringRequestSpy = jest
      .spyOn(ApplicationAgentRequest, 'sendPrescoringRequest')
      .mockResolvedValue(mockResponse);

    await LoanStore.handleOfferSend(OffersMock);

    expect(LoanStore.loading).toBe(false);
    expect(sendPrescoringRequestSpy).toHaveBeenCalled();
  });

  test('Тест для метода handleScoringFormSend', async () => {
    const mockResponse = {
      status: 200,
    };
    const createLoanRequestSpy = jest
      .spyOn(ApplicationAgentRequest, 'sendScoringRequest')
      .mockResolvedValue(mockResponse);

    await LoanStore.handleScoringFormSend(DEFAULT_VALUES_SCORING);

    expect(LoanStore.loading).toBe(false);
    expect(createLoanRequestSpy).toHaveBeenCalled();
  });

  test('Тест для метода handleLoadDocument', async () => {
    const mockResponse = {
      status: 200,
      data: DocumentResponseMock,
    };
    const getDocumentRequestSpy = jest
      .spyOn(ApplicationAgentRequest, 'getDocumentRequest')
      .mockResolvedValue(mockResponse);
    const localStorageSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');

    await LoanStore.handleLoadDocument();

    expect(localStorageSpy).toHaveBeenCalledWith('Document', JSON.stringify(mockResponse));
    expect(getDocumentRequestSpy).toHaveBeenCalled();
  });

  test('Тест для метода handleSendCodeSign', async () => {
    const mockCode = '1234';
    const sendCodeSignRequestSpy = jest.spyOn(ApplicationAgentRequest, 'sendCodeSignRequest').mockResolvedValue({
      status: 200,
    });

    await LoanStore.handleSendCodeSign(mockCode);

    expect(LoanStore.loading).toBe(false);
    expect(sendCodeSignRequestSpy).toHaveBeenCalledWith(mockCode);
  });
});
