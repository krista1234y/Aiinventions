var stage = 0;



const categories = ["Kitchen Inventions", "Beauty Inventions", "Outdoor Gear Inventions", "Bathroom", "School", 

	"Laundry room", "Bedroom", "Workplace items", "Automobile inventions", "Working out inventions", "Gardening inventions"];



const kitchenInventions = [

    { name: "Magnetic Utensil Holder for Stove: A magnetic strip that attaches to the stove or range hood, providing a convenient spot to hang cooking utensils.",

    link: "https://buy.stripe.com/14kbKmgSt3c2cjCcMM"},

    { name: "Compact Handheld Vegetable Spiralizer: A small, easy-to-use tool for creating spiralized vegetables, promoting healthy eating habits.",

    link: "https://buy.stripe.com/7sI29MdGh27YgzS5kl"},

    { name: "Non-Slip Pot and Pan Handle Covers: Heat-resistant silicone covers that slide onto handles, providing a secure grip and preventing burns.",

    link: "https://buy.stripe.com/4gwbKmdGh6oe0AUeUY"},

    { name: "Adjustable Measuring Cup for Dry Ingredients: A measuring cup with an adjustable slider for precise measurement of dry ingredients, eliminating the need for multiple cups.",

    link: "https://buy.stripe.com/eVa4hU8lX3c25Ve8wy"},

    { name: "Expandable Under-Sink Organizer with Adjustable Shelves: An organizer with adjustable shelves and compartments for maximizing storage space under the kitchen sink.",

    link: "https://buy.stripe.com/cN26q259L7si5Ve4gl"},

    { name: "Adjustable Rolling Cookie Cutter with Interchangeable Shapes: A rolling cookie cutter with interchangeable discs to create various cookie shapes and sizes.",

    link: "https://buy.stripe.com/cN25lY6dP4g63N64gj"},

    { name: "Collapsible Funnel with Integrated Strainer: A collapsible silicone funnel with an attached strainer for filtering liquids directly into bottles or jars.",

    link: "https://buy.stripe.com/8wM6q20Tv13U4RafZ4"},
    
    { name: "Herb Stripper: This gadget resembles a comb with sharp teeth that are perfect for removing leaves from fresh herbs, without the hassle of doing it by hand.",
    
    link: "https://buy.stripe.com/28obKm31DbIyabu290"},
    
    { name: "Avocado Slicer: This gadget has a blade for cutting through avocado skin, a pit remover and a slicer for creating perfectly even avocado slices.",
    
    link : "https://buy.stripe.com/28o8ya6dP4g697q9Bt"},
    
    { name: "Citrus Sprayer: Shaped like a small pump, this invention allows you to spray citrus juice directly from the fruit. Simply insert it into the fruit and pump to release the juice.",
    
    link: "https://buy.stripe.com/aEU4hU9q1dQG97q9Bu"},
    
    { name: "Egg Cuber: This device turns boiled eggs into perfect cubes. It is great for unique presentations or for making fun bite sized snacks.",
    
    link: "https://buy.stripe.com/cN2aGi7hTcMC3N63d7"},
    
    { name: "Butter Spreader Knife: This knife has small perforations along the blade. It allows you to spread cold butter on bread without tearing it.",
    
    link: "https://buy.stripe.com/4gw4hUgSt5kaabu00W"},
    
    { name: "Bagel Guillotine: Shaped like a miniature guillotine, this device allows you to slice bagels perfectly in half without the risk of uneven cuts.",
    
    link: "https://buy.stripe.com/9AQaGicCd7sifvO3d9"},
    
    { name: "Corn Stripper: This tool looks like a peeler with jagged edges. It effortlessly removes kernels from the cob, saving you time and reducing mess.",
    
    link: "https://buy.stripe.com/7sIg0CdGheUKerK4he"},
    
    { name: "Silicone Food Huggers: These are silicone covers designed to fit over cut fruits and vegetables, keeping them fresh for longer, and reducing food waste.",
    
    link: "https://buy.stripe.com/28o4hUgStfYO6ZieVT"}, 
    
    { name: "Onion Holder: This quirky invention holds the onion securely in place while you peel it and slice it.",
    
    link: "https://buy.stripe.com/fZeeWyeKlbIy5Ve8xw"},
    
    { name: "Non Stick Pancake Pen: Resembling a large syringe, this tool allows you to easily create unique and perfect artwork with pancake batter.",
    
    link: "https://buy.stripe.com/00g29M0Tv7si6ZifZZ"},
    
    { name: "Rotary Cheese Grater: This grater has a handle that you turn to grate a revolving chunk of cheese.",
    
    link: "https://buy.stripe.com/9AQ3dQ1Xz5kacjCdRS"}

];



