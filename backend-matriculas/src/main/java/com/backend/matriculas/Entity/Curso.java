package com.backend.matriculas.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Curso {
    @Id
    private Integer idCurso;
    private String nombre;
}
