// server/controllers/coffeeController.js

// Function to handle GET request for coffee recommendations
export const getRecommendations = async (req, res) => {
    try {
      // Simulating coffee recommendations (this will later be dynamic with Yelp API or your own logic)
        const coffeeRecommendations = [
        { name: "Espresso", type: "Strong", description: "A strong coffee made with a single shot of espresso." },
        { name: "Latte", type: "Mild", description: "A smooth coffee with espresso and steamed milk." },
        { name: "Cappuccino", type: "Mild", description: "A coffee with espresso, steamed milk, and foam." },
        ];
    
      // Responding with the coffee recommendations
        res.status(200).json(coffeeRecommendations);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recommendations", error });
    }
    };
    
  // Function to handle POST request for saving coffee recommendations preferences
    export const saveRecommendation = async (req, res) => {
    try {
        const { userId, preferences } = req.body;
    
      // Logic for saving preferences to the database can go here (for now, just logging it)
        console.log('Saving preferences for user:', userId);
        console.log('Preferences:', preferences);
    
      // Responding with success message
        res.status(200).json({ message: "Preferences saved successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error saving preferences", error });
    }
    };
    