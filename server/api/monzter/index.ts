import { Config, Secrets } from '../../utils';
import { format } from 'date-fns';
import { createHmac } from 'crypto';
import { Request } from 'express';

const generateState = (userKey: string): string => {
  const dateTime = format(new Date(), 'YYYYMMDDHHmm');
  const rawState = `${dateTime}${Config.Monzo.ClientId}${userKey}`;
  const hash: string = createHmac('sha1', Secrets.PrivateKey).update(rawState).digest('hex');
  return hash;
};

export class Api {
  public static GetMonzoLoginUrl(userKey: string, redirectUrl: string): string {
    const monzoConfig = Config.Monzo;
    const loginUrl = `${monzoConfig.OAuthUrl}/
      client_id=${monzoConfig.ClientId}&
      redirect_url=${redirectUrl}&
      response_type=code&
      state=${generateState(userKey)}`;

    return loginUrl;
  }
}
