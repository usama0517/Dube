package com.example.Backend.Customer;

import com.example.Backend.Credit.Credit;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/{sid}/customer")
@CrossOrigin(origins = "http://localhost:5173", methods = {RequestMethod.GET,RequestMethod.POST})
public class CustomerController {


private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }
       CustomerResponseDto toCustomerResponseDto(Customer c){
        return new CustomerResponseDto(
                c.getId(),
                c.getFirstName(),
                c.getLastName(),
                c.getPhoneNumber()
        );
       }
    @PostMapping()
    public CustomerResponseDto createCustomer(@RequestBody Customer customer,@PathVariable("sid") Integer sid){
        return toCustomerResponseDto(customerService.createCustomer(customer,sid)) ;
    }
    @PostMapping("/{id}")
    public CustomerResponseDto updateCustomer(@RequestBody Customer customer, @PathVariable("id") Integer id){
        return toCustomerResponseDto(customerService.updateCustomer(customer,id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable("id") Integer id){
        return customerService.deleteCustomer(id);
    }

    @GetMapping()
    public List<CustomerResponseDto> getCustomers(@PathVariable("sid") Integer sid){

        List<Customer> customerList= customerService.getCustomers(sid);
        List<CustomerResponseDto> customerResponseDtoList =customerList.
                stream().
                map(customer -> toCustomerResponseDto(customer)).
                collect(Collectors.toList());
        return customerResponseDtoList;
    }
    @GetMapping("/{id}")
    public Customer getCustomer(@PathVariable("id") Integer id){
        return customerService.getCustomer(id) ;
    }
    @GetMapping("{id}/pay-all-credits")
    public ResponseEntity<Void> payCredits(@PathVariable("id") Integer id){
       return customerService.payCredits(id);
    }
}
