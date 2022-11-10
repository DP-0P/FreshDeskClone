package com.backend.spring.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;


import com.backend.spring.model.user;

@Repository
public interface userRepository extends MongoRepository<user,String>{
	public user findByEmailAndPassword(String email, String password);
	
	@Query("{userName : ?0}")
    public user getByUserName(String userName);

	@Query(value = "{userName : ?0}",delete = true) 
	public user deleteAnUser(String userName);
	
}
