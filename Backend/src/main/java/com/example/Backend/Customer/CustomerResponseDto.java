package com.example.Backend.Customer;

public record CustomerResponseDto(
        Integer id,
        String firstName,
        String lastName,
        String phoneNumber

) {
}
