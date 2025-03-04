export interface PassportDto{
    displayname: string;
    reference: string;
    validity: Date;
    birthdate: Date;
}

 interface ContactDto{
    displayname: string,
    phone: string,

}
export interface ApplicationDto{
    id?: number;
    activity?: string;
    address?: string;
    passport?: PassportDto;
    contacts?: [ContactDto];
    roadTripInfo?: RoadTripInfo;
    email?: string;
    phone?: string;

}
export interface ApplicationContactDto{
    activity?: string;
    address?: string;
    email?: string;
    phone?: string;
    contacts?:[ContactDto]|[]
}

export interface RoadTripInfoDto{
    arrivalDate?: Date;
    arrivalFrom?: string;
    arrivalLocationCompanyIdentify?: string;
    arrivalLocationCompanyName?: string;
    arrivalLocationType?: string;
    applicationId?: number;
    departureTo?: string;
    departureDate?:Date
    departureLocationCompanyIdentify?: string;
    departureLocationCompanyName?: string;
    departureLocationType?: string;
    motif?: string;
    id?: number;
}
