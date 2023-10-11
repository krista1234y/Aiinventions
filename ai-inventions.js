// Disclaimer: The following JavaScript code has been generated or modified by ChatGPT, an AI language model created by OpenAI. While efforts have been made to ensure the functionality and correctness of the code, use it at your own discretion. Verify critical aspects independently and consider the limitations of automated content generation.
const categories = ["Kitchen Inventions", "Beauty Inventions", "Outdoor Gear Inventions", "Bathroom", "School", 
	"Laundry room", "Bedroom", "Workplace items", "Automobile inventions", "Working out inventions", "Gardening inventions"];

const kitchenInventions = [
    "Magnetic Utensil Holder for Stove: A magnetic strip that attaches to the stove or range hood, providing a convenient spot to hang cooking utensils.",
    "Compact Handheld Vegetable Spiralizer: A small, easy-to-use tool for creating spiralized vegetables, promoting healthy eating habits.",
    "Non-Slip Pot and Pan Handle Covers: Heat-resistant silicone covers that slide onto handles, providing a secure grip and preventing burns.",
    "Adjustable Measuring Cup for Dry Ingredients: A measuring cup with an adjustable slider for precise measurement of dry ingredients, eliminating the need for multiple cups.",
    "Expandable Under-Sink Organizer with Adjustable Shelves: An organizer with adjustable shelves and compartments for maximizing storage space under the kitchen sink.",
    "Adjustable Rolling Cookie Cutter with Interchangeable Shapes: A rolling cookie cutter with interchangeable discs to create various cookie shapes and sizes.",
    "Collapsible Funnel with Integrated Strainer: A collapsible silicone funnel with an attached strainer for filtering liquids directly into bottles or jars.",
    "Herb Stripper: This tool looks like a mini comb with small, sharp edges. It allows you to easily strip the leaves from herbs like rosemary or thyme without the hassle of doing it by hand.",
    "Avocado Slicer: This gadget has a blade for cutting through the avocado's skin, a pit remover, and a slicer to create perfectly even avocado slices for salads and sandwiches.",
    "Citrus Sprayer: Shaped like a small pump, this invention allows you to spray citrus juice directly from the fruit. Simply insert it into the fruit and pump to release the juice.",
    "Egg Cuber: This device turns boiled eggs into perfect cubes. It's great for creating unique presentations or for making fun, bite-sized snacks.",
    "Butter Spreader Knife: This knife has multiple small perforations along the blade. It allows you to easily spread cold butter on bread without tearing it.",
    "Bagel Guillotine: Shaped like a miniature guillotine, this device allows you to slice bagels perfectly in half without the risk of uneven cuts.",
    "Corn Stripper: This tool resembles a peeler with jagged edges. It effortlessly removes kernels from the cob, saving you time and reducing mess.",
    "Silicone Food Huggers: These are silicone covers designed to fit over cut fruits and vegetables. They help keep them fresh for longer and reduce food waste.",
    "Onion Holder: This gadget looks like a small fork with sharp prongs. It holds the onion securely in place while you slice, preventing slips and cuts.",
    "Non-Stick Pancake Pen: Resembling a large syringe, this tool allows you to dispense pancake batter in precise shapes or designs. It's great for creative pancake art.",
    "Rotary Cheese Grater: This grater has a handle that you turn to grate cheese. It's faster and more convenient than traditional box graters.",
    "Spoon Rest with Drip Catcher: This spoon rest has a built-in drip catcher to collect any drips from your stirring spoon, keeping your counter clean."	
];

