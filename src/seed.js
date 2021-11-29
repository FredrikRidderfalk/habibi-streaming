export function seedDatabase(firebase) {
  function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

  /* Series
      ============================================ */
  // Documentaries
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Planet Earth",
    description:
      "Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.",
    genre: "documentaries",
    maturity: "12",
    slug: "planet-earth",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "My Octopus Teacher",
    description:
      "A filmmaker forges an unusual friendship with an octopus living in a South African kelp forest, learning as the animal shares the mysteries of her world.",
    genre: "documentaries",
    maturity: "12",
    slug: "my-octopus-teacher",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Street Food: Asia",
    description:
      "Embark on a global cultural journey into street food and discover the stories of the people who create the flavorful dishes.",
    genre: "documentaries",
    maturity: "12",
    slug: "street-food-asia",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "High Score",
    description:
      "Traces the history of classic video games, featuring insights from the innovators who brought these worlds and characters to life.",
    genre: "documentaries",
    maturity: "12",
    slug: "high-score",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Our Planet",
    description:
      "Experience our planet's natural beauty and examine how climate change impacts all living creatures in this ambitious documentary of spectacular scope.",
    genre: "documentaries",
    maturity: "12",
    slug: "our-planet",
  });

  // Comedies
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Emily in Paris",
    description:
      "A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things.",
    genre: "comedies",
    maturity: "12",
    slug: "emily-in-paris",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Brooklyn Nine-Nine",
    description:
      "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
    genre: "comedies",
    maturity: "12",
    slug: "brooklyn-nine-nine",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Curb Your Enthusiasm",
    description:
      "Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.",
    genre: "comedies",
    maturity: "15",
    slug: "curb-your-enthusiasm",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Kim's Convenience",
    description:
      "While running a convenience store in Toronto, members of a Korean-Canadian family deal with customers, each other and the evolving world around them.",
    genre: "comedies",
    maturity: "15",
    slug: "kims-convenience",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Community",
    description:
      "When his bogus law degree is exposed, Jeff Winger goes back to college and forms a study group of outcasts.",
    genre: "comedies",
    maturity: "12",
    slug: "community",
  });

  // Children
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Peppa Pig",
    description:
      "Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.",
    genre: "children",
    maturity: "0",
    slug: "peppa-pig",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Dora The Explorer",
    description:
      "Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.",
    genre: "children",
    maturity: "0",
    slug: "dora-the-explorer",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "PAW Patrol",
    description:
      "Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.",
    genre: "children",
    maturity: "0",
    slug: "paw-patrol",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Arthur",
    description:
      "Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.",
    genre: "children",
    maturity: "0",
    slug: "arthur",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "SpongeBob",
    description:
      "A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean. ",
    genre: "children",
    maturity: "0",
    slug: "spongebob",
  });

  // Animated
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Food Wars",
    description:
      "Soma Yukihira enrolls in an elite culinary school to become a full-time chef and surpass his father's culinary skills.",
    genre: "animated",
    maturity: "12",
    slug: "food-wars",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "A Place Further Than The Universe",
    description:
      "A group of high school girls join an expedition headed towards the Antarctic.",
    genre: "animated",
    maturity: "12",
    slug: "a-place-further-than-the-universe",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Great British Bake Off",
    description:
      "The Great British Bake Off is the ultimate baking battle where passionate amateur baking fans compete to be crowned the UK's Best Amateur Baker.",
    genre: "feel-good",
    maturity: "12",
    slug: "the-great-british-bake-off",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Big Hero 6",
    description:
      "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
    genre: "adventure",
    maturity: "12",
    slug: "big-hero-6",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Next Gen",
    description:
      "A friendship with a top-secret robot turns a lonely girl's life into a thrilling adventure as they take on bullies, evil bots and a scheming madman.",
    genre: "adventure",
    maturity: "12",
    slug: "next-gen",
  });

  // Feel-good
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Good Will Hunting",
    description:
      "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.",
    genre: "feel-good",
    maturity: "12",
    slug: "good-will-hunting",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Forrest Gump",
    description:
      "Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.",
    genre: "feel-good",
    maturity: "12",
    slug: "forrest-gump",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Juno",
    description:
      "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
    genre: "feel-good",
    maturity: "12",
    slug: "juno",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Midnight In Paris",
    description:
      "Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.",
    genre: "feel-good",
    maturity: "12",
    slug: "midnight-in-paris",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "School of Rock",
    description:
      "Dewey Finn, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a band.",
    genre: "feel-good",
    maturity: "12",
    slug: "school-of-rock",
  });

  /* Films
      ============================================ */
  // Drama
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Enola Holmes",
    description:
      "When Enola Holmes-Sherlock's teen sister-discovers her mother missing, she sets off to find her, becoming a super-sleuth in her own right as she outwits her famous brother and unravels a dangerous conspiracy around a mysterious young Lord.",
    genre: "drama",
    maturity: "15",
    slug: "enola-holmes",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Notting Hill",
    description:
      "The life of a simple bookshop owner changes when he meets the most famous film star in the world.",
    genre: "drama",
    maturity: "15",
    slug: "notting-hill",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "The Birdcage",
    description:
      "A gay cabaret owner and his drag queen companion agree to put up a false straight front so that their son can introduce them to his fiancée's right-wing moralistic parents.",
    genre: "drama",
    maturity: "15",
    slug: "the-birdcage",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Legally Blonde",
    description:
      "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
    genre: "drama",
    maturity: "15",
    slug: "legally-blonde",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Mamma Mia!",
    description:
      "The story of a bride-to-be trying to find her real father told using hit songs by the popular 1970s group ABBA.",
    genre: "drama",
    maturity: "12",
    slug: "mamma-mia!",
  });

  // Adventure
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Troop Zero",
    description:
      "In rural 1977 Georgia, a misfit girl dreams of life in outer space. When a competition offers her a chance to be recorded on NASA's Golden Record, she recruits a makeshift troop of Birdie Scouts, forging friendships that last a lifetime.",
    genre: "adventure",
    maturity: "12",
    slug: "troop-zero",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "How To Train Your Dragon",
    description:
      "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    genre: "adventure",
    maturity: "12",
    slug: "how-to-train-your-dragon",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Raya and the Last Dragon",
    description:
      "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
    genre: "adventure",
    maturity: "12",
    slug: "raya-and-the-last-dragon",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Moana",
    description:
      "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
    genre: "adventure",
    maturity: "12",
    slug: "moana",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Pirates of the Caribbean",
    description:
      "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
    genre: "adventure",
    maturity: "12",
    slug: "pirates-of-the-caribbean",
  });

  // Children
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Hotel Transylvania",
    description:
      "Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.",
    genre: "children",
    maturity: "0",
    slug: "hotel-transylvania",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Despicable Me",
    description:
      "Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.",
    genre: "children",
    maturity: "0",
    slug: "despicable-me",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Frozen",
    description:
      "Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.",
    genre: "children",
    maturity: "0",
    slug: "frozen",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Spirited Away",
    description:
      "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.",
    genre: "children",
    maturity: "0",
    slug: "spirited-away",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Up",
    description:
      "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
    genre: "children",
    maturity: "0",
    slug: "up",
  });

  // Family
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "The Karate Kid",
    description:
      "A martial arts master agrees to teach karate to a bullied teenager.",
    genre: "family",
    maturity: "12",
    slug: "the-karate-kid",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "The Spy Next Door",
    description:
      "Former C.I.A. spy Bob Ho takes on his toughest assignment to date: looking after his girlfriend's three kids, who haven't exactly warmed to their mom's beau.",
    genre: "family",
    maturity: "12",
    slug: "the-spy-next-door",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Coco",
    description:
      "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    genre: "family",
    maturity: "12",
    slug: "coco",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Happy Feet",
    description:
      "Into the world of the Emperor Penguins, who find their soul mates through song, a penguin is born who cannot sing. But he can tap dance something fierce!",
    genre: "family",
    maturity: "12",
    slug: "happy-feet",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Zootopia",
    description:
      "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
    genre: "family",
    maturity: "12",
    slug: "zootopia",
  });

  // Romance
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "A Star Is Born",
    description:
      "After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.",
    genre: "romance",
    maturity: "12",
    slug: "a-star-is-born",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Your Name",
    description:
      "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    genre: "romance",
    maturity: "12",
    slug: "your-name",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "La La Land",
    description:
      "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin...",
    genre: "romance",
    maturity: "12",
    slug: "la-la-land",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Love Actually",
    description:
      "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    genre: "romance",
    maturity: "12",
    slug: "love-actually",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Words Bubble Up Like Soda Pop",
    description:
      "A meeting and romance starts between two people with communication issues - a boy who wears headphones and uses haiku poems, and a shy girl who wears a mask and only does online videos.",
    genre: "romance",
    maturity: "12",
    slug: "words-bubble-up-like-soda-pop",
  });
}
