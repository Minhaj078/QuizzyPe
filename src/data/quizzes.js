// // src/data/quizzes.js

// export const categories = [
//   { id: 'history', name: 'History', description: 'Explore the annals of time, from ancient civilizations to modern conflicts.', imageUrl: '/images/history.png' },
//   { id: 'science', name: 'Science', description: 'Dive into the wonders of science, covering physics, biology, chemistry, and more.', imageUrl: '/images/science.png' },
//   { id: 'programming', name: 'Programming', description: 'Test your coding skills across various languages and paradigms.', imageUrl: '/images/programming.png' },
//   { id: 'technology', name: 'Technology', description: 'Stay updated with the latest in tech innovations and gadgets.', imageUrl: '/images/technology.png' },
//   { id: 'computer-science', name: 'Computer Science', description: 'Understand the fundamental theories and applications of computing.', imageUrl: '/images/computer-science.png' },
//   // Add more categories here as needed
// ];

// export const quizzes = [
//   { id: 'ancient-history', categoryId: 'history', title: 'Ancient History Fundamentals', description: 'Test your knowledge of early civilizations.' },
//   { id: 'world-wars', categoryId: 'history', title: 'World Wars Overview', description: 'Key events and figures from WWI and WWII.' },
//   { id: 'basic-physics', categoryId: 'science', title: 'Basic Physics Concepts', description: 'Fundamental principles of physics.' },
//   { id: 'js-fundamentals', categoryId: 'programming', title: 'JavaScript Fundamentals', description: 'Test your knowledge of core JavaScript concepts.' },
//   { id: 'html-essentials', categoryId: 'programming', title: 'HTML Essentials', description: 'Core HTML tags and structure.' },
//   { id: 'css-styling', categoryId: 'programming', title: 'CSS Styling', description: 'Mastering CSS for web design.' },
//   { id: 'python-basics', categoryId: 'programming', title: 'Python Basics', description: 'Introduction to Python syntax and features.' },
//   { id: 'c-intro', categoryId: 'programming', title: 'C Programming Intro', description: 'Basic C language concepts.' },
//   { id: 'cpp-oop', categoryId: 'programming', title: 'C++ OOP Concepts', description: 'Object-Oriented Programming in C++.' },
//   { id: 'golang-syntax', categoryId: 'programming', title: 'Golang Basic Syntax', description: 'Fundamentals of Go programming language.' },
//   { id: 'sql-queries', categoryId: 'programming', title: 'SQL Basic Queries', description: 'Essential SQL commands for databases.' },
//   // Add sample quizzes for new categories
//   { id: 'ai-basics', categoryId: 'technology', title: 'AI Fundamentals', description: 'Introduction to Artificial Intelligence concepts.' },
//   { id: 'data-structures', categoryId: 'computer-science', title: 'Data Structures 101', description: 'Learn about arrays, linked lists, and trees.' },
// ];

// export const quizDetails = {
//   // ... (your existing quizDetails objects, ensure new quizzes above have corresponding details)
//   'ancient-history': {
//     id: 'ancient-history',
//     title: 'Ancient History Fundamentals',
//     questions: [
//       { id: 'ah1', text: 'Which river was central to ancient Egyptian civilization?', options: ['Tigris', 'Euphrates', 'Nile', 'Yellow'], correctAnswer: 'Nile' },
//       { id: 'ah2', text: 'What was the capital of the Roman Empire?', options: ['Athens', 'Constantinople', 'Rome', 'Alexandria'], correctAnswer: 'Rome' },
//     ],
//     categoryId: 'history',
//   },
//   'js-fundamentals': {
//     id: 'js-fundamentals',
//     title: 'JavaScript Fundamentals',
//     questions: [
//       { id: 'js1', text: 'Which keyword is used to declare a variable whose value can be reassigned?', options: ['const', 'let', 'var', 'def'], correctAnswer: 'let' },
//       { id: 'js2', text: 'What is the correct way to write an array in JavaScript?', options: ['["apple", "banana", "cherry"]', '("apple", "banana", "cherry")', '{apple, banana, cherry}', '<apple, banana, cherry>'], correctAnswer: '["apple", "banana", "cherry"]' },
//       { id: 'js3', text: 'What does "DOM" stand for?', options: ['Data Object Model', 'Document Order Markup', 'Document Object Model', 'Digital Operation Manager'], correctAnswer: 'Document Object Model' },
//     ],
//     categoryId: 'programming',
//   },
//   'html-essentials': {
//     id: 'html-essentials',
//     title: 'HTML Essentials',
//     questions: [
//       { id: 'html1', text: 'Which HTML tag is used to define an internal style sheet?', options: ['<script>', '<css>', '<style>', '<link>'], correctAnswer: '<style>' },
//     ],
//     categoryId: 'programming',
//   },
//   'css-styling': {
//     id: 'css-styling',
//     title: 'CSS Styling',
//     questions: [
//       { id: 'css1', text: 'Which CSS property is used to change the text color of an element?', options: ['text-color', 'font-color', 'color', 'foreground-color'], correctAnswer: 'color' },
//     ],
//     categoryId: 'programming',
//   },
//   'python-basics': {
//     id: 'python-basics',
//     title: 'Python Basics',
//     questions: [
//       { id: 'py1', text: 'Which of the following is used to define a block of code in Python?', options: ['Parentheses', 'Curly braces', 'Indentation', 'Keywords'], correctAnswer: 'Indentation' },
//     ],
//     categoryId: 'programming',
//   },
//   'c-intro': {
//     id: 'c-intro',
//     title: 'C Programming Intro',
//     questions: [
//       { id: 'c1', text: 'What is the correct way to end a statement in C?', options: [':', ';', '.', ','], correctAnswer: ';' },
//     ],
//     categoryId: 'programming',
//   },
//   'cpp-oop': {
//     id: 'cpp-oop',
//     title: 'C++ OOP Concepts',
//     questions: [
//       { id: 'cpp1', text: 'Which concept in OOP allows a class to inherit properties and methods from another class?', options: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Abstraction'], correctAnswer: 'Inheritance' },
//     ],
//     categoryId: 'programming',
//   },
//   'golang-syntax': {
//     id: 'golang-syntax',
//     title: 'Golang Basic Syntax',
//     questions: [
//       { id: 'go1', text: 'What keyword is used to declare a variable in Go?', options: ['var', 'let', 'const', 'new'], correctAnswer: 'var' },
//     ],
//     categoryId: 'programming',
//   },
//   'sql-queries': {
//     id: 'sql-queries',
//     title: 'SQL Basic Queries',
//     questions: [
//       { id: 'sql1', text: 'Which SQL keyword is used to extract data from a database?', options: ['GET', 'OPEN', 'SELECT', 'EXTRACT'], correctAnswer: 'SELECT' },
//     ]
//   },
//   'ai-basics': {
//     id: 'ai-basics',
//     title: 'AI Fundamentals',
//     questions: [
//       { id: 'ai1', text: 'What does AI stand for?', options: ['Artificial Intelligence', 'Automated Information', 'Advanced Interaction', 'Augmented Intelligence'], correctAnswer: 'Artificial Intelligence' },
//     ],
//     categoryId: 'technology',
//   },
//   'data-structures': {
//     id: 'data-structures',
//     title: 'Data Structures 101',
//     questions: [
//       { id: 'ds1', text: 'Which data structure follows the Last-In, First-Out (LIFO) principle?', options: ['Queue', 'Stack', 'Linked List', 'Tree'], correctAnswer: 'Stack' },
//     ],
//     categoryId: 'computer-science',
//   },
// };

