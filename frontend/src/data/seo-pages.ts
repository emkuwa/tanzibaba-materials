const siteUrl = 'https://tanzibaba.co.tz';

export interface Location {
  slug: string;
  name: string;
  description: string;
  areas: string[];
  metaDesc: string;
  heroDesc: string;
}

export const locations: Location[] = [
  { slug: 'kinondoni', name: 'Kinondoni', areas: ['Magomeni', 'Mwananyamala', 'Tandale', 'Manzese', 'Mikocheni', 'Kawe', 'Kunduchi', 'Tegeta', 'Sinza', 'Kijitonyama', 'Mabibo'],
    description: 'Premium ready-mix concrete supply for commercial, industrial and infrastructure projects in Kinondoni. Our batch plants serve Magomeni, Mikocheni, Sinza, Kawe, Kunduchi, Tegeta, and all Kinondoni wards with fast delivery and consistent quality.',
    metaDesc: 'Premium ready-mix concrete supply in Kinondoni, Dar es Salaam. Grades C10–C50 with washed sand technology. Get an instant quote online.',
    heroDesc: 'Premium ready-mix concrete supply and delivery across Kinondoni — from Mikocheni to Tegeta, Sinza to Kawe.' },
  { slug: 'ubungo', name: 'Ubungo', areas: ['Ubungo Makati', 'Kimara', 'Mbezi Luis', 'Mbezi Juu', 'Gongo la Mboto', 'Saranga', 'Kwembe', 'Msigani'],
    description: 'Premium ready-mix concrete supply for commercial, industrial and infrastructure projects in Ubungo. Our batch plants serve Kimara, Mbezi, Gongo la Mboto, and all Ubungo wards with fast delivery and consistent quality.',
    metaDesc: 'Premium ready-mix concrete supply in Ubungo, Dar es Salaam. Grades C10–C50 with washed sand technology. Get an instant quote online.',
    heroDesc: 'Premium ready-mix concrete supply and delivery across Ubungo — from Kimara to Mbezi, Gongo la Mboto to Saranga.' },
  { slug: 'ilala', name: 'Ilala', areas: ['Kariakoo', 'Mchikichini', 'Upanga', 'Mchafukoge', 'Ilala', 'Buguruni', 'Kipawa', 'Tabata', 'Ukonga', 'Pugu', 'Vingunguti'],
    description: 'Premium ready-mix concrete supply for commercial, industrial and infrastructure projects in Ilala. Our batch plants serve Kariakoo, Upanga, Buguruni, Ukonga, Pugu, and all Ilala wards with fast delivery and consistent quality.',
    metaDesc: 'Premium ready-mix concrete supply in Ilala, Dar es Salaam. Grades C10–C50 with washed sand technology. Get an instant quote online.',
    heroDesc: 'Premium ready-mix concrete supply and delivery across Ilala — from Kariakoo to Pugu, Upanga to Ukonga.' },
  { slug: 'temeke', name: 'Temeke', areas: ['Temeke', 'Mbagala', 'Charambe', 'Azimio', 'Chamazi', 'Kurasini', 'Mtoni', 'Tandika', 'Kisarawe'],
    description: 'Premium ready-mix concrete supply for commercial, industrial and infrastructure projects in Temeke. Our batch plants serve Mbagala, Kurasini, Mtoni, and all Temeke wards with fast delivery and consistent quality.',
    metaDesc: 'Premium ready-mix concrete supply in Temeke, Dar es Salaam. Grades C10–C50 with washed sand technology. Get an instant quote online.',
    heroDesc: 'Premium ready-mix concrete supply and delivery across Temeke — from Mbagala to Kurasini, Mtoni to Kisarawe.' },
  { slug: 'kigamboni', name: 'Kigamboni', areas: ['Kigamboni', 'Vijibweni', 'Somangila', 'Tungi', 'Kisarawe II', 'Mjimwema'],
    description: 'Premium ready-mix concrete supply for commercial, industrial and infrastructure projects in Kigamboni. We serve Vijibweni, Tungi, and all Kigamboni wards with fast delivery and consistent quality.',
    metaDesc: 'Premium ready-mix concrete supply in Kigamboni, Dar es Salaam. Grades C10–C50 with washed sand technology. Get an instant quote online.',
    heroDesc: 'Premium ready-mix concrete supply and delivery across Kigamboni — from Vijibweni to Tungi, Somangila to Mjimwema.' },
  { slug: 'dar-es-salaam', name: 'Dar es Salaam', areas: [],
    description: 'Dar es Salaam\'s premium ready-mix concrete supplier with quality-controlled production across all districts. Grades C10–C50, washed sand technology, and fast delivery for projects of any size.',
    metaDesc: 'Premium ready-mix concrete supplier in Dar es Salaam. Washed sand technology, grades C10–C50. Get an instant quote online.',
    heroDesc: 'Dar es Salaam\'s leading ready-mix concrete supplier — premium quality, fast delivery.' },
  { slug: 'bagamoyo', name: 'Bagamoyo', areas: [],
    description: 'Premium ready-mix concrete supply for commercial, industrial and infrastructure projects in Bagamoyo. Quality concrete delivered from our Dar es Salaam plants with reliable scheduling.',
    metaDesc: 'Premium ready-mix concrete supply in Bagamoyo. Grades C10–C50 with washed sand technology. Delivery from Dar es Salaam.',
    heroDesc: 'Premium ready-mix concrete supply and delivery to Bagamoyo and surrounding areas.' },
  { slug: 'mkuranga', name: 'Mkuranga', areas: [],
    description: 'Premium ready-mix concrete supply for commercial, industrial and infrastructure projects in Mkuranga. Quality concrete delivered from our Dar es Salaam plants.',
    metaDesc: 'Premium ready-mix concrete supply in Mkuranga. Grades C10–C50 with washed sand technology. Delivery from Dar es Salaam.',
    heroDesc: 'Premium ready-mix concrete supply and delivery to Mkuranga and surrounding areas.' },
  { slug: 'kibaha', name: 'Kibaha', areas: [],
    description: 'Premium ready-mix concrete supply for commercial, industrial and infrastructure projects in Kibaha. Quality concrete delivered from our Dar es Salaam plants.',
    metaDesc: 'Premium ready-mix concrete supply in Kibaha. Grades C10–C50 with washed sand technology. Delivery from Dar es Salaam.',
    heroDesc: 'Premium ready-mix concrete supply and delivery to Kibaha and surrounding areas.' },
];

