import { useEffect, useState } from 'react';

function Cart() {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('booking');
    if (data) {
      setBookingData(JSON.parse(data));
    }
  }, []);

 

  return (
    <div className=' cart-container' id='cartstyle' style={{ padding: '20px'}}>
      <div id='cart' className='h4'>
      <h2 className='book-cart'>Booking Cart</h2>
      {bookingData ? (
        <div >
          <p><strong>Name:</strong> {bookingData.name}</p>
          <p><strong>Date:</strong> {bookingData.date}</p>
          <p><strong>Time:</strong> {bookingData.time}</p>
          <p><strong>Guests:</strong> {bookingData.guests}</p>
        </div>
      ) : (
        <p>No Booking Found</p>
      )}
      <button className='btn btn-primary ' onClick={() => {
  localStorage.removeItem('booking');
  setBookingData(null);
}}>
  Cancel Booking
</button></div>
    </div>
  );
}

export default Cart;
