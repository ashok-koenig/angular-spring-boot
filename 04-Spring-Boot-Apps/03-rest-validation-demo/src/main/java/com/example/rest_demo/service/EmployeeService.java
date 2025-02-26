package com.example.rest_demo.service;

import com.example.rest_demo.entity.Employee;
import com.example.rest_demo.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    final private EmployeeRepository employeeRepository;
    // Dependency Injection
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    // Transactional annotation is required for the operations which will update data into database
    @Transactional
    public Employee createEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id){
        return employeeRepository.findById(id);
    }

    @Transactional
    public Employee updateEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    @Transactional
    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);
    }
}
