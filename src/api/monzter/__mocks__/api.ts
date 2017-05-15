export class Api {
  public static GetMonzoLoginUrl(userKey: string): Promise<string> {
    return new Promise(resolve => {
      console.log('moo');
      resolve('http://someurl')
    });
  }
}