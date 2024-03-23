-- CreateTable
CREATE TABLE "HealthPlan" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "medicalAllergies" TEXT,
    "currentMedications" TEXT,
    "height" TEXT,
    "weight" TEXT,
    "idealDietPlan" TEXT,

    CONSTRAINT "HealthPlan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HealthPlan" ADD CONSTRAINT "HealthPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
