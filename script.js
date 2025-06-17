const giftData = [
  {
    ageGroup: [0, 12],
    gender: "female",
    occasion: ["birthday", "baby shower", "holiday", "achievement", "milestone"],
    relation: ["sister", "brother", "mother", "father", "relative", "cousin", "friend"],
    interests: ["crafts", "drawing", "toys", "games", "art"],
    budgetRange: [200, 1500],
    suggestions: [
      { name: "DIY Craft Kit", image: "images/gifts/craftkit.jpg" },
      { name: "Coloring Book Set", image: "images/gifts/coloringbook.jpg" },
      { name: "Barbie Playset", image: "images/gifts/barbie.jpg" }
    ]
  },
  {
    ageGroup: [0, 12],
    gender: "female",
    occasion: ["birthday", "baby shower", "holiday", "achievement", "milestone"],
    relation: ["sister", "brother", "mother", "father", "relative", "cousin", "friend"],
    interests: ["crafts", "drawing", "toys", "games", "art"],
    budgetRange: [0, 499],
    suggestions: [
      { name: "Cute Stuffed Toy", image: "images/gifts/stuffedtoy.jpg" },
      { name: "Cute Stationery Set", image: "images/gifts/cutestationary.jpg" }
    ]
  },
  {
    ageGroup: [0, 12],
    gender: "female",
    occasion: ["birthday", "baby shower", "holiday", "achievement", "milestone"],
    relation: ["sister", "brother", "mother", "father", "relative", "cousin", "friend"],
    interests: ["crafts", "drawing", "toys", "games", "art"],
    budgetRange: [500, 2500],
    suggestions: [
      { name: "Play Jewelry Set", image: "images/gifts/jewelryset.jpg" }
    ]
  },
  {
    ageGroup: [0, 12],
    gender: "male",
    occasion: ["birthday", "baby shower", "holiday", "achievement", "milestone"],
    relation: ["sister", "brother", "mother", "father", "relative", "cousin", "friend"],
    interests: ["toys", "cars", "games", "guns"],
    budgetRange: [500, 2000],
    suggestions: [
      { name: "Remote Control Car", image: "images/gifts/remotecontrolcar.jpg" },
      { name: "Board Game Set", image: "images/gifts/boardgame.jpg" }
    ]
  },
  {
    ageGroup: [0, 12],
    gender: "male",
    occasion: ["birthday", "baby shower", "holiday", "achievement", "milestone"],
    relation: ["sister", "brother", "mother", "father", "relative", "cousin", "friend"],
    interests: ["toys", "cars", "games", "guns"],
    budgetRange: [0, 499],
    suggestions: [
      { name: "Action Figure", image: "images/gifts/figurine.jpg" },
      { name: "Mini Car", image: "images/gifts/minicar.jpg" },
      { name: "Spinning Top or Beyblade", image: "images/gifts/beyblade.jpg" }
    ]
  },
  {
    ageGroup: [0, 12],
    gender: "any",
    occasion: ["birthday", "baby shower", "holiday", "achievement", "milestone"],
    relation: ["sister", "brother", "mother", "father", "relative", "cousin", "friend"],
    interests: ["games", "books", "fun"],
    budgetRange: [500, 1500],
    suggestions: [
      { name: "Mini Puzzle Game", image: "images/gifts/puzzle.jpg" },
            { name: "Roller Skates", image: "images/gifts/rollerskates.jpg" }

    ]
  },
  {
    ageGroup: [0, 12],
    gender: "any",
    occasion: ["birthday", "baby shower", "holiday", "achievement", "milestone"],
    relation: ["neighbor", "relative", "cousin", "sister", "brother", "sibling", "friend"],
    interests: ["stationery", "art", "fun", "books", "drawing"],
    budgetRange: [0, 499],
    suggestions: [
      { name: "Mini Sketchbook", image: "images/gifts/sketchbook.jpg" },
      { name: "Handmade Gift Card", image: "images/gifts/giftcard.jpg" }
    ]
  },
  {
    ageGroup: [0, 12],
    gender: "any",
    occasion: ["birthday", "baby shower", "holiday", "achievement", "milestone"],
    relation: ["sister", "brother", "mother", "father", "relative", "cousin", "friend"],
    interests: ["crafts", "drawing", "toys", "games", "art"],
    budgetRange: [2000, Infinity],
    suggestions: [
      { name: "LEGO Set", image: "images/gifts/lego.jpg" },
      { name: "Kid's Smartwatch", image: "images/gifts/kidswatch.jpg" }
    ]
  },
  {
    ageGroup: [30, 54],
    gender: "female",
    occasion: ["birthday", "anniversary", "holiday", "promotion", "achievement", "valentines day"],
    relation: ["daughter", "son", "husband", "mother", "father", "sister", "brother", "friend"],
    interests: ["wellness", "home decor", "cooking", "skincare", "self-care", "jewelry", "kitchen gadgets", "books", "fashion accessories"],
    budgetRange: [0, 499],
    suggestions: [
      { name: "Aromatic Scented Candles Set", image: "images/gifts/candles.jpg" },
      { name: "Mini Skincare Combo", image: "images/gifts/skincarecombo.jpg" },
      { name: "Books", image: "images/gifts/books.jpg" }
    ]
  },
  {
    ageGroup: [30, 54],
    gender: "female",
    occasion: ["birthday", "anniversary", "holiday", "promotion", "achievement", "valentines day"],
    relation: ["daughter", "son", "husband", "mother", "father", "sister", "brother", "friend"],
    interests: ["wellness", "home decor", "skincare", "self-care", "jewelry", "kitchen gadgets", "fashion accessories"],
    budgetRange: [500, 1999],
    suggestions: [
      { name: "Elegant Pendant Necklace or Bracelet", image: "images/gifts/jewelry.jpg" },
      { name: "Compact Air Fryer or Hand Blender", image: "images/gifts/kitchengadget.jpg" },
      { name: "Lamps", image: "images/gifts/lamp.jpg" }
    ]
  },
  {
    ageGroup: [30, 54],
    gender: "female",
    occasion: ["birthday", "anniversary", "holiday", "promotion", "achievement", "valentines day"],
    relation: ["daughter", "son", "husband", "mother", "father", "sister", "brother", "friend"],
    interests: ["wellness", "home decor", "skincare", "self-care", "jewelry", "kitchen gadgets", "fashion accessories"],
    budgetRange: [2000, Infinity],
    suggestions: [
      { name: "Spa or Wellness Retreat Voucher", image: "images/gifts/spavoucher.jpg" },
      { name: "Smart Speaker or Home Assistant Device", image: "images/gifts/smart-speaker.jpg" }
    ]
  },
  {
    ageGroup: [30, 54],
    gender: "female",
    occasion: "mothers day",
    relation: ["daughter", "son"],
    interests: ["wellness", "home decor", "skincare", "self-care", "jewelry", "kitchen gadgets", "fashion accessories"],
    budgetRange: [2000, Infinity],
    suggestions: [
     { name: "Elegant Rocking Chair",image: "images/gifts/rockingchair.jpg" }]
  },
  {
    ageGroup: [30, 54],
    gender: "female",
    occasion: "mothers day",
    relation: ["daughter", "son"],
    interests: ["wellness", "home decor", "skincare", "self-care", "jewelry", "kitchen gadgets", "fashion accessories"],
    budgetRange: [500, 1999],
    suggestions: [
      {name: "Personalized Wooden Photo Frame", image: "images/gifts/photo-frame.jpg"},
      {name: "Herbal Tea Hamper with Mug and Infuser", image: "images/gifts/teahamper.jpg"}    ]
  },
  {
    ageGroup: [30, 54],
    gender: "female",
    occasion: "mothers day",
    relation: ["daughter", "son"],
    interests: ["wellness", "home decor", "skincare", "self-care", "jewelry", "kitchen gadgets", "fashion accessories"],
    budgetRange: [0, 499],
    suggestions: [
      { name: "Mini Potted Plant with Decorative Pot",image: "images/gifts/miniplant.jpg"},
      {name: "Cute Apron or Tote Bag with 'Best Mom' Quote", image: "images/gifts/momapron.jpg" }
    ]
  },
  {
    ageGroup: [30, 54],
    gender: "male",
    occasion: ["birthday", "anniversary", "holiday", "promotion", "achievement", "valentines day"],
    relation: ["daughter", "son", "wife", "mother", "father", "sister", "brother", "friend"],
    interests: ["tech gadgets", "coffee & beverages", "books", "fitness", "desk accessories"],
    budgetRange: [0, 499],
    suggestions: [
      {name: "Wireless Mouse or Phone Stand",image: "images/gifts/tech.jpg"},
            {name: "Stainless Steel Travel Coffee Mug",image: "images/gifts/travelmug.jpg"}
    ]
  },
  {
 ageGroup: [30, 54],
    gender: "male",
    occasion: ["birthday", "anniversary", "holiday", "promotion", "achievement", "valentines day"],
    relation: ["daughter", "son", "wife", "mother", "father", "sister", "brother", "friend"],
    interests: ["tech gadgets", "coffee & beverages", "books", "fitness", "desk accessories"],
    budgetRange: [500, 1999],
    suggestions: [
      {name: "Bluetooth Wireless Earbuds",image: "images/gifts/wirelessearbuds.jpg"},
            {name: "Adjustable Laptop Stand or Sleek Desk Organizer",image: "images/gifts/desk-organizer.jpg"}
    ]
  },
  {
    ageGroup: [30, 54],
    gender: "male",
    occasion: ["birthday", "anniversary", "holiday", "promotion", "achievement", "valentines day"],
    relation: ["daughter", "son", "wife", "mother", "father", "sister", "brother", "friend"],
    interests: ["tech gadgets", "coffee & beverages", "books", "fitness", "desk accessories"],
    budgetRange: [2000, Infinity],
    suggestions: [
     {name: "Luxury Leather Wallet",image: "images/gifts/leatherwallet.jpg"},
      {name: "Elegant Watch", image:"images/gifts/watch.jpg"},
    ]
  },
  {
     ageGroup: [30, 54],
    gender: "male",
    occasion: "fathers day",
    relation: ["daughter", "son"],
    interests: ["wellness", "home decor", "skincare", "self-care", "jewelry", "kitchen gadgets", "fashion accessories"],
    budgetRange: [0, 499],
    suggestions: [ 
       {name: "Wireless Mouse or Phone Stand",image: "images/gifts/tech.jpg"},
            {name: "Stainless Steel Travel Coffee Mug",image: "images/gifts/travelmug.jpg"}
    ]
  },
  {
     ageGroup: [30, 54],
    gender: "male",
    occasion: "fathers day",
    relation: ["daughter", "son"],
    interests: ["wellness", "home decor", "skincare", "self-care", "jewelry", "kitchen gadgets", "fashion accessories"],
    budgetRange: [500, 1999],
    suggestions: [ 
       {name: "Bluetooth Wireless Earbuds",image: "images/gifts/wirelessearbuds.jpg"},
            {name: "Adjustable Laptop Stand or Sleek Desk Organizer",image: "images/gifts/desk-organizer.jpg"}
    ]
  },
  {
     ageGroup: [30, 54],
    gender: "male",
    occasion: "fathers day",
    relation: ["daughter", "son"],
    interests: ["wellness", "home decor", "skincare", "self-care", "jewelry", "kitchen gadgets", "fashion accessories"],
    budgetRange: [2000, Infinity],
    suggestions: [ 
       {name: "Luxury Leather Wallet",image: "images/gifts/leatherwallet.jpg"},
      {name: "Elegant Watch", image:"images/gifts/watch.jpg"},
    ]
  },
  {
    ageGroup: [13, 19],
    gender: "female",
    occasion: ["birthday", "holiday", "achievement", "milestone","farewell", "back to school",  "exam results",  "festivals",  "just because",  "graduation",  "congratulations"],
    relation: ["sister","bestfriend","male bestie", "brother", "boyfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [0, 499],
    suggestions: [
  { name: "Pastel Aesthetic Diary", image: "images/gifts/pastel-diary.jpg" },
  { name: "Anime Keychain", image: "images/gifts/anime_keychain.jpg" },
  { name: "K-pop Photocard Binder", image: "images/gifts/kpop-binder.jpg" },
  { name: "Cute Desk Organizer", image: "images/gifts/desk-organizer.jpg" },
  { name: "Plushie Toy (Animal/Character)", image: "images/gifts/stuffedtoy.jpg" }
    ]
  },
  {
     ageGroup: [13, 19],
    gender: "female",
    occasion: ["birthday", "holiday", "achievement", "milestone","farewell", "back to school",  "exam results",  "festivals",  "just because",  "graduation",  "congratulations"],
    relation: ["sister","bestfriend","male bestie", "brother", "boyfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [500, 1999],
    suggestions: [
  { name: "Korean merch box", image: "images/gifts/kpop_merch_box.jpg" },
  { name: "All-in-One Makeup Starter Kit", image: "images/gifts/makeup-kit.jpg" }
    ]
  },
  {
     ageGroup: [13, 19],
    gender: "female",
    occasion: ["birthday", "holiday", "achievement", "milestone","farewell", "back to school",  "exam results",  "festivals",  "just because",  "graduation",  "congratulations"],
    relation: ["sister","bestfriend","male bestie", "brother", "mother", "boyfriend","father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [2000, Infinity],
    suggestions: [
       { name: "Instax Mini Camera", image: "images/gifts/instax_camera.jpg" },
  { name: "High-End Skincare Gift Set", image: "images/gifts/skincare-set.jpg" }
    ]
  },
  {
  ageGroup: [13, 19],
    gender: "female",
    occasion: ["valentines day","anniversary"],
    relation: ["boyfriend","friend","situationship","bestfriend"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [0, 499],
    suggestions: [
  { name: "Mini Love Notes Jar (with affirmations or reasons I like you)", image: "images/gifts/love_notes_jar.jpg" },
  { name: "Cute Matching Keychains (Bestie / Couple Edition)", image: "images/gifts/matching-keychains.jpg" }
]
  },
  {
     ageGroup: [13, 19],
    gender: "female",
    occasion: ["valentines day","anniversary"],
    relation: ["boyfriend","friend","situationship","bestfriend"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [500, 1999],
    suggestions: [ { name: "Customized Couple Name Bracelet Set", image: "images/gifts/couple-bracelets.jpg" },
  { name: "LED Message-in-a-Bottle Lamp", image: "images/gifts/message-bottle-lamp.jpg" },
  { name: "valentines Gift Box (With Chocolates, Candle, Scrunchie & Card)", image: "images/gifts/valentines_giftbox.jpg" }
    ]
  },
  {
      ageGroup: [13, 19],
    gender: "female",
    occasion: ["valentines day","anniversary"],
    relation: ["boyfriend","friend","situationship","bestfriend"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [2000, Infinity],
    suggestions: [  { name: "Customized Scrapbook with Polaroid Prints", image: "images/gifts/diy_scrapbook.jpg" }]
  },
  {
     ageGroup: [13, 19],
    gender: "male",
    occasion: ["birthday", "holiday", "achievement", "milestone","farewell", "back to school",  "exam results",  "festivals",  "just because",  "graduation",  "congratulations"],
    relation: ["sister","bestfriend","female bestie","female friend", "brother", "girlfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [0, 499],
    suggestions: [
  { name: "Anime Keychain", image: "images/gifts/anime_keychain.jpg" },
  { name: "Gaming-themed mouse pad or controller grip", image: "images/gifts/gaming_kit.jpg" },
  { name: "Collectible trading cards or mystery blind box figure", image: "images/gifts/collectible_cards.jpg" },
  { name: "Portable cord organizer or cable protector set", image: "images/gifts/techpouch.jpg" }
]
  },
  {
       ageGroup: [13, 19],
    gender: "male",
    occasion: ["birthday", "holiday", "achievement", "milestone","farewell", "back to school",  "exam results",  "festivals",  "just because",  "graduation",  "congratulations"],
    relation: ["sister","bestfriend","female bestie","female friend", "brother", "girlfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [500, 1999],
    suggestions: [
  { name: "Custom anime hoodie or fandom t-shirt", image: "images/gifts/merch.jpg" },
  { name: "Wireless Bluetooth earphones", image: "images/gifts/wirelessearbuds.jpg" },
  { name: "Gaming accessories kit (trigger, grip, finger sleeves)", image: "images/gifts/gaming_kit.jpg" }
] 
  },
  {
      ageGroup: [13, 19],
    gender: "male",
    occasion: ["birthday", "holiday", "achievement", "milestone","farewell", "back to school",  "exam results",  "festivals",  "just because",  "graduation",  "congratulations"],
    relation: ["sister","bestfriend","female bestie","female friend", "brother", "girlfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [2000, Infinity],
    suggestions: [ { name: "Wireless gaming headphones with mic", image: "images/gifts/gaming_headphones.jpg" },
  { name: "Mechanical keyboard with RGB backlight", image: "images/gifts/mechanical_keyboard.jpg" }
]
  },
  {
    ageGroup: [13, 19],
    gender: "male",
    occasion: ["valentines day","anniversary"],
    relation: ["girlfriend","friend","situationship","bestfriend"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [0, 499],
    suggestions: [{ name: "Mini love note scrolls in a jar", image: "images/gifts/love_notes_jar.jpg" },
  { name: "Anime or gaming-themed keychain", image: "images/gifts/anime_keychain.jpg" }
]
  },
  {
       ageGroup: [13, 19],
    gender: "male",
    occasion: ["valentines day","anniversary"],
    relation: ["girlfriend","friend","situationship","bestfriend"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [500, 1999],
    suggestions: [
  { name: "Polaroid-style printed photo album with cute captions", image: "images/gifts/diy_scrapbook.jpg" },
  { name: "Bluetooth speaker with cute design or LED lights", image: "images/gifts/smart-speaker.jpg" }
    ]
  },
  {
        ageGroup: [13, 19],
    gender: "male",
    occasion: ["valentines day","anniversary"],
    relation: ["girlfriend","friend","situationship","bestfriend"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [2000, Infinity],
    suggestions: [
  { name: "Personalized neon name sign or gamer tag display", image: "images/gifts/neon_sign.jpg" },
  { name: "Concert ticket, VR gaming session, or escape room pass", image: "images/gifts/experience_gift_box.jpg" }
    ]
  },
  {
   ageGroup: [20, 29],
    gender: "female",
    occasion: ["birthday", "holiday", "achievement", "milestone", "festivals",  "just because",  "graduation",  "congratulations","new job","promotion","moving to a new city","wedding","engagement","housewarming",],
    relation: ["sister","bestfriend","male bestie","husband","partner", "brother", "boyfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [0, 499],
    suggestions: [
     { name: "Cute aesthetic sticky notes or memo pads", image: "images/gifts/sticky_notes.jpg" },
      { name: "Mini Skincare Combo", image: "images/gifts/skincarecombo.jpg" },
  { name: "Pocket mirror or compact with floral/quirky design", image: "images/gifts/compact_mirror.jpg" },
    {name:"Floral Perfume",  image:"images/gifts/perfume.jpg"}
]
  },
  {
    ageGroup: [20, 29],
    gender: "female",
    occasion: ["birthday", "holiday", "achievement", "milestone", "festivals",  "just because",  "graduation",  "congratulations","new job","promotion","moving to a new city","wedding","engagement","housewarming",],
    relation: ["sister","bestfriend","male bestie","husband","partner", "brother", "boyfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [500, 1999],
    suggestions: [
            { name: "Mini Skincare Combo", image: "images/gifts/skincarecombo.jpg" },
  { name: "Aesthetic LED desk lamp or reading light", image: "images/gifts/led_desk_lamp.jpg" },
  { name: "DIY journaling kit with stickers and washi tape", image: "images/gifts/journaling_kit.jpg" }
]
  },
  {
    ageGroup: [20, 29],
    gender: "female",
    occasion: ["birthday", "holiday", "achievement", "milestone", "festivals",  "just because",  "graduation",  "congratulations","new job","promotion","moving to a new city","wedding","engagement","housewarming",],
    relation: ["sister","bestfriend","male bestie", "husband","partner","brother", "boyfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [2000, Infinity],
    suggestions: [  
  { name: "Instax Mini instant camera or photo printer", image: "images/gifts/instax_camera.jpg" },
  { name: "Bluetooth speaker with cute design or LED lights", image: "images/gifts/smart-speaker.jpg" },
  { name: "Korean merch box", image: "images/gifts/kpop_merch_box.jpg" }
]  
  },
  {
   ageGroup: [20, 29],
    gender: "female",
    occasion: ["valentines day","anniversary"],
    relation: ["boyfriend","friend","situationship","bestfriend","husband","partner"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [0, 499],
    suggestions: [ 
       { name: "Mini love notes jar or message capsule bottle", image: "images/gifts/love_notes_jar.jpg" },
  { name: "DIY scrapbook or 'Our Memories' mini photo book", image: "images/gifts/diy_scrapbook.jpg" },
  { name: "Heart-shaped compact mirror or makeup pouch", image: "images/gifts/heart_mirror.jpg" }
]
  },
  {
      ageGroup: [20, 29],
    gender: "female",
    occasion: ["valentines day","anniversary"],
    relation: ["boyfriend","friend","situationship","bestfriend","husband","partner"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [500, 1999],
    suggestions: [ 
  { name: "DIY date night kit or couples journaling set", image: "images/gifts/date_night_kit.jpg" },
  { name: "Korean merch box", image: "images/gifts/kpop_merch_box.jpg" },
  { name: "Bluetooth speaker with cute design or LED lights", image: "images/gifts/smart-speaker.jpg" }
]
  },
  {
      ageGroup: [20, 29],
    gender: "female",
    occasion: ["valentines day","anniversary"],
    relation: ["boyfriend","friend","situationship","bestfriend","husband","partner"],
interests: ["skincare", "stationery", "art & crafts", "fashion", "accessories", "music", "books", "anime", "k-pop", "journaling", "self-care", "tech gadgets", "cute decor", "plushies", "makeup", "DIY kits"],
    budgetRange: [2000, Infinity],
    suggestions: [ 
      { name: "Instax Mini instant camera or portable photo printer", image: "images/gifts/instax_camera.jpg" },
  { name: "Personalized music plaque with your song + photo", image: "images/gifts/music_plaque.jpg" }
]
  },
  {
      ageGroup: [20, 29],
    gender: "male",
    occasion: ["birthday", "holiday", "achievement", "milestone", "festivals",  "just because",  "graduation",  "congratulations","new job","promotion","moving to a new city","wedding","engagement","housewarming",],
    relation: ["sister","bestfriend","female bestie","wife","partner","fiance","female friend", "brother", "girlfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [0, 499],
    suggestions: [
  { name: "Compact cable organizer or tech pouch", image: "images/gifts/techpouch.jpg" },
  { name: "Minimalist pocket notebook or planner", image: "images/gifts/pocket_notebook.jpg" }
]
  },
  {
        ageGroup: [20, 29],
    gender: "male",
    occasion: ["birthday", "holiday", "achievement", "milestone", "festivals",  "just because",  "graduation",  "congratulations","new job","promotion","moving to a new city","wedding","engagement","housewarming",],
    relation: ["sister","bestfriend","female bestie","wife","partner","fiance","female friend", "brother", "girlfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [500, 1999],
    suggestions: [
       { name: "Tech organizer pouch or travel cord roll", image: "images/gifts/techpouch.jpg" },
  { name: "Stylish tumbler or stainless steel flask for work/gym", image: "images/gifts/travelmug.jpg" },
  { name: "Desk organizer with pen stand and phone dock", image: "images/gifts/deskorganizer.jpg" }
]
  },
  {
      ageGroup: [20, 29],
    gender: "male",
    occasion: ["birthday", "holiday", "achievement", "milestone", "festivals",  "just because",  "graduation",  "congratulations","new job","promotion","moving to a new city","wedding","engagement","housewarming",],
    relation: ["sister","bestfriend","female bestie","wife","partner","fiance","female friend", "brother", "girlfriend","mother", "father", "relative", "cousin", "friend","classmate","mentor", "roommate"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [2000, Infinity],
    suggestions: [
        { name: "Portable projector for movie or gaming nights", image: "images/gifts/portable_projector.jpg" },
  { name: "Bluetooth speaker with cute design or LED lights", image: "images/gifts/smart-speaker.jpg" },
  { name: "Mechanical keyboard with RGB backlight", image: "images/gifts/mechanical_keyboard.jpg" }
    ]
  },
  {
      ageGroup: [20, 29],
    gender: "male",
    occasion: ["valentines day","anniversary"],
     relation: ["girlfriend","friend","situationship","bestfriend","wife","partner","fiance"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [0, 499],
    suggestions: [
      { name: "Jar of love notes or 'Open When' letters", image: "images/gifts/love_notes_jar.jpg" },
  { name: "Comic book or manga from a favorite series", image: "images/gifts/minicomic.jpg" },
  { name: "Cute DIY gift kit", image: "images/gifts/date_night_kit.jpg" }
]
  },
   {
      ageGroup: [20, 29],
    gender: "male",
    occasion: ["valentines day","anniversary"],
     relation: ["girlfriend","friend","situationship","bestfriend","wife","partner","fiance"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [500, 1999],
    suggestions: [
      { name: "Mini projector for cozy movie nights", image: "images/gifts/portable_projector.jpg" },
  { name: "‘100 Things I Love About You’ journal", image: "images/gifts/love_journal.jpg" }
]
  },
   {
      ageGroup: [20, 29],
    gender: "male",
    occasion: ["valentines day","anniversary"],
     relation: ["girlfriend","friend","situationship","bestfriend","wife","partner","fiance"],
interests: ["gaming", "sports", "tech gadgets", "anime", "music", "comic books", "fashion", "stationery", "memes & humor", "puzzles & brain games", "collectibles", "DIY & craft kits", "motivational stuff", "school/college supplies"],
    budgetRange: [2000, Infinity],
    suggestions: [
        { name: "Smartwatch or premium fitness tracker", image: "images/gifts/smartwatch.jpg" },
  { name: "Personalized video message frame with QR code to your memory reel", image: "images/gifts/music_plaque.jpg" },
  { name: "Luxury fandom hoodie", image: "images/gifts/merch.jpg" },
  { name: "Concert ticket, VR gaming session, or escape room pass", image: "images/gifts/experience_gift_box.jpg" }
]
  }
]

function showCustomRelation(selectElement) {
  const customField = document.getElementById("custom-relation-field");
  if (selectElement.value === "other") {
    customField.style.display = "block";
  }
  else {
    customField.style.display = "none";
  }
}
function showCustomOccasion(selectElement) {
  const customField = document.getElementById("custom-occasion-field");
  if (selectElement.value === "other") {
    customField.style.display = "block";
  }
  else {
    customField.style.display = "none";
  }
}
document.getElementById("gift-suggestion-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const age = document.getElementById("age").value;
  const ageGroup = getAgeGroup(age);
  console.log("Age Group:", ageGroup);
  if (ageGroup === "Seniors") {
    const suggestionContent = document.querySelector('.suggestion-content');
    suggestionContent.innerHTML = `
    <h2>🎁 Coming Soon 🎀</h2>
    <p>We're still curating the perfect gifts for Grandpa & Grandma🎀.Check back soon!</p>
    <img src="images/comingsoon.jpg" alt="Coming Soon" class="coming-soon-img" />
  `;

    document.querySelector(".mascot-hang").style.display = "none";
    showGiftPopup();
    return;
  }
  const gender = document.getElementById("gender").value;
  let occasion = document.getElementById("occasion").value.toLowerCase();
  if (occasion === "other") {
    const customOccasion = document.getElementById("custom-occasion").value.trim().toLowerCase();
    if (customOccasion) {
      occasion = customOccasion;
    }
  }
  let relation = document.getElementById("relation").value.toLowerCase();
  if (relation === "other") {
    const customRelation = document.getElementById("custom-relation").value.trim().toLowerCase();
    if (customRelation) {
      relation = customRelation;
    }
  }
  const interestsInput = document.getElementById("interests").value.toLowerCase();
  const interests=interestsInput
  ?interestsInput.split(',').map(i => i.trim())
  : [];
  const budgetInput=document.getElementById("budget").value.trim();
  const budget = budgetInput ? parseInt(budgetInput): null;

  console.log("Age:", age);
  console.log("Gender:", gender);
  console.log("Occasion:", occasion);
  console.log("Relation:", relation);
  console.log("Interests:", interests);
  console.log("Budget:", budget);

  let suggestions = [];

  giftData.forEach(item => {
    const ageMatch = age >= item.ageGroup[0] && age <= item.ageGroup[1];
    const genderMatch = item.gender === gender || item.gender === "any";
    const occasionMatch = Array.isArray(item.occasion)
      ? item.occasion.some(o => occasion.includes(o.toLowerCase()) || o.toLowerCase().includes(occasion))
      : occasion.includes(item.occasion.toLowerCase()) || item.occasion.toLowerCase().includes(occasion);
    const relationMatch = Array.isArray(item.relation)
      ? item.relation.some(r => relation.includes(r.toLowerCase()) || r.toLowerCase().includes(relation))
      : relation.includes(item.relation.toLowerCase()) || item.relation.toLowerCase().includes(relation);
    const interestMatch = interests.length===0||interests.some(interest => item.interests.includes(interest));
    const budgetMatch = !budget||(budget >= item.budgetRange[0] && budget <= item.budgetRange[1]);

    if (ageMatch && genderMatch && occasionMatch && relationMatch && interestMatch && budgetMatch) {
      suggestions.push(...item.suggestions);
    }
  });
  if (suggestions.length === 0) {
    suggestions.push({ name: "A thoughtful surprise gift🎁", image: "images/gifts/default.jpg" });
  }

  let suggestionCards = '';
  suggestions.forEach(suggestion => {
    suggestionCards += `
    <div class="suggestion-card">
    <img src="${suggestion.image}" alt="${suggestion.name}"/>
    <p>${suggestion.name}</p>
    </div>
    `;
  });

  const suggestionContent = document.querySelector('.suggestion-content');
  suggestionContent.innerHTML = `
    <h2>🎁 Gift Suggestions 🎀</h2>
    <p>Here are some lovely ideas for you!</p>
    ${suggestionCards}
  `;
  document.querySelector(".mascot-hang").style.display = "none";

  showGiftPopup();

  const canvas = document.getElementById('sparkle-canvas');
  const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });
  const colors = ['#f7cac9', '#92a8d1', '#ffb7b2', '#b5ead7', '#cdb4db'];

  myConfetti({
    particleCount: 250,
    spread: 150,
    origin: { y: 0.6 },
    scalar: 0.9,
    colors: colors,
    shapes: ['circle', 'star', 'sparkle'],
    gravity: 0.4,
    drift: 0.8,
    ticks: 250,
    zIndex: 9999
  });
});

function getAgeGroup(age) {
  if (age <= 12) return "Kids";
  else if (age <= 19) return "Teens";
  else if (age <= 29) return "Young Adults";
  else if (age <= 54) return "Adults";
  else return "Seniors";
}

document.getElementById("interests").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^a-zA-Z,\s]/g, '');
});
document.getElementById("custom-occasion").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});
document.getElementById("custom-relation").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});


const decorContainer = document.querySelector('.floatingdecor');
const symbols = ['💖', '🌟', '💕', '✨', '💝', '❤', '💞'];

function createFloaty() {
  const span = document.createElement('span');
  span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  span.style.left = Math.random() * 100 + '%';
  span.style.top = '100%';
  span.style.fontSize = Math.random() * 10 + 15 + 'px';
  span.style.animationDuration = Math.random() * 4 + 3 + 's';
  decorContainer.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 7000);
}

setInterval(createFloaty, 500);

const mascotEnvelope = document.querySelector('.wokemascot');
const giftpopup = document.getElementById('gift-popup');

function showGiftPopup() {
  const textBox=document.querySelector('.pixel-text-box2');
  giftpopup.classList.remove('hidden');
  giftpopup.style.display='flex';
  setTimeout(()=> {
  giftpopup.classList.add('show');
  },10);
setTimeout(() => {
    mascotEnvelope.style.display = 'block';
    setTimeout(()=>{
    mascotEnvelope.classList.add('show');
    setTimeout(() => {
      textBox.classList.add('show');
    }, 300); 
    },50);
  }, 750);
}

function hideGiftPopup() {
    const textBox=document.querySelector('.pixel-text-box2');
  giftpopup.classList.remove('show');
  giftpopup.classList.add('hidden');
  mascotEnvelope.classList.remove('show');
  textBox.classList.remove('show')
  setTimeout(()=> {
  mascotEnvelope.style.display = 'none';
    },100);
  document.querySelector(".mascot-hang").style.display = "block";
}

const closeBtn=document.getElementById("close");
if(closeBtn){
  closeBtn.addEventListener("click", hideGiftPopup);
  }



