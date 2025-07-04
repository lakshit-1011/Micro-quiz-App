const quizzes: Record<string, {
  id: string;
  title: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}[]> = {
  math: [
    {
      id: "math-1",
      title: "Algebra Basics",
      questions: [
        {
          question: "What is the value of x in 2x + 3 = 7?",
          options: ["1", "2", "3", "4"],
          answer: "2",
        },
        {
          question: "Simplify: 3(x + 2)",
          options: ["3x + 2", "x + 6", "3x + 6", "6x"],
          answer: "3x + 6",
        },
        {
          question: "What is x² when x = 4?",
          options: ["8", "12", "16", "20"],
          answer: "16",
        },
        {
          question: "Factor: x² - 9",
          options: [
            "(x + 3)(x - 3)",
            "(x - 9)(x + 1)",
            "(x + 9)(x - 1)",
            "(x - 3)(x - 3)",
          ],
          answer: "(x + 3)(x - 3)",
        },
        {
          question: "What is the solution to x + 5 = 0?",
          options: ["0", "5", "-5", "10"],
          answer: "-5",
        },
      ],
    },
    {
      id: "math-2",
      title: "Geometry Basics",
      questions: [
        {
          question: "What is the sum of angles in a triangle?",
          options: ["90°", "180°", "270°", "360°"],
          answer: "180°",
        },
        {
          question: "How many sides does a hexagon have?",
          options: ["5", "6", "7", "8"],
          answer: "6",
        },
        {
          question: "What is the name of a 3-sided polygon?",
          options: ["Square", "Triangle", "Pentagon", "Circle"],
          answer: "Triangle",
        },
        {
          question:
            "What is the area of a rectangle with length 5 and width 3?",
          options: ["15", "8", "10", "18"],
          answer: "15",
        },
        {
          question: "What is the perimeter of a square with side 4?",
          options: ["8", "12", "16", "20"],
          answer: "16",
        },
      ],
    },
    {
      id: "math-3",
      title: "Arithmetic",
      questions: [
        {
          question: "What is 15 + 6?",
          options: ["21", "22", "23", "24"],
          answer: "21",
        },
        {
          question: "What is 9 × 8?",
          options: ["72", "81", "64", "69"],
          answer: "72",
        },
        {
          question: "What is 20 ÷ 4?",
          options: ["5", "4", "6", "8"],
          answer: "5",
        },
        {
          question: "What is 30 - 17?",
          options: ["13", "14", "15", "16"],
          answer: "13",
        },
        {
          question: "What is 7 × 7?",
          options: ["42", "47", "49", "56"],
          answer: "49",
        },
      ],
    },
    {
      id: "math-4",
      title: "Data & Graphs",
      questions: [
        {
          question: "What type of graph shows parts of a whole?",
          options: ["Bar graph", "Pie chart", "Line graph", "Histogram"],
          answer: "Pie chart",
        },
        {
          question: "What is the average of 2, 4, 6, 8?",
          options: ["5", "6", "7", "8"],
          answer: "5",
        },
        {
          question: "Which measure describes the middle value?",
          options: ["Mean", "Median", "Mode", "Range"],
          answer: "Median",
        },
        {
          question: "Which graph is best for showing trends over time?",
          options: ["Pie chart", "Bar graph", "Line graph", "Dot plot"],
          answer: "Line graph",
        },
        {
          question: "What is the range of 3, 5, 7, 9?",
          options: ["6", "7", "5", "4"],
          answer: "6",
        },
      ],
    },
    {
      id: "math-5",
      title: "Measurements",
      questions: [
        {
          question: "How many centimeters in a meter?",
          options: ["10", "100", "1000", "50"],
          answer: "100",
        },
        {
          question: "How many grams in a kilogram?",
          options: ["100", "500", "1000", "2000"],
          answer: "1000",
        },
        {
          question: "Which unit measures liquid volume?",
          options: ["Kilogram", "Meter", "Liter", "Gram"],
          answer: "Liter",
        },
        {
          question: "What tool is used to measure temperature?",
          options: ["Thermometer", "Barometer", "Speedometer", "Odometer"],
          answer: "Thermometer",
        },
        {
          question: "What is used to measure angles?",
          options: ["Ruler", "Compass", "Protractor", "Scale"],
          answer: "Protractor",
        },
      ],
    },
  ],
  programming: [
    {
      id: "programming-1",
      title: "JavaScript Basics",
      questions: [
        {
          question: "What does `var` declare in JavaScript?",
          options: ["A function", "A variable", "A loop", "An object"],
          answer: "A variable",
        },
        {
          question: "What symbol is used for comments in JavaScript?",
          options: ["//", "<!-- -->", "#", "/* */"],
          answer: "//",
        },
        {
          question: "What is the result of 2 + '2'?",
          options: ["4", "22", "NaN", "undefined"],
          answer: "22",
        },
        {
          question: "Which keyword is used to define a constant?",
          options: ["const", "var", "let", "define"],
          answer: "const",
        },
        {
          question: "What type is `typeof null` in JavaScript?",
          options: ["object", "null", "undefined", "boolean"],
          answer: "object",
        },
      ],
    },
    {
      id: "programming-2",
      title: "Python Basics",
      questions: [
        {
          question: "What is the correct file extension for Python files?",
          options: [".pt", ".py", ".pyt", ".ptn"],
          answer: ".py",
        },
        {
          question: "How do you print in Python?",
          options: ["echo()", "print()", "log()", "write()"],
          answer: "print()",
        },
        {
          question: "What symbol is used for comments in Python?",
          options: ["//", "#", "<!-- -->", "--"],
          answer: "#",
        },
        {
          question: "What is the output of 3 * 'A'?",
          options: ["AAA", "3A", "A3", "Error"],
          answer: "AAA",
        },
        {
          question: "What is the keyword for defining a function?",
          options: ["function", "def", "fun", "define"],
          answer: "def",
        },
      ],
    },
    {
      id: "programming-3",
      title: "Web Development",
      questions: [
        {
          question: "What does HTML stand for?",
          options: [
            "HyperText Markup Language",
            "HighText Markup Language",
            "Home Tool Markup Language",
            "Hyper Transfer Markup Language",
          ],
          answer: "HyperText Markup Language",
        },
        {
          question: "Which tag is used for links in HTML?",
          options: ["<link>", "<href>", "<a>", "<url>"],
          answer: "<a>",
        },
        {
          question: "Which CSS property controls text color?",
          options: ["font-color", "color", "text-color", "background"],
          answer: "color",
        },
        {
          question: "What does CSS stand for?",
          options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets",
          ],
          answer: "Cascading Style Sheets",
        },
        {
          question: "What does `<div>` represent?",
          options: ["Image", "Section", "Style", "List"],
          answer: "Section",
        },
      ],
    },
    {
      id: "programming-4",
      title: "Data Structures",
      questions: [
        {
          question: "Which data structure uses FIFO?",
          options: ["Stack", "Queue", "Array", "Tree"],
          answer: "Queue",
        },
        {
          question: "Which data structure uses LIFO?",
          options: ["Stack", "Queue", "Linked List", "Heap"],
          answer: "Stack",
        },
        {
          question: "Which of the following is not linear?",
          options: ["Array", "Queue", "Tree", "Stack"],
          answer: "Tree",
        },
        {
          question: "What is used to find shortest path in a graph?",
          options: ["DFS", "BFS", "Dijkstra's", "Greedy"],
          answer: "Dijkstra's",
        },
        {
          question: "Which data structure is best for recursion?",
          options: ["Queue", "Stack", "Graph", "Heap"],
          answer: "Stack",
        },
      ],
    },
    {
      id: "programming-5",
      title: "Programming Concepts",
      questions: [
        {
          question: "What is a loop that never ends called?",
          options: [
            "Infinite loop",
            "Forever loop",
            "Never loop",
            "Constant loop",
          ],
          answer: "Infinite loop",
        },
        {
          question: "Which keyword is used to stop a loop?",
          options: ["stop", "exit", "break", "end"],
          answer: "break",
        },
        {
          question: "Which operator is used for equality?",
          options: ["=", "==", "!=", "=>"],
          answer: "==",
        },
        {
          question: "What is the output of true && false?",
          options: ["true", "false", "undefined", "error"],
          answer: "false",
        },
        {
          question: "Which structure allows decision making?",
          options: ["loop", "if", "array", "function"],
          answer: "if",
        },
      ],
    },
  ],
  history: [
    {
      id: "history-1",
      title: "Ancient Civilizations",
      questions: [
        {
          question: "Which civilization built the pyramids?",
          options: ["Romans", "Greeks", "Egyptians", "Persians"],
          answer: "Egyptians",
        },
        {
          question: "Where was the Indus Valley Civilization located?",
          options: ["China", "India", "Egypt", "Greece"],
          answer: "India",
        },
        {
          question: "Who was the king of the Babylonian Empire?",
          options: ["Julius Caesar", "Alexander", "Hammurabi", "Nero"],
          answer: "Hammurabi",
        },
        {
          question: "Which writing system did Mesopotamians use?",
          options: ["Cuneiform", "Hieroglyphics", "Sanskrit", "Latin"],
          answer: "Cuneiform",
        },
        {
          question: "What river is associated with Ancient Egypt?",
          options: ["Tigris", "Euphrates", "Ganges", "Nile"],
          answer: "Nile",
        },
      ],
    },
    {
      id: "history-2",
      title: "Medieval History",
      questions: [
        {
          question: "Who fought in the Crusades?",
          options: [
            "Christians and Muslims",
            "Romans and Greeks",
            "Vikings and Saxons",
            "Huns and Mongols",
          ],
          answer: "Christians and Muslims",
        },
        {
          question: "What was the dominant system in medieval Europe?",
          options: ["Capitalism", "Feudalism", "Socialism", "Democracy"],
          answer: "Feudalism",
        },
        {
          question:
            "Who was crowned emperor of the Holy Roman Empire in 800 AD?",
          options: ["Julius Caesar", "Charlemagne", "Henry VIII", "Napoleon"],
          answer: "Charlemagne",
        },
        {
          question: "What was the Black Death?",
          options: ["A war", "A fire", "A plague", "A rebellion"],
          answer: "A plague",
        },
        {
          question: "Who wrote the Canterbury Tales?",
          options: ["Chaucer", "Shakespeare", "Homer", "Dante"],
          answer: "Chaucer",
        },
      ],
    },
    {
      id: "history-3",
      title: "World Wars",
      questions: [
        {
          question: "When did World War I begin?",
          options: ["1912", "1914", "1916", "1918"],
          answer: "1914",
        },
        {
          question: "Who was the British Prime Minister during WWII?",
          options: ["Churchill", "Chamberlain", "Attlee", "Thatcher"],
          answer: "Churchill",
        },
        {
          question: "Which country did Hitler lead?",
          options: ["Italy", "Germany", "Russia", "Japan"],
          answer: "Germany",
        },
        {
          question: "What event ended WWII in the Pacific?",
          options: ["D-Day", "Hiroshima bombing", "Berlin Wall", "Cold War"],
          answer: "Hiroshima bombing",
        },
        {
          question: "Who led the Soviet Union during WWII?",
          options: ["Stalin", "Lenin", "Trotsky", "Putin"],
          answer: "Stalin",
        },
      ],
    },
    {
      id: "history-4",
      title: "Modern India",
      questions: [
        {
          question: "When did India gain independence?",
          options: ["1945", "1946", "1947", "1950"],
          answer: "1947",
        },
        {
          question: "Who was the first Prime Minister of India?",
          options: ["Gandhi", "Nehru", "Patel", "Rajendra Prasad"],
          answer: "Nehru",
        },
        {
          question: "What movement did Gandhi lead?",
          options: [
            "Quit India",
            "Make in India",
            "Digital India",
            "Swachh Bharat",
          ],
          answer: "Quit India",
        },
        {
          question: "What was the capital of British India?",
          options: ["Delhi", "Mumbai", "Calcutta", "Chennai"],
          answer: "Calcutta",
        },
        {
          question: "What year did India become a Republic?",
          options: ["1947", "1949", "1950", "1952"],
          answer: "1950",
        },
      ],
    },
    {
      id: "history-5",
      title: "Famous Leaders",
      questions: [
        {
          question: "Who was known as the Iron Lady?",
          options: [
            "Angela Merkel",
            "Theresa May",
            "Indira Gandhi",
            "Margaret Thatcher",
          ],
          answer: "Margaret Thatcher",
        },
        {
          question: "Who was the first President of the USA?",
          options: ["Lincoln", "Adams", "Washington", "Jefferson"],
          answer: "Washington",
        },
        {
          question: "Who led the non-violent movement in India?",
          options: ["Bose", "Ambedkar", "Gandhi", "Tilak"],
          answer: "Gandhi",
        },
        {
          question: "Who was the longest-reigning British monarch?",
          options: ["Elizabeth I", "Victoria", "George III", "Elizabeth II"],
          answer: "Elizabeth II",
        },
        {
          question: "Who led South Africa against apartheid?",
          options: ["Mandela", "Biko", "Tutu", "Zuma"],
          answer: "Mandela",
        },
      ],
    },
  ],
  science: [
    {
      id: "science-1",
      title: "Physics Basics",
      questions: [
        {
          question: "What is the SI unit of force?",
          options: ["Newton", "Joule", "Watt", "Pascal"],
          answer: "Newton",
        },
        {
          question: "What is gravity?",
          options: [
            "A type of friction",
            "A repelling force",
            "A pulling force",
            "Energy",
          ],
          answer: "A pulling force",
        },
        {
          question: "What is the speed of light?",
          options: ["3x10^8 m/s", "3x10^6 m/s", "1500 m/s", "100 m/s"],
          answer: "3x10^8 m/s",
        },
        {
          question: "What is inertia?",
          options: [
            "Resistance to motion",
            "Force that moves objects",
            "Mass",
            "Speed",
          ],
          answer: "Resistance to motion",
        },
        {
          question: "Who formulated the laws of motion?",
          options: ["Einstein", "Newton", "Tesla", "Bohr"],
          answer: "Newton",
        },
      ],
    },
    {
      id: "science-2",
      title: "Human Biology",
      questions: [
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
          answer: "Mitochondria",
        },
        {
          question: "How many chambers are there in the human heart?",
          options: ["2", "3", "4", "5"],
          answer: "4",
        },
        {
          question: "Which organ produces insulin?",
          options: ["Liver", "Pancreas", "Kidney", "Lung"],
          answer: "Pancreas",
        },
        {
          question: "What is the function of red blood cells?",
          options: [
            "Fight infection",
            "Transport oxygen",
            "Digest food",
            "Transmit signals",
          ],
          answer: "Transport oxygen",
        },
        {
          question: "Which part of the brain controls breathing?",
          options: ["Cerebellum", "Cerebrum", "Medulla", "Thalamus"],
          answer: "Medulla",
        },
      ],
    },
    {
      id: "science-3",
      title: "Chemistry Basics",
      questions: [
        {
          question: "What is H2O?",
          options: ["Oxygen", "Hydrogen", "Water", "Salt"],
          answer: "Water",
        },
        {
          question: "Which gas is used in balloons?",
          options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
          answer: "Helium",
        },
        {
          question: "What is the pH of a neutral substance?",
          options: ["0", "7", "14", "1"],
          answer: "7",
        },
        {
          question: "Which element is a noble gas?",
          options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
          answer: "Helium",
        },
        {
          question: "What is the chemical symbol for gold?",
          options: ["Au", "Ag", "Gd", "Go"],
          answer: "Au",
        },
      ],
    },
    {
      id: "science-4",
      title: "Earth Science",
      questions: [
        {
          question: "What causes earthquakes?",
          options: ["Volcanoes", "Rain", "Plate movements", "Wind"],
          answer: "Plate movements",
        },
        {
          question: "What is the outer layer of the Earth called?",
          options: ["Core", "Mantle", "Crust", "Surface"],
          answer: "Crust",
        },
        {
          question: "Which layer of the atmosphere contains the ozone?",
          options: [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere",
          ],
          answer: "Stratosphere",
        },
        {
          question: "What is the water cycle?",
          options: [
            "A moon phase",
            "Earthquake cycle",
            "Movement of water",
            "Animal migration",
          ],
          answer: "Movement of water",
        },
        {
          question: "Which rock is formed from lava?",
          options: ["Sedimentary", "Igneous", "Metamorphic", "Sandstone"],
          answer: "Igneous",
        },
      ],
    },
    {
      id: "science-5",
      title: "Astronomy",
      questions: [
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Mars", "Jupiter", "Saturn", "Venus"],
          answer: "Mars",
        },
        {
          question: "What is the center of our solar system?",
          options: ["Earth", "Sun", "Moon", "Mars"],
          answer: "Sun",
        },
        {
          question: "What galaxy do we live in?",
          options: ["Milky Way", "Andromeda", "Whirlpool", "Cartwheel"],
          answer: "Milky Way",
        },
        {
          question: "Which planet has the most moons?",
          options: ["Mars", "Saturn", "Jupiter", "Neptune"],
          answer: "Saturn",
        },
        {
          question: "What is a light year?",
          options: [
            "A year of light",
            "A unit of brightness",
            "Distance light travels in a year",
            "Speed of light",
          ],
          answer: "Distance light travels in a year",
        },
      ],
    },
  ],
};

export default quizzes;