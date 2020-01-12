export enum ServiceStatus {
  noAction,
  exception,
  noInternetConnection,
  loading,
  success,
}

export interface ServiceResponse<Type> {
  status: ServiceStatus;
  response?: Type;
}
