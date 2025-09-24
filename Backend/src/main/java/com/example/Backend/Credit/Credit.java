package com.example.Backend.Credit;

import com.example.Backend.Customer.Customer;
import com.example.Backend.ShopKeeper.ShopKeeper;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Credit {

    @Id
    @GeneratedValue
    private Integer id;
    private String itemName;
    private String phoneNumber;
    private double qty;
    private double price;
    private double total = qty*price;
    private boolean isPaid= false;

    public boolean isPaid() {
        return isPaid;
    }

    public void setPaid(boolean paid) {
        isPaid = paid;
    }

    public Credit (){
        customer=null;
        shopkeeper=null;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public double getQty() {
        return qty;
    }

    public void setQty(double qty) {
        this.qty = qty;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public ShopKeeper getShopkeeper() {
        return shopkeeper;
    }

    public void setShopkeeper(ShopKeeper shopkeeper) {
        this.shopkeeper = shopkeeper;
    }

    @ManyToOne
    @JoinColumn(name = "customerId",nullable = false,updatable = false)
    @JsonBackReference("credit-customer")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "shopId",nullable = false,updatable = false)
     @JsonBackReference("shopkeeper-credit")
    private  ShopKeeper shopkeeper;

    public Credit(Customer customer, ShopKeeper shopKeeper, ShopKeeper shopkeeper) {
        this.customer = customer;
        this.shopkeeper = shopkeeper;

    }
}