const beautyInventions = [

    { name: "Scented Body Powder: Develop scented body powders in various fragrances for a luxurious and refreshing experience.",

    link: "https://buy.stripe.com/bIY7u60Tv8wm4Ra4gn"},

    { name: "Multi-Use Makeup Sticks: Design multi-purpose makeup sticks that can be used for eyes, lips, and cheeks, providing versatility for consumers.",

    link: "https://buy.stripe.com/00g7u60Tv13UcjC7sB"},

    { name: "Natural Fiber Sheet Masks: Sheet masks made from biodegradable plant-based materials infused with natural, skin-loving ingredients.",

    link: "https://www.google.com/"},

    { name: "Customizable Fragrance Blotters: Fragrance blotters infused with essential oils, allowing users to mix and match scents for a personalized fragrance experience.",

    link: "https://www.google.com/"},

    { name: "Exfoliating Foot Mask Socks: Socks infused with exfoliating ingredients like fruit acids and natural extracts for a gentle foot peel treatment.",

    link: "https://buy.stripe.com/00g4hU31DcMC3N6dR1"},

    { name: "Customizable Lip Balm Kit with Natural Extracts: A kit containing a base lip balm and various natural extracts for users to create their own custom lip balm flavors.",

    link: "https://buy.stripe.com/4gwg0C0Tv5kagzS28l"},

    { name: "Natural Fiber Makeup Sponge with Integrated Skincare Serum: A makeup sponge made from natural fibers with an integrated serum core, providing both makeup application and skincare benefits.",

    link: "https://buy.stripe.com/5kA4hU6dPh2SfvOdR2"},

    { name: "Reusable Silk Pillowcase with Embedded Silk Proteins: A silk pillowcase with silk proteins woven into the fabric to promote healthy hair and skin while you sleep.",

    link: "https://www.google.com/"},

    { name: "Flower Petal-Infused Bath Bombs: Bath bombs made with dried flower petals and natural, skin-friendly ingredients for a luxurious and relaxing bath experience.",

    link: "https://buy.stripe.com/cN2dSu9q16oe1EY28m"},

    { name: "Customizable Clay Face Mask Palette: A palette containing various natural clay powders, allowing users to mix their own custom face masks for different skin needs.",

    link: "https://buy.stripe.com/14kbKm31DcMCcjC3cm"},

    { name: "Herbal-Infused Bath Tea Bags with Reusable Mesh Infuser: Bath tea bags filled with a blend of dried herbs and flowers that can be steeped in warm water for a fragrant and skin-soothing bath.",

    link: "https://buy.stripe.com/9AQ7u6by96oefvO3cr"},

    { name: "Aromatherapy Scented Sachets for Drawers and Closets: Sachets infused with essential oils and dried botanicals, providing a natural and aromatic way to freshen up drawers and closets.",

    link: "https://buy.stripe.com/4gwbKm8lXfYO2J26oE"}

];

