import React from 'react'
import { useEffect, useState } from 'react';
import supabase from '../supabaseconfig';
 

export default function ProteinIntake() {
  
  const [totalProteins, setTotalProteins] = useState<any>(0);
  const [totalCarbs, setTotalCarbs] = useState<any>(0);
  const [totalFats, setTotalFats] = useState<any>(0);
  let totalCaloriesConsumed:any = 0
  const [userreal,setUserReal]=useState<any>("")
  useEffect(() => {
    async function fetchFoodEntries() {
      try {
        const phone = "918547950086"
  const { data, error } = await supabase.from('User').select('id').eq('phone', phone).single();
  setUserReal(data?.id)
        // Get the current date in YYYY-MM-DD format
      }catch(error:any){
        console.log(error.message)

      }
      try{
        const currentDate = new Date().toISOString().split('T')[0];

        // Fetch food entries for the user within the current day
        const { data, error } = await supabase.from("FoodEntry").select('*')
          .eq('userId', userreal)
          .gte('entryDate', `${currentDate} 00:00:00`) // Greater than or equal to start of the current day
          .lte('entryDate', `${currentDate} 23:59:59`) // Less than or equal to end of the current day
          .order('entryDate', { ascending: true });

        if (error) {
          throw error;
        }

        if (data) {
        

          // Calculate totals
          let totalProteins = 0;
          

          data.forEach(entry => {
            totalProteins += entry.protein;
           
       
          });

          setTotalProteins(totalProteins);
         
         
        }
      } catch (error:any) {
        console.error('Error fetching food entries:', error.message);
      }
      try{
        const currentDate = new Date().toISOString().split('T')[0];
        const {data,error} = await supabase.from("FoodEntry").select("calories").eq('userId', userreal)
        .gte('entryDate', `${currentDate} 00:00:00`) 
        .lte('entryDate', `${currentDate} 23:59:59`) 
        .order('entryDate', { ascending: true });
        if(data){
            data.forEach((entry: { calories: any; }) =>{
                totalCaloriesConsumed+=entry.calories
            })
        }
        if(error){
            console.log(error.message)
        }
       
      }catch(error:any){
        console.log(error.message)
      }
    }
    fetchFoodEntries();
  }, []); 
  return (
    <div>{totalProteins}</div>
  )
}