export interface ConcreteGrade {
  slug: string;
  grade: string;
  strength: string;
  price: number;
  description: string;
  applications: string;
  metaDesc: string;
}

export const grades: ConcreteGrade[] = [
  { slug: 'c10', grade: 'C10', strength: '10 MPa', price: 130000, description: 'C10 concrete is a low-strength mix used for non-structural applications including blinding, leveling, and general fill work.', applications: 'Blinding, leveling, non-structural fill, temporary works, ground levelling', metaDesc: 'C10 concrete supply in Dar es Salaam. Low-strength mix for blinding, leveling and non-structural fill. Get an instant quote online.' },
  { slug: 'c15', grade: 'C15', strength: '15 MPa', price: 150000, description: 'C15 concrete is a medium-low strength mix suitable for light domestic works including footpaths, light-duty slabs, and lean concrete applications.', applications: 'Footpaths, light-duty slabs, lean concrete, walkways, light foundations', metaDesc: 'C15 concrete supply in Dar es Salaam. Medium-low strength mix for light domestic works and footpaths. Get an instant quote online.' },
  { slug: 'c20', grade: 'C20', strength: '20 MPa', price: 180000, description: 'C20 concrete is a standard domestic strength mix ideal for residential slabs, small foundations, patios, garages, and general house construction.', applications: 'Residential slabs, small foundations, patios, garages, house construction', metaDesc: 'C20 concrete supply in Dar es Salaam. Standard domestic strength mix for slabs and foundations. Get an instant quote online.' },
  { slug: 'c25', grade: 'C25', strength: '25 MPa', price: 210000, description: 'C25 concrete is the most commonly used grade for residential construction in Dar es Salaam. Ideal for house foundations, columns, beams, driveways, and standard residential slabs.', applications: 'House foundations, columns, beams, driveways, standard residential construction', metaDesc: 'C25 concrete supply in Dar es Salaam. Most popular grade for residential construction. Get an instant quote online.' },
  { slug: 'c30', grade: 'C30', strength: '30 MPa', price: 250000, description: 'C30 concrete is specified for multi-storey apartments, commercial buildings, and engineered structures requiring higher compressive strength than C25.', applications: 'Multi-storey apartments, commercial buildings, heavy-duty ground slabs, engineered structures', metaDesc: 'C30 concrete supply in Dar es Salaam. Premium grade for multi-storey and commercial construction. Get an instant quote online.' },
  { slug: 'c35', grade: 'C35', strength: '35 MPa', price: 290000, description: 'C35 concrete is a high-strength mix used for heavy-duty structures including industrial floors, factories, warehouses, and commercial developments.', applications: 'Heavy-duty structures, industrial floors, factories, warehouses, commercial developments', metaDesc: 'C35 concrete supply in Dar es Salaam. High-strength mix for industrial and commercial projects. Get an instant quote online.' },
  { slug: 'c40', grade: 'C40', strength: '40 MPa', price: 330000, description: 'C40 concrete is a premium high-strength mix designed for industrial plants, engineered structures, and heavy infrastructure requiring superior load-bearing capacity.', applications: 'Industrial plants, engineered structures, heavy infrastructure, bridges', metaDesc: 'C40 concrete supply in Dar es Salaam. Premium high-strength mix for industrial and infrastructure projects. Get an instant quote online.' },
  { slug: 'c45', grade: 'C45', strength: '45 MPa', price: 360000, description: 'C45 concrete is an ultra-high-strength mix for specialized applications including high-strength precast elements, bridge components, and heavy civil engineering works.', applications: 'High-strength precast, bridge components, heavy civil engineering, specialized structures', metaDesc: 'C45 concrete supply in Dar es Salaam. Ultra-high-strength mix for precast and bridge components. Get an instant quote online.' },
  { slug: 'c50', grade: 'C50', strength: '50 MPa', price: 400000, description: 'C50 concrete is our highest-strength mix engineered for specialized high-performance applications including heavy infrastructure, highways, marine structures, and high-rise buildings.', applications: 'Specialized high-performance structures, highways, marine structures, high-rise buildings', metaDesc: 'C50 concrete supply in Dar es Salaam. Highest-strength mix for heavy infrastructure and marine structures. Get an instant quote online.' },
];

