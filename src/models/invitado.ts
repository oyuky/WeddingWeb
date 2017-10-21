//Invitado Model based on the structure on the wedding web api
export interface Invitado{
  invitadoID: number;
  registro: Date;
  correo: string;
  nombre: string;
  familia: string;
  menor: number;
  adultos: number;
  musica: string;
}
