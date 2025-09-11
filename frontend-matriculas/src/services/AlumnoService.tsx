import axios from "axios";
import { type Alumno } from "@/types/alumno";

const API_URL = "http://localhost:8080/alumnos";

export const alumnoService = {
  listar: async (): Promise<Alumno[]> => {
    const res = await axios.get<Alumno[]>(API_URL);
    return res.data;
  },

  obtener: async (id: number): Promise<Alumno> => {
    const res = await axios.get<Alumno>(`${API_URL}/${id}`);
    return res.data;
  },

  crear: async (alumno: Alumno): Promise<Alumno> => {
    const res = await axios.post<Alumno>(API_URL, alumno);
    return res.data;
  },

  actualizar: async (id: number, alumno: Alumno): Promise<Alumno> => {
    const res = await axios.put<Alumno>(`${API_URL}/${id}`, alumno);
    return res.data;
  },

  eliminar: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