export interface ProjectType {
  slug: string;
  name: string;
  icon: string;
  description: string;
  metaDesc: string;
  recommendedGrade: string;
  content: string;
}

export const projectTypes: ProjectType[] = [
  { slug: 'apartment-concrete-supply', name: 'Apartment Construction', icon: 'Building2', description: 'Premium ready-mix concrete supply for apartment building construction in Dar es Salaam. From foundations to roof slabs, we deliver the right grade for every stage of your apartment project.', metaDesc: 'Premium ready-mix concrete for apartment construction in Dar es Salaam. C25, C30 and C40 grades. Get an instant quote online.', recommendedGrade: 'C30', content: 'Apartment buildings require concrete that delivers consistent strength across multiple floors. We recommend C30 for columns and slabs in buildings up to five storeys, with C25 suitable for foundations and ground works. For high-rise apartment towers above five storeys, C35 or C40 may be specified by your structural engineer. Our production capacity ensures reliable delivery for the large volumes required by apartment projects.' },
  { slug: 'commercial-concrete-supply', name: 'Commercial Construction', icon: 'Building', description: 'Premium ready-mix concrete supply for commercial building construction in Dar es Salaam. Offices, retail spaces, showrooms, and mixed-use developments.', metaDesc: 'Premium ready-mix concrete for commercial construction in Dar es Salaam. Grades C25–C40. Get an instant quote online.', recommendedGrade: 'C30', content: 'Commercial buildings demand concrete that meets strict structural specifications and delivery schedules. We supply C30 as the standard grade for commercial slabs and columns, with C35 and C40 available for higher-load areas. Our quality-controlled production ensures every batch meets your engineer\'s specifications. With operations across Dar es Salaam, we can handle the volume and scheduling requirements of commercial projects of any size.' },
  { slug: 'industrial-concrete-supply', name: 'Industrial Construction', icon: 'Warehouse', description: 'Premium ready-mix concrete supply for industrial facilities in Dar es Salaam. Factories, warehouses, processing plants, and heavy-use industrial floors.', metaDesc: 'Premium ready-mix concrete for industrial construction in Dar es Salaam. C35–C50 grades for heavy-duty floors and structures. Get an instant quote online.', recommendedGrade: 'C35', content: 'Industrial facilities require high-strength concrete that can withstand heavy machinery, constant traffic, and chemical exposure. We supply C35 to C50 grades for industrial floors, foundations, and structural elements. Our washed sand technology produces denser, more durable concrete that outperforms standard mixes in industrial environments. We work closely with your team to ensure timely delivery for large-volume industrial pours.' },
  { slug: 'warehouse-concrete-supply', name: 'Warehouse Construction', icon: 'Store', description: 'Premium ready-mix concrete supply for warehouse construction in Dar es Salaam. Heavy-duty floor slabs, foundations, and loading bays.', metaDesc: 'Premium ready-mix concrete for warehouse construction in Dar es Salaam. Heavy-duty floor slabs and foundations. Get an instant quote online.', recommendedGrade: 'C30', content: 'Warehouse floors require concrete that can handle heavy loads from racking systems and forklift traffic. We recommend C30 as the minimum grade for warehouse floor slabs, with C35 for higher-load areas. Our concrete is produced with washed sand for reduced shrinkage and improved surface finish — critical for warehouse floors that require flatness and durability. We deliver to all warehouse developments across Dar es Salaam.' },
  { slug: 'hotel-concrete-supply', name: 'Hotel Construction', icon: 'Building2', description: 'Premium ready-mix concrete supply for hotel construction in Dar es Salaam. From boutique hotels to large resort developments.', metaDesc: 'Premium ready-mix concrete for hotel construction in Dar es Salaam. Grades C25–C35. Get an instant quote online.', recommendedGrade: 'C30', content: 'Hotel construction demands high-quality concrete for both structural integrity and aesthetic finishes. We supply C25 for foundations and ground works, C30 for upper-floor slabs and columns, and C35 for high-traffic areas. Our consistent mix quality ensures uniform colour and finish for exposed concrete elements. We have experience supplying concrete for major hotel projects including Hotel Verde Zanzibar.' },
  { slug: 'hospital-concrete-supply', name: 'Hospital Construction', icon: 'Building2', description: 'Premium ready-mix concrete supply for hospital and healthcare facility construction in Dar es Salaam.', metaDesc: 'Premium ready-mix concrete for hospital construction in Dar es Salaam. Grades C25–C40. Get an instant quote online.', recommendedGrade: 'C30', content: 'Hospital construction requires concrete that meets the highest standards of quality and consistency. We supply a range of grades from C25 for general works to C40 for critical structural elements. Our quality control processes ensure every batch meets specification — essential for healthcare facilities where structural integrity is paramount. We deliver to hospital projects across Dar es Salaam with reliable scheduling.' },
  { slug: 'school-concrete-supply', name: 'School Construction', icon: 'Building', description: 'Premium ready-mix concrete supply for school and educational facility construction in Dar es Salaam.', metaDesc: 'Premium ready-mix concrete for school construction in Dar es Salaam. Grades C20–C30. Get an instant quote online.', recommendedGrade: 'C25', content: 'School construction projects range from single-storey classroom blocks to multi-purpose halls and laboratories. We supply C25 as the standard grade for school foundations, slabs, and columns, with C20 suitable for walkways and non-structural areas. Our efficient delivery helps school projects stay on schedule and within budget.' },
  { slug: 'infrastructure-concrete-supply', name: 'Infrastructure Projects', icon: 'Route', description: 'Premium ready-mix concrete for infrastructure projects in Dar es Salaam. Roads, bridges, drainage, and civil engineering works.', metaDesc: 'Premium ready-mix concrete for infrastructure projects in Dar es Salaam. High-strength grades for roads, bridges and drainage. Get an instant quote online.', recommendedGrade: 'C35', content: 'Infrastructure projects demand concrete that meets stringent specifications for strength, durability, and workability. We supply C35 to C50 grades for bridges, culverts, roads, and drainage structures. Our large-capacity batch plants can handle the high volumes required by infrastructure projects, and our quality control ensures every load meets specification.' },
];

