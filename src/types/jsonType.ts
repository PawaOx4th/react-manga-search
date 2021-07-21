export interface JsonInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface AddressInterface {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoInterface;
}

export interface GeoInterface {
  lat: string;
  lng: string;
}

export interface CompanyInterface {
  name: string;
  catchPhrase: string;
  bs: string;
}
