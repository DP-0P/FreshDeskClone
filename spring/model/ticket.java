package com.backend.spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection="ticket")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class ticket {
	@JsonFormat(shape=Shape.STRING)
	private String contact;
	@JsonFormat(shape=Shape.STRING)
	private String subject;
	@JsonFormat(shape=Shape.STRING)
	private String phone;
	@JsonFormat(shape=Shape.STRING)
	private String status;
	@JsonFormat(shape=Shape.STRING)
	private String userName;
	@JsonFormat(shape=Shape.STRING)
	private String agent;
	@JsonFormat(shape=Shape.STRING)
	private String description;
	@JsonFormat(shape=Shape.STRING)
	private String id;
	@JsonFormat(shape=Shape.STRING)
	private String date;
	
	public String getId() {
		return this.id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getContact() {
		return this.contact;
	}
	
	public void setContact(String contact) {
		this.contact = contact;
	}
	
	public String getSubject() {
		return this.subject;
	}
	
	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	public String getPhone() {
		return this.phone;
	}
	
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getStatus() {
		return this.status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getDescription() {
		return this.description;
	}
	
	public void setDescripion(String description) {
		this.description = description;
	}
	
	public String getAgent() {
		return this.agent;
	}
	
	public void setAgent(String agent) {
		this.agent = agent;
	}
}





