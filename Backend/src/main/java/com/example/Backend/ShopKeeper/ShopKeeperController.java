package com.example.Backend.ShopKeeper;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/shopkeeper")
@CrossOrigin(origins = "http://localhost:5173",
        methods = {RequestMethod.GET,
                RequestMethod.POST})
public class ShopKeeperController {
   private final ShopKeeperService shopKeeperService;
    ResponseDto toResponseDto(ShopKeeper s){
        ResponseDto r1 = new ResponseDto(
                s.getId(),
                s.getFirstName(),
                s.getLastName(),
                s.getEmail());
        return r1;
    }


    public ShopKeeperController(ShopKeeperService shopKeeperService) {
        this.shopKeeperService = shopKeeperService;
    }

    @GetMapping("/")
    public List<ResponseDto> getAllShopKeepers(){
       List<ShopKeeper> s= shopKeeperService.getAllShopKeepers();
        List<ResponseDto> dto1 = s
                .stream()
                .map(var->toResponseDto(var))
                .collect(Collectors.toList());
                return dto1;

    }
    @PostMapping("/")
    public ResponseDto createShopKeeper(@RequestBody ShopKeeper shopKeeper){

        return toResponseDto(shopKeeperService.createShopKeeper(shopKeeper)) ;

    }
    @GetMapping("/{id}")
    public ResponseDto getShopKeeper(@PathVariable("id") Integer id){
       return toResponseDto(shopKeeperService.getShopKeeper(id)) ;
        }

   @PostMapping("/login")
    public ResponseDto login
           (@RequestBody LoginDto body)
   {
        return toResponseDto(shopKeeperService.login(body)) ;
      }


   }