const outdoorGearInventions = [

   { name: "Adjustable Paracord Hammock with Integrated Insect Netting - A hammock with adjustable suspension using paracord, and integrated insect netting to provide a bug-free resting experience.",

   link: "https://buy.stripe.com/bIYcOqdGhdQG5VeaEW"},

   { name: "Solar-Powered Lantern with Inflatable Body for Compact Storage - A lantern powered by solar energy, featuring an inflatable body that can be collapsed for easy storage and transport.",

   link: "https://www.google.com/"},

   { name: "Biodegradable Mosquito-Repellent Wristbands with Plant-Based Formulation - Wristbands made from biodegradable materials infused with a natural mosquito-repelling formulation for outdoor enthusiasts.",

   link: "https://buy.stripe.com/9AQ7u6by927Y2J228r"},

   { name: "Multi-Tool Hiking Pole with Integrated Compass and Detachable Knife - A hiking pole with a built-in compass for navigation and a detachable knife for versatile outdoor use.",

   link: "https://www.google.com/"},

   { name: "Scented Fire Starter Logs with Embedded Natural Fragrances - Fire starter logs infused with natural scents for a pleasant aroma while lighting fires.",

   link: "https://buy.stripe.com/9AQ5lYdGhdQG6Zi5kB"},

   { name: "Self-Inflating Sleeping Pad with Built-In Pillow and Insulated Side Panels - A lightweight sleeping pad that self-inflates for comfort, featuring an integrated pillow and insulated side panels for added warmth.",

   link: "https://buy.stripe.com/14k9CedGh8wm1EY28s"},

   { name: "Floating Hammock: A hammock designed for use on water, with a buoyant frame that keeps it afloat, allowing users to relax on lakes or calm rivers.",

   link: "https://buy.stripe.com/4gwbKm1Xzh2Sabu28t"},

   { name: "Adaptive Tent: A tent with a flexible frame that can adjust to various terrains, providing stability on uneven surfaces.",

   link: "https://buy.stripe.com/28o15I9q1dQGerK7sO"}

];

const bathroom = [

    { name: "Water-Saving Showerhead Attachment: An attachment for showerheads that reduces water consumption without compromising water pressure.",

    link: "https://www.google.com/"},

    { name: "Biodegradable Toilet Brush: A toilet brush made from eco-friendly materials that naturally decompose over time.",

    link: "https://www.google.com/"},

    { name: "Mildew-Resistant Shower Curtain: A shower curtain treated with a special coating to prevent mildew growth, reducing the need for frequent cleaning.",

    link: "https://buy.stripe.com/aEU9Ce59L27Y83mfZo"},

    { name: "Odor Eliminating Toilet Seat: This toilet seat is designed with a built in carbon filter that absorbs and neutralizes unpleasant odors, keeping your bathroom smelling fresh and nice.",

    link: "https://buy.stripe.com/00g01E8lX13U1EY9Bp"},

    { name: "Bamboo Bath Mat: A bath mat made from sustainable bamboo that is both anti-slip and environmentally friendly.",

    link: "https://buy.stripe.com/9AQ4hUeKl13U6ZieVj"},

    { name: "Scented Toilet Paper: Toilet paper with natural scents to enhance the bathroom experience.",

    link: "https://buy.stripe.com/4gw5lYfOp6oe97q8wT"},

    { name: "Steam Free Mirror: This mirror comes with a special coating that prevents it from fogging up during hot showers.",

    link: "https://buy.stripe.com/9AQdSufOpbIy4Ra5l8"},

    { name: "Toilet Seat Lifter: A foot-operated device that lifts and lowers the toilet seat, promoting hygiene and convenience.",

    link: "https://buy.stripe.com/cN29Ce8lX4g63N63cA"},

    { name: "Toilet Night Light with Motion Sensor: This is a small LED light that attaches to the rim of your toilet bowl. It turns on automatically when it senses motion, providing a soft, ambient glow in the dark.",

    link: "https://buy.stripe.com/fZedSuau5cMCgzS00K"},

    { name: "Water-Powered Toothbrush: This toothbrush uses a small, built-in water reservoir to power its bristle vibrations. It's a great eco-friendly alternative to electric toothbrushes.",

    link: "https://buy.stripe.com/fZe01Eau5dQG5Ve00L"},

    { name: "Shower Head with Built-In Bluetooth Speaker: This shower head comes with a built-in speaker that connects to your phone via Bluetooth. You can enjoy your favorite tunes or podcasts while getting clean.",

    link: "https://buy.stripe.com/fZe3dQau5fYO0AUbJu"},
    
    { name: "Bathtub Wine Glass Holder: This quirky invention is a suction cup based holder that allows you to secure a wine glass to the edge of the bathtub.",
    
    link: "https://buy.stripe.com/6oEdSu1Xz3c2dnG00Q"},
    
    { name: "Hand Dryer With Built in Timer: This hand dryer is on a timer and mounts to bathroom walls for a sleek professional looking bathroom.",
    
    link: "https://buy.stripe.com/14kbKmcCd8wmcjCcND"}

];

