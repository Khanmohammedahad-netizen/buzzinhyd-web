export interface Project {
  slug: string
  title: string
  category: string
  client: string
  year: string
  description: string
  heroImage: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'breads-viennoiserie',
    title: 'Breads & Viennoiserie',
    category: 'Photography',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/pastry-butter-croissant.jpg',
    gallery: [
      '/images/pastry-cinnamon-roll.jpg',
      '/images/pastry-pain-raisin.jpg',
      '/images/pastry-chocolate-croissant.jpg',
      '/images/bts-studio-softbox.jpg',
    ],
    description: 'A complete photography campaign for Roast Cafe\'s artisan bakery range. A focused campaign highlighting the flaky textures and golden layers of freshly baked croissants and pastries.'
  },
  {
    slug: 'michelin-chef-collab',
    title: 'Creating Content with Michelin-Star Chef Joakim Prat',
    category: 'Chef Campaigns',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/chef-michelin-portrait.jpg',
    gallery: [
      '/images/bts-kitchen-shoot-wide.jpg',
      '/images/dessert-roast-cube.jpg',
      '/images/dessert-choux-stack.jpg',
      '/images/bts-live-kitchen-flash.jpg',
    ],
    description: `Some projects go beyond creating content, they become an opportunity to document craftsmanship. While serving as the in-house marketing agency for Roast, our team had the privilege of working closely with Michelin-star chef Joakim Prat during his exclusive collaboration with the cafe. Rather than simply documenting the event, our goal was to create visual content that reflected the precision, creativity, and artistry behind every dessert.

The Objective: Roast wanted to showcase more than just beautifully plated desserts. The objective was to communicate the experience of having a Michelin-star chef in the kitchen while strengthening the brand's premium positioning across digital platforms. Our role was to capture the collaboration in a way that felt authentic, elegant, and worthy of both the chef's reputation and Roast's brand identity.

Our Approach: Instead of focusing only on finished dishes, we documented the entire creative journey, behind-the-scenes moments of Chef Joakim Prat crafting his signature desserts, professional portfolio photographs highlighting the chef's personality and craftsmanship, premium food photography showcasing every dessert with attention to texture, detail, and presentation, cinematic short-form videos designed for Instagram Reels, and lifestyle and environmental shots that communicated the atmosphere of the collaboration. Every frame was planned to maintain a luxurious, editorial aesthetic while remaining engaging for digital audiences.

Creative Direction: Luxury hospitality deserves premium storytelling. We focused on clean compositions, natural movement, refined lighting, and minimal distractions so the craftsmanship remained the hero of every visual. Rather than creating conventional food content, we produced a visual narrative that connected viewers with the process, precision, and passion behind each dessert.

The Outcome: The collaboration allowed Roast to showcase a world-class culinary experience through premium visual content that resonated with its audience. For our team, it reinforced what we believe great hospitality marketing should achieve: not just showcasing products, but preserving moments that strengthen a brand's story. Working alongside Michelin-star chef Joakim Prat was an opportunity to create content that reflected excellence, authenticity, and attention to detail, qualities that continue to define the work we produce for restaurants, cafes, hotels, and hospitality brands.

Services Used: Hospitality Marketing, Food Photography, Restaurant Content Creation, Chef Portfolio Photography, Social Media Marketing, Instagram Reels, Brand Storytelling, Creative Direction. Industry: Hospitality, Restaurants, Fine Dining, Premium Cafes. Location: Hyderabad, India.`
  },
  {
    slug: 'holiday-chefs-table',
    title: 'The Holiday Chef\'s Table',
    category: 'Campaign',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/bts-fine-dining-spread.jpg',
    gallery: [
      '/images/bts-table-setting-elegant.jpg',
      '/images/chef-plating-dark.jpg',
      '/images/bts-ipad-pasta-flatlay.jpg',
    ],
    description: 'An intimate holiday dining event captured across stills and video, from the kitchen to the table.'
  },
  {
    slug: 'daily-creative-stories',
    title: 'Daily Creative Stories',
    category: 'Social Content',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/campaign-valentines-bear.jpg',
    gallery: [
      '/images/campaign-roast-new-desserts.jpg',
      '/images/campaign-valentines-bear.jpg',
      '/images/campaign-choco-strawberry.jpg',
      '/images/campaign-strawberry-display.jpg',
    ],
    description: `Keeping brands alive every single day. We produce daily Instagram stories: seasonal drops, product highlights, and creative campaigns, engineered to hold attention and drive repeat visits. Aesthetic content gets likes. Storytelling content gets customers.`
  },
  {
    slug: 'valentines-campaign',
    title: "Valentine's Edition",
    category: 'Campaign',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/campaign-valentines-bear.jpg',
    gallery: [
      '/images/campaign-roast-new-desserts.jpg',
      '/images/dessert-roast-oval.jpg',
    ],
    description: 'Concept, styling, photography and social content for a limited Valentine\'s Day chocolate collection.'
  },
  {
    slug: 'product-studio-series',
    title: 'Studio Product Series',
    category: 'Photography',
    client: 'Roast Cafe',
    year: '2024',
    heroImage: '/images/dessert-pistachio-ring.jpg',
    gallery: [
      '/images/dessert-creme-brulee-tart.jpg',
      '/images/dessert-mirror-tart.jpg',
      '/images/dessert-chocolate-eclair.jpg',
      '/images/dessert-roast-cube.jpg',
      '/images/dessert-choux-stack.jpg',
      '/images/bts-camera-closeup.jpg',
    ],
    description: 'High-conversion product photography for menus, delivery platforms, and social media. Clean, high-conversion product photography for menus, delivery platforms, and social media.'
  },
  {
    slug: 'feranoz-all-day-breakfast',
    title: 'Launching an All-Day Breakfast Experience',
    category: 'Campaign',
    client: 'Feranoz',
    year: '2024',
    heroImage: '/images/bts-table-setting-elegant.jpg',
    gallery: [
      '/images/bts-fine-dining-spread.jpg',
      '/images/chef-plating-dark.jpg',
      '/images/bts-ipad-pasta-flatlay.jpg',
    ],
    description: `The Challenge: Feranoz introduced an All-Day Breakfast Menu in a market where food promos lean on repetitive close-ups and product-heavy visuals. The goal wasn't just to announce availability, it was to create an emotional desire to experience slow mornings at Feranoz.

Our Creative Strategy: Rather than a traditional food commercial, we built a cinematic lifestyle narrative, a young woman walks in, pauses at the dessert display, settles into a cozy corner, browses the new menu, and enjoys a peaceful morning over coffee and breakfast. Food played a supporting role, not the lead. Instead of asking viewers to "buy breakfast," the reel invited them to imagine spending their morning at Feranoz.`
  },
]
