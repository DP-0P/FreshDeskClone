package com.backend.spring.service;
import java.util.List;

import com.backend.spring.model.ticket;
import com.backend.spring.model.user;

public interface ticketService {
	public ticket saveTicket(ticket ticket);
	
	public ticket deleteTicket(String _id);
	
	public ticket getByUserName(String userName);
	
	public ticket updateTicket(String _id, ticket ticket);
	
	public ticket getById(String _id);
	
	public List<ticket> getTickets();
}

