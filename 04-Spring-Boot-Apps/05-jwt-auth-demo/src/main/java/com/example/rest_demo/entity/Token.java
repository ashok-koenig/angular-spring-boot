package com.example.rest_demo.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "tokens")
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String token;
    Date expiresAt;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
    Boolean isActive;

    public Token() {
    }

    public Token(String token, Date expiresAt, User user, Boolean isActive) {
        this.token = token;
        this.expiresAt = expiresAt;
        this.user = user;
        this.isActive = isActive;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Date getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(Date expiresAt) {
        this.expiresAt = expiresAt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
