export interface MaterialsLocation {
  slug: string;
  name: string;
  region: string;
  description: string;
}

export const darEsSalaamLocations: MaterialsLocation[] = [
  { slug: 'kinondoni', name: 'Kinondoni', region: 'Dar es Salaam', description: 'Kinondoni district covering Magomeni, Mikocheni, Sinza, Kawe, Kunduchi, Tegeta and surrounding areas along Bagamoyo Road' },
  { slug: 'ubungo', name: 'Ubungo', region: 'Dar es Salaam', description: 'Ubungo district covering Kimara, Mbezi, Gongo la Mboto, Ubungo Makati and surrounding areas along Morogoro Road' },
  { slug: 'ilala', name: 'Ilala', region: 'Dar es Salaam', description: 'Ilala district covering Kariakoo, Upanga, Buguruni, Ukonga, Pugu and central Dar es Salaam areas' },
  { slug: 'temeke', name: 'Temeke', region: 'Dar es Salaam', description: 'Temeke district covering Mbagala, Kurasini, Mtoni, Chamazi and southern Dar es Salaam areas along Kilwa Road' },
  { slug: 'kigamboni', name: 'Kigamboni', region: 'Dar es Salaam', description: 'Kigamboni district covering the Kigamboni peninsula, Vijibweni, Tungi, Mjimwema and surrounding areas' },
  { slug: 'bagamoyo', name: 'Bagamoyo', region: 'Dar es Salaam', description: 'Bagamoyo town and surrounding areas north of Dar es Salaam along the Bagamoyo Road corridor' },
  { slug: 'kibaha', name: 'Kibaha', region: 'Dar es Salaam', description: 'Kibaha town and surrounding areas along the Morogoro Road corridor west of Dar es Salaam' },
];

export const zanzibarLocations: MaterialsLocation[] = [
  { slug: 'zanzibar', name: 'Zanzibar', region: 'Zanzibar', description: 'Zanzibar islands including Stone Town, beaches and all areas across Unguja and Pemba' },
  { slug: 'zanzibar-city', name: 'Zanzibar City', region: 'Zanzibar', description: 'Zanzibar City including Stone Town, Ngambo, and the urban areas of Unguja island' },
  { slug: 'paje', name: 'Paje', region: 'Zanzibar', description: 'Paje village on the southeast coast of Zanzibar, known for beach resorts and tourism developments' },
  { slug: 'jambiani', name: 'Jambiani', region: 'Zanzibar', description: 'Jambiani village on the southeast coast of Zanzibar, with beachfront resorts and hospitality projects' },
  { slug: 'nungwi', name: 'Nungwi', region: 'Zanzibar', description: 'Nungwi village at the northern tip of Zanzibar, a major tourism hub with resorts and hotels' },
  { slug: 'kiwengwa', name: 'Kiwengwa', region: 'Zanzibar', description: 'Kiwengwa village on the northeast coast of Zanzibar, with beach resorts and tourism infrastructure' },
  { slug: 'matemwe', name: 'Matemwe', region: 'Zanzibar', description: 'Matemwe village on the northeast coast of Zanzibar, home to beachfront hotels and resorts' },
  { slug: 'fumba', name: 'Fumba', region: 'Zanzibar', description: 'Fumba village on the southwest coast of Zanzibar, part of the Fumba Town development area' },
];