const school = [

    { name: "Eco-Friendly School Supplies Set: A set of school supplies made from recycled and sustainable materials, including pencils, notebooks, and binders.",

    link: "https://buy.stripe.com/14k7u61Xz4g61EYdRh"},

    { name: "Homework Organizer App: An app that helps students organize their homework, assignments, and study schedules efficiently.",

    link: "https://www.google.com/"},

    { name: "Interactive Whiteboard Eraser: A smart eraser for interactive whiteboards that also functions as a stylus for touchscreen interaction.",

    link: "https://www.google.com/"},

    { name: "Solar-Powered Backpack Charger: A backpack with integrated solar panels to charge electronic devices like smartphones and tablets on the go.",

    link: "https://buy.stripe.com/14k15IgSt9AqbfyeVm"},

    { name: "Noise-Canceling Study Pods: Portable, noise-canceling pods for students to create a quiet and focused study environment anywhere.",

    link: "https://www.google.com/"},

    { name: "Ergonomic Classroom Chairs: Ergonomically designed chairs that provide comfort and support for students during long hours of sitting.",

    link: "https://www.google.com/"},

    { name: "Homemade Glue from Natural Ingredients: A recipe for making eco-friendly glue using household ingredients like flour and water.",

    link: "https://www.google.com/"},

    { name: "Reusable Lunchbox Set: A set of reusable lunch containers and utensils to reduce single-use plastic waste in school lunches.",

    link: "https://buy.stripe.com/fZe4hU31D7sibfy7sV"}

];

const bedroom = [

   { name: "Space-Saving Bedside Table: A compact, wall-mounted bedside table with integrated storage for books and small items.",

     link: "https://www.google.com/"},

   { name: "Under-Bed Shoe Organizer: A fabric organizer that fits under the bed, providing convenient storage for shoes and accessories.",

     link: "https://buy.stripe.com/eVa8ya59L5kabfyaFg"},

   { name: "Sleep-Enhancing Aroma Diffuser: A diffuser that releases calming scents to improve sleep quality and relaxation in the bedroom.",

     link: "https://buy.stripe.com/4gw6q2gSteUK6ZieVv"},

   { name: "Ergonomic Pillow for Neck Support: A specially designed pillow that offers optimal neck support and comfort for a restful sleep.",

     link: "https://buy.stripe.com/9AQcOq7hT5kaerKbJl"},

   { name: "Bedroom Plant Wall: A wall-mounted plant holder for easy access to fresh air-purifying plants in the bedroom.",

     link: "https://buy.stripe.com/8wMdSu59LeUK83mbJi"},

   { name: "LED Bookshelf Lighting: Energy-efficient LED lighting strips that can be installed on bookshelves for better visibility and ambiance.",

     link: "https://buy.stripe.com/9AQ8ya0Tv5ka0AUfZD"},

   { name: "Anti-Allergen Bedding: Hypoallergenic bedding sets that prevent allergies and provide a comfortable night's sleep.",

     link: "https://buy.stripe.com/00g01E7hT9AqcjCbJh"},

   { name: "Smartphone Charging Nightstand: A nightstand with built-in wireless charging for smartphones and tablets.",

     link: "https://www.google.com/"}

];

const workplaceItems = [

    { name: "Ergonomic Standing Desk Converter: A cost-effective converter that turns a regular desk into an ergonomic standing desk for improved posture.",

      link: "https://www.google.com/"},

    { name: "Desk Drawer Organizer: A customizable organizer that fits in desk drawers, helping to keep pens, papers, and small items neatly arranged.",

      link: "https://buy.stripe.com/28o4hUcCdeUKdnG00E"},

    { name: "Noise-Canceling Cubicle Divider: A portable, noise-canceling partition for open office spaces, providing privacy and focus.",

      link: "https://www.google.com/"},

    { name: "Eco-Friendly Office Supplies: Sustainable office supplies made from recycled materials, including pens, notebooks, and binders.",

      link: "https://buy.stripe.com/aEU8ya9q13c26Zi15q"},

    { name: "Wireless Charging Mouse Pad: A mouse pad with integrated wireless charging for smartphones and other devices.",

      link: "https://www.google.com/"},

    { name: "Desk Plant Air Purifier: A small desktop plant holder with air-purifying plants to improve air quality in the workplace.",

      link: "https://www.google.com/"},

    { name: "Adjustable Monitor Stand: A stand that elevates computer monitors to eye level, reducing strain on the neck and improving ergonomics.",

      link: "https://www.google.com/"},

    { name: "Cable Management Clips: Adhesive clips that keep cables and wires organized and prevent tangling on the desk.",

      link: "https://buy.stripe.com/fZe6q2gSt13U2J2fZE"}

];

