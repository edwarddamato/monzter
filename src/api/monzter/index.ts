import { Api } from './api';

export class Monzter {
  public static async GetMonzoLoginUrl(userKey: string): Promise<string> {
    return await Api.GetMonzoLoginUrl(userKey);
  }
}