// Déclaration globale pour les API Google

interface GapiClient {
  init: (options: {
    apiKey: string;
    discoveryDocs: string[];
  }) => Promise<void>;
  getToken: () => { access_token: string } | null;
  setToken: (token: { access_token: string } | null) => void;
  analyticsdata: {
    properties: {
      runReport: (params: any) => Promise<any>;
    };
  };
  webmasters: {
    searchanalytics: {
      query: (params: any) => Promise<any>;
    };
  };
}

interface Gapi {
  load: (api: string, callback: () => void) => void;
  client: GapiClient;
}

interface GoogleOAuth2 {
  initTokenClient: (options: {
    client_id: string;
    scope: string;
    callback: (response: any) => void;
  }) => any;
  revoke: (token: string, callback: () => void) => void;
}

interface GoogleAccounts {
  oauth2: GoogleOAuth2;
}

interface Google {
  accounts: GoogleAccounts;
}

declare global {
  interface Window {
    gapi: Gapi;
    google: Google;
  }
}

export {}; 