package com.example.Backend.Customer;

import com.example.Backend.Credit.Credit;
import com.example.Backend.ShopKeeper.ShopKeeper;
import com.example.Backend.ShopKeeper.ShopKeeperService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;
    private final ShopKeeperService shopKeeperService;

    public CustomerService(CustomerRepository customerRepository, ShopKeeperService shopKeeperService) {
        this.customerRepository = customerRepository;
        this.shopKeeperService = shopKeeperService;
    }



    public Customer createCustomer( Customer customer, Integer sid){
        System.out.println(
                "The Customer's Name is "+ customer.getFirstName()+customer.getLastName()
        );
        ShopKeeper s1;
        s1= shopKeeperService.getShopKeeper(sid);
        customer.setShopKeeper(s1);
        s1.getCustomers().add(customer);
        return customerRepository.save(customer);
    }

    public List<Customer> getCustomers(Integer sid){
        ShopKeeper s1;
        s1=shopKeeperService.getShopKeeper(sid);
        return s1.getCustomers();

    }

    public Customer getCustomer(Integer id){
        return customerRepository.
                findById(id).
                orElseThrow(()->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "This Credit is Not Found"
                        )
                );
    }

    public ResponseEntity<Void> payCredits(Integer id){
        Customer c1 = customerRepository.findById(id).orElse(null);
        if(c1!=null) {
            List<Credit> creditList = c1.getCredits();
            creditList.forEach(z->z.setPaid(true));
            customerRepository.save(c1);
            return new ResponseEntity<> (HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }

    public Customer updateCustomer(Customer customer,Integer id){
        Customer c = customerRepository.getById(id);
        c.setFirstName(customer.getFirstName());
        c.setLastName(customer.getLastName());
        c.setPhoneNumber(customer.getPhoneNumber());
        return customerRepository.save(c);
    }
    public ResponseEntity<Void> deleteCustomer(Integer id){
        customerRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
