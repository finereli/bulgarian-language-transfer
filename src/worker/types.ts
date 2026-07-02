export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  OPENAI_API_KEY: string;
  OPENROUTER_API_KEY: string;
  SESSION_SECRET: string;
  OPENROUTER_MODEL?: string;
  TTS_MODEL?: string;
  TTS_VOICE?: string;
}

export interface SessionPayload {
  uid: number;
  exp: number;
}

export type AppContext = {
  Bindings: Env;
  Variables: {
    session: SessionPayload;
  };
};
