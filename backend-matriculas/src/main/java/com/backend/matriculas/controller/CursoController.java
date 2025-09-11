package com.backend.matriculas.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.backend.matriculas.Entity.Curso;
import com.backend.matriculas.service.CursoService;

@RestController
@RequestMapping("/cursos")
@CrossOrigin(origins = "http://localhost:5173") 
public class CursoController {
    @Autowired
    private CursoService cursoService;

    @GetMapping
    public List<Curso> getCursos() {
        return cursoService.listarCursos();
    }

    @GetMapping("/{id}")
    public Curso getCursoById(@PathVariable("id") Integer id) {
        return cursoService.getById(id);
    }

    @PostMapping
    public Curso postCurso(@RequestBody Curso curso) {
        return cursoService.save(curso);
    }
    
    @PutMapping("/{id}")
    public Curso putCurso(@PathVariable("id") Integer id, @RequestBody Curso curso) {
        curso.setIdCurso(id);
        return cursoService.update(curso);
    }

    @DeleteMapping("/{id}")
    public Curso deleteCurso(@PathVariable("id") Integer id){
        return cursoService.delete(id);
    }
}
