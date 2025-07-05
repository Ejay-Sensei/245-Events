# **1\. Product Requirements Document (PRD)**

* **Version:** 1.1  
* **Status:** Final

## **1.1. Vision & Project Goals**

* **Vision:** To design and implement a singular, streamlined digital workflow for the 245 Events space, providing a premium, user-friendly booking experience for organizers and an efficient management dashboard for the internal team.  
* **Project Goals:**  
  * Enhance User Experience.  
  * Increase Operational Efficiency.  
  * Eliminate Scheduling Conflicts.  
  * Standardize Communication.  
  * Ensure Compliance & Accountability.  
  * Automate Key Processes.

## **1.2. Target Audience & User Journeys**

* **Primary Users (External):** Event Organizers.  
* **Primary Users (Internal):** The 245 Events Team.  
* **User Journeys:** The application provides two distinct user journeys: a public-facing portal for organizers to submit and manage requests, and a secure internal dashboard for the Events Team to review, manage, and approve these requests.

## **1.3. Page-by-Page Functional Breakdown**

### **Public Portal**

* **Landing Page (/):** An immersive welcome page featuring a background image of the building entrance with a slow-panning effect, the "245" brand logo, the headline "Elevate your corporate gatherings...", and a single "Book Event" call-to-action button.  
* **Form Page (/book):** A dedicated page with a multi-section form presented in visual containers. It includes fields for Event Details, Organiser Information, Additional Services, and Logistics, along with an interactive calendar showing only available dates.  
* **Policy Modal:** A popup modal, linked from the Form Page, displaying all detailed terms, conditions, and policies for user review before acknowledgment.  
* **Confirmation Page (/confirmation):** A success page shown after form submission to confirm receipt of the request.  
* **Secure Upload Page (/request/\[id\]):** A unique page accessed via a secure link, allowing organizers to upload additional documents if required.

### **Admin Dashboard**

* **Login Page (/admin/login):** A secure form for the Events Team to log in.  
* **Dashboard (/admin/dashboard):** A "command center" view listing all incoming booking requests with their current status.  
* **Request Details (/admin/requests/\[id\]):** A detailed view of a single request, including a communication hub to interact with the organizer.  
* **Create Booking (/admin/create-booking):** An internal page allowing the team to fill out the booking form on behalf of an organizer.  
* **Calendar (/admin/calendar):** A full calendar view of all confirmed and pending events.

## **1.4. 'Epic 0': Technical Foundation & Project Setup**

This section outlines the foundational technical tasks that must be completed before feature development begins. It includes setting up the documentation structure, source control, core technology stack, environment configuration, and required service accounts.

* **Source Control:** Initialize a Git repository and establish a branching strategy.  
* **Core Technology Stack:** Set up the Next.js frontend, connect to the Supabase backend, and configure hosting on Vercel.  
* **Design System Integration:** Convert the tokens.json file into global CSS variables to be used by all components.  
* **Development Tooling:** Install **Stagewise** as a development dependency (npm install stagewise \--save-dev). This tool will connect the live application UI to the developer's AI code agent, enabling rapid visual prototyping and iteration.  
* **Environment Configuration:** Create .env files for development and production environments, including all necessary API keys and service credentials.  
* **Service Accounts:** Set up the required accounts for Supabase and Vercel.

## **1.5. Success Metrics**

* Reduction in administrative time spent per booking.  
* Elimination of scheduling errors.  
* Positive user feedback from event organizers.  
* A complete audit trail for 100% of booking requests.  
* 100% of approved events have a recorded policy acknowledgment.

---

