export enum EContactType {
  LEAD = "LEAD",
  PATIENT = "PATIENT",
}

export interface IUser {
  id: string;
  fullName: string;
  emailAddress: string;
}

export interface IOwner {
  id: string;
  fullName: string;
}
export interface IGender {
  id: string;
  fullName: string;
}

export interface IContactTag {
  tagID: string;
  contactID: string;
  content: string;
}

export interface ITag {
  id: string;
  locationID: string;
  content: string;
  tagType: string;
}

export interface IContactLeadSource {
  leadSourceID: string;
  contactID: string;
  content: string;
}

export interface ILeadSource {
  id: string;
  locationID: string;
  content: string;
  color: string;
}

export interface IContact {
  id: string;
  ownerUserID: string | null;
  pipelineID: string | null;
  pipelineStageID: string | null;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  addedOn: string;
  contactType: EContactType;
  tags: string[];
  leadSources: string[];
}

export interface IAddContactData {
  ownerUserID: string | null;
  pipelineID: string | null;
  pipelineStageID: string | null;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  contactType: EContactType;
  tags: IContactTag[];
  leadSources: IContactLeadSource[];
}

export interface IContactsData {
  count: number;
  contacts: IContact[];
}

export interface IContactProfile {
  contactID: string;
  dateOfBirth: string;
  dateOfInjury: string;
  ssn: string;
}

export interface IContactAddress {
  contactID: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface IContactData {
  contact: IContact;
  contactProfile: IContactProfile;
  contactAddress: IContactAddress;
}

export interface MessageDataEmail {
  fromName: string;
  fromEmail: string;
  toEmail: string;
  subject: string;
  body: string;
}

export interface MessageDataSMS {
  fromNumber: string;
  toNumber: string;
  message: string;
}

type MessageData = MessageDataEmail | MessageDataSMS;

export interface Message {
  id: string;
  locationID: string;
  contactID: string;
  userID: string;
  messageData: MessageData;
  addedOn: string;
  isSent: boolean;
  messageType: string;
}

export interface MessageGroup {
  date: string;
  messages: Message[];
}

export interface MessagesResponse {
  contactID: string;
  messages: MessageGroup[];
  isLastPage: boolean;
}

//calendar

export interface ICalendar {
  id: string;
  owner: IOwner;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  status: string;
  addedOn: string;
  contactType: EContactType;
  tags: IContactTag[];
  leadSources: IContactLeadSource[];
}

export interface ICalendar {
  addedOn: string;
  appointmentPerDay: number;
  appointmentPerSlot: number;
  appointmentTitle: string;
  dateRangeDays: number;
  description: string;
  eventColor: string;
  id: string;
  isActive: boolean;
  locationID: string;
  minSchedulingNoticeHours: number;
  name: string;
  officeHours: IOfficeHour[];
  slotBuffer: number;
  slotDuration: number;
  slotInterval: number;
  slug: string;
  teamUserIDs: string[];
  updatedOn: string;
}
export interface IOfficeHour {
  dayOfWeek: string;
  endHour: number;
  endMinute: number;
  startHour: number;
  startMinute: number;
}

export interface ICalendarData {
  count: number;
  calendars: ICalendar[];
}

export interface ICalendarData {
  calendar: ICalendar[];
}
