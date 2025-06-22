export const questionsData = {
  general: {
    easy: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correct: 1,
        explanation: "Paris is the capital and largest city of France."
      },
      {
        id: 2,
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
      },
      {
        id: 3,
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correct: 2,
        explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
      },
      {
        id: 4,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1,
        explanation: "Mars is called the Red Planet due to its reddish appearance from iron oxide on its surface."
      },
      {
        id: 5,
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correct: 1,
        explanation: "Vatican City is the smallest country in the world by both area and population."
      }
    ],
    medium: [
      {
        id: 6,
        question: "Which element has the chemical symbol 'Au'?",
        options: ["Silver", "Gold", "Aluminum", "Argon"],
        correct: 1,
        explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
      },
      {
        id: 7,
        question: "In which year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correct: 1,
        explanation: "World War II ended in 1945 with the surrender of Japan in September."
      },
      {
        id: 8,
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correct: 2,
        explanation: "The Japanese yen is the official currency of Japan."
      },
      {
        id: 9,
        question: "Which organ in the human body produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Heart"],
        correct: 2,
        explanation: "The pancreas produces insulin to regulate blood sugar levels."
      },
      {
        id: 10,
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
        correct: 1,
        explanation: "The Nile River is generally considered the longest river in the world at about 6,650 km."
      }
    ],
    hard: [
      {
        id: 11,
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correct: 2,
        explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
      },
      {
        id: 12,
        question: "Which country has the most time zones?",
        options: ["Russia", "United States", "China", "France"],
        correct: 3,
        explanation: "France has the most time zones (12) due to its overseas territories."
      },
      {
        id: 13,
        question: "What is the hardest natural substance on Earth?",
        options: ["Quartz", "Diamond", "Graphite", "Titanium"],
        correct: 1,
        explanation: "Diamond is the hardest naturally occurring substance known."
      },
      {
        id: 14,
        question: "Which blood type is known as the universal donor?",
        options: ["A+", "B+", "AB+", "O-"],
        correct: 3,
        explanation: "O- blood type is the universal donor as it can be given to people with any blood type."
      },
      {
        id: 15,
        question: "What is the smallest bone in the human body?",
        options: ["Stapes", "Malleus", "Incus", "Hyoid"],
        correct: 0,
        explanation: "The stapes, located in the middle ear, is the smallest bone in the human body."
      }
    ]
  },
  science: {
    easy: [
      {
        id: 16,
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correct: 0,
        explanation: "Water is composed of two hydrogen atoms and one oxygen atom."
      },
      {
        id: 17,
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correct: 1,
        explanation: "Mercury is the innermost and smallest planet in our solar system."
      },
      {
        id: 18,
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2,
        explanation: "Plants use carbon dioxide for photosynthesis to produce oxygen."
      },
      {
        id: 19,
        question: "How many bones are in an adult human body?",
        options: ["206", "256", "186", "226"],
        correct: 0,
        explanation: "An adult human skeleton has 206 bones."
      },
      {
        id: 20,
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
        correct: 2,
        explanation: "Mitochondria are known as the powerhouse of the cell because they produce ATP."
      }
    ],
    medium: [
      {
        id: 21,
        question: "What is the speed of light in vacuum?",
        options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "301,000,000 m/s"],
        correct: 0,
        explanation: "The speed of light in vacuum is exactly 299,792,458 meters per second."
      },
      {
        id: 22,
        question: "Which element has the atomic number 6?",
        options: ["Nitrogen", "Carbon", "Oxygen", "Boron"],
        correct: 1,
        explanation: "Carbon has 6 protons in its nucleus, giving it atomic number 6."
      },
      {
        id: 23,
        question: "What is the pH of pure water?",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "Pure water has a pH of 7, making it neutral."
      },
      {
        id: 24,
        question: "What type of bond holds water molecules together?",
        options: ["Ionic", "Covalent", "Hydrogen", "Metallic"],
        correct: 2,
        explanation: "Hydrogen bonds hold water molecules together, giving water its unique properties."
      },
      {
        id: 25,
        question: "Which scientist developed the theory of evolution?",
        options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Gregor Mendel"],
        correct: 1,
        explanation: "Charles Darwin developed the theory of evolution by natural selection."
      }
    ],
    hard: [
      {
        id: 26,
        question: "What is the Heisenberg Uncertainty Principle?",
        options: [
          "Energy cannot be created or destroyed",
          "You cannot simultaneously know both position and momentum of a particle",
          "Light behaves as both wave and particle",
          "Mass equals energy times speed of light squared"
        ],
        correct: 1,
        explanation: "The Heisenberg Uncertainty Principle states that you cannot precisely determine both the position and momentum of a particle simultaneously."
      },
      {
        id: 27,
        question: "What is the half-life of Carbon-14?",
        options: ["5,730 years", "4,500 years", "6,200 years", "5,000 years"],
        correct: 0,
        explanation: "Carbon-14 has a half-life of approximately 5,730 years."
      },
      {
        id: 28,
        question: "Which particle was discovered at CERN in 2012?",
        options: ["Neutrino", "Quark", "Higgs Boson", "Photon"],
        correct: 2,
        explanation: "The Higgs Boson was discovered at CERN in 2012, confirming the Standard Model of particle physics."
      },
      {
        id: 29,
        question: "What is CRISPR used for?",
        options: ["Gene editing", "Protein synthesis", "Cell division", "DNA replication"],
        correct: 0,
        explanation: "CRISPR is a revolutionary gene-editing technology that allows precise modification of DNA."
      },
      {
        id: 30,
        question: "What is the most abundant element in the universe?",
        options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        correct: 1,
        explanation: "Hydrogen is the most abundant element in the universe, making up about 75% of normal matter."
      }
    ]
  },
  history: {
    easy: [
      {
        id: 31,
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
        correct: 1,
        explanation: "George Washington was the first President of the United States from 1789 to 1797."
      },
      {
        id: 32,
        question: "In which year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correct: 1,
        explanation: "World War II ended in 1945 with the surrender of Japan."
      },
      {
        id: 33,
        question: "Which ancient wonder of the world was built in Egypt?",
        options: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
        correct: 2,
        explanation: "The Great Pyramid of Giza is the only surviving ancient wonder of the world."
      },
      {
        id: 34,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correct: 2,
        explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519."
      },
      {
        id: 35,
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Greek Empire", "Roman Empire", "Persian Empire", "Ottoman Empire"],
        correct: 1,
        explanation: "Julius Caesar was a Roman general and statesman who ruled the Roman Empire."
      }
    ],
    medium: [
      {
        id: 36,
        question: "When did the Berlin Wall fall?",
        options: ["1987", "1988", "1989", "1990"],
        correct: 2,
        explanation: "The Berlin Wall fell on November 9, 1989, marking the end of the Cold War era."
      },
      {
        id: 37,
        question: "Who was the leader of the Soviet Union during World War II?",
        options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leon Trotsky"],
        correct: 1,
        explanation: "Joseph Stalin led the Soviet Union during World War II from 1924 to 1953."
      },
      {
        id: 38,
        question: "Which battle is considered the turning point of World War II in Europe?",
        options: ["Battle of Britain", "D-Day", "Battle of Stalingrad", "Battle of Midway"],
        correct: 2,
        explanation: "The Battle of Stalingrad (1942-1943) is considered the turning point of WWII in Europe."
      },
      {
        id: 39,
        question: "Who wrote the Communist Manifesto?",
        options: ["Vladimir Lenin", "Karl Marx and Friedrich Engels", "Joseph Stalin", "Leon Trotsky"],
        correct: 1,
        explanation: "Karl Marx and Friedrich Engels wrote the Communist Manifesto in 1848."
      },
      {
        id: 40,
        question: "Which dynasty built the Great Wall of China?",
        options: ["Han Dynasty", "Tang Dynasty", "Ming Dynasty", "Qin Dynasty"],
        correct: 3,
        explanation: "The Qin Dynasty began building the Great Wall of China, though it was later expanded by the Ming Dynasty."
      }
    ],
    hard: [
      {
        id: 41,
        question: "What was the name of the peace treaty that ended World War I?",
        options: ["Treaty of Versailles", "Treaty of Trianon", "Treaty of Sevres", "Treaty of Saint-Germain"],
        correct: 0,
        explanation: "The Treaty of Versailles ended World War I between Germany and the Allied Powers."
      },
      {
        id: 42,
        question: "Who was the last Tsar of Russia?",
        options: ["Alexander III", "Nicholas II", "Alexander II", "Nicholas I"],
        correct: 1,
        explanation: "Nicholas II was the last Tsar of Russia, ruling from 1894 until his abdication in 1917."
      },
      {
        id: 43,
        question: "Which ancient Greek philosopher taught Alexander the Great?",
        options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
        correct: 2,
        explanation: "Aristotle was the tutor of Alexander the Great from 343 BC."
      },
      {
        id: 44,
        question: "What was the code name for the D-Day landings?",
        options: ["Operation Barbarossa", "Operation Overlord", "Operation Market Garden", "Operation Torch"],
        correct: 1,
        explanation: "Operation Overlord was the code name for the D-Day landings in Normandy."
      },
      {
        id: 45,
        question: "Which empire was known as the 'Sick Man of Europe'?",
        options: ["Austro-Hungarian Empire", "Russian Empire", "Ottoman Empire", "German Empire"],
        correct: 2,
        explanation: "The Ottoman Empire was referred to as the 'Sick Man of Europe' due to its decline in the 19th century."
      }
    ]
  },
  sports: {
    easy: [
      {
        id: 46,
        question: "How many players are on a basketball team on the court at one time?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "Each basketball team has 5 players on the court at any given time."
      },
      {
        id: 47,
        question: "Which sport is known as 'The Beautiful Game'?",
        options: ["Basketball", "Tennis", "Soccer/Football", "Baseball"],
        correct: 2,
        explanation: "Soccer (or football) is commonly referred to as 'The Beautiful Game'."
      },
      {
        id: 48,
        question: "How often are the Summer Olympics held?",
        options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
        correct: 2,
        explanation: "The Summer Olympics are held every 4 years."
      },
      {
        id: 49,
        question: "In tennis, what is the term for zero points?",
        options: ["Nil", "Zero", "Love", "Nothing"],
        correct: 2,
        explanation: "In tennis, 'Love' means zero points."
      },
      {
        id: 50,
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        correct: 2,
        explanation: "France won the FIFA World Cup in 2018, defeating Croatia 4-2 in the final."
      }
    ],
    medium: [
      {
        id: 51,
        question: "Who holds the record for most career home runs in MLB?",
        options: ["Babe Ruth", "Hank Aaron", "Barry Bonds", "Willie Mays"],
        correct: 2,
        explanation: "Barry Bonds holds the MLB record with 762 career home runs."
      },
      {
        id: 52,
        question: "Which team has won the most NBA championships?",
        options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
        correct: 1,
        explanation: "The Boston Celtics have won 17 NBA championships."
      },
      {
        id: 53,
        question: "In golf, what is the term for one stroke under par?",
        options: ["Eagle", "Birdie", "Bogey", "Albatross"],
        correct: 1,
        explanation: "A birdie is one stroke under par in golf."
      },
      {
        id: 54,
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Argentina", "Brazil", "Italy"],
        correct: 2,
        explanation: "Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002)."
      },
      {
        id: 55,
        question: "What is the maximum score possible in ten-pin bowling?",
        options: ["250", "270", "300", "350"],
        correct: 2,
        explanation: "A perfect game in ten-pin bowling scores 300 points."
      }
    ],
    hard: [
      {
        id: 56,
        question: "Who was the first athlete to run a sub-4-minute mile?",
        options: ["Jesse Owens", "Roger Bannister", "Steve Prefontaine", "Sebastian Coe"],
        correct: 1,
        explanation: "Roger Bannister ran the first sub-4-minute mile on May 6, 1954."
      },
      {
        id: 57,
        question: "Which tennis player has won the most Grand Slam singles titles?",
        options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Serena Williams"],
        correct: 2,
        explanation: "Novak Djokovic holds the record with 24 Grand Slam singles titles."
      },
      {
        id: 58,
        question: "In Formula 1, which team has won the most Constructors' Championships?",
        options: ["McLaren", "Ferrari", "Mercedes", "Red Bull"],
        correct: 1,
        explanation: "Ferrari has won the most F1 Constructors' Championships with 16 titles."
      },
      {
        id: 59,
        question: "What is the oldest tennis tournament in the world?",
        options: ["US Open", "French Open", "Wimbledon", "Australian Open"],
        correct: 2,
        explanation: "Wimbledon, first held in 1877, is the oldest tennis tournament in the world."
      },
      {
        id: 60,
        question: "Which boxer was known as 'The Greatest'?",
        options: ["Mike Tyson", "Sugar Ray Leonard", "Muhammad Ali", "Joe Frazier"],
        correct: 2,
        explanation: "Muhammad Ali was known as 'The Greatest' and is considered one of the best boxers of all time."
      }
    ]
  },
  entertainment: {
    easy: [
      {
        id: 61,
        question: "Which movie features the song 'Let It Go'?",
        options: ["Moana", "Frozen", "Tangled", "The Little Mermaid"],
        correct: 1,
        explanation: "'Let It Go' is from Disney's Frozen (2013)."
      },
      {
        id: 62,
        question: "Who directed the movie 'Jaws'?",
        options: ["George Lucas", "Steven Spielberg", "Martin Scorsese", "Francis Ford Coppola"],
        correct: 1,
        explanation: "Steven Spielberg directed Jaws (1975)."
      },
      {
        id: 63,
        question: "Which TV show is set in the fictional town of Hawkins?",
        options: ["The Walking Dead", "Stranger Things", "Twin Peaks", "Riverdale"],
        correct: 1,
        explanation: "Stranger Things is set in the fictional town of Hawkins, Indiana."
      },
      {
        id: 64,
        question: "What is the highest-grossing film of all time?",
        options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
        correct: 1,
        explanation: "Avatar (2009) is the highest-grossing film of all time."
      },
      {
        id: 65,
        question: "Which band released the album 'Abbey Road'?",
        options: ["The Rolling Stones", "Led Zeppelin", "The Beatles", "Queen"],
        correct: 2,
        explanation: "The Beatles released Abbey Road in 1969."
      }
    ],
    medium: [
      {
        id: 66,
        question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        correct: 2,
        explanation: "Robert Downey Jr. played Tony Stark/Iron Man in the MCU."
      },
      {
        id: 67,
        question: "What is the name of the coffee shop in the TV show 'Friends'?",
        options: ["Central Perk", "The Grind", "Java Joe's", "Coffee Bean"],
        correct: 0,
        explanation: "Central Perk is the coffee shop where the Friends characters often meet."
      },
      {
        id: 68,
        question: "Which film won the Academy Award for Best Picture in 2020?",
        options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
        correct: 2,
        explanation: "Parasite won the Academy Award for Best Picture in 2020."
      },
      {
        id: 69,
        question: "Who composed the music for 'The Lion King' (1994)?",
        options: ["Alan Menken", "Hans Zimmer", "John Williams", "Danny Elfman"],
        correct: 1,
        explanation: "Hans Zimmer composed the music for The Lion King (1994)."
      },
      {
        id: 70,
        question: "Which streaming service produced 'The Crown'?",
        options: ["HBO Max", "Netflix", "Amazon Prime", "Hulu"],
        correct: 1,
        explanation: "Netflix produced the historical drama series The Crown."
      }
    ],
    hard: [
      {
        id: 71,
        question: "Which director is known for the films 'Pulp Fiction' and 'Kill Bill'?",
        options: ["Christopher Nolan", "Quentin Tarantino", "David Fincher", "Paul Thomas Anderson"],
        correct: 1,
        explanation: "Quentin Tarantino directed both Pulp Fiction and Kill Bill."
      },
      {
        id: 72,
        question: "What was the first feature-length animated film?",
        options: ["Pinocchio", "Snow White and the Seven Dwarfs", "Bambi", "Fantasia"],
        correct: 1,
        explanation: "Snow White and the Seven Dwarfs (1937) was the first feature-length animated film."
      },
      {
        id: 73,
        question: "Which actor has won the most Academy Awards for acting?",
        options: ["Meryl Streep", "Jack Nicholson", "Daniel Day-Lewis", "Katharine Hepburn"],
        correct: 3,
        explanation: "Katharine Hepburn won 4 Academy Awards for Best Actress."
      },
      {
        id: 74,
        question: "What is the longest-running Broadway musical?",
        options: ["The Lion King", "Chicago", "The Phantom of the Opera", "Cats"],
        correct: 2,
        explanation: "The Phantom of the Opera is the longest-running Broadway musical."
      },
      {
        id: 75,
        question: "Which film won the first Academy Award for Best Picture?",
        options: ["Wings", "Sunrise", "The Jazz Singer", "7th Heaven"],
        correct: 0,
        explanation: "Wings won the first Academy Award for Best Picture in 1929."
      }
    ]
  },
  geography: {
    easy: [
      {
        id: 76,
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2,
        explanation: "Canberra is the capital city of Australia."
      },
      {
        id: 77,
        question: "Which is the largest country in the world by land area?",
        options: ["Canada", "China", "United States", "Russia"],
        correct: 3,
        explanation: "Russia is the largest country in the world by land area."
      },
      {
        id: 78,
        question: "What is the longest river in South America?",
        options: ["Orinoco", "Amazon", "Paraná", "Magdalena"],
        correct: 1,
        explanation: "The Amazon River is the longest river in South America and the world."
      },
      {
        id: 79,
        question: "Which mountain range contains Mount Everest?",
        options: ["Andes", "Rocky Mountains", "Himalayas", "Alps"],
        correct: 2,
        explanation: "Mount Everest is located in the Himalayas on the border between Nepal and Tibet."
      },
      {
        id: 80,
        question: "What is the smallest continent?",
        options: ["Europe", "Antarctica", "Australia", "South America"],
        correct: 2,
        explanation: "Australia is the smallest continent by land area."
      }
    ],
    medium: [
      {
        id: 81,
        question: "Which African country has three capital cities?",
        options: ["Nigeria", "South Africa", "Kenya", "Egypt"],
        correct: 1,
        explanation: "South Africa has three capitals: Cape Town (legislative), Pretoria (executive), and Bloemfontein (judicial)."
      },
      {
        id: 82,
        question: "What is the deepest point on Earth?",
        options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Peru-Chile Trench"],
        correct: 0,
        explanation: "The Mariana Trench in the Pacific Ocean is the deepest point on Earth."
      },
      {
        id: 83,
        question: "Which country has the most natural lakes?",
        options: ["Finland", "Canada", "Russia", "Sweden"],
        correct: 1,
        explanation: "Canada has the most natural lakes of any country in the world."
      },
      {
        id: 84,
        question: "What is the driest desert in the world?",
        options: ["Sahara", "Gobi", "Atacama", "Kalahari"],
        correct: 2,
        explanation: "The Atacama Desert in Chile is the driest non-polar desert in the world."
      },
      {
        id: 85,
        question: "Which strait separates Europe and Africa?",
        options: ["Bering Strait", "Strait of Gibraltar", "Strait of Hormuz", "Bass Strait"],
        correct: 1,
        explanation: "The Strait of Gibraltar separates Europe (Spain) from Africa (Morocco)."
      }
    ],
    hard: [
      {
        id: 86,
        question: "What is the only country that is also a continent?",
        options: ["Greenland", "Madagascar", "Australia", "New Zealand"],
        correct: 2,
        explanation: "Australia is the only country that is also considered a continent."
      },
      {
        id: 87,
        question: "Which country has the most time zones?",
        options: ["Russia", "United States", "China", "France"],
        correct: 3,
        explanation: "France has the most time zones (12) due to its overseas territories."
      },
      {
        id: 88,
        question: "What is the highest waterfall in the world?",
        options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
        correct: 2,
        explanation: "Angel Falls in Venezuela is the highest uninterrupted waterfall in the world."
      },
      {
        id: 89,
        question: "Which country is completely surrounded by South Africa?",
        options: ["Swaziland", "Lesotho", "Botswana", "Namibia"],
        correct: 1,
        explanation: "Lesotho is completely surrounded by South Africa, making it an enclave."
      },
      {
        id: 90,
        question: "What is the most linguistically diverse country in the world?",
        options: ["India", "Indonesia", "Papua New Guinea", "Nigeria"],
        correct: 2,
        explanation: "Papua New Guinea has over 800 languages, making it the most linguistically diverse country."
      }
    ]
  }
};

export const getQuestions = (category, difficulty, count = 5) => {
  const categoryQuestions = questionsData[category];
  if (!categoryQuestions) return [];
  
  const difficultyQuestions = categoryQuestions[difficulty];
  if (!difficultyQuestions) return [];
  
  // Shuffle and return the requested number of questions
  const shuffled = [...difficultyQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};