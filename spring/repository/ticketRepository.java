package com.backend.spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.backend.spring.model.ticket;
import com.backend.spring.model.user;

@Repository
public interface ticketRepository extends MongoRepository<ticket,String> {
	
	@Query(value="{_id: ?0}",delete = true)
	public ticket deleteTicket(String userName);
	
	@Query("{_id : ?0}")
	public ticket updateTicket(String _id,ticket ticket);
	
	@Query("{userName : ?0}")                                     
    public ticket getByUserName(String userName);
	
	@Query("{_id : ?0}")
	public ticket getById(String _id);
}
