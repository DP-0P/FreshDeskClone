package com.backend.spring.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.backend.spring.model.ticket;
import com.backend.spring.model.user;
import com.backend.spring.repository.ticketRepository;

import org.springframework.stereotype.Service;

import com.backend.spring.service.ticketService;
import com.backend.spring.service.userService;

import com.backend.spring.model.ticket;
@Service
public class ticketServiceImpl implements ticketService{
	
	@Autowired
	private ticketRepository ticketRepository;
	
	@Override
	public ticket saveTicket(ticket ticket) {
		return ticketRepository.save(ticket);
	}

	@Override
	public ticket deleteTicket(String _id) {
		// TODO Auto-generated method stub
		return ticketRepository.deleteTicket(_id);
	}

	@Override
	public ticket updateTicket(String _id, ticket ticket) {
		// TODO Auto-generated method stub
		return ticketRepository.save(ticket);
	}
	
	@Override
	public ticket getByUserName(String userName) {
		// TODO Auto-generated method stub
		return ticketRepository.getByUserName(userName);
	}
	
	@Override
	public List<ticket> getTickets() {
		return ticketRepository.findAll();
	}
	
	@Override
	public ticket getById(String _id) {
		return ticketRepository.getById(_id);
	}
	
}






	
	
	
	