export const categories = [
  { id: 'history', name: 'History', description: 'Explore the annals of time, from ancient civilizations to modern conflicts.', imageUrl: '/images/history.png' },
  { id: 'science', name: 'Science', description: 'Dive into the wonders of science, covering physics, biology, chemistry, and more.', imageUrl: '/images/science.png' },
  { id: 'programming', name: 'Programming', description: 'Test your coding skills across various languages and paradigms.', imageUrl: '/images/programming.png' },
  { id: 'technology', name: 'Technology', description: 'Stay updated with the latest in tech innovations and gadgets.', imageUrl: '/images/technology.png' },
  { id: 'computer-science', name: 'Computer Science', description: 'Understand the fundamental theories and applications of computing.', imageUrl: '/images/computer-science.png' },
  // No new categories added as per your request
];

export const quizzes = [
  { id: 'ancient-history', categoryId: 'history', title: 'Ancient History Fundamentals', description: 'Test your knowledge of early civilizations.' },
  { id: 'world-wars', categoryId: 'history', title: 'World Wars Overview', description: 'Key events and figures from WWI and WWII.' },
  { id: 'basic-physics', categoryId: 'science', title: 'Basic Physics Concepts', description: 'Fundamental principles of physics.' },
  { id: 'js-fundamentals', categoryId: 'programming', title: 'JavaScript Fundamentals', description: 'Test your knowledge of core JavaScript concepts.' },
  { id: 'html-essentials', categoryId: 'programming', title: 'HTML Essentials', description: 'Core HTML tags and structure.' },
  { id: 'css-styling', categoryId: 'programming', title: 'CSS Styling', description: 'Mastering CSS for web design.' },
  { id: 'python-basics', categoryId: 'programming', title: 'Python Basics', description: 'Introduction to Python syntax and features.' },
  { id: 'c-intro', categoryId: 'programming', title: 'C Programming Intro', description: 'Basic C language concepts.' },
  { id: 'cpp-oop', categoryId: 'programming', title: 'C++ OOP Concepts', description: 'Object-Oriented Programming in C++.' },
  { id: 'golang-syntax', categoryId: 'programming', title: 'Golang Basic Syntax', description: 'Fundamentals of Go programming language.' },
  { id: 'sql-queries', categoryId: 'programming', title: 'SQL Basic Queries', description: 'Essential SQL commands for databases.' },
  { id: 'ai-basics', categoryId: 'technology', title: 'AI Fundamentals', description: 'Introduction to Artificial Intelligence concepts.' },
  { id: 'data-structures', categoryId: 'computer-science', title: 'Data Structures 101', description: 'Learn about arrays, linked lists, and trees.' },
];

