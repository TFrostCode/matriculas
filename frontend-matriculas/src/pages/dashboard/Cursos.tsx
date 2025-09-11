import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { Card } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import type { Curso } from '@/types/curso';
import { cursoService } from '@/services/CursoService';

const Cursos: React.FC = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCurso, setCurrentCurso] = useState<Curso | null>(null);
  const [form, setForm] = useState<Omit<Curso, 'id_curso'>>({
    nombre: '',
    creditos: 0,
  });

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = async () => {
    try {
      const response = await cursoService.listar();
      setCursos(response);
    } catch (error) {
      console.error('Error fetching cursos:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddClick = () => {
    setCurrentCurso(null);
    setForm({
      nombre: '',
      creditos: 0,
    });
    setIsModalOpen(true);
  };

  const handleEditClick = (curso: Curso) => {
    setCurrentCurso(curso);
    setForm({
      nombre: curso.nombre,
      creditos: curso.creditos,
    });
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este curso?')) {
      try {
        await cursoService.eliminar(id);
        fetchCursos();
      } catch (error) {
        console.error('Error deleting curso:', error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (currentCurso) {
        await cursoService.actualizar(currentCurso.id_curso!, form as Curso);
      } else {
        await cursoService.crear(form as Curso);
      }
      setIsModalOpen(false);
      fetchCursos();
    } catch (error) {
      console.error('Error saving curso:', error);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Gestión de Cursos</h1>
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Lista de Cursos</h2>
          <Button onClick={handleAddClick}>Agregar Curso</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Créditos</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cursos.map((curso) => (
              <TableRow key={curso.id_curso}>
                <TableCell>{curso.id_curso}</TableCell>
                <TableCell>{curso.nombre}</TableCell>
                <TableCell>{curso.creditos}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2" onClick={() => handleEditClick(curso)}>Editar</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteClick(curso.id_curso!)}>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{currentCurso ? 'Editar Curso' : 'Agregar Curso'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nombre" className="text-right">Nombre</Label>
              <Input id="nombre" name="nombre" value={form.nombre} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="creditos" className="text-right">Créditos</Label>
              <Input id="creditos" name="creditos" type="number" value={form.creditos} onChange={handleInputChange} className="col-span-3" />
            </div>
            <DialogFooter>
              <Button type="submit">{currentCurso ? 'Guardar Cambios' : 'Agregar'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default Cursos;