const laundryRoomInventions = [

    { name: "Eco-Friendly Laundry Drying Rack: A collapsible drying rack made from sustainable materials, designed to save energy and space.",

      link: "https://www.google.com/"},

    { name: "Stain-Resistant Laundry Basket: A laundry basket with a special coating that repels stains and odors, keeping it clean and fresh.",

      link: "https://buy.stripe.com/7sI6q21Xz4g6abu15r"},

    { name: "Folding Ironing Board Shelf: A space-saving shelf that doubles as an ironing board, making it easy to iron clothes in small laundry rooms.",

      link: "https://www.google.com/"},

    { name: "Lint and Dust Cleaning Broom: A specially designed broom with bristles that effectively capture lint and dust from floors and surfaces in the laundry room.",

      link: "https://buy.stripe.com/bIYg0C7hTcMCcjC3dA"},

    { name: "Laundry Room Odor Neutralizer: An eco-friendly spray that eliminates odors in the laundry room without harmful chemicals.",

      link: "https://buy.stripe.com/eVadSugSt4g6gzSfZu"},

    { name: "Collapsible Hanging Clothes Organizer: A portable organizer with multiple compartments for sorting and storing clothes, perfect for small laundry spaces.",

      link: "https://buy.stripe.com/14k5lY8lX13UgzS00u"},

    { name: "Biodegradable Clothespins: Environmentally friendly clothespins made from biodegradable materials, reducing plastic waste.",

      link: "https://buy.stripe.com/cN201Eau5eUK5Ve29x"},

    { name: "Folding Laundry Table: A compact table with an ironing board surface that can be folded and stowed away when not in use.",

      link: "https://www.google.com/"},

    { name: "Laundry Room Odor Absorbers: Scented pouches or containers filled with natural odor-absorbing materials to keep the laundry room smelling fresh.",

      link: "https://buy.stripe.com/eVadSugSt4g6gzSfZu"},

    { name: "Folding Laundry Basket with Handles: A collapsible laundry basket with sturdy handles for easy carrying and storage.",

      link: "https://buy.stripe.com/aEU7u6dGh9AqcjCcNj"},

    { name: "Hanger Organizer: A wall-mounted organizer with hooks and shelves to keep hangers, detergents, and other laundry supplies neatly arranged.",

      link: "https://buy.stripe.com/14k5lY8lX13UgzS00u"},

    { name: "Laundry Room Safety Stool: A stable stool with non-slip surfaces to help users reach high shelves or access upper cabinets safely.",

      link: "https://buy.stripe.com/14k4hU1Xz5kabfy9B5"}

];





const automobileInventions = [

    { name: "Windshield Rain Repellent Coating: A cost-effective coating that improves visibility during rainy weather by repelling water from car windshields.",

      link: "https://buy.stripe.com/aEUdSu0Tv6oe83meWk"},

    { name: "Reusable Car Trash Bag: A durable, washable bag that hangs on the back of car seats, providing a convenient and eco-friendly way to manage car trash.",

      link: "https://buy.stripe.com/9AQg0C31D4g6cjC9Bj"},

    { name: "Non-Slip Car Floor Mats: Car floor mats made from non-slip, eco-friendly materials to enhance safety and protect car interiors.",

      link: "https://buy.stripe.com/bIYcOq0Tv13U6Zi6pP"},

    { name: "Car Seat Cover with Built-In Storage: A car seat cover that includes pockets and compartments for storing small items like snacks and essentials.",

      link: "https://buy.stripe.com/bIYcOq9q113UdnGdRy"},

    { name: "Solar-Powered Car Air Freshener: A solar-powered air freshener that keeps the car interior smelling fresh and pleasant without the need for batteries.",

      link: "https://www.google.com/"},

    { name: "Universal Car Cup Holder Organizer: An adjustable organizer that fits into car cup holders, providing storage space for keys, phones, and other small items.",

      link: "https://buy.stripe.com/7sIeWy1Xz6oe97qaFl"},

    { name: "Car Sunshade with Built-In Phone Charger: A sunshade for car windows with integrated solar panels that can charge your phone while parked.",

      link: "https://www.google.com/"},

    { name: "Car Door Edge Guards: Low-cost rubber guards that protect car doors from dings and scratches in tight parking spots.",

      link: "https://buy.stripe.com/fZeaGi59L27YcjCcOe"}

];



