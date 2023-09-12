import { makeAutoObservable } from 'mobx';
import { OffersDataProps } from 'modules/Offers/components/OffersCard/OffersCard.types';

class DataStore {
  data: OffersDataProps[] | null = [];

  constructor() {
    makeAutoObservable(this);
  }

  setData(newData: OffersDataProps) {
    this.data?.push(newData);
  }
}

const dataStore = new DataStore();

export default dataStore;
