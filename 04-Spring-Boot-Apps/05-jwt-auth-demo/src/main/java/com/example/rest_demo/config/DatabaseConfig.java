package com.example.rest_demo.config;

import com.example.rest_demo.repository.TokenRepository;
import com.example.rest_demo.repository.UserRepository;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseConfig {
    final private UserRepository userRepository;
    final private TokenRepository tokenRepository;

    public DatabaseConfig(UserRepository userRepository, TokenRepository tokenRepository) {
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
    }
}
