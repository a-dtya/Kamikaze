import { useEffect, useState } from 'react';
import supabase from '../supabaseconfig';


export default function Dashboard() {

  const [userName, setUserName] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      // Fetch user data where phone number is '8547950086'
      const { data, error } = await supabase
        .from('Users')
        .select('name')
        .eq('phone', '+918547950086')
        .single();

      if (error) {
        console.error('Error fetching user data:', error.message);
        return;
      }

      if (data) {
        setUserName(data.name);
      }
    }

    fetchUserData();
  }, []); // Only run this effect once when component mounts

  return (
    <div>
      {userName ? (
        <p>User's name: {userName}</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}