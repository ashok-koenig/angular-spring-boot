package com.example.rest_demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.PositiveOrZero;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Employee name is required")
    @Column(name = "emp_name")
    private String empName;

    @NotEmpty(message = "Employee email is required")
    @Email(message = "Invalid employee email address")
    @Column(name = "emp_email")
    private String empEmail;

    @NotEmpty(message = "Employee salary is required")
    @PositiveOrZero(message = "Invalid employee salary")
    @Column(name = "emp_salary")
    private String empSalary;

    // We must provide default constructor and getter/setter methods for all field, to act the entity as POJO

    public Employee() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getEmpEmail() {
        return empEmail;
    }

    public void setEmpEmail(String empEmail) {
        this.empEmail = empEmail;
    }

    public String getEmpSalary() {
        return empSalary;
    }

    public void setEmpSalary(String empSalary) {
        this.empSalary = empSalary;
    }
}
