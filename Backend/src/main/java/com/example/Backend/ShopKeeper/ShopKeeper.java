package com.example.Backend.ShopKeeper;

import com.example.Backend.Credit.Credit;
import com.example.Backend.Customer.Customer;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Entity
@Getter
@Setter
public class ShopKeeper {
public ShopKeeper(){
    this.customers=null;
    this.credits=null;
}
    public ShopKeeper(List<Customer> customer, List<Credit> credits) {
        this.customers = customer;
        this.credits = credits;
    }


    @Id
    @GeneratedValue
    private Integer id;
    private String firstName;
    private String lastName;
     @Column(nullable = false, unique = true)
    private String email;
     @Column(nullable = false)
    private String password;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "shopkeeper")
    @JsonManagedReference("shopkeeper-customer")
    private  List<Customer> customers;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "shopkeeper")
    @JsonManagedReference("shopkeeper-credit")
    private  List<Credit> credits;

    public List<Customer> getCustomers() {
        return customers;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public List<Credit> getCredits() {
        return credits;
    }
}
