package com.example.rest_demo.service;

import com.example.rest_demo.entity.Employee;
import com.example.rest_demo.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
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
    public Employee createEmployee(Employee employee, MultipartFile file){
        if (!file.isEmpty()) {
            String fileName = null;
            try {
                fileName = saveFile(file);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            employee.setEmpPhoto(fileName);
        }
        return employeeRepository.save(employee);
    }

    public String saveFile(MultipartFile file) throws IOException {
        Path uploadPath = Paths.get("./src/main/resources/static/uploads/");
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
        return fileName;
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
