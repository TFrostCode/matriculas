import { type Alumno } from "@/types/alumno";

const API_URL = "http://localhost:8080/alumnos";

export const alumnoService = {
  listar: async (): Promise<Alumno[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al listar alumnos");
    return res.json();
  },

  obtener: async (id: number): Promise<Alumno> => {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener alumno");
    return res.json();
  },

  crear: async (alumno: Alumno): Promise<Alumno> => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alumno),
    });
    if (!res.ok) throw new Error("Error al crear alumno");
    return res.json();
  },

  actualizar: async (id: number, alumno: Alumno): Promise<Alumno> => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alumno),
    });
    if (!res.ok) throw new Error("Error al actualizar alumno");
    return res.json();
  },

  eliminar: async (id: number): Promise<void> => {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar alumno");
  },
};
