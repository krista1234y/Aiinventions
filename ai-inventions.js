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
    link: "https://www.google.com/"},
    { name: "Expandable Under-Sink Organizer with Adjustable Shelves: An organizer with adjustable shelves and compartments for maximizing storage space under the kitchen sink.",
    link: "https://www.google.com/"},
    { name: "Adjustable Rolling Cookie Cutter with Interchangeable Shapes: A rolling cookie cutter with interchangeable discs to create various cookie shapes and sizes.",
    link: "https://www.google.com/"},
    { name: "Collapsible Funnel with Integrated Strainer: A collapsible silicone funnel with an attached strainer for filtering liquids directly into bottles or jars.",
    link: "https://www.google.com/"}
];

const beautyInventions = [
    { name: "Scented Body Powder: Develop scented body powders in various fragrances for a luxurious and refreshing experience.",
    link: "https://www.google.com/"},
    { name: "Multi-Use Makeup Sticks: Design multi-purpose makeup sticks that can be used for eyes, lips, and cheeks, providing versatility for consumers.",
    link: "https://www.google.com/"},
    { name: "Natural Fiber Sheet Masks: Sheet masks made from biodegradable plant-based materials infused with natural, skin-loving ingredients.",
    link: "https://www.google.com/"},
    { name: "Customizable Fragrance Blotters: Fragrance blotters infused with essential oils, allowing users to mix and match scents for a personalized fragrance experience.",
    link: "https://www.google.com/"},
    { name: "Exfoliating Foot Mask Socks: Socks infused with exfoliating ingredients like fruit acids and natural extracts for a gentle foot peel treatment.",
    link: "https://www.google.com/"},
    { name: "Customizable Lip Balm Kit with Natural Extracts: A kit containing a base lip balm and various natural extracts for users to create their own custom lip balm flavors.",
    link: "https://www.google.com/"},
    { name: "Natural Fiber Makeup Sponge with Integrated Skincare Serum: A makeup sponge made from natural fibers with an integrated serum core, providing both makeup application and skincare benefits.",
    link: "https://www.google.com/"},
    { name: "Reusable Silk Pillowcase with Embedded Silk Proteins: A silk pillowcase with silk proteins woven into the fabric to promote healthy hair and skin while you sleep.",
    link: "https://www.google.com/"},
    { name: "Flower Petal-Infused Bath Bombs: Bath bombs made with dried flower petals and natural, skin-friendly ingredients for a luxurious and relaxing bath experience.",
    link: "https://www.google.com/"},
    { name: "Customizable Clay Face Mask Palette: A palette containing various natural clay powders, allowing users to mix their own custom face masks for different skin needs.",
    link: "https://www.google.com/"},
    { name: "Herbal-Infused Bath Tea Bags with Reusable Mesh Infuser: Bath tea bags filled with a blend of dried herbs and flowers that can be steeped in warm water for a fragrant and skin-soothing bath.",
    link: "https://www.google.com/"},
    { name: "Aromatherapy Scented Sachets for Drawers and Closets: Sachets infused with essential oils and dried botanicals, providing a natural and aromatic way to freshen up drawers and closets.",
    link: "https://www.google.com/"}
];
const outdoorGearInventions = [
   { name: "Adjustable Paracord Hammock with Integrated Insect Netting - A hammock with adjustable suspension using paracord, and integrated insect netting to provide a bug-free resting experience.",
   link: "https://www.google.com/"},
   { name: "Solar-Powered Lantern with Inflatable Body for Compact Storage - A lantern powered by solar energy, featuring an inflatable body that can be collapsed for easy storage and transport.",
   link: "https://www.google.com/"},
   { name: "Biodegradable Mosquito-Repellent Wristbands with Plant-Based Formulation - Wristbands made from biodegradable materials infused with a natural mosquito-repelling formulation for outdoor enthusiasts.",
   link: "https://www.google.com/"},
   { name: "Multi-Tool Hiking Pole with Integrated Compass and Detachable Knife - A hiking pole with a built-in compass for navigation and a detachable knife for versatile outdoor use.",
   link: "https://www.google.com/"},
   { name: "Scented Fire Starter Logs with Embedded Natural Fragrances - Fire starter logs infused with natural scents for a pleasant aroma while lighting fires.",
   link: "https://www.google.com/"},
   { name: "Self-Inflating Sleeping Pad with Built-In Pillow and Insulated Side Panels - A lightweight sleeping pad that self-inflates for comfort, featuring an integrated pillow and insulated side panels for added warmth.",
   link: "https://www.google.com/"},
   { name: "Floating Hammock: A hammock designed for use on water, with a buoyant frame that keeps it afloat, allowing users to relax on lakes or calm rivers.",
   link: "https://www.google.com/"},
   { name: "Adaptive Tent: A tent with a flexible frame that can adjust to various terrains, providing stability on uneven surfaces.",
   link: "https://www.google.com/"}
];
const bathroom = [
    { name: "Water-Saving Showerhead Attachment: An attachment for showerheads that reduces water consumption without compromising water pressure.",
    link: "https://www.google.com/"},
    { name: "Biodegradable Toilet Brush: A toilet brush made from eco-friendly materials that naturally decompose over time.",
    link: "https://www.google.com/"},
    { name: "Mildew-Resistant Shower Curtain: A shower curtain treated with a special coating to prevent mildew growth, reducing the need for frequent cleaning.",
    link: "https://www.google.com/"},
    { name: "Toothbrush Sanitizing Holder: A holder that uses UV-C light to sanitize toothbrushes, ensuring oral hygiene.",
    link: "https://www.google.com/"},
    { name: "Bamboo Bath Mat: A bath mat made from sustainable bamboo that is both anti-slip and environmentally friendly.",
    link: "https://www.google.com/"},
    { name: "Scented Toilet Paper: Toilet paper with natural scents to enhance the bathroom experience.",
    link: "https://www.google.com/"},
    { name: "Dual-Purpose Faucet Aerator: An aerator that doubles as a water filter, providing clean drinking water directly from the faucet.",
    link: "https://www.google.com/"},
    { name: "Toilet Seat Lifter: A foot-operated device that lifts and lowers the toilet seat, promoting hygiene and convenience.",
    link: "https://www.google.com/"},
    { name: "Toilet Night Light with Motion Sensor: This is a small LED light that attaches to the rim of your toilet bowl. It turns on automatically when it senses motion, providing a soft, ambient glow in the dark.",
    link: "https://www.google.com/"},
    { name: "Water-Powered Toothbrush: This toothbrush uses a small, built-in water reservoir to power its bristle vibrations. It's a great eco-friendly alternative to electric toothbrushes.",
    link: "https://www.google.com/"},
    { name: "Shower Head with Built-In Bluetooth Speaker: This shower head comes with a built-in speaker that connects to your phone via Bluetooth. You can enjoy your favorite tunes or podcasts while getting clean.",
    link: "https://www.google.com/"}
];
const school = [
    { name: "Eco-Friendly School Supplies Set: A set of school supplies made from recycled and sustainable materials, including pencils, notebooks, and binders.",
    link: "https://www.google.com/"},
    { name: "Homework Organizer App: An app that helps students organize their homework, assignments, and study schedules efficiently.",
    link: "https://www.google.com/"},
    { name: "Interactive Whiteboard Eraser: A smart eraser for interactive whiteboards that also functions as a stylus for touchscreen interaction.",
    link: "https://www.google.com/"},
    { name: "Solar-Powered Backpack Charger: A backpack with integrated solar panels to charge electronic devices like smartphones and tablets on the go.",
    link: "https://www.google.com/"},
    { name: "Noise-Canceling Study Pods: Portable, noise-canceling pods for students to create a quiet and focused study environment anywhere.",
    link: "https://www.google.com/"},
    { name: "Ergonomic Classroom Chairs: Ergonomically designed chairs that provide comfort and support for students during long hours of sitting.",
    link: "https://www.google.com/"},
    { name: "Homemade Glue from Natural Ingredients: A recipe for making eco-friendly glue using household ingredients like flour and water.",
    link: "https://www.google.com/"},
    { name: "Reusable Lunchbox Set: A set of reusable lunch containers and utensils to reduce single-use plastic waste in school lunches.",
    link: "https://www.google.com/"}
];
const bedroom = [
   { name: "Space-Saving Bedside Table: A compact, wall-mounted bedside table with integrated storage for books and small items.",
     link: "https://www.google.com/"},
   { name: "Under-Bed Shoe Organizer: A fabric organizer that fits under the bed, providing convenient storage for shoes and accessories.",
     link: "https://www.google.com/"},
   { name: "Sleep-Enhancing Aroma Diffuser: A diffuser that releases calming scents to improve sleep quality and relaxation in the bedroom.",
     link: "https://www.google.com/"},
   { name: "Ergonomic Pillow for Neck Support: A specially designed pillow that offers optimal neck support and comfort for a restful sleep.",
     link: "https://www.google.com/"},
   { name: "Bedroom Plant Wall: A wall-mounted plant holder for easy access to fresh air-purifying plants in the bedroom.",
     link: "https://www.google.com/"},
   { name: "LED Bookshelf Lighting: Energy-efficient LED lighting strips that can be installed on bookshelves for better visibility and ambiance.",
     link: "https://www.google.com/"},
   { name: "Anti-Allergen Bedding: Hypoallergenic bedding sets that prevent allergies and provide a comfortable night's sleep.",
     link: "https://www.google.com/"},
   { name: "Smartphone Charging Nightstand: A nightstand with built-in wireless charging for smartphones and tablets.",
     link: "https://www.google.com/"}
];
const workplaceItems = [
    { name: "Ergonomic Standing Desk Converter: A cost-effective converter that turns a regular desk into an ergonomic standing desk for improved posture.",
      link: "https://www.google.com/"},
    { name: "Desk Drawer Organizer: A customizable organizer that fits in desk drawers, helping to keep pens, papers, and small items neatly arranged.",
      link: "https://www.google.com/"},
    { name: "Noise-Canceling Cubicle Divider: A portable, noise-canceling partition for open office spaces, providing privacy and focus.",
      link: "https://www.google.com/"},
    { name: "Eco-Friendly Office Supplies: Sustainable office supplies made from recycled materials, including pens, notebooks, and binders.",
      link: "https://www.google.com/"},
    { name: "Wireless Charging Mouse Pad: A mouse pad with integrated wireless charging for smartphones and other devices.",
      link: "https://www.google.com/"},
    { name: "Desk Plant Air Purifier: A small desktop plant holder with air-purifying plants to improve air quality in the workplace.",
      link: "https://www.google.com/"},
    { name: "Adjustable Monitor Stand: A stand that elevates computer monitors to eye level, reducing strain on the neck and improving ergonomics.",
      link: "https://www.google.com/"},
    { name: "Cable Management Clips: Adhesive clips that keep cables and wires organized and prevent tangling on the desk.",
      link: "https://www.google.com/"}
];
const laundryRoomInventions = [
    { name: "Eco-Friendly Laundry Drying Rack: A collapsible drying rack made from sustainable materials, designed to save energy and space.",
      link: "https://www.google.com/"},
    { name: "Stain-Resistant Laundry Basket: A laundry basket with a special coating that repels stains and odors, keeping it clean and fresh.",
      link: "https://www.google.com/"},
    { name: "Folding Ironing Board Shelf: A space-saving shelf that doubles as an ironing board, making it easy to iron clothes in small laundry rooms.",
      link: "https://www.google.com/"},
    { name: "Lint and Dust Cleaning Broom: A specially designed broom with bristles that effectively capture lint and dust from floors and surfaces in the laundry room.",
      link: "https://www.google.com/"},
    { name: "Laundry Room Odor Neutralizer: An eco-friendly spray that eliminates odors in the laundry room without harmful chemicals.",
      link: "https://www.google.com/"},
    { name: "Collapsible Hanging Clothes Organizer: A portable organizer with multiple compartments for sorting and storing clothes, perfect for small laundry spaces.",
      link: "https://www.google.com/"},
    { name: "Biodegradable Clothespins: Environmentally friendly clothespins made from biodegradable materials, reducing plastic waste.",
      link: "https://www.google.com/"},
    { name: "Folding Laundry Table: A compact table with an ironing board surface that can be folded and stowed away when not in use.",
      link: "https://www.google.com/"},
    { name: "Laundry Room Odor Absorbers: Scented pouches or containers filled with natural odor-absorbing materials to keep the laundry room smelling fresh.",
      link: "https://www.google.com/"},
    { name: "Folding Laundry Basket with Handles: A collapsible laundry basket with sturdy handles for easy carrying and storage.",
      link: "https://www.google.com/"},
    { name: "Hanger Organizer: A wall-mounted organizer with hooks and shelves to keep hangers, detergents, and other laundry supplies neatly arranged.",
      link: "https://www.google.com/"},
    { name: "Laundry Room Safety Stool: A stable stool with non-slip surfaces to help users reach high shelves or access upper cabinets safely.",
      link: "https://www.google.com/"}
];


