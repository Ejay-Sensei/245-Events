---

## **2\. Architecture Design Document (ADD)**

* **Version:** 1.1  
* **Status:** Final

### **2.1. Architecture Overview**

The system is designed as a **Single Page Application (SPA)** using a unified frontend. This single application serves two distinct experiences: the public-facing portal and the secure internal admin dashboard, managed through routing (/ for public, /admin for internal). This approach maximizes code reuse, simplifies deployment, and ensures brand consistency.

### **2.2. System Components Diagram**

Code snippet

graph TD  
    subgraph "User's Browser"  
        A\[Unified Next.js App\]  
    end

    subgraph "Vercel Platform"  
        B\[Hosting & Global CDN\]  
    end

    subgraph "Supabase (Backend-as-a-Service)"  
        C\[PostgreSQL Database\]  
        D\[Authentication\]  
        E\[File Storage\]  
        F\[Real-time Service\]  
    end

    User(Organizer / Admin) \-- Interacts with \--\> A  
    A \-- Served by \--\> B  
    A \-- API Calls \--\> D  
    A \-- API Calls \--\> C  
    A \-- Secure Uploads \--\> E  
    A \-- Subscribes to \--\> F

### **2.3. Technology Stack**

| Category | Recommendation |
| :---- | :---- |
| **Frontend** | Next.js |
| **Backend/DB** | Supabase |
| **Hosting/DevOps** | Vercel |

### **2.4. Implementation Details**

* **Design System:** A tokens.json file will be created from the Design System Profile. These tokens will be converted into global CSS variables and used by all components to ensure visual consistency.  
* **Asset Management:** All static assets (logo, background images) will be stored in the /public/images/ directory and rendered using the optimized Next.js \<Image\> component.

---

## **3\. JSON Design System Profile**

This JSON object serves as the "single source of truth" for all visual styling. It will be used to generate the project's design tokens.

JSON

{  
  "designSystemProfile": {  
    "name": "245 Events App Design System",  
    "version": "1.0"  
  },  
  "globalTokens": {  
    "colors": {  
      "primary\_accent": "\#E85E2C",  
      "primary\_accent\_hover": "\#D05528",  
      "text\_light": "\#FFFFFF",  
      "text\_dark": "\#2D2D2D"  
    },  
    "typography": {  
      "font\_family": "'Inter', sans-serif"  
    },  
    "spacing": {  
      "border\_radius\_standard": "8px"  
    }  
  },  
  "elementStyling": {  
    "landingPage": {  
      "background": {  
        "type": "image\_with\_gradient\_overlay",  
        "image": "organizer-dashboard-bg.jpg",  
        "gradient": "linear-gradient(45deg, rgba(232, 94, 44, 0.6) 0%, rgba(45, 45, 45, 0.7) 100%)"  
      },  
      "cards": {  
        "bookingForm": {  
          "background": "rgba(0, 0, 0, 0.2)",  
          "border": "1px solid rgba(255, 255, 255, 0.2)",  
          "backdrop\_filter": "blur(10px)"  
        }  
      }  
    },  
    "adminDashboard": {  
      "background": {  
        "color": "\#1A1A1A"  
      },  
      "cards": {  
        "requestCard": {  
          "background": "rgba(255, 255, 255, 0.05)",  
          "border": "1px solid rgba(255, 255, 255, 0.1)"  
        }  
      }  
    }  
  },  
  "do\_not\_rules": \[  
    "DO NOT apply the landing page background gradient to any buttons or text elements.",  
    "DO NOT use accent colors for body text; it is reserved for interactive elements."  
  \]  
}  