const beautyInventions = [
    "Scented Body Powder: Develop scented body powders in various fragrances for a luxurious and refreshing experience.",
    "Multi-Use Makeup Sticks: Design multi-purpose makeup sticks that can be used for eyes, lips, and cheeks, providing versatility for consumers.",
    "Natural Fiber Sheet Masks: Sheet masks made from biodegradable plant-based materials infused with natural, skin-loving ingredients.",
    "Customizable Fragrance Blotters: Fragrance blotters infused with essential oils, allowing users to mix and match scents for a personalized fragrance experience.",
    "Exfoliating Foot Mask Socks: Socks infused with exfoliating ingredients like fruit acids and natural extracts for a gentle foot peel treatment.",
    "Customizable Lip Balm Kit with Natural Extracts: A kit containing a base lip balm and various natural extracts for users to create their own custom lip balm flavors.",
    "Natural Fiber Makeup Sponge with Integrated Skincare Serum: A makeup sponge made from natural fibers with an integrated serum core, providing both makeup application and skincare benefits.",
    "Reusable Silk Pillowcase with Embedded Silk Proteins: A silk pillowcase with silk proteins woven into the fabric to promote healthy hair and skin while you sleep.",
    "Flower Petal-Infused Bath Bombs: Bath bombs made with dried flower petals and natural, skin-friendly ingredients for a luxurious and relaxing bath experience.",
    "Customizable Clay Face Mask Palette: A palette containing various natural clay powders, allowing users to mix their own custom face masks for different skin needs.",
    "Herbal-Infused Bath Tea Bags with Reusable Mesh Infuser: Bath tea bags filled with a blend of dried herbs and flowers that can be steeped in warm water for a fragrant and skin-soothing bath.",
    "Aromatherapy Scented Sachets for Drawers and Closets: Sachets infused with essential oils and dried botanicals, providing a natural and aromatic way to freshen up drawers and closets."
    "Nail Polish Holder Ring: They provide a convenient way to keep your nail polish bottle within reach while painting your nails.",
    "Hair Dryer Stand: A hands free stand for your hairdryer.",
    "Eyebrow Stencil Kit: Eyebrow stencil kit, including reusable adhesive stencils.",
    "Brush Cleaning Mat: Makeup Brush Cleaning mat made from silicone.",
    "Hair Velcro Rollers with Built in Combs: Hair rollers with embedded combs to give your locks a shiny lucious curl.",
    "Brow Shaper Tool: A small, handheld tool with a precision blade designed for shaping and grooming eyebrows. It allows for precise hair removal without the need for waxing or threading.",
    "Facial Ice Roller: A handheld roller filled with gel or water that you freeze. It's designed to be rolled over the face to reduce puffiness, calm inflammation, and improve circulation.",
    "Hair Diffusing Socks: Specially designed socks with a unique fabric that diffuses heat from a hair dryer. They're used to achieve natural, voluminous curls without causing frizz.",
    "Eyeliner Stencil Guide: Reusable adhesive stencils that help create perfectly even and symmetrical eyeliner wings or other eyeliner styles.",
    "Shampoo Massaging Brush: A handheld brush with soft silicone bristles designed to massage and exfoliate the scalp while shampooing. It promotes healthy hair growth and can help remove buildup.",
    "Silicone Makeup Sponge: A non-porous, silicone sponge designed for applying and blending makeup. It prevents product absorption, ensuring a flawless finish and saving makeup."
];
const outdoorGearInventions = [
   "Adjustable Paracord Hammock with Integrated Insect Netting - A hammock with adjustable suspension using paracord, and integrated insect netting to provide a bug-free resting experience.",
   "Solar-Powered Lantern with Inflatable Body for Compact Storage - A lantern powered by solar energy, featuring an inflatable body that can be collapsed for easy storage and transport.",
   "Biodegradable Mosquito-Repellent Wristbands with Plant-Based Formulation - Wristbands made from biodegradable materials infused with a natural mosquito-repelling formulation for outdoor enthusiasts.",
   "Multi-Tool Hiking Pole with Integrated Compass and Detachable Knife - A hiking pole with a built-in compass for navigation and a detachable knife for versatile outdoor use.",
   "Scented Fire Starter Logs with Embedded Natural Fragrances - Fire starter logs infused with natural scents for a pleasant aroma while lighting fires.",
   "Self-Inflating Sleeping Pad with Built-In Pillow and Insulated Side Panels - A lightweight sleeping pad that self-inflates for comfort, featuring an integrated pillow and insulated side panels for added warmth.",
   "Floating Hammock: A hammock designed for use on water, with a buoyant frame that keeps it afloat, allowing users to relax on lakes or calm rivers.",
   "Adaptive Tent: A tent with a flexible frame that can adjust to various terrains, providing stability on uneven surfaces."
];
const bathroom = [
    "Water-Saving Showerhead Attachment: An attachment for showerheads that reduces water consumption without compromising water pressure.",
    "Biodegradable Toilet Brush: A toilet brush made from eco-friendly materials that naturally decompose over time.",
    "Mildew-Resistant Shower Curtain: A shower curtain treated with a special coating to prevent mildew growth, reducing the need for frequent cleaning.",
    "Toothbrush Sanitizing Holder: A holder that uses UV-C light to sanitize toothbrushes, ensuring oral hygiene.",
    "Bamboo Bath Mat: A bath mat made from sustainable bamboo that is both anti-slip and environmentally friendly.",
    "Scented Toilet Paper: Toilet paper with natural scents to enhance the bathroom experience.",
    "Dual-Purpose Faucet Aerator: An aerator that doubles as a water filter, providing clean drinking water directly from the faucet.",
    "Toilet Seat Lifter: A foot-operated device that lifts and lowers the toilet seat, promoting hygiene and convenience.",
];
const school = [
    "Eco-Friendly School Supplies Set: A set of school supplies made from recycled and sustainable materials, including pencils, notebooks, and binders.",
    "Homework Organizer App: An app that helps students organize their homework, assignments, and study schedules efficiently.",
    "Interactive Whiteboard Eraser: A smart eraser for interactive whiteboards that also functions as a stylus for touchscreen interaction.",
    "Solar-Powered Backpack Charger: A backpack with integrated solar panels to charge electronic devices like smartphones and tablets on the go.",
    "Noise-Canceling Study Pods: Portable, noise-canceling pods for students to create a quiet and focused study environment anywhere.",
    "Ergonomic Classroom Chairs: Ergonomically designed chairs that provide comfort and support for students during long hours of sitting.",
    "Homemade Glue from Natural Ingredients: A recipe for making eco-friendly glue using household ingredients like flour and water.",
    "Reusable Lunchbox Set: A set of reusable lunch containers and utensils to reduce single-use plastic waste in school lunches."
];
const bedroom = [
   "Space-Saving Bedside Table: A compact, wall-mounted bedside table with integrated storage for books and small items.",
   "Under-Bed Shoe Organizer: A fabric organizer that fits under the bed, providing convenient storage for shoes and accessories.",
   "Sleep-Enhancing Aroma Diffuser: A diffuser that releases calming scents to improve sleep quality and relaxation in the bedroom.",
   "Ergonomic Pillow for Neck Support: A specially designed pillow that offers optimal neck support and comfort for a restful sleep.",
   "Bedroom Plant Wall: A wall-mounted plant holder for easy access to fresh air-purifying plants in the bedroom.",
   "LED Bookshelf Lighting: Energy-efficient LED lighting strips that can be installed on bookshelves for better visibility and ambiance.",
   "Anti-Allergen Bedding: Hypoallergenic bedding sets that prevent allergies and provide a comfortable night's sleep.",
   "Smartphone Charging Nightstand: A nightstand with built-in wireless charging for smartphones and tablets.",
];
const workplaceItems = [
    "Ergonomic Standing Desk Converter: A cost-effective converter that turns a regular desk into an ergonomic standing desk for improved posture.",
    "Desk Drawer Organizer: A customizable organizer that fits in desk drawers, helping to keep pens, papers, and small items neatly arranged.",
    "Noise-Canceling Cubicle Divider: A portable, noise-canceling partition for open office spaces, providing privacy and focus.",
    "Eco-Friendly Office Supplies: Sustainable office supplies made from recycled materials, including pens, notebooks, and binders.",
    "Wireless Charging Mouse Pad: A mouse pad with integrated wireless charging for smartphones and other devices.",
    "Desk Plant Air Purifier: A small desktop plant holder with air-purifying plants to improve air quality in the workplace.",
    "Adjustable Monitor Stand: A stand that elevates computer monitors to eye level, reducing strain on the neck and improving ergonomics.",
    "Cable Management Clips: Adhesive clips that keep cables and wires organized and prevent tangling on the desk."
];
const laundryRoomInventions = [
    "Eco-Friendly Laundry Drying Rack: A collapsible drying rack made from sustainable materials, designed to save energy and space.",
    "Stain-Resistant Laundry Basket: A laundry basket with a special coating that repels stains and odors, keeping it clean and fresh.",
    "Folding Ironing Board Shelf: A space-saving shelf that doubles as an ironing board, making it easy to iron clothes in small laundry rooms.",
    "Lint and Dust Cleaning Broom: A specially designed broom with bristles that effectively capture lint and dust from floors and surfaces in the laundry room.",
    "Laundry Room Odor Neutralizer: An eco-friendly spray that eliminates odors in the laundry room without harmful chemicals.",
    "Collapsible Hanging Clothes Organizer: A portable organizer with multiple compartments for sorting and storing clothes, perfect for small laundry spaces.",
    "Biodegradable Clothespins: Environmentally friendly clothespins made from biodegradable materials, reducing plastic waste.",
    "Folding Laundry Table: A compact table with an ironing board surface that can be folded and stowed away when not in use.",
    "Laundry Room Odor Absorbers: Scented pouches or containers filled with natural odor-absorbing materials to keep the laundry room smelling fresh.",
    "Folding Laundry Basket with Handles: A collapsible laundry basket with sturdy handles for easy carrying and storage.",
    "Hanger Organizer: A wall-mounted organizer with hooks and shelves to keep hangers, detergents, and other laundry supplies neatly arranged.",
    "Laundry Room Safety Stool: A stable stool with non-slip surfaces to help users reach high shelves or access upper cabinets safely."
];

