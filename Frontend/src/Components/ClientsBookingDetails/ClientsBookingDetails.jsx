import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ClientsBookingDetails.css";
import axiosInstance from '../../Utils/Api';


const ClientsBookingDetails = () => {
  const [clientsData, setClientsData] = useState([]);

  // Fetch all travel bookings
  useEffect(() => {
    fetchBookings();
  }, []);

  
  // Fetch Bookings
  const fetchBookings = async () => {
    try {
      const response = await axiosInstance.get('/travelbookings/all'); // Use axiosInstance
      setClientsData(response.data.data);
    } catch (error) {
      console.error('Error fetching travel bookings:', error);
    }
  };

  // Delete a booking
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/travelbookings/${id}`); // Use axiosInstance
      setClientsData((prevData) => prevData.filter((client) => client._id !== id));
      alert('Booking deleted successfully');
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Failed to delete booking');
    }
  };

  return (
    <div className="Clients-Booking-container">
      <h2 className="Clients-Booking-title">Clients Booking Data</h2>
      <table className="Clients-Booking-table">
        <thead className="Clients-Booking-thead">
          <tr className="Clients-Booking-header-row">
            <th className="Clients-Booking-th"> Sl No.</th>
            <th  className="Clients-Booking-th" >Title</th>
            <th  className="Clients-Booking-th" >Traveler Type</th>
            <th  className="Clients-Booking-th" >First Name</th>
            <th  className="Clients-Booking-th" >Last Name</th>
            <th  className="Clients-Booking-th" >Gender</th>
            <th  className="Clients-Booking-th" >Phone</th>
            <th  className="Clients-Booking-th" >Email</th>
            <th  className="Clients-Booking-th" >ZipCode</th>
            <th  className="Clients-Booking-th" >Birth Date</th>
            <th  className="Clients-Booking-th" >From</th>
            <th  className="Clients-Booking-th" >To</th>
            <th  className="Clients-Booking-th" >Departure Date</th>
            <th  className="Clients-Booking-th" >Return Date</th>
            <th  className="Clients-Booking-th" >Adults</th>
            <th  className="Clients-Booking-th" >Children</th>
            <th  className="Clients-Booking-th" >Meal Preference</th>
            <th  className="Clients-Booking-th" >Wheelchair Request</th>
            <th  className="Clients-Booking-th" >Travel Insurance</th>
            <th  className="Clients-Booking-th" >Extra Baggage</th>
            <th  className="Clients-Booking-th" >Priority Boarding</th>
            <th  className="Clients-Booking-th" >Actions</th>
          </tr>
        </thead>
        <tbody>
          {clientsData.map((client, index) => (
            <tr key={client._id}>
              <td className="Clients-Booking-td">{index + 1}</td>
              <td className="Clients-Booking-td">{client.travelerType}</td>
              <td className="Clients-Booking-td">{client.title}</td>
              <td className="Clients-Booking-td">{client.firstName}</td>
              <td className="Clients-Booking-td">{client.lastName}</td>
              <td className="Clients-Booking-td">{client.gender}</td>
              <td className="Clients-Booking-td">{client.phone}</td>
              <td className="Clients-Booking-td">{client.email}</td>
              <td className="Clients-Booking-td">{client.postCode}</td>
              <td className="Clients-Booking-td">{new Date(client.birthDate).toLocaleDateString()}</td>
              <td className="Clients-Booking-td">{client.from}</td>
              <td className="Clients-Booking-td">{client.to}</td>
              <td className="Clients-Booking-td">{new Date(client.departureDate).toLocaleDateString()}</td>
              <td className="Clients-Booking-td">{client.returnDate ? new Date(client.returnDate).toLocaleDateString() : "N/A"}</td>
              <td className="Clients-Booking-td">{client.adults}</td>
              <td className="Clients-Booking-td">{client.children}</td>
              <td className="Clients-Booking-td">{client.mealPreference}</td>
              <td className="Clients-Booking-td">{client.wheelchairRequest}</td>
              <td className="Clients-Booking-td">{client.priorityBoarding ? "Yes" : "No"}</td>
              <td className="Clients-Booking-td">{client.travelInsurance ? "Yes" : "No"}</td>
              <td className="Clients-Booking-td">{client.extraBaggage ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => handleDelete(client._id)} className="Clients-Booking-delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsBookingDetails;