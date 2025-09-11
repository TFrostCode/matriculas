export interface Alumno {
  id_alumno?: number;
  dni: string;
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  fecha_nacimiento: string; // ISO date string (ej: "2010-05-10")
  idGenero?: number;
  idApoderado?: number;
}