const workingOutInventions = [

    { name: "Portable Resistance Bands: A set of compact resistance bands that can be easily carried for on-the-go workouts.",

      link: "https://buy.stripe.com/7sI15IfOp5ka3N6dSj"},

    { name: "Exercise Mat with Built-In Cooling: An exercise mat with a cooling gel layer to keep you comfortable during workouts.",

      link: "https://buy.stripe.com/dR6cOqfOp3c2abu29C"},

    { name: "Adjustable Dumbbell Grips: Grips that can be attached to standard water bottles to turn them into adjustable dumbbells.",

      link: "https://www.google.com/"},

    { name: "Foldable Yoga Block: A collapsible yoga block for convenient storage and transport.",

      link: "https://buy.stripe.com/aEU5lYcCd9Aq97q7tY"},

    { name: "Resistance Band Door Anchor: An anchor that attaches resistance bands to doors for versatile home workouts.",

      link: "https://buy.stripe.com/bIY15I59LbIyfvO4hN"},

    { name: "Non-Slip Workout Gloves: Gloves with silicone grips for a secure hold during weightlifting and other exercises.",

      link: "https://buy.stripe.com/5kA9Ce1Xz8wmcjCcOk"}

];



const gardeningInventions = [

    { name: "Plant Watering Globe: A self-watering glass globe that provides a steady supply of water to potted plants.",

      link: "https://buy.stripe.com/7sI01E6dP4g697qcOl"},

    { name: "Garden Kneeler Seat: A padded kneeler that can also be flipped to become a comfortable garden seat.",

      link: "https://buy.stripe.com/7sIeWy8lX3c2erKcOm"},

    { name: "Collapsible Garden Bucket: A foldable bucket for collecting garden waste or carrying tools.",

      link: "https://buy.stripe.com/eVa6q245HfYOgzSbKj"},

    { name: "Seedling Starter Trays: Biodegradable seedling trays that can be planted directly into the ground.",

      link: "https://buy.stripe.com/3cs4hUfOp3c2gzScOo"},

    { name: "Plant Marker Stakes: Stakes with erasable labels for easy plant identification in the garden.",

      link: "https://buy.stripe.com/5kA8yaby93c283m5lX"},

    { name: "Garden Tool Organizer Apron: An apron with multiple pockets for carrying small gardening tools and accessories.",

      link: "https://buy.stripe.com/7sI01EeKlh2SerK4hU"}

];



function createButtonsWithListener(stringsArray) {



    const buy_button = document.getElementById('buy_now');

    const containerDiv = document.getElementById('categories_body');

    const outputDiv = document.getElementById('output');

    const header = document.querySelector('.main_head');

    const loading_circle = document.getElementById('loading-circle');



    stringsArray.forEach((text, index) => {

        const button = document.createElement('button');

        button.innerText = text;

        button.id = `button_${index + 1}`;



        // Attach a click event listener to the button

        button.addEventListener('click', function(){

            containerDiv.classList.toggle('hide_element');

            select_category(text, outputDiv, header, buy_button, loading_circle);

        } );



        containerDiv.appendChild(button);

    });

}



function findIndexInArray(text, array) {

    const index = array.indexOf(text);

    return index !== -1 ? index : -1;

}



function random_choic(array){

	const randomIndex = Math.floor(Math.random() * array.length);

	return randomIndex;

}



