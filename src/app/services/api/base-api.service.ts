import environment from "@env/environment";

export const apiPath = (paths: string[]): string => paths.join("/");

export abstract class BaseApiService {
  protected baseUrl = this.getUrl();

  constructor(protected path: string, protected version: string = "v1") {
  }

  protected getUrl(): string {
    return `${environment.endPoint}/${this.version}/${this.path}`;
  }

  protected getApiPath(paths: string[] = []): string {
    return apiPath([this.baseUrl, ...paths]);
  }

}
