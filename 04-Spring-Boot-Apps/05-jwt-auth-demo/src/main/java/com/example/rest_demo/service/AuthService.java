package com.example.rest_demo.service;

import com.example.rest_demo.entity.Token;
import com.example.rest_demo.entity.User;
import com.example.rest_demo.repository.TokenRepository;
import com.example.rest_demo.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service
public class AuthService {

    private  final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    private long accessTokenExpiration= 2592000000L;

    public AuthService(UserRepository userRepository, TokenRepository tokenRepository, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @Transactional
    public Token signing(String username, String password){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        User user = userRepository.findByUsername(username).orElseThrow(()-> new IllegalArgumentException("Invalid username or password"));
        List<Token> activeTokens = tokenRepository.findAllByUserAndIsActive(user, true).orElse(Collections.emptyList());
        if(!activeTokens.isEmpty()){
            for(Token token: activeTokens){
                token.setActive(false);
            }
            tokenRepository.saveAll(activeTokens);
        }

        String jwtToken = jwtService.generateToken(user);
        Date expiresAt = new Date(System.currentTimeMillis() + accessTokenExpiration);
        return tokenRepository.save(new Token(jwtToken, expiresAt, user, true));
    }
}

