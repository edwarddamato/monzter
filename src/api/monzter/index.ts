import { Api } from './api';

export class Monzter {
  public static async GetMonzoLoginUrl(userKey: string): Promise<string> {
    try {
      const loginUrl = await Api.GetMonzoLoginUrl(userKey);
    } catch (e) {
      console.error('Cannot get Monzo Login URL!', e);
      return '';
    }
  }
}