package com.example.Backend.ShopKeeper;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/shopkeeper")
public class ShopKeeperController {
   private final ShopKeeperService shopKeeperService;

    public ShopKeeperController(ShopKeeperService shopKeeperService) {
        this.shopKeeperService = shopKeeperService;
    }

    @GetMapping("/")
    public List<ShopKeeper> getAllShopKeepers(){
       return shopKeeperService.getAllShopKeepers();

    }

    @PostMapping("/")
    public ShopKeeper createShopKeeper(@RequestBody ShopKeeper shopKeeper){
        return shopKeeperService.createShopKeeper(shopKeeper);

    }
    @GetMapping("/{id}")
    public ShopKeeper getShopKeeper(@PathVariable("id") Integer id){
       return shopKeeperService.getShopKeeper(id);
        }

   @PostMapping("/login")
    public ShopKeeper login
           (@RequestBody LoginDto body)
   {
        return shopKeeperService.login(body);
      }

   }




