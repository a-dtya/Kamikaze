import React, { useEffect, useState } from 'react';
import supabase from '../supabaseconfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../firbaseconfig';

export default function DailyCalorie() {
  const [userPhone, setUserPhone] = useState(null);
  const [userGoal, setUserGoal] = useState(null);

  useEffect(() => {
    

    const fetchUserData = async () => {
      try {
        
        
          const phone = "918547950086"
          
          const { data, error } = await supabase.from('User').select('id').eq('phone', phone).single();
          if (error) {
            console.error('Error fetching user UUID:', error.message);
          } else {
            const { data: dailyGoalData, error: dailyGoalError } = await supabase
              .from('DailyGoal')
              .select('calorieGoal')
              .eq('userId', data?.id)
              .single();
            if (dailyGoalError) {
              console.error('Error fetching daily calorie goal:', dailyGoalError.message);
            } else {
              setUserGoal(dailyGoalData?.calorieGoal);
            }
          }
        
      } catch (error:any) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <span>{userGoal}</span>
  );
}
