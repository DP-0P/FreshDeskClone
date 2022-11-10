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
import com.backend.spring.service.ticketService;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
@RequestMapping(path="/ticketRegistration")
public class ticketController {
	@Autowired
	private ticketService ticketService;
	
	@PostMapping(path="/newTicket")
	public ticket saveTicket(@RequestBody ticket ticket)throws Exception{
		ticket obj = null;
		obj = ticketService.saveTicket(ticket);
		return obj;
	}
	
	@DeleteMapping(path="/deleteTicket/{_id}")
	public ticket deleteTicket(@PathVariable String _id) {
		return ticketService.deleteTicket(_id);
	}
	
	@PutMapping(path="/updateTicket/{_id}")
	public ticket updateTicket(@PathVariable String _id,@RequestBody ticket ticket) {
		ticket.setAgent(ticket.getAgent());
		ticket.setPhone(ticket.getPhone());
		ticket.setStatus(ticket.getStatus());
		ticket.setSubject(ticket.getSubject());
		ticket.setContact(ticket.getContact());
		ticket.setDescripion(ticket.getDescription());
		return ticketService.updateTicket(_id, ticket);
	}
	
	@GetMapping(path="/getTicket/{userName}")
	public ticket getParticularUser(@PathVariable String userName) {
		return ticketService.getByUserName(userName);
	}
	
	@GetMapping(path="/getTicketById/{_id}")
	public ticket getById(@PathVariable String _id) {
		return ticketService.getById(_id);
	}
	
	@GetMapping(path="/list")
	public List<ticket> getUser(){
		return ticketService.getTickets();
	}
}
