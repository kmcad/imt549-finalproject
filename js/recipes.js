const RECIPES = [
    {
        "name": "Claire's Granola",
        "dish": "Breakfast",
        "contributor": "Claire",
        "page": 2
    },
    {
        "name": "Cottage Cheese Pancakes",
        "dish": "Breakfast",
        "contributor": "Ellen",
        "page": 3
    },
    {
        "name": "French Toast Casserole",
        "dish": "Breakfast",
        "contributor": "Georgia",
        "page": 4
    },
    {
        "name": "Parmesan Clouds",
        "dish": "Breakfast",
        "contributor": "Kay",
        "page": 5
    },
    {
        "name": "Popovers",
        "dish": "Breakfast",
        "contributor": "Kay",
        "page": 6
    },
    {
        "name": "Corn and Scallion Strata",
        "dish": "Breakfast",
        "contributor": "Kay",
        "page": 7
    },
    {
        "name": "Strawberry Clafouti",
        "dish": "Breakfast",
        "contributor": "Georgia",
        "page": 8
    },
    {
        "name": "Aglio e Olio",
        "dish": "Vegetarian Dishes",
        "contributor": "Luke",
        "page": 9
    },
    {
        "name": "Aunt Grace's Linguine with Broccoli",
        "dish": "Vegetarian Dishes",
        "contributor": "Ellen",
        "page": 10
    },
    {
        "name": "Baked Ziti",
        "dish": "Vegetarian Dishes",
        "contributor": "Ellen",
        "page": 11
    },
    {
        "name": "Cannelloni",
        "dish": "Vegetarian Dishes",
        "contributor": "Ellen",
        "page": 12
    },
    {
        "name": "Cheri's Ravioli",
        "dish": "Vegetarian Dishes",
        "contributor": "Luke",
        "page": 13
    },
    {
        "name": "Crash Hot Potatoes",
        "dish": "Vegetarian Dishes",
        "contributor": "Georgia",
        "page": 14
    },
    {
        "name": "Crispy Tofu",
        "dish": "Vegetarian Dishes",
        "contributor": "Claire",
        "page": 15
    },
    {
        "name": "Dan's Chili",
        "dish": "Vegetarian Dishes",
        "contributor": "Dan",
        "page": 16
    },
    {
        "name": "Farro-stuffed Peppers",
        "dish": "Vegetarian Dishes",
        "contributor": "Tony",
        "page": 17
    },
    {
        "name": "Macaroni and Cheese",
        "dish": "Vegetarian Dishes",
        "contributor": "Ellen",
        "page": 18
    },
    {
        "name": "Zesty Quinoa Salad",
        "dish": "Vegetarian Dishes",
        "contributor": "Tony",
        "page": 19
    },
    {
        "name": "Chicken Provencal",
        "dish": "Meat Dishes",
        "contributor": "Ellen",
        "page": 20
    },
    {
        "name": "Flour's Chicken Sandwich",
        "dish": "Meat Dishes",
        "contributor": "Kay",
        "page": 21
    },
    {
        "name": "Emeril's Most Kicked-Up Meatloaf Ever",
        "dish": "Meat Dishes",
        "contributor": "Tony",
        "page": 22
    },
    {
        "name": "Italian Meatballs",
        "dish": "Meat Dishes",
        "contributor": "Ellen",
        "page": 23
    },
    {
        "name": "Mom's Quick Tomato Sauce",
        "dish": "Meat Dishes",
        "contributor": "Ellen",
        "page": 24
    },
    {
        "name": "Jamaican Jerk Turkey Thighs",
        "dish": "Meat Dishes",
        "contributor": "Georgia",
        "page": 25
    },
    {
        "name": "Meatloaf Burgers",
        "dish": "Meat Dishes",
        "contributor": "Ellen",
        "page": 26
    },
    {
        "name": "Quaker's Tantalizing Baked Chicken",
        "dish": "Meat Dishes",
        "contributor": "Ellen",
        "page": 27
    },
    {
        "name": "Shrimp, Arugula, and Linguine",
        "dish": "Meat Dishes",
        "contributor": "Dan",
        "page": 28
    },
    {
        "name": "Tagine of Lamb and Prunes in Honey Sauce",
        "dish": "Meat Dishes",
        "contributor": "Georgia",
        "page": 29
    },
    {
        "name": "Yogurt-marinated Chicken Kebabs with Israeli Couscous",
        "dish": "Meat Dishes",
        "contributor": "Tony",
        "page": 30
    },
    {
        "name": "Ziti with Meat Sauce",
        "dish": "Meat Dishes",
        "contributor": "Ellen",
        "page": 31
    },
    {
        "name": "Lo Bak Go",
        "dish": "Chinese Dishes",
        "contributor": "Edna",
        "page": 32
    },
    {
        "name": "Scallion Pancakes",
        "dish": "Chinese Dishes",
        "contributor": "Kay",
        "page": 33
    },
    {
        "name": "Chinese Sweet and Sour Sauce",
        "dish": "Chinese Dishes",
        "contributor": "Doug",
        "page": 34
    },
    {
        "name": "Fahn Kay Gnow Yook",
        "dish": "Chinese Dishes",
        "contributor": "Edna",
        "page": 35
    },
    {
        "name": "Nien Go",
        "dish": "Chinese Dishes",
        "contributor": "Edna",
        "page": 36
    },
    {
        "name": "Gai Dahn Go",
        "dish": "Chinese Dishes",
        "contributor": "Edna",
        "page": 37
    },
    {
        "name": "Doug's Wonton",
        "dish": "Chinese Dishes",
        "contributor": "Doug",
        "page": 38
    },
    {
        "name": "Steamed Eggs",
        "dish": "Chinese Dishes",
        "contributor": "Georgia",
        "page": 39
    },
    {
        "name": "Chinese Roast Pork",
        "dish": "Chinese Dishes",
        "contributor": "Edna",
        "page": 40
    },
    {
        "name": "Hot and Sour Soup",
        "dish": "Chinese Dishes",
        "contributor": "Kay",
        "page": 41
    },
    {
        "name": "Banana Bread",
        "dish": "Breads",
        "contributor": "Georgia",
        "page": 42
    },
    {
        "name": "Cheddar Biscuits",
        "dish": "Breads",
        "contributor": "Georgia",
        "page": 43
    },
    {
        "name": "Claire's Rustic Bread",
        "dish": "Breads",
        "contributor": "Claire",
        "page": 44
    },
    {
        "name": "Easy Buttermilk Bread",
        "dish": "Breads",
        "contributor": "Ellen",
        "page": 45
    },
    {
        "name": "Irish Soda Bread",
        "dish": "Breads",
        "contributor": "Ellen",
        "page": 46
    },
    {
        "name": "Mrs. Helickson's Cranberry Bread",
        "dish": "Breads",
        "contributor": "Georgia",
        "page": 47
    },
    {
        "name": "Pulla",
        "dish": "Breads",
        "contributor": "Pam",
        "page": 48
    },
    {
        "name": "Blueberry Tart",
        "dish": "Desserts",
        "contributor": "Georgia",
        "page": 49
    },
    {
        "name": "Browned Butter Rice Krispies Treats",
        "dish": "Desserts",
        "contributor": "Kay",
        "page": 50
    },
    {
        "name": "Candy Cane Cookies",
        "dish": "Desserts",
        "contributor": "Georgia",
        "page": 51
    },
    {
        "name": "Crescent Cookies",
        "dish": "Desserts",
        "contributor": "Luke",
        "page": 52
    },
    {
        "name": "Consummate Chocolate Chip Cookies",
        "dish": "Desserts",
        "contributor": "Claire",
        "page": 53
    },
    {
        "name": "Hershey's Great American Chocolate Chip Cookies",
        "dish": "Desserts",
        "contributor": "Ellen",
        "page": 54
    },
    {
        "name": "Fresh Fruit Cobbler",
        "dish": "Desserts",
        "contributor": "Ellen",
        "page": 55
    },
    {
        "name": "Fresno Apricot Bars",
        "dish": "Desserts",
        "contributor": "Georgia",
        "page": 56
    },
    {
        "name": "Kay's Cake",
        "dish": "Desserts",
        "contributor": "Pam",
        "page": 57
    },
    {
        "name": "Lemon Meringue Pie",
        "dish": "Desserts",
        "contributor": "Tony",
        "page": 58
    },
    {
        "name": "Limoncello",
        "dish": "Desserts",
        "contributor": "Charli",
        "page": 59
    },
    {
        "name": "Molasses Cookies",
        "dish": "Desserts",
        "contributor": "Ellen",
        "page": 60
    },
    {
        "name": "Oatmeal Lace Cookies",
        "dish": "Desserts",
        "contributor": "Ellen",
        "page": 61
    },
    {
        "name": "Oreos",
        "dish": "Desserts",
        "contributor": "Claire",
        "page": 62
    },
    {
        "name": "Snickerdoodles",
        "dish": "Desserts",
        "contributor": "Ellen",
        "page": 63
    },
    {
        "name": "Snickerdoodles",
        "dish": "Desserts",
        "contributor": "Claire",
        "page": 64
    }
];
