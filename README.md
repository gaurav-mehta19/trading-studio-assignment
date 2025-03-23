# Trading Studio Assignment

## Live Link
- This project is live at: [https://trading-studio-assignment.vercel.app](https://trading-studio-assignment.vercel.app)

## Getting Started

To run the project locally, follow these steps:

1. **Clone the project**
   ```sh
   git clone <repository-url>
   ```
2. **Move to the project folder**
   ```sh
    cd <repository-folder>
   ```
3. **Install dependencies**
   ```sh
   npm install
   ```
4. **Start the development server**
   ```sh
   npm run dev
   ```

## Usage Guide

After starting the application, you will land on the **Landing Page**. Click on the **Get Started** button to navigate to the **Strategy Creation Page**.

## Data Handling
- The data displayed in the **strategy page** and **simulation result page** is currently **hardcoded**.

### Creating a Strategy
A strategy consists of four steps:

1. **Scanner Step**  
   - Identifies financial instruments that meet a set of scanner rules on a given day.

2. **Buy Step**  
   - Identifies financial instruments that satisfy a set of buy-trigger rules on a given day.

3. **Sell Step**  
   - Identifies financial instruments that meet sell-trigger rules after being shortlisted in the buy step.

4. **Simulation Step**  
   - Simulates the portfolio using a given configuration, based on shortlisted items from the above steps.

## State Management
- The application uses **Recoil** to store the state of these four steps.

## Technologies Used
- React
- Recoil (State Management)
- Node.js (for package management via npm)

