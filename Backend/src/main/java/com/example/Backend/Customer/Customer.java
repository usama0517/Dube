package com.example.Backend.Customer;

import com.example.Backend.Credit.Credit;
import com.example.Backend.ShopKeeper.ShopKeeper;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Entity
public class Customer {
    @Id
    @GeneratedValue
    private Integer id;
    private String firstName;

    private String lastName;
    @Column(unique = true)
    private String PhoneNumber;

     public Customer(){
         this.shopkeeper= null;
         this.credits=null;
     }
    public Customer(ShopKeeper shopKeeper, ShopKeeper shopkeeper, List<Credit> credit) {
        this.shopkeeper = shopkeeper;
        this.credits = credit;
    }
    @ManyToOne()
    @JoinColumn(name = "shoperId", nullable = false, updatable = false)
    @JsonBackReference("shopkeeper-customer")
    private ShopKeeper shopkeeper;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer")
    @JsonManagedReference("credit-customer")
    private  List<Credit> credits;

    public void setShopKeeper(ShopKeeper s){
       shopkeeper=s;
    }

    public Integer getId() {
        return id;
    }



    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return PhoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        PhoneNumber = phoneNumber;
    }

    public ShopKeeper getShopkeeper() {
        return shopkeeper;
    }

    public void setShopkeeper(ShopKeeper shopkeeper) {
        this.shopkeeper = shopkeeper;
    }

    public void setCredits(List<Credit> credits) {
        this.credits = credits;
    }

    public List<Credit> getCredits() {
        return credits;
    }
}