const automobileInventions = [
    "Windshield Rain Repellent Coating: A cost-effective coating that improves visibility during rainy weather by repelling water from car windshields.",
    "Reusable Car Trash Bag: A durable, washable bag that hangs on the back of car seats, providing a convenient and eco-friendly way to manage car trash.",
    "Non-Slip Car Floor Mats: Car floor mats made from non-slip, eco-friendly materials to enhance safety and protect car interiors.",
    "Car Seat Cover with Built-In Storage: A car seat cover that includes pockets and compartments for storing small items like snacks and essentials.",
    "Solar-Powered Car Air Freshener: A solar-powered air freshener that keeps the car interior smelling fresh and pleasant without the need for batteries.",
    "Universal Car Cup Holder Organizer: An adjustable organizer that fits into car cup holders, providing storage space for keys, phones, and other small items.",
    "Car Sunshade with Built-In Phone Charger: A sunshade for car windows with integrated solar panels that can charge your phone while parked.",
    "Car Door Edge Guards: Low-cost rubber guards that protect car doors from dings and scratches in tight parking spots."
];

const workingOutInventions = [
    "Portable Resistance Bands: A set of compact resistance bands that can be easily carried for on-the-go workouts.",
    "Exercise Mat with Built-In Cooling: An exercise mat with a cooling gel layer to keep you comfortable during workouts.",
    "Adjustable Dumbbell Grips: Grips that can be attached to standard water bottles to turn them into adjustable dumbbells.",
    "Foldable Yoga Block: A collapsible yoga block for convenient storage and transport.",
    "Resistance Band Door Anchor: An anchor that attaches resistance bands to doors for versatile home workouts.",
    "Non-Slip Workout Gloves: Gloves with silicone grips for a secure hold during weightlifting and other exercises.",
];

