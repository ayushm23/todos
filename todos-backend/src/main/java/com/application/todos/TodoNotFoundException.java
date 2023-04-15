package com.application.todos;

@SuppressWarnings("serial")
public class TodoNotFoundException extends Exception {
	
	public TodoNotFoundException(String errorMessage) {
        super(errorMessage);
    }

}
