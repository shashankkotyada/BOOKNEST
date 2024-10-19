import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Unavbar from './Unavbar';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchWishlistAndItems = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        try {
          // Fetch wishlist items
          const wishlistResponse = await axios.get(`http://localhost:4000/wishlist/${user.id}`);
          setWishlist(wishlistResponse.data);

          // Fetch all items to get detailed information
          const itemsResponse = await axios.get('http://localhost:4000/item');
          setItems(itemsResponse.data);
        } catch (error) {
          console.error('Error fetching wishlist or items: ', error);
        }
      } else {
        console.log('ERROR: User not found');
      }
    };

    fetchWishlistAndItems();
  }, []);

  const removeFromWishlist = async (itemId) => {
    try {
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId });

      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const response = await axios.get(`http://localhost:4000/wishlist/${user.id}`);
        setWishlist(response.data);
      } else {
        console.log('ERROR: User not found');
      }
    } catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  // Function to find item details based on itemId
  const getItemDetails = (itemId) => {
    const item = items.find((item) => item._id === itemId);
    return item ? item : { title: 'Unknown', author: 'Unknown', genre: 'Unknown', price: 0, itemImage: '' };
  };

  return (
    <div>
      <Unavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Wishlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((wishlistItem) => {
            const itemDetails = getItemDetails(wishlistItem.itemId); // Get detailed item info
            return (
              <div key={wishlistItem.itemId} className="bg-white p-4 rounded shadow">
                <img
                  src={`http://localhost:4000/${itemDetails.itemImage}`}
                  alt="Item Image"
                  className="rounded-t-lg"
                  style={{ height: '350px', width: '500px' }}
                />
                <div>
                  <p className="text-xl font-bold mb-2">{itemDetails.title}</p>
                  <p className="text-gray-700 mb-2">Author: {itemDetails.author}</p>
                  <p className="text-gray-700 mb-2">Genre: {itemDetails.genre}</p>
                  <p className="text-blue-500 font-bold">Price: ${itemDetails.price}</p>

                  <Button
                    style={{ backgroundColor: 'red', border: 'none' }}
                    onClick={() => removeFromWishlist(wishlistItem.itemId)}
                  >
                    Remove from Wishlist
                  </Button>

                  <Button style={{ backgroundColor: 'rebeccapurple', border: 'none' }}>
                    <Link to={`/uitem/${wishlistItem.itemId}`} style={{ color: 'white', textDecoration: 'none' }}>
                      View
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;

