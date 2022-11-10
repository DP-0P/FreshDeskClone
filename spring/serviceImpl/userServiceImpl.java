package com.backend.spring.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.spring.service.userService;

import com.backend.spring.repository.userRepository;
import com.backend.spring.model.user;

@Service
public class userServiceImpl implements userService{
	
	@Autowired
	private userRepository userRepository;
	
	@Override
	public user saveUser(user user) {
		return userRepository.save(user);
	}

	@Override
	public List<user> getUser() {
		return userRepository.findAll();
	}

	@Override
	public user fetchUserByEmailAndPassword(String email, String password) {
		return userRepository.findByEmailAndPassword(email, password);
	}

	@Override
	public user getByUserName(String userName) {
		return userRepository.getByUserName(userName);
	}
	
	@Override
	public user deleteAnUser(String userName) {
		return userRepository.deleteAnUser(userName);
	}
	
}
