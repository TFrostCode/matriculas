package com.backend.matriculas.repository;

import com.backend.matriculas.Entity.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlumnoRepository extends JpaRepository<Alumno, Integer>{
}
