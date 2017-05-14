interface IMonzoConfig {
  ClientId: string,
  ApiUrl: string,
  OAuthUrl: string
}

export interface IConfig {
  Monzo: IMonzoConfig
}