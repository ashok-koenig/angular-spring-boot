package com.example.rest_demo.exception;

public class TokenNotFoundException extends RuntimeException{
    public TokenNotFoundException(String token){
        super("Token is invalid: "+ token);
    }
}
