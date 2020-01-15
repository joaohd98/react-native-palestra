export interface LectureResponseModel {
  Codigo: number,
  CodigoTipoCategoria: number,
  Imagem: string,
  Titulo: string,
  Palestrante: string,
  Descricao: string,
  Data: string,
  Hora: string,
  QtdVagasDisponiveis: number
}

export interface LectureTypeResponseModel {
  Codigo: number,
  Descricao: string
}

export interface LectureSubscribeRequestModel {
  CodigoPalestra: number,
  Nome: string,
  Email: string,
  Empresa: string,
  Cargo: string,
}

export interface LectureSubscribeResponseModel {
  status: 0 | 1 | 2 | 3
}
