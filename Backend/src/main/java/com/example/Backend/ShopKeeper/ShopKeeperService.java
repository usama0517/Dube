package com.example.Backend.ShopKeeper;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@Service
public class ShopKeeperService {
    private final ShopKeeperRepository shopKeeperRepository;

    public ShopKeeperService(ShopKeeperRepository shopKeeperRepository) {
        this.shopKeeperRepository = shopKeeperRepository;
    }

    public List<ShopKeeper> getAllShopKeepers(){
        return shopKeeperRepository.findAll();

    }


    public ShopKeeper createShopKeeper(ShopKeeper shopKeeper){
        return shopKeeperRepository.save(shopKeeper);

    }

    public ShopKeeper getShopKeeper(Integer id){
        var s1= shopKeeperRepository.findById(id).orElse(null);
        if(s1!=null){
            return s1;
        }
        else
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"User is Not Found");
    }


    public  ShopKeeper login
            (LoginDto body)
    {

        String email = body.email();
        String password= body.password();

        ShopKeeper s=  shopKeeperRepository.findByEmail(email).orElse(null);
        if(s==null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"There is No such User");
        }
        if(!Objects.equals(s.getPassword(), password)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Passwords Do not Much");
        }
        return s;
    }

}
