package com.fawez.book_network.role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository
      //  JpaRepository<Role,Integer>
{
    //Optional<Role> findByName(String role);
}
