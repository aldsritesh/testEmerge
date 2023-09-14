export const AuthToken = "Bearer 9c48df2694a849b6089f9d0d3513efe";
export const ApiVersion = "2021-04-15";

// export const baseUrl = "https://stoplight.io/mocks/highlevel/integrations/";

export const baseUrl = "https://dev-api.ehr.software/";
// export const baseUrl = "https://dev-api.ehr.software/swagger/";

export const apiHeaders = {
  Authorization: "Bearer 9c48df2694a849b6089f9d0d3513efe",
  Version: "2021-07-28",
};
export const userLocalStorageToken = "EmergeToken";

export const contactBaseUrl = `${baseUrl}/contacts/`;
export const contactOwner = `${baseUrl}users/location/`;
export const calendarBaseUrl = `${baseUrl}39582850/calendars/`;
export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbEFkZHJlc3MiOiJjb3JleS5wZGdyb3VwQGdtYWlsLmNvbSIsImV4cCI6MTY5NTYyMTI4MX0.TGyWP5RGO0U9Sq-3if8R8DBGcNdDrBNakAXJ6mI8F0w";
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbEFkZHJlc3MiOiJjb3JleS5wZGdyb3VwQGdtYWlsLmNvbSIsImV4cCI6MTY5MzAyNzk2Mn0.XyaMJ8gc3iXFR4TIOG5GgkPT2bQVqK5FR6FlQWxUtmc";

export const locationID = "f209ee50-96e6-4ca2-9eb5-80b93d31591f";
export const contactID = "1e4c087a-3479-4185-8df9-d47cb48857e3";
export const userID = "9b36de41-f652-4bf2-ba38-7a96103f09a3";

export const APIConst = {
  contactApi: contactBaseUrl,
  contactAdd: `${contactBaseUrl}ocQHyuzHvysMo5N5VsXc`,
  tagsAdd: `${contactBaseUrl}sx6wyHhbFdRXh302LLNR/tags`,
  appAppointment: `${calendarBaseUrl}events/appointments`,
  allCalendar: `${calendarBaseUrl}?locationId=`,
};

export const leadSource = `${baseUrl}/contacts/{id}/lead-sources`;
