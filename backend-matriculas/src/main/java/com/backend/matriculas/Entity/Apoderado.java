package com.backend.matriculas.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "apoderado")
public class Apoderado {
    @Id
    private Integer idApoderado;
}
