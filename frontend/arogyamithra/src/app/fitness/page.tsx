"use client"
import { useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import supabase from '../supabaseconfig';
 // Assuming you have configured Supabase client

export default function Fitness() {
  // Define state variables for all input values
  const [allergies, setAllergies] = useState('');
  const [medications, setMedications] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [dietPlan, setDietPlan] = useState('');
  const [conval,setConval]=useState('')
  const [generated,setGenerated]=useState(false)
  const [gcontent,setgcontent]=useState("")
  // Function to concatenate state values into a single string separated by a space
  const concatenateValues = () => {
    return `${allergies} ${medications} ${height} ${weight} ${dietPlan}`;
  };
  const handleGenerate = async (concatenatedValues: string) => {
    try {
        //const dummytext = "You are a healthy diet plan generator, I will be giving the inputs in the order allergies, medications, height, weight and preferred diet plan. You are supposed to generate a comprehensive diet plan based on the same input. Do mention about the BMI of the person, possible health issues to avoid."
        
      const response = await fetch("/api/fitness", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ concatenatedValues }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
  
      const data = await response.json();
      console.log("Response from API:", data);
      setGenerated(true)
      setgcontent(data.parsedContent.diet_plan)
      // Process the response data as needed
    } catch (error:any) {
      console.error('Error:', error.message);
      // Handle errors gracefully
    }
  };
  
  // Function to handle saving the concatenated values to Supabase
  const handleSave = async () => {
    try {
     console.log("start")
      const concatenatedValues = concatenateValues();
      setConval(concatenatedValues)
      // Perform the Supabase operation to store the concatenated values
      // For example:
      const { data, error } = await supabase.from('HealthPlan').insert([
        {
          medicalAllergies: allergies,
          currentMedications: medications,
          height: height,
          weight: weight,
          idealDietPlan: dietPlan,
          userId: "b97552f9-25c0-4431-8816-6921b5ac712c"
        }
      ]);
      console.log(data)
      console.log('Concatenated values:', concatenatedValues);
      // Reset state after saving if needed
      // setAllergies('');
      // setMedications('');
      // setHeight('');
      // setWeight('');
      // setDietPlan('');
    } catch (error:any) {
      console.error('Error saving data to Supabase:', error.message);
    }
  };

  return (
    <>
    <div className='mt-2'>
    <Card className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <CardHeader>
        <CardTitle>My Health Plan</CardTitle>
        <CardDescription>
          Enter your medical allergies, medications, height, and weight to generate your personalized health plan
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col gap-1">
          <Label className="text-sm" htmlFor="allergies">
            Medical Allergies
          </Label>
          <Textarea className="min-h-[100px]" id="allergies" placeholder="Enter your medical allergies..." onChange={(e) => setAllergies(e.target.value)} />
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-sm" htmlFor="medications">
            Current Medications
          </Label>
          <Textarea className="min-h-[100px]" id="medications" placeholder="Enter your current medications..." onChange={(e) => setMedications(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <Label className="text-sm" htmlFor="height">
              Height
            </Label>
            <Input id="height" placeholder="Enter your height" type="number" onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-sm" htmlFor="weight">
              Weight
            </Label>
            <Input id="weight" placeholder="Enter your weight" type="number" onChange={(e) => setWeight(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-sm" htmlFor="diet-plan">
            Ideal Diet Plan
          </Label>
          <Textarea className="min-h-[100px]"
            id="diet-plan"
            placeholder="Describe your ideal diet plan requirements..."
            onChange={(e) => setDietPlan(e.target.value)}
          />
        </div>


      </CardContent>
      <CardFooter className="flex items-center">
        <Button
          className="ml-auto bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
          onClick={() => handleGenerate(conval)}
        >
          Generate Health Plan
        </Button>
        <Button
          className="ml-4 bg-green-500 text-white dark:bg-green-700 dark:text-white"
          onClick={() => handleSave()}
        >
          Save
        </Button>
      </CardFooter>
    </Card>
    {
        generated ? (
            <Card className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
    <CardHeader>
      <CardTitle>Generated Health Plan</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="flex flex-col gap-1">
        <Label className="text-sm" htmlFor="allergies">
          Medical Interpretation
        </Label>
        <p>
          <strong>Inference:</strong>
        </p>
        <div className="meal-plan">
      {Object.entries(gcontent).map(([day, meals]) => (
        <div key={day} className="day">
          <h3><strong>{day}</strong></h3>
          <div className="meals">
            {Object.entries(meals).map(([mealType, meal]) => (
              <div key={mealType} className="meal">
                <h4>{mealType}</h4>
                <p>{meal.split('.').join('. ')}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
      </div>
        </CardContent>
      </Card>
        ) : (
            <div className='text-center'>
                Generate your Medication!
            </div>
        )
    }
    </div>
      </>


  );
}
