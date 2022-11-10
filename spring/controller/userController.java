package com.backend.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.spring.model.ticket;
import com.backend.spring.model.user;
import com.backend.spring.repository.userRepository;
import com.backend.spring.service.userService;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
@RequestMapping(path="/registration")
public class userController {

	@Autowired
	private userService userService;
	
	@PostMapping(path="/signup")
	public user saveUser(@RequestBody user user)throws Exception{
		user obj = null;
		obj = userService.saveUser(user);
		return obj;
	}
	
	@GetMapping(path="/list")
	public List<user> getUser(@RequestBody user user){
		return userService.getUser();
	}
	
	@GetMapping(path="/get/{userName}")
	public user getParticularUser(@PathVariable String userName) {
		return userService.getByUserName(userName);
	}
	
	@DeleteMapping("/delete/{userName}")
	public user deleteUser(@PathVariable String userName) {
		return userService.deleteAnUser(userName);
	}
	
	
}
