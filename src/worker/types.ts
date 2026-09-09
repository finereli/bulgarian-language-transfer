export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  OPENAI_API_KEY?: string;
  SESSION_SECRET: string;
  // "azure" (default) or "openai" - which TTS backend synthesize() calls.
  TTS_PROVIDER?: string;
  TTS_MODEL?: string;
  TTS_VOICE?: string;
  AZURE_SPEECH_KEY?: string;
  AZURE_SPEECH_REGION?: string;
  // Set to "1" (e.g. in .dev.vars) to enable password-less local login at /api/auth/dev
  DEV_LOGIN?: string;
}

export interface SessionPayload {
  uid: number;
  email: string;
  name: string;
  picture: string;
  exp: number;
}

export type AppContext = {
  Bindings: Env;
  Variables: {
    session: SessionPayload;
  };
};
