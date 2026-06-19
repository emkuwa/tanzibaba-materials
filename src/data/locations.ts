export interface SEOArea {
  slug: string;
  name: string;
  district: string;
  landmark: string;
  description: string;
}

const areas: SEOArea[] = [
  { slug: 'mbezi-beach', name: 'Mbezi Beach', district: 'Kinondoni', landmark: 'Mbezi Beach area, Bagamoyo Road', description: 'a popular coastal suburb along the Bagamoyo Road with growing residential and commercial developments, including the Mbezi Beach area with its mix of private homes and apartment buildings' },
  { slug: 'tegeta', name: 'Tegeta', district: 'Kinondoni', landmark: 'Tegeta along Bagamoyo Road', description: 'the rapidly developing Tegeta area along the Bagamoyo Road corridor, home to expanding residential estates and new commercial centres' },
  { slug: 'bunju', name: 'Bunju', district: 'Kinondoni', landmark: 'Bunju area, Bagamoyo Road', description: 'the growing Bunju area north of Tegeta along Bagamoyo Road, with increasing demand for quality construction materials' },
  { slug: 'kawe', name: 'Kawe', district: 'Kinondoni', landmark: 'Kawe along Bagamoyo Road', description: 'the established Kawe neighbourhood along the Bagamoyo Road, known for its mix of residential homes, schools, and local businesses' },
  { slug: 'masaki', name: 'Masaki', district: 'Kinondoni', landmark: 'Masaki along Toure Drive', description: 'the upscale Masaki peninsula along Toure Drive, with high-end residential developments, hotels, and commercial properties' },
  { slug: 'mikocheni', name: 'Mikocheni', district: 'Kinondoni', landmark: 'Mikocheni along Toure Drive', description: 'the prime Mikocheni area along Toure Drive and the Msasani peninsula, with high-end residential, commercial, and hospitality construction' },
  { slug: 'sinza', name: 'Sinza', district: 'Kinondoni', landmark: 'Sinza along Morogoro Road', description: 'the vibrant Sinza neighbourhood near Morogoro Road, a bustling mixed-use area with apartments, shops, and ongoing redevelopment projects' },
  { slug: 'kijitonyama', name: 'Kijitonyama', district: 'Kinondoni', landmark: 'Kijitonyama near Sam Nujoma Road', description: 'the central Kijitonyama area near Sam Nujoma Road, a mature residential and commercial neighbourhood with steady construction activity' },
  { slug: 'magomeni', name: 'Magomeni', district: 'Kinondoni', landmark: 'Magomeni along Morogoro Road', description: 'the busy Magomeni area along Morogoro Road, with small-scale commercial and residential construction projects' },
  { slug: 'mwananyamala', name: 'Mwananyamala', district: 'Kinondoni', landmark: 'Mwananyamala near Sam Nujoma Road', description: 'the centrally located Mwananyamala area near Sam Nujoma and Morogoro Roads, with ongoing residential and commercial construction' },
  { slug: 'tandale', name: 'Tandale', district: 'Kinondoni', landmark: 'Tandale near Morogoro Road', description: 'the densely populated Tandale neighbourhood near Morogoro Road, with continuous construction and redevelopment activity' },
  { slug: 'manzese', name: 'Manzese', district: 'Kinondoni', landmark: 'Manzese near Mandela Road', description: 'the busy Manzese market area near Mandela Road, a commercial hub with active construction and redevelopment projects' },
  { slug: 'kunduchi', name: 'Kunduchi', district: 'Kinondoni', landmark: 'Kunduchi along Bagamoyo Road', description: 'the coastal Kunduchi area along Bagamoyo Road north of Kawe, with beachfront hotels, resorts, and expanding residential estates' },
  { slug: 'msasani', name: 'Msasani', district: 'Kinondoni', landmark: 'Msasani along Toure Drive', description: 'the exclusive Msasani peninsula along Toure Drive, with luxury residential developments, embassies, and high-end commercial projects' },
  { slug: 'mabibo', name: 'Mabibo', district: 'Kinondoni', landmark: 'Mabibo near Mandela Road', description: 'the established Mabibo residential area near Mandela Road, with steady construction of homes and community facilities' },
  { slug: 'kimara', name: 'Kimara', district: 'Ubungo', landmark: 'Kimara along Morogoro Road', description: 'the large Kimara area along Morogoro Road west of the city, with major residential estates and commercial development projects' },
  { slug: 'goba', name: 'Goba', district: 'Ubungo', landmark: 'Goba along Bagamoyo Road', description: 'the expanding Goba area off Bagamoyo Road north of Mbezi, with new residential subdivisions and community construction projects' },
  { slug: 'kibamba', name: 'Kibamba', district: 'Ubungo', landmark: 'Kibamba along Morogoro Road', description: 'the developing Kibamba area along Morogoro Road west of Kimara, with growing residential and small commercial construction' },
  { slug: 'ubungo-makati', name: 'Ubungo Makati', district: 'Ubungo', landmark: 'Ubungo Makati along Morogoro Road', description: 'the central Ubungo Makati area along Morogoro Road, a major transport and commercial hub with active construction across multiple sectors' },
  { slug: 'mbezi-juu', name: 'Mbezi Juu', district: 'Ubungo', landmark: 'Mbezi Juu off Bagamoyo Road', description: 'the hillside Mbezi Juu area off Bagamoyo Road, with scenic residential developments and expanding housing projects' },
  { slug: 'mbezi-luis', name: 'Mbezi Luis', district: 'Ubungo', landmark: 'Mbezi Luis off Bagamoyo Road', description: 'the established Mbezi Luis residential area off Bagamoyo Road, with ongoing home construction and community development' },
  { slug: 'gongo-la-mboto', name: 'Gongo la Mboto', district: 'Ubungo', landmark: 'Gongo la Mboto along Nelson Mandela Road', description: 'the growing Gongo la Mboto area along the Nelson Mandela Road extension, with new residential and commercial developments' },
  { slug: 'saranga', name: 'Saranga', district: 'Ubungo', landmark: 'Saranga off Morogoro Road', description: 'the developing Saranga area off Morogoro Road west of Ubungo, with expanding residential construction' },
  { slug: 'kwembe', name: 'Kwembe', district: 'Ubungo', landmark: 'Kwembe off Morogoro Road', description: 'the residential Kwembe area off Morogoro Road, with steady home building and community infrastructure projects' },
  { slug: 'ukonga', name: 'Ukonga', district: 'Ilala', landmark: 'Ukonga along Nyerere Road', description: 'the large Ukonga area along Nyerere Road near the airport, with major residential estates, logistics facilities, and ongoing construction' },
  { slug: 'tabata', name: 'Tabata', district: 'Ilala', landmark: 'Tabata along Nyerere Road', description: 'the busy Tabata area along Nyerere Road, with a mix of residential, commercial and industrial construction activity' },
  { slug: 'kinyerezi', name: 'Kinyerezi', district: 'Ilala', landmark: 'Kinyerezi off Nyerere Road', description: 'the developing Kinyerezi area off Nyerere Road south-east of the city centre, with new residential subdivisions and housing projects' },
  { slug: 'kariakoo', name: 'Kariakoo', district: 'Ilala', landmark: 'Kariakoo city centre', description: 'the bustling Kariakoo market area in central Dar es Salaam, with commercial redevelopment, shop construction, and mixed-use building projects' },
  { slug: 'upanga', name: 'Upanga', district: 'Ilala', landmark: 'Upanga along Uhuru Road', description: 'the established Upanga neighbourhood near the city centre along Uhuru Road, with upscale residential and commercial construction' },
  { slug: 'ilala', name: 'Ilala', district: 'Ilala', landmark: 'Ilala along Nyerere Road', description: 'the central Ilala area along Nyerere Road, a key commercial and residential district with diverse construction activity' },
  { slug: 'buguruni', name: 'Buguruni', district: 'Ilala', landmark: 'Buguruni along Nyerere Road', description: 'the busy Buguruni area along Nyerere Road, with active residential and small commercial construction projects' },
  { slug: 'kipawa', name: 'Kipawa', district: 'Ilala', landmark: 'Kipawa off Nyerere Road', description: 'the expanding Kipawa area off Nyerere Road south of Ilala, with new residential developments and community projects' },
  { slug: 'pugu', name: 'Pugu', district: 'Ilala', landmark: 'Pugu along Pugu Road', description: 'the historic Pugu area along Pugu Road east of the airport, with residential construction and the Pugu Hills development zone' },
  { slug: 'chanika', name: 'Chanika', district: 'Ilala', landmark: 'Chanika along Nyerere Road', description: 'the developing Chanika area along Nyerere Road south of Ukonga, with expanding residential and commercial construction' },
  { slug: 'vingunguti', name: 'Vingunguti', district: 'Ilala', landmark: 'Vingunguti off Nyerere Road', description: 'the industrial Vingunguti area off Nyerere Road, with factory construction, warehouse development, and industrial projects' },
  { slug: 'mbagala', name: 'Mbagala', district: 'Temeke', landmark: 'Mbagala along Kilwa Road', description: 'the large Mbagala area along Kilwa Road, one of the fastest-growing residential areas in Dar es Salaam with extensive new home construction' },
  { slug: 'chamazi', name: 'Chamazi', district: 'Temeke', landmark: 'Chamazi off Kilwa Road', description: 'the rapidly expanding Chamazi area off Kilwa Road south of Mbagala, with new residential estates and community development projects' },
  { slug: 'temeke', name: 'Temeke', district: 'Temeke', landmark: 'Temeke town centre along Kilwa Road', description: 'the central Temeke district area along Kilwa Road, with residential, commercial and industrial construction projects' },
  { slug: 'kurasini', name: 'Kurasini', district: 'Temeke', landmark: 'Kurasini along Kilwa Road', description: 'the Kurasini area along Kilwa Road near the port, with industrial and logistics construction alongside residential development' },
  { slug: 'mtoni', name: 'Mtoni', district: 'Temeke', landmark: 'Mtoni along Kilwa Road', description: 'the coastal Mtoni area along Kilwa Road, with a mix of residential construction, historical sites, and community development' },
  { slug: 'tandika', name: 'Tandika', district: 'Temeke', landmark: 'Tandika off Kilwa Road', description: 'the established Tandika residential area off Kilwa Road, with ongoing home construction and neighbourhood development' },
  { slug: 'charambe', name: 'Charambe', district: 'Temeke', landmark: 'Charambe off Kilwa Road', description: 'the developing Charambe area off Kilwa Road south of Mbagala, with new housing projects and community construction' },
  { slug: 'toangoma', name: 'Toangoma', district: 'Temeke', landmark: 'Toangoma off Kilwa Road', description: 'the expanding Toangoma area off Kilwa Road, with residential construction and new community facilities' },
  { slug: 'kigamboni', name: 'Kigamboni', district: 'Kigamboni', landmark: 'Kigamboni town centre', description: 'the Kigamboni peninsula area, a rapidly developing district with new residential estates, hotels, and commercial developments along the Kigamboni bridge corridor' },
  { slug: 'mjimwema', name: 'Mjimwema', district: 'Kigamboni', landmark: 'Mjimwema in Kigamboni', description: 'the coastal Mjimwema area in southern Kigamboni, with beachfront residential developments, hotels, and expanding construction projects' },
  { slug: 'kibada', name: 'Kibada', district: 'Kigamboni', landmark: 'Kibada in Kigamboni', description: 'the developing Kibada area in Kigamboni, with new residential estates and community construction projects' },
  { slug: 'vijibweni', name: 'Vijibweni', district: 'Kigamboni', landmark: 'Vijibweni in Kigamboni', description: 'the Vijibweni area near the Kigamboni ferry, with residential and small commercial construction projects' },
  { slug: 'tungi', name: 'Tungi', district: 'Kigamboni', landmark: 'Tungi in Kigamboni', description: 'the Tungi area in central Kigamboni, with expanding residential estates and community infrastructure projects' },
  { slug: 'bagamoyo', name: 'Bagamoyo', district: 'Bagamoyo', landmark: 'Bagamoyo town centre', description: 'the historic coastal town of Bagamoyo north of Dar es Salaam, with growing residential development, hotels, and tourism-related construction projects' },
  { slug: 'kibaha', name: 'Kibaha', district: 'Kibaha', landmark: 'Kibaha town centre along Morogoro Road', description: 'the Kibaha town area along the Morogoro Road corridor west of Dar es Salaam, the administrative capital of Pwani Region with expanding construction' },
  { slug: 'mkuranga', name: 'Mkuranga', district: 'Mkuranga', landmark: 'Mkuranga town centre', description: 'the growing Mkuranga town south of Dar es Salaam, with residential construction and development driven by its proximity to the city' },
];

