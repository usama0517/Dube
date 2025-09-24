package com.example.Backend.Customer;

public record CustomerRequestDto(
        String firstName,
        String lastName,
        String phoneNumber,
        Integer shopkeeperId
) {
}
