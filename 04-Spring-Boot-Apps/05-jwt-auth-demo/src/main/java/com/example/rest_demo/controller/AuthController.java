package com.example.rest_demo.controller;

import com.example.rest_demo.entity.Token;
import com.example.rest_demo.entity.User;
import com.example.rest_demo.service.AuthService;
import com.example.rest_demo.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("api/auth")
public class AuthController {
    private final AuthService authService;
    private final UserService userService;

    public AuthController(AuthService authService, UserService userService) {
        this.authService = authService;
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user){
        return ResponseEntity.ok(userService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> signing(@RequestBody User user){
        Token token = authService.signing(user.getUsername(), user.getPassword());
//        Token token = authService.signing(user.getUsername(), user.getPassword());
        HashMap<String, String> tokenResponse = new HashMap<>();
        tokenResponse.put("token", token.getToken());
        tokenResponse.put("role", token.getUser().getRole().name());
        return ResponseEntity.ok(tokenResponse);
    }
}

