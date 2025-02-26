package com.example.rest_demo.exception;

public class EmployeeNotFoundException extends RuntimeException{
    public EmployeeNotFoundException(Long id){
        super("Employee with ID "+id + " is not found");
    }
}