export default areas;

export function getAreaBySlug(slug: string): SEOArea | undefined {
  return areas.find(a => a.slug === slug);
}

export const siteUrl = 'https://tanzibaba.co.tz';

export const materialTypes = [
  { slug: 'ready-mix-concrete', name: 'Ready-Mix Concrete', badge: 'Ready-Mix Concrete', icon: 'Truck', metaDescSuffix: 'premium ready-mix concrete supply', descPrefix: 'supplies premium ready-mix concrete' },
  { slug: 'concrete-supplier', name: 'Concrete Supply', badge: 'Concrete Supplier', icon: 'Truck', metaDescSuffix: 'premium concrete supply', descPrefix: 'is a trusted concrete supplier' },
  { slug: 'concrete-pump', name: 'Concrete Pump', badge: 'Concrete Pump', icon: 'Truck', metaDescSuffix: 'concrete pump rental services', descPrefix: 'offers professional concrete pump services' },
  { slug: 'gravel-supplier', name: 'Gravel Supply', badge: 'Gravel Supplier', icon: 'CircleDot', metaDescSuffix: 'gravel supply services', descPrefix: 'supplies high-quality gravel' },
  { slug: 'crushed-stone-supplier', name: 'Crushed Stone Supply', badge: 'Crushed Stone Supplier', icon: 'CircleDot', metaDescSuffix: 'crushed stone supply services', descPrefix: 'supplies premium crushed stone and aggregates' },
  { slug: 'aggregates-supplier', name: 'Aggregates Supply', badge: 'Aggregates Supplier', icon: 'Package', metaDescSuffix: 'construction aggregates supply', descPrefix: 'supplies construction aggregates including gravel, crushed stone, and sand' },
  { slug: 'kokoto-supplier', name: 'Kokoto Supply', badge: 'Kokoto Supplier', icon: 'CircleDot', metaDescSuffix: 'kokoto (gravel) supply services', descPrefix: 'supplies kokoto (gravel) and crushed stone for construction' },
  { slug: 'road-construction-materials', name: 'Road Construction Materials', badge: 'Road Materials', icon: 'Route', metaDescSuffix: 'road construction materials supply', descPrefix: 'supplies road construction materials including aggregates, gravel, and base course materials' },
  { slug: 'construction-materials', name: 'Construction Materials', badge: 'Construction Materials', icon: 'Package', metaDescSuffix: 'construction materials supply', descPrefix: 'supplies construction materials including concrete, aggregates, gravel, and crushed stone' },
];