function select_category(s, outputDiv, header, buy_button, loading_circle){

    /*console.log(text);*/

    //outputDiv hide here

    var n = 0;

    var product_name = "product";

    stage = 1;

    outputDiv.innerText = "Generating a product...";

    loading_circle.classList.toggle('hide_element');

    switch ( findIndexInArray(s,categories) ){

        case 0:

            n = random_choic(kitchenInventions);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = kitchenInventions[n].name;

            product_name = kitchenInventions[n].name;

            buy_button.href = kitchenInventions[n].link;

            //outputDiv.innerText = kitchenInventions[random_choic(kitchenInventions) ];

            break;

        case 1:

            n = random_choic(beautyInventions);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = beautyInventions[n].name;

            product_name = beautyInventions[n].name;

            buy_button.href = beautyInventions[n].link;

            //outputDiv.innerText = beautyInventions[random_choic(beautyInventions) ];

            break;

        case 2:

            n = random_choic(outdoorGearInventions);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = outdoorGearInventions[n].name;

            product_name = outdoorGearInventions[n].name;

            buy_button.href = outdoorGearInventions[n].link;

            //outputDiv.innerText = outdoorGearInventions[random_choic(outdoorGearInventions) ];

            break;

        case 3:

            n = random_choic(bathroom);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = bathroom[n].name;

            product_name = bathroom[n].name;

            buy_button.href = bathroom[n].link;

            //outputDiv.innerText = bathroom[random_choic(bathroom) ];

            break;

        case 4:

            n = random_choic(school);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = school[n].name;

            product_name = school[n].name;

            buy_button.href = school[n].link;

            //outputDiv.innerText = school[random_choic(school) ];

            break;

        case 5:

            n = random_choic(laundryRoomInventions);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = laundryRoomInventions[n].name;

            product_name = laundryRoomInventions[n].name;

            buy_button.href = laundryRoomInventions[n].link;

            //outputDiv.innerText = laundryRoomInventions[random_choic(laundryRoomInventions) ];

            break;

        case 6:

            n = random_choic(bedroom);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = bedroom[n].name;

            product_name = bedroom[n].name;

            buy_button.href = bedroom[n].link;

            //outputDiv.innerText = bedroom[random_choic(bedroom) ];

            break;

        case 7:

            n = random_choic(workplaceItems);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = workplaceItems[n].name;

            product_name = workplaceItems[n].name;

            buy_button.href = workplaceItems[n].link;

            //outputDiv.innerText = workplaceItems[random_choic(workplaceItems) ];

            break;

        case 8:

            n = random_choic(automobileInventions);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = automobileInventions[n].name;

            product_name = automobileInventions[n].name;

            buy_button.href = automobileInventions[n].link;

            //outputDiv.innerText = automobileInventions[random_choic(automobileInventions) ];

            break;

        case 9:

            n = random_choic(workingOutInventions);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = workingOutInventions[n].name;

            product_name = workingOutInventions[n].name;

            buy_button.href = workingOutInventions[n].link;

            //outputDiv.innerText = workingOutInventions[random_choic(workingOutInventions) ];

            break;

        case 10:

            n = random_choic(gardeningInventions);

            //outputDiv.classList.toggle('hide_element');

            //header.textContent = gardeningInventions[n].name;

            product_name = gardeningInventions[n].name;

            buy_button.href = gardeningInventions[n].link;

            //outputDiv.innerText = gardeningInventions[random_choic(gardeningInventions) ];

            break;

    }

    //buy_button.classList.toggle('hide_element');

    load_icon(buy_button, product_name, outputDiv, loading_circle);

}



function load_icon(buy_button, product_name, outputDiv, loading_circle) {

    setTimeout(function() {

        stage = 2;

        outputDiv.innerText = 'Almost done';

        setTimeout(function() {

            stage = 3;

            outputDiv.innerText = product_name;

            loading_circle.classList.toggle('hide_element');

            buy_button.classList.toggle('hide_element');

        }, 2000);

    }, 2000);

}



window.onload=function donenow(){

	/*document.querySelector('#categories_hbutton').addEventListener('click', () => {

		document.querySelector('.menu').classList.toggle('open');

		document.querySelector('.menu_close').classList.toggle('show');

	});

	document.querySelector('.menu_close').addEventListener('click', () =>{

		document.querySelector('.menu').classList.toggle('open');

		document.querySelector('.menu_close').classList.toggle('show');

	});*/

    createButtonsWithListener(categories);

}



window.addEventListener('pageshow', function(event) {

    var page = event.target;

    const outputDiv = document.getElementById('output');

    const buy_button = document.getElementById('buy_now');

    const containerDiv = document.getElementById('categories_body');

    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {

        // Page is loaded from cache (navigated back)

        // Reset your page properties here

        if(stage == 3){

            outputDiv.innerText = 'Mold your world with AI. Select one of the keywords and let AI do the rest.';

            buy_button.classList.toggle('hide_element');

            containerDiv.classList.toggle('hide_element');

            stage = 0;

        }

        

    }

});