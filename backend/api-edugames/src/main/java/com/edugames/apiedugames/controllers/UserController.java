package com.edugames.apiedugames.controllers;

import com.edugames.apiedugames.dto.LoginDTO;
import com.edugames.apiedugames.dto.UserDTO;
import com.edugames.apiedugames.entity.UserEntity;
import com.edugames.apiedugames.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;

import java.util.List;

@RestController
@CrossOrigin("*")
public class UserController {

    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<UserEntity> getAll(){
        return userService.getAllUsers();
    }

    @PostMapping("/create")
    public HttpStatus createUser(@RequestBody UserDTO userDTO) {
        if(!userDTO.getName().isEmpty() || !userDTO.getEmail().isEmpty() || !userDTO.getPassword().isEmpty()){
            userService.createUser(userDTO.getName(), userDTO.getEmail(), userDTO.getPassword());
            return HttpStatus.CREATED;
        }else throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "Email or Password is empty");
    }

    @PostMapping("/login")
    public UserEntity login(@RequestBody LoginDTO loginDTO){
        if(!loginDTO.getEmail().isEmpty() || !loginDTO.getPassword().isEmpty()){
            if(userService.findUserByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword()) != null){
                return userService.findUserByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword());
            }else throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "User not found");
        }else throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "Email or Password is empty");
    }
}