export function getMaterialTypeBySlug(slug: string): typeof materialTypes[number] | undefined {
  return materialTypes.find(m => m.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  const slugs: string[] = [];
  for (const mt of materialTypes) {
    for (const area of areas) {
      slugs.push(`${mt.slug}-${area.slug}`);
    }
  }
  return slugs;
}

export interface ConcreteGrade {
  grade: string;
  strength: string;
  price: number;
  description: string;
  applications: string;
}

export const concreteGrades: ConcreteGrade[] = [
  { grade: 'C10', strength: '10 MPa', price: 130000, description: 'C10 concrete is a low-strength mix used for non-structural applications including blinding, leveling, and general fill work.', applications: 'Blinding, leveling, non-structural fill, temporary works' },
  { grade: 'C15', strength: '15 MPa', price: 150000, description: 'C15 concrete is a medium-low strength mix suitable for light domestic works including footpaths, light-duty slabs, and lean concrete applications.', applications: 'Footpaths, light-duty slabs, lean concrete, walkways' },
  { grade: 'C20', strength: '20 MPa', price: 180000, description: 'C20 concrete is a standard domestic strength mix ideal for residential slabs, small foundations, patios, garages, and general house construction.', applications: 'Residential slabs, small foundations, patios, garages' },
  { grade: 'C25', strength: '25 MPa', price: 210000, description: 'C25 concrete is the most commonly used grade for residential construction in Dar es Salaam. Ideal for house foundations, columns, beams, and slabs.', applications: 'House foundations, columns, beams, driveways, residential slabs' },
  { grade: 'C30', strength: '30 MPa', price: 250000, description: 'C30 concrete is specified for multi-storey apartments, commercial buildings, and engineered structures requiring higher compressive strength than C25.', applications: 'Apartments, commercial buildings, heavy-duty ground slabs' },
  { grade: 'C35', strength: '35 MPa', price: 290000, description: 'C35 concrete is a high-strength mix used for heavy-duty structures including industrial floors, factories, warehouses, and commercial developments.', applications: 'Industrial floors, factories, warehouses, heavy structures' },
  { grade: 'C40', strength: '40 MPa', price: 330000, description: 'C40 concrete is a premium high-strength mix designed for industrial plants, engineered structures, and heavy infrastructure.', applications: 'Industrial plants, engineered structures, bridges' },
  { grade: 'C45', strength: '45 MPa', price: 360000, description: 'C45 concrete is an ultra-high-strength mix for specialized applications including precast elements, bridge components, and heavy civil engineering.', applications: 'High-strength precast, bridge components, civil engineering' },
  { grade: 'C50', strength: '50 MPa', price: 400000, description: 'C50 concrete is our highest-strength mix engineered for high-performance applications including heavy infrastructure, marine structures, and high-rise buildings.', applications: 'Highways, marine structures, high-rise buildings' },
];

export function fmtPrice(n: number): string {
  return `TZS ${n.toLocaleString('en-TZ')}`;
}
