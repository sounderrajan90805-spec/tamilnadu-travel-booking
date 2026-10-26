const KEY = 'tn_travel_bookings';
export const getBookings = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
};
const save = (list) => { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch { /* ignore */ } };
export const addBooking = (b) => { const l = [b, ...getBookings()]; save(l); return l; };
export const removeBooking = (id) => { const l = getBookings().filter((b) => b.id !== id); save(l); return l; };
