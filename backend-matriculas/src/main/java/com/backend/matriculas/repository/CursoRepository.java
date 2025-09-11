package com.backend.matriculas.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.matriculas.Entity.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Integer>{
    
}
