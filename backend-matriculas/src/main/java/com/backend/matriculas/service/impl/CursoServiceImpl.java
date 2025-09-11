package com.backend.matriculas.service.impl;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.matriculas.Entity.Curso;
import com.backend.matriculas.repository.CursoRepository;
import com.backend.matriculas.service.CursoService;

@Service
public class CursoServiceImpl implements CursoService{
    @Autowired
    private CursoRepository cursoRepository;

    @Override
    public List<Curso> listarCursos() {
        return cursoRepository.findAll();
    }

    @Override
    public Curso getById(Integer id) {
        return cursoRepository.findById(id).orElse(null);
    }

    @Override
    public Curso save(Curso curso) {
        return cursoRepository.save(curso);
    }

    @Override
    public Curso update(Curso curso) {
        if (cursoRepository.existsById(curso.getIdCurso())) {
            return cursoRepository.save(curso);
        }
        return null;
    }

    @Override
    public Curso delete(Integer id) {
        Optional<Curso> CursoOpt = cursoRepository.findById(id);
        if (CursoOpt.isPresent()) {
            cursoRepository.deleteById(id);
            return CursoOpt.get();
        }
        return null;
    }
}