const automobileInventions = [
    { name: "Windshield Rain Repellent Coating: A cost-effective coating that improves visibility during rainy weather by repelling water from car windshields.",
      link: "https://www.google.com/"},
    { name: "Reusable Car Trash Bag: A durable, washable bag that hangs on the back of car seats, providing a convenient and eco-friendly way to manage car trash.",
      link: "https://www.google.com/"},
    { name: "Non-Slip Car Floor Mats: Car floor mats made from non-slip, eco-friendly materials to enhance safety and protect car interiors.",
      link: "https://www.google.com/"},
    { name: "Car Seat Cover with Built-In Storage: A car seat cover that includes pockets and compartments for storing small items like snacks and essentials.",
      link: "https://www.google.com/"},
    { name: "Solar-Powered Car Air Freshener: A solar-powered air freshener that keeps the car interior smelling fresh and pleasant without the need for batteries.",
      link: "https://www.google.com/"},
    { name: "Universal Car Cup Holder Organizer: An adjustable organizer that fits into car cup holders, providing storage space for keys, phones, and other small items.",
      link: "https://www.google.com/"},
    { name: "Car Sunshade with Built-In Phone Charger: A sunshade for car windows with integrated solar panels that can charge your phone while parked.",
      link: "https://www.google.com/"},
    { name: "Car Door Edge Guards: Low-cost rubber guards that protect car doors from dings and scratches in tight parking spots.",
      link: "https://www.google.com/"}
];

