import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
      {id: 2, name: 'Салют-М3'}
    ]
    this._brands = [
      {id: 1, name: 'Снежинка'},
      {id: 2, name: 'Бирюса'}
    ]
    this._devices = [
      {id: 1, name: '12pro', price: 10000, rating: 0, img: 'e8f6ce76-8244-4e32-af8f-caaa87ad17cc.jpg'},
      {id: 3, name: 'д45', price: 100000, rating: 0, img: 'f4144853-1a7e-4b7a-be47-244cf5873ee7.jpg'}
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    this._devices = devices
  }

  
  get Types() {
    return this._types;
  }

  get Brands() {
    return this._brands;
  }

  get Devices() {
    return this._devices;
  }
}