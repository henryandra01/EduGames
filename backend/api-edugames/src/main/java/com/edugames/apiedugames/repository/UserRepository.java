package com.edugames.apiedugames.repository;

import com.edugames.apiedugames.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    boolean existsByEmail(String email);
    boolean existsByPassword(String password);
    UserEntity findByEmail(String email);
    UserEntity findByPassword(String password);
}
