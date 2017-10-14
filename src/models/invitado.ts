//Invitado Model based on the structure on the wedding web api
export interface Invitado{
  invitadoID: number;
  invitacionID: number;
  nombre: string;
  apellidopaterno: string;
  apellidomaterno: string;
  menor: number;
  adultos: number;
}
