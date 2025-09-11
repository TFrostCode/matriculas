package com.backend.matriculas.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.backend.matriculas.Entity.Alumno;
import com.backend.matriculas.service.AlumnoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/alumnos")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from the frontend origin
public class AlumnoController {
    @Autowired
    private AlumnoService alumnoService;

    @GetMapping
    public List<Alumno> getAlumnos() {
        return alumnoService.listarAlumnos();
    }

    @GetMapping("/{id}")
    public Alumno getAlumnoById(@PathVariable("id") Integer id) {
        return alumnoService.getById(id);
    }

    @PostMapping
    public Alumno postAlumno(@RequestBody Alumno alumno) {
        return alumnoService.save(alumno);
    }
    
    @PutMapping("/{id}")
    public Alumno putAlumno(@PathVariable("id") Integer id, @RequestBody Alumno alumno) {
        alumno.setIdGenero(id); 
        return alumnoService.update(alumno);
    }

    @DeleteMapping("/{id}")
    public Alumno deleteAlumno(@PathVariable("id") Integer id){
        return alumnoService.delete(id);
    }

}
