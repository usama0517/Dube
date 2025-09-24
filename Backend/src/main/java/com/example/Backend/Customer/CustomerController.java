package com.example.Backend.Customer;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/{sid}/customer")
public class CustomerController {


private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping()
    public Customer createCustomer(@RequestBody Customer customer,@PathVariable("sid") Integer sid){
        return customerService.createCustomer(customer,sid);
    }
    @GetMapping()
    public List<Customer> getCustomers(@PathVariable("sid") Integer sid){

        return customerService.getCustomers(sid);
    }
    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable("id") Integer id){
        return customerService.getCustomer(id);
    }
    @GetMapping("{id}/pay-all-credits")
    public ResponseEntity<Void> payCredits(@PathVariable("id") Integer id){
       return customerService.payCredits(id);
    }
}