export const quizDetails = {
  'ancient-history': {
    id: 'ancient-history',
    title: 'Ancient History Fundamentals',
    questions: [
      { id: 'ah1', text: 'Which river was central to ancient Egyptian civilization?', options: ['Tigris', 'Euphrates', 'Nile', 'Yellow'], correctAnswer: 'Nile', explanation: 'The Nile River provided fertile land and transportation, crucial for ancient Egypt.' },
      { id: 'ah2', text: 'What was the capital of the Roman Empire?', options: ['Athens', 'Constantinople', 'Rome', 'Alexandria'], correctAnswer: 'Rome', explanation: 'Rome served as the political and cultural center of the vast Roman Empire.' },
      { id: 'ah3', text: 'The Great Wall of China was primarily built to protect against which invaders?', options: ['Mongols', 'Huns', 'Japanese', 'Koreans'], correctAnswer: 'Mongols', explanation: 'The Great Wall was constructed over centuries to defend China from nomadic groups like the Mongols.' },
      { id: 'ah4', text: 'Which ancient civilization developed the concept of democracy?', options: ['Roman', 'Egyptian', 'Greek', 'Persian'], correctAnswer: 'Greek', explanation: 'Ancient Athens is considered the birthplace of democracy.' },
      { id: 'ah5', text: 'Who was the founder of the Achaemenid Empire (First Persian Empire)?', options: ['Darius I', 'Xerxes I', 'Cyrus the Great', 'Alexander the Great'], correctAnswer: 'Cyrus the Great', explanation: 'Cyrus the Great established the vast Achaemenid Empire in the 6th century BCE.' },
      { id: 'ah6', text: 'The Code of Hammurabi originated from which ancient civilization?', options: ['Egyptian', 'Mesopotamian', 'Indus Valley', 'Chinese'], correctAnswer: 'Mesopotamian', explanation: 'The Code of Hammurabi is one of the oldest deciphered writings of significant length, from ancient Babylon.' },
      { id: 'ah7', text: 'What was the primary purpose of the ancient Roman Colosseum?', options: ['Government meetings', 'Gladiatorial contests', 'Religious ceremonies', 'Public baths'], correctAnswer: 'Gladiatorial contests', explanation: 'The Colosseum was an amphitheater used for gladiatorial shows and public spectacles.' },
      { id: 'ah8', text: 'Which city was famously destroyed by the eruption of Mount Vesuvius in 79 AD?', options: ['Athens', 'Pompeii', 'Rome', 'Sparta'], correctAnswer: 'Pompeii', explanation: 'Pompeii and Herculaneum were buried under ash and pumice from Vesuvius.' },
      { id: 'ah9', text: 'The \'Silk Road\' was an ancient network of trade routes connecting which two major regions?', options: ['Europe and Africa', 'Americas and Europe', 'East Asia and the West', 'Australia and Asia'], correctAnswer: 'East Asia and the West', explanation: 'The Silk Road facilitated trade and cultural exchange between East Asia, the Middle East, and Europe.' },
      { id: 'ah10', text: 'Who was the first emperor of Rome?', options: ['Julius Caesar', 'Augustus', 'Nero', 'Tiberius'], correctAnswer: 'Augustus', explanation: 'Augustus, born Octavian, was the founder of the Roman Principate and considered the first Roman Emperor.' },
    ],
    categoryId: 'history',
  },
  'world-wars': {
    id: 'world-wars',
    title: 'World Wars Overview',
    questions: [
      { id: 'ww1', text: 'When did World War I begin?', options: ['1910', '1914', '1918', '1920'], correctAnswer: '1914', explanation: 'World War I began on July 28, 1914, following the assassination of Archduke Franz Ferdinand.' },
      { id: 'ww2', text: 'Which event is considered the start of World War II in Europe?', options: ['Attack on Pearl Harbor', 'Invasion of Poland', 'Battle of Stalingrad', 'Fall of France'], correctAnswer: 'Invasion of Poland', explanation: 'Germany\'s invasion of Poland on September 1, 1939, officially marked the beginning of WWII in Europe.' },
      { id: 'ww3', text: 'Who was the Prime Minister of the United Kingdom during most of WWII?', options: ['Neville Chamberlain', 'Winston Churchill', 'Clement Attlee', 'Harold Macmillan'], correctAnswer: 'Winston Churchill', explanation: 'Winston Churchill led Britain through its darkest hours during World War II.' },
      { id: 'ww4', text: 'What was the code name for the Allied invasion of Normandy on June 6, 1944?', options: ['Operation Barbarossa', 'Operation Market Garden', 'Operation Overlord', 'Operation Torch'], correctAnswer: 'Operation Overlord', explanation: 'Operation Overlord was the codename for the Battle of Normandy, which launched the invasion of German-occupied Western Europe.' },
      { id: 'ww5', text: 'Which country was responsible for the attack on Pearl Harbor?', options: ['Germany', 'Italy', 'Japan', 'Soviet Union'], correctAnswer: 'Japan', explanation: 'Imperial Japan launched a surprise attack on the US naval base at Pearl Harbor on December 7, 1941.' },
      { id: 'ww6', text: 'The League of Nations was replaced by what international organization after WWII?', options: ['United Nations', 'NATO', 'Warsaw Pact', 'G7'], correctAnswer: 'United Nations', explanation: 'The United Nations was established in 1945 to promote international cooperation and prevent future conflicts.' },
      { id: 'ww7', text: 'What was the purpose of the Manhattan Project?', options: ['To develop radar technology', 'To build the atomic bomb', 'To create jet engines', 'To break enemy codes'], correctAnswer: 'To build the atomic bomb', explanation: 'The Manhattan Project was a top-secret research and development undertaking during WWII that produced the first nuclear weapons.' },
      { id: 'ww8', text: 'Which battle was a turning point on the Eastern Front in WWII?', options: ['Battle of Britain', 'Battle of the Bulge', 'Battle of Stalingrad', 'Battle of Midway'], correctAnswer: 'Battle of Stalingrad', explanation: 'The Battle of Stalingrad was one of the largest and bloodiest battles in history and a decisive Soviet victory.' },
      { id: 'ww9', text: 'What new weapon was first used in warfare during WWI?', options: ['Atomic bomb', 'Machine gun', 'Tanks', 'Submarines'], correctAnswer: 'Tanks', explanation: 'Tanks were first introduced by the British in 1916 during World War I.' },
      { id: 'ww10', text: 'Who was the leader of Nazi Germany during World War II?', options: ['Benito Mussolini', 'Joseph Stalin', 'Adolf Hitler', 'Hideki Tojo'], correctAnswer: 'Adolf Hitler', explanation: 'Adolf Hitler was the dictator of Nazi Germany and a central figure in World War II and the Holocaust.' },
    ],
    categoryId: 'history',
  },
  'basic-physics': {
    id: 'basic-physics',
    title: 'Basic Physics Concepts',
    questions: [
      { id: 'bp1', text: 'What is the SI unit of force?', options: ['Joule', 'Watt', 'Newton', 'Pascal'], correctAnswer: 'Newton', explanation: 'The Newton (N) is the SI unit of force, named after Sir Isaac Newton.' },
      { id: 'bp2', text: 'Which law states that "for every action, there is an equal and opposite reaction"?', options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Law of Conservation of Energy'], correctAnswer: 'Newton\'s Third Law', explanation: 'Newton\'s Third Law of Motion describes action-reaction pairs.' },
      { id: 'bp3', text: 'What is the speed of light in a vacuum (approximately)?', options: ['300,000 km/s', '150,000 km/s', '30,000 km/s', '3,000 km/s'], correctAnswer: '300,000 km/s', explanation: 'The speed of light, c, is approximately 299,792,458 meters per second in a vacuum.' },
      { id: 'bp4', text: 'What is potential energy?', options: ['Energy of motion', 'Stored energy due to position or state', 'Energy released during a reaction', 'Heat energy'], correctAnswer: 'Stored energy due to position or state', explanation: 'Potential energy is energy stored in an object due to its position or configuration.' },
      { id: 'bp5', text: 'Which of the following is a scalar quantity?', options: ['Velocity', 'Force', 'Acceleration', 'Mass'], correctAnswer: 'Mass', explanation: 'Scalar quantities (like mass) only have magnitude, while vector quantities (like velocity, force, acceleration) have both magnitude and direction.' },
      { id: 'bp6', text: 'What instrument is used to measure electric current?', options: ['Voltmeter', 'Ohmmeter', 'Ammeter', 'Wattmeter'], correctAnswer: 'Ammeter', explanation: 'An ammeter is specifically designed to measure electric current in amperes.' },
      { id: 'bp7', text: 'What is the process by which a liquid turns into a gas?', options: ['Melting', 'Condensation', 'Freezing', 'Evaporation'], correctAnswer: 'Evaporation', explanation: 'Evaporation is the process of a substance in a liquid state changing to a gaseous state due to an increase in temperature and/or pressure.' },
      { id: 'bp8', text: 'Sound travels fastest through which medium?', options: ['Air', 'Water', 'Vacuum', 'Solid'], correctAnswer: 'Solid', explanation: 'Sound waves travel faster through denser mediums like solids because the particles are closer together.' },
      { id: 'bp9', text: 'What is the unit of electric resistance?', options: ['Volt', 'Ampere', 'Ohm', 'Farad'], correctAnswer: 'Ohm', explanation: 'The Ohm (Ω) is the SI derived unit of electrical resistance.' },
      { id: 'bp10', text: 'Which principle explains why an object floats or sinks in a fluid?', options: ['Pascal\'s Principle', 'Archimedes\' Principle', 'Bernoulli\'s Principle', 'Newton\'s Law of Universal Gravitation'], correctAnswer: 'Archimedes\' Principle', explanation: 'Archimedes\' Principle states that the buoyant force on a submerged object is equal to the weight of the fluid displaced by the object.' },
    ],
    categoryId: 'science',
  },
  'js-fundamentals': {
    id: 'js-fundamentals',
    title: 'JavaScript Fundamentals',
    questions: [
      { id: 'js1', text: 'Which keyword is used to declare a variable whose value can be reassigned?', options: ['const', 'let', 'var', 'def'], correctAnswer: 'let', explanation: '`let` allows you to declare block-scoped local variables, optionally initializing each to a value. It can be reassigned.' },
      { id: 'js2', text: 'What is the correct way to write an array in JavaScript?', options: ['["apple", "banana", "cherry"]', '("apple", "banana", "cherry")', '{apple, banana, cherry}', '<apple, banana, cherry>'], correctAnswer: '["apple", "banana", "cherry"]', explanation: 'Arrays in JavaScript are declared using square brackets `[]`.' },
      { id: 'js3', text: 'What does "DOM" stand for?', options: ['Data Object Model', 'Document Order Markup', 'Document Object Model', 'Digital Operation Manager'], correctAnswer: 'Document Object Model', explanation: 'The DOM represents the page structure and allows JavaScript to manipulate the content.' },
      { id: 'js4', text: 'How do you write "Hello World" in an alert box?', options: ['msg("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");', 'prompt("Hello World");'], correctAnswer: 'alert("Hello World");', explanation: 'The `alert()` function is used to display an alert box with a message.' },
      { id: 'js5', text: 'Which operator is used for strict equality (checks both value and type)?', options: ['==', '!=', '===', '='], correctAnswer: '===', explanation: '`===` checks if two values are equal in value AND type, without type coercion.' },
      { id: 'js6', text: 'What is the output of `typeof null` in JavaScript?', options: ['"null"', '"object"', '"undefined"', '"number"'], correctAnswer: '"object"', explanation: 'This is a long-standing historical bug in JavaScript; `typeof null` returns "object", not "null".' },
      { id: 'js7', text: 'Which method is used to add an element to the end of an array?', options: ['push()', 'pop()', 'shift()', 'unshift()'], correctAnswer: 'push()', explanation: 'The `push()` method adds one or more elements to the end of an array and returns the new length of the array.' },
      { id: 'js8', text: 'What is an event listener in JavaScript?', options: ['A function that listens to music', 'A function that executes when an event occurs', 'A method to stop code execution', 'A variable that stores event data'], correctAnswer: 'A function that executes when an event occurs', explanation: 'Event listeners (like `addEventListener`) wait for an event (e.g., click, keypress) to happen and then run a specified function.' },
      { id: 'js9', text: 'How do you comment a single line in JavaScript?', options: ['', '// Comment', '/* Comment */', '# Comment'], correctAnswer: '// Comment', explanation: 'Single-line comments in JavaScript start with `//`.' },
      { id: 'js10', text: 'Which of the following is NOT a JavaScript data type?', options: ['String', 'Boolean', 'Float', 'Symbol'], correctAnswer: 'Float', explanation: 'JavaScript does not have a separate "Float" type; numbers are typically represented as floating-point numbers.' },
    ],
    categoryId: 'programming',
  },
  'html-essentials': {
    id: 'html-essentials',
    title: 'HTML Essentials',
    questions: [
      { id: 'html1', text: 'Which HTML tag is used to define an internal style sheet?', options: ['<script>', '<css>', '<style>', '<link>'], correctAnswer: '<style>', explanation: 'The `<style>` tag is used to define style information (CSS) for a document.' },
      { id: 'html2', text: 'What does HTML stand for?', options: ['HyperText Markup Language', 'High-level Text Management Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'], correctAnswer: 'HyperText Markup Language', explanation: 'HTML is the standard markup language for creating web pages.' },
      { id: 'html3', text: 'Which HTML element is used for the largest heading?', options: ['<h1>', '<h6>', '<head>', '<heading>'], correctAnswer: '<h1>', explanation: 'The `<h1>` tag defines the most important heading, with `<h6>` being the least important.' },
      { id: 'html4', text: 'Which HTML tag is used to create an unordered list?', options: ['<ol>', '<li>', '<list>', '<ul>'], correctAnswer: '<ul>', explanation: 'The `<ul>` tag defines an unordered (bulleted) list.' },
      { id: 'html5', text: 'Which attribute is used to provide an alternative text for an image if it cannot be displayed?', options: ['title', 'src', 'alt', 'href'], correctAnswer: 'alt', explanation: 'The `alt` attribute specifies an alternate text for an image, for accessibility and when the image cannot be displayed.' },
      { id: 'html6', text: 'What is the correct HTML element for inserting a line break?', options: ['<lb>', '<break>', '<br>', '<newline>'], correctAnswer: '<br>', explanation: 'The `<br>` tag inserts a single line break.' },
      { id: 'html7', text: 'Which element is used to link a JavaScript file?', options: ['<script>', '<js>', '<link>', '<javascript>'], correctAnswer: '<script>', explanation: 'The `<script>` tag is used to embed or reference executable code, often JavaScript.' },
      { id: 'html8', text: 'What is the purpose of the `<head>` element in HTML?', options: ['To contain the main content of the document', 'To define metadata about the document', 'To display header text on the page', 'To link external stylesheets'], correctAnswer: 'To define metadata about the document', explanation: 'The `<head>` element contains meta-information about the HTML document, such as its title, links to stylesheets, and scripts.' },
      { id: 'html9', text: 'Which input type defines a slider control?', options: ['number', 'range', 'slider', 'level'], correctAnswer: 'range', explanation: 'The `<input type="range">` defines a control for entering a number whose exact value is not important (e.g., a slider).' },
      { id: 'html10', text: 'To add a background color in HTML, which attribute would you use?', options: ['color', 'bgcolor', 'background', 'style'], correctAnswer: 'style', explanation: 'While `bgcolor` was used in older HTML, the modern and recommended way is to use CSS via the `style` attribute or an external stylesheet.' },
    ],
    categoryId: 'programming',
  },
  'css-styling': {
    id: 'css-styling',
    title: 'CSS Styling',
    questions: [
      { id: 'css1', text: 'Which CSS property is used to change the text color of an element?', options: ['text-color', 'font-color', 'color', 'foreground-color'], correctAnswer: 'color', explanation: 'The `color` property sets the foreground color of an element\'s text content.' },
      { id: 'css2', text: 'Which CSS property controls the text size?', options: ['text-style', 'font-size', 'text-height', 'font-style'], correctAnswer: 'font-size', explanation: 'The `font-size` property sets the size of the font.' },
      { id: 'css3', text: 'How do you select an element with id "demo" in CSS?', options: ['.demo', '#demo', 'element.demo', '*demo'], correctAnswer: '#demo', explanation: 'The `#` symbol is used to select elements by their ID.' },
      { id: 'css4', text: 'Which property is used to change the background color?', options: ['bgcolor', 'background-color', 'color-background', 'bg-color'], correctAnswer: 'background-color', explanation: 'The `background-color` property sets the background color of an element.' },
      { id: 'css5', text: 'Which CSS property is used to make text bold?', options: ['text-bold', 'font-weight', 'bold-text', 'font-style'], correctAnswer: 'font-weight', explanation: 'The `font-weight` property sets how thick or thin characters in text should be displayed.' },
      { id: 'css6', text: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'], correctAnswer: 'Cascading Style Sheets', explanation: 'CSS is a style sheet language used for describing the presentation of a document written in HTML.' },
      { id: 'css7', text: 'How do you include an external stylesheet in an HTML document?', options: ['<style src="mystyle.css">', '<link rel="stylesheet" type="text/css" href="mystyle.css">', '<stylesheet>mystyle.css</stylesheet>', '<css>mystyle.css</css>'], correctAnswer: '<link rel="stylesheet" type="text/css" href="mystyle.css">', explanation: 'The `<link>` tag is used to link external resources, and `rel="stylesheet"` specifies it as a stylesheet.' },
      { id: 'css8', text: 'Which property is used for controlling the space between the content and the border of an element?', options: ['margin', 'spacing', 'padding', 'border-spacing'], correctAnswer: 'padding', explanation: 'Padding is the space between the element\'s content and its border.' },
      { id: 'css9', text: 'What is the default value of the `position` property?', options: ['relative', 'absolute', 'fixed', 'static'], correctAnswer: 'static', explanation: 'Elements are positioned `static` by default, meaning they are not specially positioned.' },
      { id: 'css10', text: 'Which pseudo-class is used to select an element that is being hovered over by the mouse?', options: [':active', ':focus', ':hover', ':visited'], correctAnswer: ':hover', explanation: 'The `:hover` pseudo-class applies a style when a user mouses over an element.' },
    ],
    categoryId: 'programming',
  },
  'python-basics': {
    id: 'python-basics',
    title: 'Python Basics',
    questions: [
      { id: 'py1', text: 'Which of the following is used to define a block of code in Python?', options: ['Parentheses', 'Curly braces', 'Indentation', 'Keywords'], correctAnswer: 'Indentation', explanation: 'Python uses indentation (whitespace) to define code blocks, unlike many other languages that use curly braces.' },
      { id: 'py2', text: 'What is the correct way to comment out a single line in Python?', options: ['// This is a comment', '/* This is a comment */', '# This is a comment', '-- This is a comment'], correctAnswer: '# This is a comment', explanation: 'Single-line comments in Python start with a hash symbol (#).' },
      { id: 'py3', text: 'Which function is used to get input from the user in Python?', options: ['getInput()', 'read()', 'input()', 'get_text()'], correctAnswer: 'input()', explanation: 'The `input()` function prompts the user for input and returns it as a string.' },
      { id: 'py4', text: 'Which data type is used to store a sequence of characters in Python?', options: ['char', 'text', 'string', 'str'], correctAnswer: 'str', explanation: 'The `str` (string) type is used to represent sequences of Unicode characters.' },
      { id: 'py5', text: 'What is the output of `print(10 // 3)`?', options: ['3.33', '3', '4', '1'], correctAnswer: '3', explanation: '`//` is the floor division operator, which returns the integer part of the division result.' },
      { id: 'py6', text: 'How do you create a function in Python?', options: ['function myFunc():', 'def myFunc():', 'create function myFunc():', 'func myFunc():'], correctAnswer: 'def myFunc():', explanation: 'Functions in Python are defined using the `def` keyword.' },
      { id: 'py7', text: 'Which operator is used for exponentiation?', options: ['^', '**', '*', 'exp'], correctAnswer: '**', explanation: 'The `**` operator is used to perform exponentiation (e.g., `2**3` is 2 to the power of 3, which is 8).' },
      { id: 'py8', text: 'What is a "list" in Python?', options: ['An unordered collection of unique items', 'An ordered, mutable collection of items', 'An immutable sequence of characters', 'A collection of key-value pairs'], correctAnswer: 'An ordered, mutable collection of items', explanation: 'Lists are ordered, changeable collections that allow duplicate members.' },
      { id: 'py9', text: 'Which of these is NOT a valid variable name in Python?', options: ['my_variable', 'myVariable', '1st_variable', 'variable1'], correctAnswer: '1st_variable', explanation: 'Variable names in Python cannot start with a number.' },
      { id: 'py10', text: 'What is the output of `len("Python")`?', options: ['6', '5', '7', 'Error'], correctAnswer: '6', explanation: 'The `len()` function returns the number of items (length) of an object, in this case, the number of characters in the string.' },
    ],
    categoryId: 'programming',
  },
  'c-intro': {
    id: 'c-intro',
    title: 'C Programming Intro',
    questions: [
      { id: 'c1', text: 'What is the correct way to end a statement in C?', options: [':', ';', '.', ','], correctAnswer: ';', explanation: 'In C, statements are terminated by a semicolon (;).' },
      { id: 'c2', text: 'Which function is used to print output to the console in C?', options: ['display()', 'output()', 'printf()', 'write()'], correctAnswer: 'printf()', explanation: '`printf()` is the standard library function for formatted output in C.' },
      { id: 'c3', text: 'What data type is used to store whole numbers in C?', options: ['float', 'char', 'double', 'int'], correctAnswer: 'int', explanation: 'The `int` keyword is used to declare integer variables in C.' },
      { id: 'c4', text: 'Which header file must be included to use `printf()` and `scanf()`?', options: ['<stdlib.h>', '<math.h>', '<stdio.h>', '<string.h>'], correctAnswer: '<stdio.h>', explanation: '`stdio.h` (Standard Input/Output Header) contains declarations for input/output functions.' },
      { id: 'c5', text: 'What is the purpose of the `main` function in a C program?', options: ['It defines global variables', 'It is the starting point of program execution', 'It handles all input operations', 'It allocates memory'], correctAnswer: 'It is the starting point of program execution', explanation: 'Every C program must have a `main` function, which is where the program execution begins.' },
      { id: 'c6', text: 'Which operator is used for logical AND in C?', options: ['|', '&&', '||', '!'], correctAnswer: '&&', explanation: '`&&` is the logical AND operator; it returns true if both operands are true.' },
      { id: 'c7', text: 'What does `sizeof()` operator return?', options: ['The value of a variable', 'The memory address of a variable', 'The size of a variable or type in bytes', 'The type of a variable'], correctAnswer: 'The size of a variable or type in bytes', explanation: 'The `sizeof` operator returns the size, in bytes, of the operand.' },
      { id: 'c8', text: 'Which loop is guaranteed to execute at least once?', options: ['for loop', 'while loop', 'do-while loop', 'if statement'], correctAnswer: 'do-while loop', explanation: 'A `do-while` loop executes its body at least once before checking the condition.' },
      { id: 'c9', text: 'How do you declare a constant in C?', options: ['const int PI = 3.14;', '#define PI 3.14', 'Both A and B', 'neither A nor B'], correctAnswer: 'Both A and B', explanation: 'Both `const` keyword and `#define` preprocessor directive can be used to define constants in C.' },
      { id: 'c10', text: 'What is a pointer in C?', options: ['A variable that stores a character', 'A variable that stores a memory address', 'A variable that stores a boolean value', 'A function that points to another function'], correctAnswer: 'A variable that stores a memory address', explanation: 'A pointer is a variable that stores the memory address of another variable.' },
    ],
    categoryId: 'programming',
  },
  'cpp-oop': {
    id: 'cpp-oop',
    title: 'C++ OOP Concepts',
    questions: [
      { id: 'cpp1', text: 'Which concept in OOP allows a class to inherit properties and methods from another class?', options: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Abstraction'], correctAnswer: 'Inheritance', explanation: 'Inheritance allows a new class (derived class) to inherit members from an existing class (base class).' },
      { id: 'cpp2', text: 'What does "Encapsulation" refer to in C++ OOP?', options: ['Hiding data and methods within a class', 'Creating multiple objects from a single class', 'Allowing a class to have many forms', 'Building complex systems from simpler components'], correctAnswer: 'Hiding data and methods within a class', explanation: 'Encapsulation bundles the data (attributes) and methods that operate on the data into a single unit (class) and restricts direct access to some of the object\'s components.' },
      { id: 'cpp3', text: 'Which keyword is used to define a class in C++?', options: ['object', 'struct', 'class', 'type'], correctAnswer: 'class', explanation: 'The `class` keyword is used to declare a class in C++.' },
      { id: 'cpp4', text: 'What is a constructor in C++?', options: ['A function that destroys objects', 'A special method called automatically when an object is created', 'A method that returns a value', 'A static method of a class'], correctAnswer: 'A special method called automatically when an object is created', explanation: 'A constructor is a special member function that is automatically invoked when an object of the class is created.' },
      { id: 'cpp5', text: 'What is "Polymorphism" in OOP?', options: ['The ability of an object to take on many forms', 'The ability to hide implementation details', 'The ability to reuse code', 'The ability to create multiple instances of a class'], correctAnswer: 'The ability of an object to take on many forms', explanation: 'Polymorphism allows objects of different classes to be treated as objects of a common base class. The most common use is method overriding.' },
      { id: 'cpp6', text: 'Which access specifier means members are accessible only within the class itself?', options: ['public', 'protected', 'private', 'default'], correctAnswer: 'private', explanation: '`private` members are only accessible from within the same class. They are not accessible from outside the class or from derived classes.' },
      { id: 'cpp7', text: 'What is a destructor in C++?', options: ['A function that creates objects', 'A special method called automatically when an object is destroyed', 'A method for memory allocation', 'A method for copying objects'], correctAnswer: 'A special method called automatically when an object is destroyed', explanation: 'A destructor is a special member function that is automatically invoked when an object is destroyed (e.g., goes out of scope or is deleted).' },
      { id: 'cpp8', text: 'The `virtual` keyword is primarily used to achieve what in C++?', options: ['Encapsulation', 'Abstraction', 'Compile-time polymorphism', 'Runtime polymorphism'], correctAnswer: 'Runtime polymorphism', explanation: 'The `virtual` keyword is used for functions to enable runtime polymorphism through dynamic dispatch (late binding).' },
      { id: 'cpp9', text: 'What is the "this" pointer in C++?', options: ['A pointer to the base class', 'A pointer to the derived class', 'A pointer to the current object', 'A pointer to a static member'], correctAnswer: 'A pointer to the current object', explanation: 'The `this` pointer points to the object for which the member function is called.' },
      { id: 'cpp10', text: 'Which of the following is an example of compile-time polymorphism?', options: ['Virtual functions', 'Function overloading', 'Method overriding', 'Abstract classes'], correctAnswer: 'Function overloading', explanation: 'Function overloading is a form of compile-time (static) polymorphism, where multiple functions have the same name but different parameters.' },
    ],
    categoryId: 'programming',
  },
  'golang-syntax': {
    id: 'golang-syntax',
    title: 'Golang Basic Syntax',
    questions: [
      { id: 'go1', text: 'What is the keyword to declare a variable in Go?', options: ['var', 'let', 'const', 'def'], correctAnswer: 'var', explanation: 'In Go, variables are declared using the `var` keyword.' },
      { id: 'go2', text: 'Which function is used to print output to the console in Go?', options: ['print()', 'log()', 'fmt.Print()', 'fmt.Println()'], correctAnswer: 'fmt.Println()', explanation: '`fmt.Println()` is commonly used for printing output to the console, followed by a newline.' },
      { id: 'go3', text: 'How do you start a single-line comment in Go?', options: ['//', '#', '/*', '--'], correctAnswer: '//', explanation: 'Single-line comments in Go start with `//`.' },
      { id: 'go4', text: 'What is the zero value for an integer in Go?', options: ['1', 'null', '0', 'undefined'], correctAnswer: '0', explanation: 'In Go, uninitialized integer variables automatically get a zero value of 0.' },
      { id: 'go5', text: 'Which keyword is used to declare a constant in Go?', options: ['let', 'var', 'const', 'final'], correctAnswer: 'const', explanation: 'Constants in Go are declared using the `const` keyword.' },
      { id: 'go6', text: 'What does `make()` function do in Go?', options: ['Creates a new function', 'Allocates and initializes slices, maps, and channels', 'Performs mathematical operations', 'Deletes variables'], correctAnswer: 'Allocates and initializes slices, maps, and channels', explanation: 'The `make()` built-in function allocates and initializes an object of type slice, map, or chan (channel).' },
      { id: 'go7', text: 'How do you declare a slice in Go?', options: ['[]int', 'int[]', 'slice int', 'list int'], correctAnswer: '[]int', explanation: 'A slice is declared by specifying the element type, preceded by `[]`.' },
      { id: 'go8', text: 'Which loop structure is available in Go?', options: ['for', 'while', 'do-while', 'foreach'], correctAnswer: 'for', explanation: 'Go only has one looping construct, the `for` loop, which can be used in various forms (like while or infinite loops).' },
      { id: 'go9', text: 'What is a "goroutine" in Go?', options: ['A small Gopher mascot', 'A lightweight thread managed by the Go runtime', 'A special type of function', 'A Go package manager'], correctAnswer: 'A lightweight thread managed by the Go runtime', explanation: 'Goroutines are functions or methods that run concurrently with other functions or methods.' },
      { id: 'go10', text: 'Which package is essential for basic I/O operations in Go?', options: ['net', 'io', 'fmt', 'strings'], correctAnswer: 'fmt', explanation: 'The `fmt` package implements formatted I/O with functions analogous to C\'s `printf` and `scanf`.' },
    ],
    categoryId: 'programming',
  },
  'sql-queries': {
    id: 'sql-queries',
    title: 'SQL Basic Queries',
    questions: [
      { id: 'sql1', text: 'Which SQL keyword is used to extract data from a database?', options: ['GET', 'OPEN', 'SELECT', 'EXTRACT'], correctAnswer: 'SELECT', explanation: 'The `SELECT` statement is used to fetch data from a database table.' },
      { id: 'sql2', text: 'Which SQL statement is used to update data in a database?', options: ['MODIFY', 'SAVE', 'UPDATE', 'CHANGE'], correctAnswer: 'UPDATE', explanation: 'The `UPDATE` statement is used to modify existing records in a table.' },
      { id: 'sql3', text: 'Which SQL statement is used to delete data from a database?', options: ['REMOVE', 'CLEAR', 'ERASE', 'DELETE'], correctAnswer: 'DELETE', explanation: 'The `DELETE` statement is used to delete existing records in a table.' },
      { id: 'sql4', text: 'Which SQL keyword is used to sort the result-set?', options: ['SORT BY', 'ORDER BY', 'ARRANGE BY', 'GROUP BY'], correctAnswer: 'ORDER BY', explanation: 'The `ORDER BY` keyword is used to sort the result-set in ascending or descending order.' },
      { id: 'sql5', text: 'Which SQL keyword is used to select only unique values?', options: ['UNIQUE', 'DISTINCT', 'DIFFERENT', 'SINGLE'], correctAnswer: 'DISTINCT', explanation: 'The `DISTINCT` keyword is used to return only different values.' },
      { id: 'sql6', text: 'What does SQL stand for?', options: ['Structured Question Language', 'Standard Query Language', 'Sequential Query Logic', 'Structured Query Language'], correctAnswer: 'Structured Query Language', explanation: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.' },
      { id: 'sql7', text: 'Which clause is used to filter records that fulfill a specified condition?', options: ['FILTER', 'SEARCH', 'WHERE', 'CONDITION'], correctAnswer: 'WHERE', explanation: 'The `WHERE` clause is used to extract only those records that fulfill a specified condition.' },
      { id: 'sql8', text: 'Which aggregate function returns the total number of rows?', options: ['SUM()', 'AVG()', 'COUNT()', 'TOTAL()'], correctAnswer: 'COUNT()', explanation: 'The `COUNT()` function returns the number of rows that matches a specified criterion.' },
      { id: 'sql9', text: 'Which operator is used to search for a specified pattern in a column?', options: ['MATCH', 'FIND', 'LIKE', 'SEARCH'], correctAnswer: 'LIKE', explanation: 'The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column.' },
      { id: 'sql10', text: 'What is the command to add a new column to an existing table?', options: ['ADD COLUMN', 'INSERT COLUMN', 'ALTER TABLE ADD COLUMN', 'MODIFY COLUMN'], correctAnswer: 'ALTER TABLE ADD COLUMN', explanation: 'The `ALTER TABLE ADD COLUMN` statement is used to add a new column to an existing table in a database.' },
    ],
    categoryId: 'programming',
  },
  'ai-basics': {
    id: 'ai-basics',
    title: 'AI Fundamentals',
    questions: [
      { id: 'ai1', text: 'What does AI stand for?', options: ['Automated Intelligence', 'Artificial Information', 'Advanced Interaction', 'Artificial Intelligence'], correctAnswer: 'Artificial Intelligence', explanation: 'AI refers to the simulation of human intelligence in machines.' },
      { id: 'ai2', text: 'Which of these is a subset of AI that enables systems to learn from data without explicit programming?', options: ['Robotics', 'Machine Learning', 'Natural Language Processing', 'Expert Systems'], correctAnswer: 'Machine Learning', explanation: 'Machine Learning focuses on developing algorithms that allow computers to learn from data.' },
      { id: 'ai3', text: 'What is NLP primarily concerned with?', options: ['Creating robotic systems', 'Enabling computers to understand and process human language', 'Developing self-driving cars', 'Analyzing financial data'], correctAnswer: 'Enabling computers to understand and process human language', explanation: 'Natural Language Processing (NLP) deals with the interaction between computers and human (natural) languages.' },
      { id: 'ai4', text: 'Which type of AI aims to mimic human cognitive abilities to solve problems and make decisions?', options: ['Weak AI', 'Strong AI', 'Narrow AI', 'General AI'], correctAnswer: 'General AI', explanation: 'General AI (AGI) refers to AI that can understand, learn, and apply intelligence to any intellectual task that a human being can.' },
      { id: 'ai5', text: 'What is a "neural network" inspired by?', options: ['Computer circuits', 'The human brain', 'Social networks', 'Biological cells'], correctAnswer: 'The human brain', explanation: 'Neural networks are computing systems inspired by the structure and function of biological neural networks in the human brain.' },
      { id: 'ai6', text: 'Which algorithm is commonly used for classification and regression tasks in Machine Learning?', options: ['Breadth-First Search', 'Quick Sort', 'Decision Tree', 'Dijkstra\'s Algorithm'], correctAnswer: 'Decision Tree', explanation: 'Decision Trees are flow-chart like structures used to classify or predict outcomes based on a series of decisions.' },
      { id: 'ai7', text: 'What is "supervised learning" in Machine Learning?', options: ['Learning from labeled data', 'Learning from unlabeled data', 'Learning by trial and error', 'Learning from human feedback only'], correctAnswer: 'Learning from labeled data', explanation: 'In supervised learning, the algorithm learns from a dataset where the correct output is already known (labeled data).' },
      { id: 'ai8', text: 'What is the main goal of "Computer Vision"?', options: ['To process audio signals', 'To enable computers to "see" and interpret visual information', 'To generate realistic images', 'To control robotic movements'], correctAnswer: 'To enable computers to "see" and interpret visual information', explanation: 'Computer Vision is a field of AI that trains computers to interpret and understand the visual world.' },
      { id: 'ai9', text: 'Which of these is NOT a common application of AI?', options: ['Spam filtering', 'Recommendation systems', 'Weather forecasting', 'Predicting stock market fluctuations'], correctAnswer: 'Weather forecasting', explanation: 'While AI can assist in weather modeling, traditional physics-based simulations are the primary method for weather forecasting.' },
      { id: 'ai10', text: 'What does "Deep Learning" refer to?', options: ['Learning with very large datasets', 'A subset of Machine Learning using artificial neural networks with multiple layers', 'Learning in a profound philosophical way', 'Learning only from deep web sources'], correctAnswer: 'A subset of Machine Learning using artificial neural networks with multiple layers', explanation: 'Deep Learning is a subset of machine learning in which artificial neural networks, inspired by the human brain, learn from large amounts of data.' },
    ],
    categoryId: 'technology',
  },
  'data-structures': {
    id: 'data-structures',
    title: 'Data Structures 101',
    questions: [
      { id: 'ds1', text: 'Which data structure stores elements in a "Last-In, First-Out" (LIFO) manner?', options: ['Queue', 'Stack', 'Linked List', 'Array'], correctAnswer: 'Stack', explanation: 'A Stack operates on a LIFO principle, where the last element added is the first one to be removed.' },
      { id: 'ds2', text: 'Which data structure is a linear collection of data elements where each element points to the next?', options: ['Array', 'Tree', 'Graph', 'Linked List'], correctAnswer: 'Linked List', explanation: 'A Linked List consists of nodes where each node contains data and a reference (link) to the next node in the sequence.' },
      { id: 'ds3', text: 'Which data structure allows access to elements using an index?', options: ['Linked List', 'Stack', 'Queue', 'Array'], correctAnswer: 'Array', explanation: 'An Array is a collection of items stored at contiguous memory locations and can be accessed using an index.' },
      { id: 'ds4', text: 'A "Queue" operates on which principle?', options: ['Last-In, First-Out (LIFO)', 'First-In, First-Out (FIFO)', 'Random Access', 'Priority Based'], correctAnswer: 'First-In, First-Out (FIFO)', explanation: 'A Queue operates on a FIFO principle, where the first element added is the first one to be removed.' },
      { id: 'ds5', text: 'Which of the following is a non-linear data structure?', options: ['Array', 'Linked List', 'Queue', 'Tree'], correctAnswer: 'Tree', explanation: 'Trees and Graphs are non-linear data structures, representing hierarchical or network relationships.' },
      { id: 'ds6', text: 'What is a "Hash Table" primarily used for?', options: ['Sorting data', 'Storing data in a sequential order', 'Efficient data retrieval based on keys', 'Managing network connections'], correctAnswer: 'Efficient data retrieval based on keys', explanation: 'A Hash Table (or Hash Map) is used to implement an associative array, a data structure that can map keys to values.' },
      { id: 'ds7', text: 'In a Binary Search Tree, elements in the left subtree are always...?', options: ['Greater than the root', 'Less than or equal to the root', 'Equal to the root', 'Unordered'], correctAnswer: 'Less than or equal to the root', explanation: 'In a Binary Search Tree (BST), for any given node, all elements in its left subtree are less than or equal to the node\'s value, and all elements in its right subtree are greater.' },
      { id: 'ds8', text: 'Which operation is generally faster in a Linked List compared to an Array?', options: ['Accessing an element by index', 'Searching for an element', 'Insertion/Deletion at arbitrary positions', 'Iterating through elements'], correctAnswer: 'Insertion/Deletion at arbitrary positions', explanation: 'Inserting or deleting elements at arbitrary positions is generally faster in a Linked List (O(1) after finding the position) than in an Array (O(n) due to shifting).' },
      { id: 'ds9', text: 'What is the space complexity for storing `n` elements in an array?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], correctAnswer: 'O(n)', explanation: 'The space complexity for an array is O(n) because the memory required grows linearly with the number of elements `n`.' },
      { id: 'ds10', text: 'What is the purpose of a "Graph" data structure?', options: ['To store hierarchical data', 'To represent relationships between objects', 'To store elements in a sorted order', 'To manage sequential data'], correctAnswer: 'To represent relationships between objects', explanation: 'A Graph is a non-linear data structure consisting of nodes (vertices) and edges, used to represent connections or relationships between discrete objects.' },
    ],
    categoryId: 'computer-science',
  },
  // 'world-wars' and 'basic-physics' already had 10 questions in my previous comprehensive list,
  // but I've included them here again to ensure completeness of the entire file.
  // Make sure you copy this entire content into your quizzes.js file.
};