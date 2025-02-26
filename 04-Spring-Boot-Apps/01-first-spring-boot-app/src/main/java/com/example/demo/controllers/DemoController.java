package com.example.demo.controllers;

import com.example.demo.models.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DemoController {
    @RequestMapping("/")
    public String Home(){
        return "Welcome to Java Spring Boot";
    }

    @RequestMapping("/user")
    public User getUser(){
        User john = new User("John", "Smith", 20);
        return john;
    }

    @RequestMapping("/users")
    public List<User> getUsers(){
        List<User> users = new ArrayList<>();
        users.add(new User("John", "Smith", 20));
        users.add(new User("John", "Peter", 21));
        return users;
    }
}
