
"use client"
import { useEffect, useState } from 'react';
import supabase from '../supabaseconfig';

// Define the type for health plan
interface HealthPlan {
  id: string;
  userId: string;
  medicalAllergies?: string;
  currentMedications?: string;
  height?: string;
  weight?: string;
  idealDietPlan?: string;
}

// Functional component to render health plan details
export default function UserHealthPlan() {
  // Define state variable to store user health plan details
  const [healthPlan, setHealthPlan] = useState<HealthPlan | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch user's health plan details from the database
  useEffect(() => {
    const fetchHealthPlan = async () => {
      try {
        // Query the database for the user's health plan based on the provided userId
        const { data, error } = await supabase
          .from('HealthPlan')
          .select('*')
          .eq('userId', "b97552f9-25c0-4431-8816-6921b5ac712c")
          .single();

        if (error) {
          throw error;
        }

        // Set the fetched health plan data to the state
        setHealthPlan(data);
        setLoading(false);
      } catch (error:any) {
        console.error('Error fetching health plan:', error.message);
        setLoading(false);
      }
    };

    // Call the fetchHealthPlan function when the component mounts
    fetchHealthPlan();
  }, []);

  // Render loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render health plan details
  return (
    <div>
      <h2 className='border rounded-md mx-2 my-2 text-center bg-blue-300 font-bold'>Health Plan Details</h2>
      {healthPlan ? (
       <div className="bg-blue-300 shadow-md rounded-md p-4 mx-2">
       <h2 className="text-lg font-semibold mb-4">Health Plan </h2>
       <div className="grid gap-4">
         <div className="grid grid-cols-2 gap-4">
           <div>
             <p className="text-sm"><strong>Medical Allergies:</strong></p>
             <p>{healthPlan.medicalAllergies || 'N/A'}</p>
           </div>
           <div>
             <p className="text-sm"><strong>Current Medications:</strong></p>
             <p>{healthPlan.currentMedications || 'N/A'}</p>
           </div>
         </div>
         <div className="grid grid-cols-2 gap-4">
           <div>
             <p className="text-sm"><strong>Height:</strong></p>
             <p>{healthPlan.height || 'N/A'}cm</p>
           </div>
           <div>
             <p className="text-sm"><strong>Weight:</strong></p>
             <p>{healthPlan.weight || 'N/A'}kg</p>
           </div>
         </div>
         <div>
           <p className="text-sm"><strong>Ideal Diet Plan:</strong></p>
           <p>{healthPlan.idealDietPlan || 'N/A'}</p>
         </div>
       </div>
     </div>
     
      ) : (
        <div>No health plan found for the user.</div>
      )}
    </div>
  );
}