export const extraLocations: MaterialsLocation[] = [
  { slug: 'dodoma', name: 'Dodoma', region: 'Dodoma', description: 'Dodoma city, the capital of Tanzania, with growing residential, commercial and government construction projects' },
  { slug: 'iringa', name: 'Iringa', region: 'Iringa', description: 'Iringa city and surrounding areas in the Southern Highlands, with residential, commercial and infrastructure construction projects' },
  { slug: 'arusha', name: 'Arusha', region: 'Arusha', description: 'Arusha city in northern Tanzania, a major hub for tourism, diplomatic missions and growing residential and commercial construction' },
  { slug: 'mwanza', name: 'Mwanza', region: 'Mwanza', description: 'Mwanza city on the shores of Lake Victoria, a major commercial centre with mining, fishing and construction industries' },
  { slug: 'mbeya', name: 'Mbeya', region: 'Mbeya', description: 'Mbeya city in the Southern Highlands, known for agriculture, mining and growing infrastructure development' },
  { slug: 'morogoro', name: 'Morogoro', region: 'Morogoro', description: 'Morogoro city along the central corridor, an agricultural hub with growing residential and commercial construction' },
  { slug: 'tanga', name: 'Tanga', region: 'Tanga', description: 'Tanga city on the northern coast, with port activities, sisal industry and coastal construction projects' },
  { slug: 'moshi', name: 'Moshi', region: 'Kilimanjaro', description: 'Moshi town at the foot of Mount Kilimanjaro, a tourism gateway with growing hospitality and residential construction' },
  { slug: 'kilimanjaro', name: 'Kilimanjaro', region: 'Kilimanjaro', description: 'Kilimanjaro region including Moshi, Hai and Rombo districts, with agriculture, tourism and infrastructure projects' },
  { slug: 'pwani', name: 'Pwani', region: 'Pwani', description: 'Pwani (Coast) region surrounding Dar es Salaam, with satellite towns and growing suburban construction projects' },
  { slug: 'manyara', name: 'Manyara', region: 'Manyara', description: 'Manyara region including Babati and Karatu districts, with agriculture, tourism and infrastructure development' },
  { slug: 'singida', name: 'Singida', region: 'Singida', description: 'Singida region in central Tanzania, with agriculture, mining and growing construction activities' },
  { slug: 'tabora', name: 'Tabora', region: 'Tabora', description: 'Tabora region in western Tanzania, a historical trading centre with agriculture and infrastructure projects' },
  { slug: 'shinyanga', name: 'Shinyanga', region: 'Shinyanga', description: 'Shinyanga region in northern Tanzania, known for mining and agriculture with growing construction demand' },
  { slug: 'geita', name: 'Geita', region: 'Geita', description: 'Geita region in northwestern Tanzania, a major gold mining area with growing residential and commercial construction' },
  { slug: 'kagera', name: 'Kagera', region: 'Kagera', description: 'Kagera region in northwestern Tanzania on Lake Victoria, with agriculture, fishing and infrastructure projects' },
  { slug: 'mara', name: 'Mara', region: 'Mara', description: 'Mara region in northern Tanzania, home to the Serengeti and Maasai Mara with tourism and construction activities' },
  { slug: 'simiyu', name: 'Simiyu', region: 'Simiyu', description: 'Simiyu region in northern Tanzania, an agricultural area with growing infrastructure and construction projects' },
  { slug: 'katavi', name: 'Katavi', region: 'Katavi', description: 'Katavi region in western Tanzania, with national parks, agriculture and emerging construction projects' },
  { slug: 'njombe', name: 'Njombe', region: 'Njombe', description: 'Njombe region in the Southern Highlands, known for agriculture, forestry and growing construction activities' },
  { slug: 'ruvuma', name: 'Ruvuma', region: 'Ruvuma', description: 'Ruvuma region in southern Tanzania including Songea, with agriculture, mining and infrastructure projects' },
  { slug: 'mtwara', name: 'Mtwara', region: 'Mtwara', description: 'Mtwara region in southeastern Tanzania, a port area with natural gas development and construction projects' },
  { slug: 'lindi', name: 'Lindi', region: 'Lindi', description: 'Lindi region in southeastern Tanzania, with mining, fishing and growing coastal construction projects' },
  { slug: 'songwe', name: 'Songwe', region: 'Songwe', description: 'Songwe region in the Southern Highlands, a border area with agriculture and infrastructure construction' },
];

export const allMaterialsLocations: MaterialsLocation[] = [
  ...darEsSalaamLocations,
  ...zanzibarLocations,
  ...extraLocations,
];

export function getMaterialsLocationBySlug(slug: string): MaterialsLocation | undefined {
  return allMaterialsLocations.find(l => l.slug === slug);
}
