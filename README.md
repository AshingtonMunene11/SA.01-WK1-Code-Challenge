# 🇰🇪 Everyday Essentials
Boda, Chai & M-Pesa Estimators

Welcome to a collection of three interactive, JavaScript-powered mini tools designed to bring Kenyan daily life experiences into code. Whether you're planning your next bodaboda ride, brewing the perfect cup of chai, or estimating your mobile money transfer fees—this set of simple prompts has you covered.

Each calculator works entirely in the browser using native JavaScript prompts, and outputs meaningful, contextual messages to the console.

##🖥️ Live Preview
![image](https://github.com/user-attachments/assets/4de6dbda-7de2-43ba-ad34-7b165a73f5a0)


## 📁 Project Structure
code-Challenge-1/
├── README.md
├── bodaFareCalculator/
├── chaiCalculator/
└── mobileMoneyEstimator/



##🚴🏽 Boda Fare Calculator – fare.js
Purpose: Estimate the cost of a boda boda ride based on the number of kilometers you plan to travel.

## Features:

Prompts the user: "Unafika wapi Mkubwa? Kilometer ngapi?"

Calculates:
Base fare (KES 50)
Distance fare (KES 15 per KM)
Outputs a detailed fare breakdown in Swahili and English.
Sample Console Output:
```
Uko kwote? Io ni 7 km
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 105
Total Fare: KES 155
Panda Pikipiki!

```
##🍵 Chai Bora Ingredient Calculator – chai.js
Purpose: Determine the precise amount of ingredients needed to make a specific number of cups of rich Kenyan chai.

##Features:

Prompts: "Jambo! How many cups of tea would you like to have today?"
Calculates the required amounts of:
Water (200ml/cup)
Milk (50ml/cup)
Tea leaves (1 tbsp/cup)
Sugar (2 tbsp/cup)
Sample Console Output:
```
To make 3 cups of Kenyan Chai, you will need:
Water 600 ml
Milk 150 ml
Tea Leaves (Majani) 3 tablespoons
Sugar 6 tablespoons
Enjoy your Chai Bora!
```

##💸 M-Pesa Fee Estimator – fee.js
Purpose: Estimate a simplified transaction fee for sending mobile money via M-Pesa or other Kenyan platforms.

## Features:

Prompts: "Unatuma Pesa Ngapi?"
Calculates:
15% fee (with caps: minimum KES 10, maximum KES 70)
The total amount deducted from the sender
Helpful alert if invalid input is detected.
Sample Console Output:
```
Sending KES 500:
Calculated Transaction Fee: KES 70
Total amount to be debited: KES 570
Send money securely!
```
##💻 How to Run
Open any .html file in your browser (e.g., boda.html, chai.html, or fee.html) and interact with the prompt.

## 📜 License

&copy; 2025 Ashington Munene — Moringa School.