const gardeningInventions = [
    "Plant Watering Globe: A self-watering glass globe that provides a steady supply of water to potted plants.",
    "Garden Kneeler Seat: A padded kneeler that can also be flipped to become a comfortable garden seat.",
    "Collapsible Garden Bucket: A foldable bucket for collecting garden waste or carrying tools.",
    "Seedling Starter Trays: Biodegradable seedling trays that can be planted directly into the ground.",
    "Plant Marker Stakes: Stakes with erasable labels for easy plant identification in the garden.",
    "Garden Tool Organizer Apron: An apron with multiple pockets for carrying small gardening tools and accessories.",
];

function createButtonsWithListener(stringsArray) {
    const containerDiv = document.getElementById('categories_body');
    const outputDiv = document.getElementById('output');

    stringsArray.forEach((text, index) => {
        const button = document.createElement('button');
        button.innerText = text;
        button.id = `button_${index + 1}`;

        // Attach a click event listener to the button
        button.addEventListener('click', function() {
            console.log(text);
            switch ( findIndexInArray(text,categories) ){
            	case 0:
            		outputDiv.innerText = kitchenInventions[random_choic(kitchenInventions) ];
            		break;
            	case 1:
            		outputDiv.innerText = beautyInventions[random_choic(beautyInventions) ];
            		break;
            	case 2:
            		outputDiv.innerText = outdoorGearInventions[random_choic(outdoorGearInventions) ];
            		break;
            	case 3:
            		outputDiv.innerText = bathroom[random_choic(bathroom) ];
            		break;
            	case 4:
            		outputDiv.innerText = school[random_choic(school) ];
            		break;
            	case 5:
            		outputDiv.innerText = laundryRoomInventions[random_choic(laundryRoomInventions) ];
            		break;
            	case 6:
            		outputDiv.innerText = bedroom[random_choic(bedroom) ];
            		break;
            	case 7:
            		outputDiv.innerText = workplaceItems[random_choic(workplaceItems) ];
            		break;
            	case 8:
            		outputDiv.innerText = automobileInventions[random_choic(automobileInventions) ];
            		break;
            	case 9:
            		outputDiv.innerText = workingOutInventions[random_choic(workingOutInventions) ];
            		break;
            	case 10:
            		outputDiv.innerText = gardeningInventions[random_choic(gardeningInventions) ];
            		break;
            }
        });

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
