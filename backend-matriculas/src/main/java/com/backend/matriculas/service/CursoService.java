package com.backend.matriculas.service;
import java.util.List;
import com.backend.matriculas.Entity.Curso;

public interface CursoService {
    List<Curso> listarCursos();
    Curso getById( Integer id);
    Curso save(Curso curso);
    Curso update(Curso curso);
    Curso delete(Integer id);
    
}