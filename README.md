# Arogya Mithra

Welcome to Arogya Mithra! This README provides an overview of the application's features, setup instructions, and how to use the various components.

## Overview

Arogya Mithra is a comprehensive tool for managing your daily nutrition, calorie intake and calorie extraction from food images. It includes:

- **User Authentication**: Sign up and sign in using your phone number with OTP verification and CAPTCHA.
- **Calorie Dashboard**: Track and visualize your daily food intake and nutritional data.
- **Daily Goal Setting**: Set and manage your daily intake goals for protein, carbs, and fiber.
- **Meal Preparation Guide**: Get a personalized 7-day meal plan based on your requirements using OpenAI GPT-4 Turbo.
- **Food Intake Logging**: Record and analyze your food intake with detailed nutritional information.
- **Chatbot Integration**: Interact with a WhatsApp chatbot for symptom checking and remedies.

## Table of Contents

1. [Features](#features)
2. [Setup Instructions](#setup-instructions)
3. [Usage](#usage)

## Features

### User Authentication

- **Login Page**: Enter your phone number to sign up or sign in.
- **OTP Verification**: Secure login with Firebase Authentication.
- **CAPTCHA**: Additional security to prevent automated sign-ups and logins.

### Calorie Dashboard

- **Daily Intake Tracking**: View and track your daily calorie intake.
- **Data Visualization**: Charts and graphs to visualize your nutritional data.

### Daily Goal Setting

- **Set Goals**: Define your daily goals for protein, carbs, and fiber intake.
- **Manage Goals**: Update or modify your goals as needed.

### Meal Preparation Guide

- **Personalized Meal Plans**: Receive a 7-day meal plan based on your nutritional requirements using GPT-4 Turbo.

### Food Intake Logging

- **Record Entries**: Log your food intake by taking pictures of your meals.
- **Nutritional Analysis**: Analyze the nutritional content of your food, including calories, fats, proteins, and carbs.
- **FoodEntry Table**: Stores food intake data with details extracted from images.

### Chatbot Integration

- **WhatsApp Chatbot**: Use the chatbot for symptom checking and get suggested remedies.

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- Firebase CLI
- Supabase CLI
- WhatsApp API access

### Installation

1. ### Clone the Repository

   ```bash
   git clone https://github.com/a-dtya/Kamikaze.git
   cd Kamikaze
   cd frontend
   cd arogyamithra
   ## Setup Instructions

2. ### Configure Firebase Authentication

   + Set up Firebase Authentication for phone number sign-in.
   + Create a `.env` file in the root directory and add your Firebase configuration.

3. ### Configure Supabase

   + Set up a Supabase project and create the required tables (`User`, `DailyGoal`, `FoodEntry`).
   + Update the `.env` file with your Supabase credentials.

4. ### Configure WhatsApp API

   + Obtain access to the WhatsApp API for chatbot integration.
   + Update the `.env` file with WhatsApp API credentials.

5. ### Run Migrations

   ```bash
      npm run migrate
   ```

### Video Walkthrough

For a comprehensive walkthrough of the project, watch the video below:

[Watch the Project Walkthrough](https://drive.google.com/file/d/1Kw_NGv_KdJePXwh7rymTdL_pzz-T1BLg/view?usp=sharing)
