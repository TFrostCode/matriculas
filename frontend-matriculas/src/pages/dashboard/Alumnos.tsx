import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { Card } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import type { Alumno } from '../../types/alumno';
import { alumnoService } from '../../services/AlumnoService';

const Alumnos: React.FC = () => {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAlumno, setCurrentAlumno] = useState<Alumno | null>(null);
  const [form, setForm] = useState<Omit<Alumno, 'id_alumno'>>({
    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',
    dni: '',
    fecha_nacimiento: '',
    idGenero: 0,
    idApoderado: 0,
  });

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const fetchAlumnos = async () => {
    try {
      const response = await alumnoService.listar();
      setAlumnos(response);
    } catch (error) {
      console.error('Error fetching alumnos:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddClick = () => {
    setCurrentAlumno(null);
    setForm({
      nombres: '',
      apellido_paterno: '',
      apellido_materno: '',
      dni: '',
      fecha_nacimiento: '',
      idGenero: 0,
      idApoderado: 0,
    });
    setIsModalOpen(true);
  };

  const handleEditClick = (alumno: Alumno) => {
    setCurrentAlumno(alumno);
    setForm({
      nombres: alumno.nombres,
      apellido_paterno: alumno.apellido_paterno,
      apellido_materno: alumno.apellido_materno,
      dni: alumno.dni,
      fecha_nacimiento: alumno.fecha_nacimiento,
      idGenero: alumno.idGenero,
      idApoderado: alumno.idApoderado,
    });
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este alumno?')) {
      try {
        await alumnoService.eliminar(id);
        fetchAlumnos();
      } catch (error) {
        console.error('Error deleting alumno:', error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (currentAlumno) {
        await alumnoService.actualizar(currentAlumno.id_alumno!, form as Alumno);
      } else {
        await alumnoService.crear(form as Alumno);
      }
      setIsModalOpen(false);
      fetchAlumnos();
    } catch (error) {
      console.error('Error saving alumno:', error);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Gestión de Alumnos</h1>
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Lista de Alumnos</h2>
          <Button onClick={handleAddClick}>Agregar Alumno</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Apellido Paterno</TableHead>
              <TableHead>Apellido Materno</TableHead>
              <TableHead>DNI</TableHead>
              <TableHead>Fecha Nacimiento</TableHead>
              <TableHead>ID Género</TableHead>
              <TableHead>ID Apoderado</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alumnos.map((alumno) => (
              <TableRow key={alumno.id_alumno}>
                <TableCell>{alumno.id_alumno}</TableCell>
                <TableCell>{alumno.nombres}</TableCell>
                <TableCell>{alumno.apellido_paterno}</TableCell>
                <TableCell>{alumno.apellido_materno}</TableCell>
                <TableCell>{alumno.dni}</TableCell>
                <TableCell>{alumno.fecha_nacimiento}</TableCell>
                <TableCell>{alumno.idGenero}</TableCell>
                <TableCell>{alumno.idApoderado}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2" onClick={() => handleEditClick(alumno)}>Editar</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteClick(alumno.id_alumno!)}>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{currentAlumno ? 'Editar Alumno' : 'Agregar Alumno'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nombres" className="text-right">Nombres</Label>
              <Input id="nombres" name="nombres" value={form.nombres} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="apellido_paterno" className="text-right">Apellido Paterno</Label>
              <Input id="apellido_paterno" name="apellido_paterno" value={form.apellido_paterno} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="apellido_materno" className="text-right">Apellido Materno</Label>
              <Input id="apellido_materno" name="apellido_materno" value={form.apellido_materno} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dni" className="text-right">DNI</Label>
              <Input id="dni" name="dni" value={form.dni} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fecha_nacimiento" className="text-right">Fecha Nacimiento</Label>
              <Input id="fecha_nacimiento" name="fecha_nacimiento" type="date" value={form.fecha_nacimiento} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="idGenero" className="text-right">ID Género</Label>
              <Input id="idGenero" name="idGenero" type="number" value={form.idGenero} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="id_apoderado" className="text-right">ID Apoderado</Label>
              <Input id="id_apoderado" name="id_apoderado" type="number" value={form.idApoderado} onChange={handleInputChange} className="col-span-3" />
            </div>
            <DialogFooter>
              <Button type="submit">{currentAlumno ? 'Guardar Cambios' : 'Agregar'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default Alumnos;
