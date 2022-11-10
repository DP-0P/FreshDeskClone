package com.backend.spring.service;

import java.util.List;

import com.backend.spring.model.user;

public interface userService {
	
	public user saveUser(user user);
	
	public user fetchUserByEmailAndPassword(String email,String password);
	
	public user getByUserName(String userName);
	
	public user deleteAnUser(String userName);
	
	public List<user> getUser();
	
}
