package com.backend.matriculas.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Data
@Entity
@NoArgsConstructor
@Table(name = "alumno")
public class Alumno {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_alumno;

    @Column(nullable = false, length = 8)
    private String dni;

    @NotBlank
    private String nombres;

    @NotBlank
    private String apellido_paterno;

    @NotBlank
    private String apellido_materno;

    private LocalDate fecha_nacimiento;
    private Integer idGenero;
    private Integer id_apoderado;
}
