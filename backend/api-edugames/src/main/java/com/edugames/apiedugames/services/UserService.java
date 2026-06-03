package com.edugames.apiedugames.services;

import com.edugames.apiedugames.entity.UserEntity;
import com.edugames.apiedugames.repository.UserRepository;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //list all users
    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    //create user
    public void createUser(String name, String email, String password) {
        try{
            UserEntity userEntity = new UserEntity();
            userEntity.setName(name);
            userEntity.setEmail(email);
            userEntity.setPassword(password);

            if(!userRepository.existsByEmail(email)){
                userRepository.save(userEntity);
            }else throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "Email already exists");

        }catch(DataIntegrityViolationException e){
            throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "Erro de integridade de dados: Verifique os relacionamentos ou campos duplicados.");
        }catch (DataAccessException e){
            throw new RuntimeException("Erro enquanto salva usuário");
        }
    }

    //login by email and password
    public UserEntity findUserByEmailAndPassword(String email, String password) {
        if(!email.isEmpty() || password.isEmpty()){
            if(userRepository.existsByEmail(email) && userRepository.existsByPassword(password)){
                return userRepository.findByEmail(email);
            }
        }else throw new HttpServerErrorException(HttpStatus.BAD_REQUEST);
        return null;
    }
}
