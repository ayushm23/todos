package com.application.todos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {
    
	@Autowired
    private TodoRepository todoRepository;

    @GetMapping("/todos")
    public List<Todo> getTodos() {
        return (List<Todo>) todoRepository.findAll();
    }
    
    @GetMapping("/todos/{id}")
    public Todo getTodo(@PathVariable long id) throws TodoNotFoundException {
    	Optional<Todo> todoOpt = todoRepository.findById(id);
    	if (todoOpt.isEmpty())
    		throw new TodoNotFoundException("id-" + id);
    	return todoOpt.get();
    }

    @PostMapping("/todos")
    void addTodo(@RequestBody Todo todo) {
        todoRepository.save(todo);
    }
    
    @PutMapping("/todos")
    void updateTodo(@RequestBody Todo todo) throws TodoNotFoundException {
    	Optional<Todo> todoOpt = todoRepository.findById(todo.getId());
    	if (todoOpt.isEmpty())
    		throw new TodoNotFoundException("id-" + todo.getId());
    	else {
    		todoRepository.save(todo);
    	}
    }
    
    @DeleteMapping("/todos/{id}")
    public void deleteTodo(@PathVariable long id) {
    	todoRepository.deleteById(id);
    }
}
