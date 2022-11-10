import { environment } from "src/environments/environment";

export module Constant{
    const baseUrl:String=environment.baseURL;
    export const signupEndPoint:String=`${baseUrl}/registration/signup`;
    export const updateUserEndPoint:String = `${baseUrl}/registration/updateUser/`;
    export const getUsersEndPoint:String=`${baseUrl}/registration/list`;
    export const getUserByUserName:String=`${baseUrl}/registration/get/`;
    export const deleteUser:String = `${baseUrl}/registration/delete/`
    export const ticketRegister:String = `${baseUrl}/ticketRegistration/newTicket`
    export const getTickets:String = `${baseUrl}/ticketRegistration/list`
    export const deleteTicket:String = `${baseUrl}/ticketRegistration/deleteTicket/`
    export const updateTicket:String = `${baseUrl}/ticketRegistration/updateTicket/`
    export const getTicketById:String = `${baseUrl}/ticketRegistration/getTicketById/`
}
