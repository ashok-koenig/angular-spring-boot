package com.example.rest_demo.repository;

import com.example.rest_demo.entity.Token;
import com.example.rest_demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long> {
    Optional<Token> findByToken(String token);
    Optional<List<Token>> findAllByUserAndIsActive(User user, Boolean isActive);
}
