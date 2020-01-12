export interface LectureResponseModel {
  codigo: number,
  codigoTipoCategoria: number,
  imagem: string,
  titulo: string,
  palestrante: string,
  descricao: string,
  data: string,
  hora: string,
  qtdVagasDisponiveis: number
}

export interface LectureTypeResponseModel {
  codigo: number,
  descricao: string
}

export interface LectureSubscribeRequestModel {
  codigoPalestra: number,
  nome: string,
  email: string,
  empresa: string,
  cargo: string,
}

export interface LectureSubscribeResponseModel {
  status: number
}
