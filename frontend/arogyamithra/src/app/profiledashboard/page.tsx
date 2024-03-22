
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ProfileComponent() {
  return (
    <>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Health Metrics</CardTitle>
          <CardDescription>
            Please fill in your health metrics below. This information will be shared with your healthcare provider.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <Label className="w-[200px]" htmlFor="height">
                Height (in cm)
              </Label>
              <Input id="height" placeholder="Enter your height" />
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-[200px]" htmlFor="weight">
                Weight (in kg)
              </Label>
              <Input id="weight" placeholder="Enter your weight" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Medical History</CardTitle>
          <CardDescription>
            Please fill in your medical history below. This information will be shared with your healthcare provider.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="form-label" htmlFor="allergies">
                Allergies
              </Label>
              <Textarea className="min-h-[100px]" id="allergies" placeholder="Enter your allergies" />
            </div>
            <div>
              <Label className="form-label" htmlFor="chronic-conditions">
                Chronic Conditions
              </Label>
              <Textarea className="min-h-[100px]" id="chronic-conditions" placeholder="Enter your chronic conditions" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Medication History</CardTitle>
          <CardDescription>
            Please fill in your medication history below. This information will be shared with your healthcare provider.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="form-label" htmlFor="current-medications">
                Current Medications
              </Label>
              <Textarea
                className="min-h-[100px]"
                id="current-medications"
                placeholder="Enter your current medications"
              />
            </div>
            <div>
              <Label className="form-label" htmlFor="adverse-reactions">
                Any Adverse Drug Reactions
              </Label>
              <Textarea
                className="min-h-[100px]"
                id="adverse-reactions"
                placeholder="Enter any adverse drug reactions"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Doctor's Information</CardTitle>
          <CardDescription>
            Please fill in your doctor's information below. This information will be shared with your healthcare
            provider.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <Label className="w-[200px]" htmlFor="doctor-name">
                Doctor's Name
              </Label>
              <Input id="doctor-name" placeholder="Enter your doctor's name" />
            </div>
            <div className="flex items-center gap-4">
              <Label className="w-[200px]" htmlFor="clinic">
                Clinic/Hospital Name
              </Label>
              <Input id="clinic" placeholder="Enter your clinic/hospital name" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </>
  )
}

