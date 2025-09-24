package com.example.Backend.ShopKeeper;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShopKeeperRepository extends JpaRepository<ShopKeeper,Integer> {

   Optional<ShopKeeper> findByEmail(String email);
}