const workingOutInventions = [
    { name: "Portable Resistance Bands: A set of compact resistance bands that can be easily carried for on-the-go workouts.",
      link: "https://www.google.com/"},
    { name: "Exercise Mat with Built-In Cooling: An exercise mat with a cooling gel layer to keep you comfortable during workouts.",
      link: "https://www.google.com/"},
    { name: "Adjustable Dumbbell Grips: Grips that can be attached to standard water bottles to turn them into adjustable dumbbells.",
      link: "https://www.google.com/"},
    { name: "Foldable Yoga Block: A collapsible yoga block for convenient storage and transport.",
      link: "https://www.google.com/"},
    { name: "Resistance Band Door Anchor: An anchor that attaches resistance bands to doors for versatile home workouts.",
      link: "https://www.google.com/"},
    { name: "Non-Slip Workout Gloves: Gloves with silicone grips for a secure hold during weightlifting and other exercises.",
      link: "https://www.google.com/"}
];

const gardeningInventions = [
    { name: "Plant Watering Globe: A self-watering glass globe that provides a steady supply of water to potted plants.",
      link: "https://www.google.com/"},
    { name: "Garden Kneeler Seat: A padded kneeler that can also be flipped to become a comfortable garden seat.",
      link: "https://www.google.com/"},
    { name: "Collapsible Garden Bucket: A foldable bucket for collecting garden waste or carrying tools.",
      link: "https://www.google.com/"},
    { name: "Seedling Starter Trays: Biodegradable seedling trays that can be planted directly into the ground.",
      link: "https://www.google.com/"},
    { name: "Plant Marker Stakes: Stakes with erasable labels for easy plant identification in the garden.",
      link: "https://www.google.com/"},
    { name: "Garden Tool Organizer Apron: An apron with multiple pockets for carrying small gardening tools and accessories.",
      link: "https://www.google.com/"}
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