export class Api {
  private static readonly serverUrl: string = 'http://localhost:4000';
  private static readonly headers: Headers = new Headers({
    'Accept': 'application/text',
    'Content-Type': 'application/json'
  });

  public static async GetMonzoLoginUrl(userKey: string): Promise<string> {
    const response: Response = await fetch(`${this.serverUrl}/api/getloginurl`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        userKey: 'moo',
        redirectUrl: 'http://localhost:8080'
      })
    });
    return response.text();
  }
}