export interface PumpLocation {
  slug: string;
  name: string;
  description: string;
  metaDesc: string;
}

export const pumpLocations: PumpLocation[] = [
  { slug: 'dar-es-salaam', name: 'Dar es Salaam', description: 'Professional concrete pump services across all districts of Dar es Salaam. Line pumps and boom pumps available for projects of any size — from residential slabs to high-rise commercial pours.', metaDesc: 'Concrete pump rental in Dar es Salaam. Line pumps and boom pumps for residential, commercial and industrial projects. Get an instant quote.' },
  { slug: 'kinondoni', name: 'Kinondoni', description: 'Concrete pump services in Kinondoni including Mikocheni, Sinza, Kawe, Kunduchi, and Tegeta. Ideal for multi-storey construction and difficult-access sites.', metaDesc: 'Concrete pump rental in Kinondoni. Professional pump services for residential and commercial projects. Get an instant quote.' },
  { slug: 'ubungo', name: 'Ubungo', description: 'Concrete pump services in Ubungo including Kimara, Mbezi, and Gongo la Mboto. Reliable pumping for foundations, slabs, and upper floors.', metaDesc: 'Concrete pump rental in Ubungo. Professional pump services for residential and commercial projects. Get an instant quote.' },
  { slug: 'ilala', name: 'Ilala', description: 'Concrete pump services in Ilala including Kariakoo, Upanga, Buguruni, and Ukonga. Fast, efficient concrete placement for constrained city sites.', metaDesc: 'Concrete pump rental in Ilala. Professional pump services for residential and commercial projects. Get an instant quote.' },
  { slug: 'temeke', name: 'Temeke', description: 'Concrete pump services in Temeke including Mbagala, Kurasini, and Mtoni. Professional pumping for all project types.', metaDesc: 'Concrete pump rental in Temeke. Professional pump services for residential and commercial projects. Get an instant quote.' },
  { slug: 'kigamboni', name: 'Kigamboni', description: 'Concrete pump services in Kigamboni including Vijibweni, Tungi, and Somangila. Pump solutions for growing construction developments.', metaDesc: 'Concrete pump rental in Kigamboni. Professional pump services for residential and commercial projects. Get an instant quote.' },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(l => l.slug === slug);
}

export function getGradeBySlug(slug: string): ConcreteGrade | undefined {
  return grades.find(g => g.slug === slug);
}

export function getProjectTypeBySlug(slug: string): ProjectType | undefined {
  return projectTypes.find(p => p.slug === slug);
}

export function getPumpLocationBySlug(slug: string): PumpLocation | undefined {
  return pumpLocations.find(p => p.slug === slug);
}

export function fmtPrice(n: number): string {
  return `TZS ${n.toLocaleString('en-TZ')}`;
}
