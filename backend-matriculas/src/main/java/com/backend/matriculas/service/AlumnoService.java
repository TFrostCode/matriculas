package com.backend.matriculas.service;
import java.util.List;
import com.backend.matriculas.Entity.Alumno;

public interface AlumnoService {
    List<Alumno> listarAlumnos();
    Alumno getById(Integer id);
    Alumno save(Alumno alumno);
    Alumno update(Alumno alumno);
    Alumno delete(Integer id);
}