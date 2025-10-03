package com.example.Backend.Credit;

import com.example.Backend.Customer.Customer;
import com.example.Backend.Customer.CustomerService;
import com.example.Backend.ShopKeeper.ShopKeeper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/shopKeeper/{cid}/credit")
@CrossOrigin(origins = "http://localhost:5173",
        methods = {RequestMethod.GET,RequestMethod.POST,
        RequestMethod.DELETE})
public class CreditController {
    private final CustomerService customerService;

    private final CreditRepository creditRepository;

    public CreditController(CustomerService customerService, CreditRepository creditRepository) {
        this.customerService = customerService;
        this.creditRepository = creditRepository;
    }
   @PostMapping
   public Credit createCredit(@RequestBody Credit credit,@PathVariable("cid") Integer id){
        Customer customer = customerService.getCustomer(id);
       ShopKeeper s1= customer.getShopkeeper();
       s1.getCredits().add(credit);
       customer.getCredits().add(credit);
       credit.setCustomer(customer);
       credit.setPhoneNumber(customer.getPhoneNumber());
       credit.setShopkeeper(s1);
       return creditRepository.save(credit);
   }
    @GetMapping
    public List<Credit> getAllCredit(@PathVariable("cid") Integer id){
        Customer c = customerService.getCustomer(id);
        if(c!=null){
        return c.getCredits();
    }
        return null;
    }

    @PostMapping("/{id}")
    public Credit updateCredit(@RequestBody Credit credit, @PathVariable("id") Integer id)
    {
        Credit credit1=creditRepository.findById(id).orElse(null);
        if(credit1!=null){
             credit1.setItemName(credit.getItemName());
             credit1.setPrice(credit.getPrice());
             credit1.setQty(credit.getQty());
             credit1.setTotal(credit.getPrice()*credit.getQty());
             return creditRepository.save(credit1);
        }
        else throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                "Credit could not be found");

    }
    @GetMapping("/pay/{id}")
    public Credit payCredit(@PathVariable("id") Integer id){
        Credit credit = creditRepository.findById(id).orElse(null);
        if(credit!=null) {
            credit.setPaid(true);
            return creditRepository.save(credit);
        }
        else throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                "Credit could not be found");

    }
    @DeleteMapping("/{id}")
     public ResponseEntity<Void> deleteCredit(@PathVariable("id") Integer id){
        creditRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Credit getCredit(@PathVariable("id") Integer id){
        return creditRepository.findById(id).orElse(null);

    }
}
