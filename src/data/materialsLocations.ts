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
];

export const allMaterialsLocations: MaterialsLocation[] = [
  ...darEsSalaamLocations,
  ...zanzibarLocations,
  ...extraLocations,
];

export function getMaterialsLocationBySlug(slug: string): MaterialsLocation | undefined {
  return allMaterialsLocations.find(l => l.slug === slug);
}
