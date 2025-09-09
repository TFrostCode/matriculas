"use client";

import { useEffect, useState } from "react";
import { alumnoService } from "@/services/AlumnoService";
import { type Alumno } from "@/types/alumno";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Alumno() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);

  useEffect(() => {
    alumnoService.listar().then(setAlumnos).catch(console.error);
  }, []);

  const handleCrear = async () => {
    const nuevo: Alumno = {
      dni: "98765432",
      nombres: "Nuevo",
      apellido_paterno: "Alumno",
      apellido_materno: "Ejemplo",
      fecha_nacimiento: "2012-09-08",
    };
    const creado = await alumnoService.crear(nuevo);
    setAlumnos([...alumnos, creado]);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gestión de Alumnos</h1>
      <Button onClick={handleCrear}>➕ Agregar Alumno</Button>

      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>DNI</TableHead>
            <TableHead>Nombres</TableHead>
            <TableHead>Apellidos</TableHead>
            <TableHead>Fecha Nac.</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alumnos.map((a) => (
            <TableRow key={a.id_alumno}>
              <TableCell>{a.dni}</TableCell>
              <TableCell>{a.nombres}</TableCell>
              <TableCell>{a.apellido_paterno} {a.apellido_materno}</TableCell>
              <TableCell>{a.fecha_nacimiento}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
