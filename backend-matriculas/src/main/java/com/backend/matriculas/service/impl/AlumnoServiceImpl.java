package com.backend.matriculas.service.impl;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.matriculas.Entity.Alumno;
import com.backend.matriculas.repository.AlumnoRepository;
import com.backend.matriculas.service.AlumnoService;

@Service
public class AlumnoServiceImpl implements AlumnoService{
    
    @Autowired
    private AlumnoRepository alumnoRepository;

    @Override
    public List<Alumno> listarAlumnos() {
        return alumnoRepository.findAll();
    }

    @Override
    public Alumno getById(Integer id) {
        return alumnoRepository.findById(id).orElse(null);
    }

    @Override
    public Alumno save(Alumno alumno) {
        return alumnoRepository.save(alumno);
    }

    @Override
    public Alumno update(Alumno alumno) {
        if (alumnoRepository.existsById(alumno.getId_alumno())) {
            return alumnoRepository.save(alumno);
        }
        return null; // o lanzar una excepción personalizada
    }

    @Override
    public Alumno delete(Integer id) {
        Optional<Alumno> alumnoOpt = alumnoRepository.findById(id);
        if (alumnoOpt.isPresent()) {
            alumnoRepository.deleteById(id);
            return alumnoOpt.get();
        }
        return null; // o lanzar excepción si no existe
    }
}
