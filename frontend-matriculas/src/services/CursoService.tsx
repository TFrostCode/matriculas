import axios from "axios";
import type { Curso } from '../types/curso';

const API_URL = "http://localhost:8080/cursos"; // Assuming your backend exposes /cursos endpoint

export const cursoService = {
  listar: async (): Promise<Curso[]> => {
    const res = await axios.get<Curso[]>(API_URL);
    return res.data;
  },

  obtener: async (id: number): Promise<Curso> => {
    const res = await axios.get<Curso>(`${API_URL}/${id}`);
    return res.data;
  },

  crear: async (curso: Curso): Promise<Curso> => {
    const res = await axios.post<Curso>(API_URL, curso);
    return res.data;
  },

  actualizar: async (id: number, curso: Curso): Promise<Curso> => {
    const res = await axios.put<Curso>(`${API_URL}/${id}`, curso);
    return res.data;
  },

  eliminar: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
