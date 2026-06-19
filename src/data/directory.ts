export interface DirectoryListing {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  location: string;
  description: string;
  website?: string;
  phone?: string;
  email?: string;
  slug: string;
}

export const categories = [
  { slug: 'engineers', title: 'Engineers', icon: 'Compass', color: 'bg-indigo-50 text-indigo-600' },
  { slug: 'architects', title: 'Architects', icon: 'Building2', color: 'bg-purple-50 text-purple-600' },
  { slug: 'quantity-surveyors', title: 'Quantity Surveyors', icon: 'Calculator', color: 'bg-teal-50 text-teal-600' },
  { slug: 'land-surveyors', title: 'Land Surveyors', icon: 'MapPin', color: 'bg-cyan-50 text-cyan-600' },
  { slug: 'project-managers', title: 'Project Managers', icon: 'ClipboardList', color: 'bg-sky-50 text-sky-600' },
  { slug: 'building-contractors', title: 'Building Contractors', icon: 'HardHat', color: 'bg-blue-50 text-blue-600' },
  { slug: 'civil-contractors', title: 'Civil Contractors', icon: 'Construction', color: 'bg-slate-50 text-slate-600' },
  { slug: 'road-contractors', title: 'Road Contractors', icon: 'Route', color: 'bg-amber-50 text-amber-600' },
  { slug: 'mep-contractors', title: 'MEP Contractors', icon: 'Zap', color: 'bg-yellow-50 text-yellow-600' },
  { slug: 'cement-manufacturers', title: 'Cement Manufacturers', icon: 'Factory', color: 'bg-gray-50 text-gray-600' },
  { slug: 'steel-manufacturers', title: 'Steel Manufacturers', icon: 'Building', color: 'bg-red-50 text-red-600' },
  { slug: 'aluminium-suppliers', title: 'Aluminium Suppliers', icon: 'Layers', color: 'bg-slate-50 text-slate-600' },
  { slug: 'glass-suppliers', title: 'Glass Suppliers', icon: 'Square', color: 'bg-blue-50 text-blue-600' },
  { slug: 'roofing-suppliers', title: 'Roofing Suppliers', icon: 'Home', color: 'bg-orange-50 text-orange-600' },
  { slug: 'paint-suppliers', title: 'Paint Suppliers', icon: 'Palette', color: 'bg-pink-50 text-pink-600' },
  { slug: 'timber-suppliers', title: 'Timber Suppliers', icon: 'TreePine', color: 'bg-green-50 text-green-600' },
  { slug: 'borehole-drilling', title: 'Borehole Drilling', icon: 'Droplets', color: 'bg-cyan-50 text-cyan-600' },
  { slug: 'soil-testing', title: 'Soil Testing', icon: 'FlaskConical', color: 'bg-amber-50 text-amber-600' },
  { slug: 'geotechnical-services', title: 'Geotechnical Services', icon: 'Mountain', color: 'bg-stone-50 text-stone-600' },
  { slug: 'material-testing', title: 'Material Testing', icon: 'Beaker', color: 'bg-emerald-50 text-emerald-600' },
  { slug: 'equipment-rental', title: 'Equipment Rental', icon: 'Wrench', color: 'bg-orange-50 text-orange-600' },
  { slug: 'heavy-machinery-rental', title: 'Heavy Machinery Rental', icon: 'Truck', color: 'bg-red-50 text-red-600' },
  { slug: 'government', title: 'Government Bodies', icon: 'Landmark', color: 'bg-brand-50 text-brand-600' },
];

export const listings: DirectoryListing[] = [
  // ENGINEERS
  { id: 'eng-001', name: 'Tanzania Engineers Registration Board (ERB)', category: 'engineers', subcategory: 'Professional Body', location: 'Dar es Salaam', description: 'Regulatory body for engineers in Tanzania. Registers and licenses professional engineers across all disciplines.', website: 'https://erb.or.tz', phone: '+255 22 215 0690', email: 'info@erb.or.tz', slug: 'erb-tanzania' },
  { id: 'eng-002', name: 'Kiwata & Partners Engineers', category: 'engineers', subcategory: 'Structural Engineering', location: 'Dar es Salaam', description: 'Structural and civil engineering consultancy for commercial, residential and infrastructure projects.', phone: '+255 22 211 0000', slug: 'kiwata-engineers' },
  { id: 'eng-003', name: 'Arup East Africa', category: 'engineers', subcategory: 'Multi-disciplinary', location: 'Dar es Salaam', description: 'International engineering consultancy offering structural, civil, mechanical and electrical engineering services.', website: 'https://arup.com', slug: 'arup-east-africa' },
  { id: 'eng-004', name: 'DP Engineers Tanzania', category: 'engineers', subcategory: 'Civil Engineering', location: 'Dar es Salaam', description: 'Civil and structural engineering consultancy specializing in building and infrastructure projects.', phone: '+255 22 212 0000', slug: 'dp-engineers' },
  { id: 'eng-005', name: 'Tanzania Institute of Engineers', category: 'engineers', subcategory: 'Professional Body', location: 'Dar es Salaam', description: 'Professional body representing engineers in Tanzania. Promotes engineering excellence and professional development.', website: 'https://tie.or.tz', slug: 'tie-tanzania' },

  // ARCHITECTS
  { id: 'arc-001', name: 'Tanzania Architects Registration Board (ARB)', category: 'architects', subcategory: 'Professional Body', location: 'Dar es Salaam', description: 'Regulatory body for architects in Tanzania. Registers and licenses professional architects.', website: 'https://arb.or.tz', phone: '+255 22 215 0690', slug: 'arb-tanzania' },
  { id: 'arc-002', name: 'Architects 67 East Africa', category: 'architects', subcategory: 'Architecture Firm', location: 'Dar es Salaam', description: 'Full-service architecture firm offering design, planning and project management for commercial and residential projects.', phone: '+255 22 213 0000', slug: 'architects-67' },
  { id: 'arc-003', name: 'Planning Systems Ltd', category: 'architects', subcategory: 'Architecture & Planning', location: 'Dar es Salaam', description: 'Architecture and urban planning consultancy for commercial, institutional and residential developments.', slug: 'planning-systems' },
  { id: 'arc-004', name: 'Eldy Associates Architects', category: 'architects', subcategory: 'Architecture Firm', location: 'Dodoma', description: 'Architecture firm specializing in government buildings, institutional projects and residential developments.', slug: 'eldy-associates' },
  { id: 'arc-005', name: 'Zanzibar Architecture Studio', category: 'architects', subcategory: 'Architecture Firm', location: 'Zanzibar', description: 'Boutique architecture studio specializing in heritage conservation, hotels and resort developments in Zanzibar.', slug: 'zanzibar-architecture-studio' },

  // QUANTITY SURVEYORS
  { id: 'qs-001', name: 'Tanzania Institute of Quantity Surveyors', category: 'quantity-surveyors', subcategory: 'Professional Body', location: 'Dar es Salaam', description: 'Professional body for quantity surveyors in Tanzania. Promotes cost management and construction economics.', website: 'https://tiqs.or.tz', slug: 'tiqs-tanzania' },
  { id: 'qs-002', name: 'CostPlan Quantity Surveyors', category: 'quantity-surveyors', subcategory: 'Cost Consultancy', location: 'Dar es Salaam', description: 'Quantity surveying and cost consultancy services for commercial, residential and infrastructure projects.', phone: '+255 22 214 0000', slug: 'costplan-qs' },
  { id: 'qs-003', name: 'Davis Langdon Tanzania', category: 'quantity-surveyors', subcategory: 'Cost Consultancy', location: 'Dar es Salaam', description: 'International quantity surveying and cost management consultancy for large-scale construction projects.', slug: 'davis-langdon-tz' },
  { id: 'qs-004', name: 'Build Quantity Surveyors', category: 'quantity-surveyors', subcategory: 'Quantity Surveying', location: 'Dodoma', description: 'Quantity surveying services for government and commercial construction projects in Dodoma.', slug: 'build-qs-dodoma' },

  // LAND SURVEYORS
  { id: 'ls-001', name: 'Tanzania Surveyors Board', category: 'land-surveyors', subcategory: 'Professional Body', location: 'Dar es Salaam', description: 'Regulatory body for land surveyors in Tanzania. Registers and licenses professional surveyors.', website: 'https://surveyorsboard.or.tz', slug: 'surveyors-board' },
  { id: 'ls-002', name: 'GeoTech Survey Services', category: 'land-surveyors', subcategory: 'Land Surveying', location: 'Dar es Salaam', description: 'Professional land surveying, topographical mapping and GPS survey services for construction projects.', phone: '+255 22 216 0000', slug: 'geotech-survey' },
  { id: 'ls-003', name: 'Tanzania National Land Survey', category: 'land-surveyors', subcategory: 'Government Agency', location: 'Dodoma', description: 'Government agency responsible for land surveying and mapping across Tanzania.', website: 'https://nls.go.tz', slug: 'national-land-survey' },
  { id: 'ls-004', name: 'Precision Survey Consultants', category: 'land-surveyors', subcategory: 'Surveying', location: 'Zanzibar', description: 'Land surveying and mapping services for development projects across Zanzibar.', slug: 'precision-survey-zanzibar' },

  // PROJECT MANAGERS
  { id: 'pm-001', name: 'Tanzania Institute of Project Managers', category: 'project-managers', subcategory: 'Professional Body', location: 'Dar es Salaam', description: 'Professional body for project managers in Tanzania. Promotes project management excellence.', slug: 'tipm-tanzania' },
  { id: 'pm-002', name: 'Turner & Townsend Tanzania', category: 'project-managers', subcategory: 'Project Management', location: 'Dar es Salaam', description: 'International project management consultancy for large-scale construction and infrastructure projects.', website: 'https://turnerandtownsend.com', slug: 'turner-townsend-tz' },
  { id: 'pm-003', name: 'Mace Tanzania', category: 'project-managers', subcategory: 'Project Management', location: 'Dar es Salaam', description: 'Global project management consultancy delivering construction programs across East Africa.', website: 'https://macegroup.com', slug: 'mace-tanzania' },
  { id: 'pm-004', name: 'ProjManage Tanzania', category: 'project-managers', subcategory: 'Project Management', location: 'Dodoma', description: 'Local project management firm specializing in government and institutional construction projects.', slug: 'projmanage-tz' },

  // BUILDING CONTRACTORS
  { id: 'bc-001', name: 'Tanzania Contractors Registration Board (CRB)', category: 'building-contractors', subcategory: 'Regulatory Body', location: 'Dar es Salaam', description: 'Government body that registers and regulates building contractors in Tanzania.', website: 'https://crb.go.tz', phone: '+255 22 215 0690', slug: 'crb-tanzania' },
  { id: 'bc-002', name: 'China Railway Jianchang Engineering', category: 'building-contractors', subcategory: 'Building Contractor', location: 'Dar es Salaam', description: 'Large-scale building contractor specializing in commercial, residential and institutional construction.', slug: 'crje-tanzania' },
  { id: 'bc-003', name: 'Vineyard Construction Ltd', category: 'building-contractors', subcategory: 'Building Contractor', location: 'Dar es Salaam', description: 'Established building contractor for commercial, residential and industrial construction projects.', phone: '+255 22 217 0000', slug: 'vineyard-construction' },
  { id: 'bc-004', name: 'Monarch Construction Ltd', category: 'building-contractors', subcategory: 'Building Contractor', location: 'Dar es Salaam', description: 'Building contractor offering construction services for commercial and residential developments.', slug: 'monarch-construction' },
  { id: 'bc-005', name: 'Jamali Building Contractors', category: 'building-contractors', subcategory: 'Building Contractor', location: 'Dodoma', description: 'Building contractor specializing in government buildings, schools and institutional projects in Dodoma.', slug: 'jamali-building' },
  { id: 'bc-006', name: 'Zanzibar Construction Company', category: 'building-contractors', subcategory: 'Building Contractor', location: 'Zanzibar', description: 'Local building contractor for residential, commercial and hospitality construction across Zanzibar.', slug: 'zanzibar-construction' },

  // CIVIL CONTRACTORS
  { id: 'cc-001', name: 'China Communications Construction Company', category: 'civil-contractors', subcategory: 'Civil Contractor', location: 'Dar es Salaam', description: 'International civil contractor for roads, bridges, ports and infrastructure projects across Tanzania.', slug: 'cccc-tanzania' },
  { id: 'cc-002', name: 'Raia Construction Ltd', category: 'civil-contractors', subcategory: 'Civil Contractor', location: 'Dar es Salaam', description: 'Civil engineering contractor for roads, drainage, water supply and infrastructure projects.', phone: '+255 22 218 0000', slug: 'raia-construction' },
  { id: 'cc-003', name: 'Yapi Merkezi Tanzania', category: 'civil-contractors', subcategory: 'Civil Contractor', location: 'Dar es Salaam', description: 'International civil contractor specializing in railway, road and infrastructure construction.', slug: 'yapi-merkezi-tz' },
  { id: 'cc-004', name: 'Mota-Engil Tanzania', category: 'civil-contractors', subcategory: 'Civil Contractor', location: 'Dar es Salaam', description: 'International civil engineering contractor for roads, bridges and public works projects.', website: 'https://motaengil.com', slug: 'mota-engil-tz' },

  // ROAD CONTRACTORS
  { id: 'rc-001', name: 'TANROADS', category: 'road-contractors', subcategory: 'Government Agency', location: 'Dar es Salaam', description: 'Tanzania National Roads Agency. Responsible for management and maintenance of national road network.', website: 'https://tanroads.go.tz', phone: '+255 22 215 0690', slug: 'tanroads' },
  { id: 'rc-002', name: 'China Road and Bridge Corporation', category: 'road-contractors', subcategory: 'Road Contractor', location: 'Dar es Salaam', description: 'International road and bridge construction contractor for major highway and infrastructure projects.', slug: 'crbc-tanzania' },
  { id: 'rc-003', name: 'Summa Construction Tanzania', category: 'road-contractors', subcategory: 'Road Contractor', location: 'Dar es Salaam', description: 'Road construction contractor for highways, urban roads and bridge projects across Tanzania.', slug: 'summa-construction' },
  { id: 'rc-004', name: 'Julius Berger Tanzania', category: 'road-contractors', subcategory: 'Road Contractor', location: 'Dar es Salaam', description: 'International road and civil engineering contractor for major infrastructure projects.', slug: 'julius-berger-tz' },

  // MEP CONTRACTORS
  { id: 'mep-001', name: 'Tanzania Electrical Contractors Association', category: 'mep-contractors', subcategory: 'Professional Body', location: 'Dar es Salaam', description: 'Professional association for electrical and mechanical contractors in Tanzania.', slug: 'teca-tanzania' },
  { id: 'mep-002', name: 'Volt Tanzania Electrical Contractors', category: 'mep-contractors', subcategory: 'Electrical Contractor', location: 'Dar es Salaam', description: 'Electrical contracting services for commercial, industrial and residential projects.', phone: '+255 22 219 0000', slug: 'volt-electrical' },
  { id: 'mep-003', name: 'AirTech Mechanical Services', category: 'mep-contractors', subcategory: 'HVAC Contractor', location: 'Dar es Salaam', description: 'Mechanical and HVAC contracting for commercial buildings, hotels and industrial facilities.', slug: 'airtech-mechanical' },
  { id: 'mep-004', name: 'PlumbTech Tanzania', category: 'mep-contractors', subcategory: 'Plumbing Contractor', location: 'Dar es Salaam', description: 'Plumbing and fire protection contracting for commercial and residential construction projects.', slug: 'plumbtech-tz' },

  // CEMENT MANUFACTURERS
  { id: 'cem-001', name: 'Tanzania Portland Cement Company (TPCC)', category: 'cement-manufacturers', subcategory: 'Cement Manufacturer', location: 'Dar es Salaam', description: 'Manufacturer of Portland cement and building materials. Operates Tanzania Cement brand.', website: 'https://tpcc.co.tz', phone: '+255 22 286 0000', slug: 'tpcc' },
  { id: 'cem-002', name: 'Dangote Cement Tanzania', category: 'cement-manufacturers', subcategory: 'Cement Manufacturer', location: 'Mtwara', description: 'Major cement manufacturer producing Dangote brand cement for the Tanzanian market.', website: 'https://dangote.com', slug: 'dangote-cement-tz' },
  { id: 'cem-003', name: 'Lake Cement Tanzania', category: 'cement-manufacturers', subcategory: 'Cement Manufacturer', location: 'Tanga', description: 'Cement manufacturer producing Kilimanjaro brand cement for domestic and regional markets.', slug: 'lake-cement-tz' },
  { id: 'cem-004', name: 'Simba Cement Tanzania', category: 'cement-manufacturers', subcategory: 'Cement Manufacturer', location: 'Dar es Salaam', description: 'Cement supplier offering various grades of cement for construction projects across Tanzania.', slug: 'simba-cement-tz' },

  // STEEL MANUFACTURERS
  { id: 'stl-001', name: 'Steel & Cement Products Ltd', category: 'steel-manufacturers', subcategory: 'Steel Manufacturer', location: 'Dar es Salaam', description: 'Manufacturer of steel reinforcement bars, structural steel and steel products for construction.', phone: '+255 22 220 0000', slug: 'steel-cement-products' },
  { id: 'stl-002', name: 'Tanzania Steel Rolling Mills', category: 'steel-manufacturers', subcategory: 'Steel Manufacturer', location: 'Dar es Salaam', description: 'Manufacturer of steel reinforcement bars (rebar) and structural steel sections.', slug: 'tsrm' },
  { id: 'stl-003', name: 'Kibo Steel Ltd', category: 'steel-manufacturers', subcategory: 'Steel Manufacturer', location: 'Dar es Salaam', description: 'Steel manufacturer producing reinforcement bars and steel products for construction industry.', slug: 'kibo-steel' },

  // ALUMINIUM SUPPLIERS
  { id: 'alu-001', name: 'Aluminium Tanzania Ltd', category: 'aluminium-suppliers', subcategory: 'Aluminium Supplier', location: 'Dar es Salaam', description: 'Supplier of aluminium profiles, sheets and fabrication materials for construction.', phone: '+255 22 221 0000', slug: 'aluminium-tanzania' },
  { id: 'alu-002', name: 'Aluworks Tanzania', category: 'aluminium-suppliers', subcategory: 'Aluminium Supplier', location: 'Dar es Salaam', description: 'Aluminium products supplier for windows, doors, curtain walls and architectural applications.', slug: 'aluworks-tz' },
  { id: 'alu-003', name: 'Premier Aluminium Ltd', category: 'aluminium-suppliers', subcategory: 'Aluminium Supplier', location: 'Dar es Salaam', description: 'Aluminium supplier offering profiles, hardware and fabrication materials for construction.', slug: 'premier-aluminium' },

  // GLASS SUPPLIERS
  { id: 'gl-001', name: 'Tanzania Glass Industries', category: 'glass-suppliers', subcategory: 'Glass Manufacturer', location: 'Dar es Salaam', description: 'Manufacturer and supplier of float glass, tempered glass and architectural glass products.', slug: 'tanzania-glass' },
  { id: 'gl-002', name: 'Guardian Glass Tanzania', category: 'glass-suppliers', subcategory: 'Glass Supplier', location: 'Dar es Salaam', description: 'Supplier of architectural glass products including tempered, laminated and insulated glass.', slug: 'guardian-glass-tz' },
  { id: 'gl-003', name: 'East Africa Glassworks', category: 'glass-suppliers', subcategory: 'Glass Fabrication', location: 'Dar es Salaam', description: 'Glass fabrication and installation for commercial and residential construction projects.', slug: 'ea-glassworks' },

  // ROOFING SUPPLIERS
  { id: 'rf-001', name: 'Roofing Materials Tanzania', category: 'roofing-suppliers', subcategory: 'Roofing Supplier', location: 'Dar es Salaam', description: 'Supplier of roofing sheets, tiles, accessories and waterproofing materials for construction.', phone: '+255 22 222 0000', slug: 'roofing-materials-tz' },
  { id: 'rf-002', name: 'Mabati Rolling Mills', category: 'roofing-suppliers', subcategory: 'Roofing Manufacturer', location: 'Dar es Salaam', description: 'Manufacturer of galvanized and pre-painted roofing sheets (mabati) for residential and commercial buildings.', website: 'https://mabati.com', slug: 'mabati-rolling-mills' },
  { id: 'rf-003', name: 'ALAF Ltd', category: 'roofing-suppliers', subcategory: 'Roofing Manufacturer', location: 'Dar es Salaam', description: 'Manufacturer of corrugated roofing sheets and steel products for construction industry.', slug: 'alaf-ltd' },

  // PAINT SUPPLIERS
  { id: 'pt-001', name: 'Azar Chemical Industries', category: 'paint-suppliers', subcategory: 'Paint Manufacturer', location: 'Dar es Salaam', description: 'Manufacturer of Dulux brand paints for interior, exterior and industrial applications.', website: 'https://azar.co.tz', phone: '+255 22 223 0000', slug: 'azar-chemical' },
  { id: 'pt-002', name: 'Kansai Paints Tanzania', category: 'paint-suppliers', subcategory: 'Paint Manufacturer', location: 'Dar es Salaam', description: 'Manufacturer of Kansai brand paints for residential, commercial and industrial applications.', slug: 'kansai-paints-tz' },
  { id: 'pt-003', name: 'Sadolin Tanzania', category: 'paint-suppliers', subcategory: 'Paint Supplier', location: 'Dar es Salaam', description: 'Supplier of Sadolin brand paints, wood finishes and protective coatings.', slug: 'sadolin-tz' },

  // TIMBER SUPPLIERS
  { id: 'tm-001', name: 'Tanzania Timber Company', category: 'timber-suppliers', subcategory: 'Timber Supplier', location: 'Dar es Salaam', description: 'Supplier of sawn timber, plywood and wood products for construction and manufacturing.', phone: '+255 22 224 0000', slug: 'tanzania-timber' },
  { id: 'tm-002', name: 'Meru Timber Ltd', category: 'timber-suppliers', subcategory: 'Timber Supplier', location: 'Arusha', description: 'Supplier of hardwood and softwood timber, plywood and construction wood products.', slug: 'meru-timber' },
  { id: 'tm-003', name: 'Forest Products Ltd', category: 'timber-suppliers', subcategory: 'Timber Supplier', location: 'Dar es Salaam', description: 'Supplier of processed timber, plywood, MDF and other wood products for construction.', slug: 'forest-products' },

  // BOREHOLE DRILLING
  { id: 'bh-001', name: 'Tanzania Drilling Company', category: 'borehole-drilling', subcategory: 'Borehole Drilling', location: 'Dar es Salaam', description: 'Professional borehole drilling services for residential, commercial and agricultural water supply.', phone: '+255 22 225 0000', slug: 'tz-drilling' },
  { id: 'bh-002', name: 'Aqua Drill Tanzania', category: 'borehole-drilling', subcategory: 'Borehole Drilling', location: 'Dar es Salaam', description: 'Borehole drilling, well construction and water supply system installation services.', slug: 'aqua-drill' },
  { id: 'bh-003', name: 'Deep Well Drilling Services', category: 'borehole-drilling', subcategory: 'Borehole Drilling', location: 'Dodoma', description: 'Deep borehole drilling for institutional, agricultural and commercial water supply projects.', slug: 'deep-well-drilling' },

  // SOIL TESTING
  { id: 'st-001', name: 'Tanzania Bureau of Standards (TBS)', category: 'soil-testing', subcategory: 'Testing Laboratory', location: 'Dar es Salaam', description: 'National standards body offering soil testing, material testing and quality certification services.', website: 'https://tbs.go.tz', phone: '+255 22 215 0690', slug: 'tbs-soil-testing' },
  { id: 'st-002', name: 'GeoLab Tanzania', category: 'soil-testing', subcategory: 'Soil Testing', location: 'Dar es Salaam', description: 'Geotechnical laboratory offering soil testing, classification and analysis for construction projects.', slug: 'geolab-tz' },
  { id: 'st-003', name: 'University of Dar es Salaam Soil Lab', category: 'soil-testing', subcategory: 'Testing Laboratory', location: 'Dar es Salaam', description: 'Academic laboratory offering soil testing and geotechnical analysis services.', slug: 'udsm-soil-lab' },

  // GEOTECHNICAL SERVICES
  { id: 'geo-001', name: 'GeoConsult Tanzania', category: 'geotechnical-services', subcategory: 'Geotechnical Engineering', location: 'Dar es Salaam', description: 'Geotechnical investigation, site assessment and foundation design consultancy services.', phone: '+255 22 226 0000', slug: 'geoconsult-tz' },
  { id: 'geo-002', name: 'Tanzania Geotechnical Society', category: 'geotechnical-services', subcategory: 'Professional Body', location: 'Dar es Salaam', description: 'Professional society for geotechnical engineers and practitioners in Tanzania.', slug: 'tgs-tanzania' },
  { id: 'geo-003', name: 'Soil & Rock Engineers Ltd', category: 'geotechnical-services', subcategory: 'Geotechnical Engineering', location: 'Dar es Salaam', description: 'Geotechnical investigation, soil mechanics and foundation engineering consultancy.', slug: 'soil-rock-engineers' },

  // MATERIAL TESTING
  { id: 'mt-001', name: 'Tanzania Building Materials Testing Lab', category: 'material-testing', subcategory: 'Testing Laboratory', location: 'Dar es Salaam', description: 'Laboratory testing of concrete, steel, aggregates and other construction materials.', phone: '+255 22 227 0000', slug: 'tbm-testing' },
  { id: 'mt-002', name: 'Quality Assurance Lab Tanzania', category: 'material-testing', subcategory: 'Testing Laboratory', location: 'Dar es Salaam', description: 'Quality assurance testing for concrete, aggregates, cement and construction materials.', slug: 'qa-lab-tz' },
  { id: 'mt-003', name: 'Tanzania Standards (Quality Control)', category: 'material-testing', subcategory: 'Testing Laboratory', location: 'Dar es Salaam', description: 'Material testing and quality control services for construction materials.', slug: 'tz-standards-qc' },

  // EQUIPMENT RENTAL
  { id: 'er-001', name: 'Boels Rental Tanzania', category: 'equipment-rental', subcategory: 'Equipment Rental', location: 'Dar es Salaam', description: 'Construction equipment rental including excavators, loaders, compressors and power tools.', website: 'https://boels.com', phone: '+255 22 228 0000', slug: 'boels-tz' },
  { id: 'er-002', name: 'Kanu Equipment Tanzania', category: 'equipment-rental', subcategory: 'Equipment Rental', location: 'Dar es Salaam', description: 'Construction and mining equipment rental, sales and servicing.', slug: 'kanu-equipment' },
  { id: 'er-003', name: 'Hertz Equipment Tanzania', category: 'equipment-rental', subcategory: 'Equipment Rental', location: 'Dar es Salaam', description: 'Equipment rental services for construction, mining and industrial applications.', slug: 'hertz-equipment-tz' },

  // HEAVY MACHINERY RENTAL
  { id: 'hm-001', name: 'Mantrac Tanzania', category: 'heavy-machinery-rental', subcategory: 'Machinery Rental', location: 'Dar es Salaam', description: 'Caterpillar equipment dealer offering rental of heavy machinery, excavators and construction equipment.', website: 'https://mantrac.co.tz', phone: '+255 22 229 0000', slug: 'mantrac-tz' },
  { id: 'hm-002', name: 'Tor Engineering Tanzania', category: 'heavy-machinery-rental', subcategory: 'Machinery Rental', location: 'Dar es Salaam', description: 'Heavy machinery rental including cranes, excavators, loaders and earthmoving equipment.', slug: 'tor-engineering' },
  { id: 'hm-003', name: 'Bamburi Heavy Equipment', category: 'heavy-machinery-rental', subcategory: 'Machinery Rental', location: 'Dar es Salaam', description: 'Heavy construction equipment rental and leasing for major infrastructure projects.', slug: 'bamburi-heavy' },

  // GOVERNMENT BODIES
  { id: 'gov-001', name: 'Construction Registration Board (CRB)', category: 'government', subcategory: 'Regulatory Body', location: 'Dar es Salaam', description: 'Government body that registers and regulates contractors, consultants and construction professionals in Tanzania.', website: 'https://crb.go.tz', phone: '+255 22 215 0690', slug: 'crb' },
  { id: 'gov-002', name: 'Engineers Registration Board (ERB)', category: 'government', subcategory: 'Regulatory Body', location: 'Dar es Salaam', description: 'Regulatory body that registers and licenses professional engineers in Tanzania.', website: 'https://erb.or.tz', slug: 'erb' },
  { id: 'gov-003', name: 'Architects Registration Board (AQRB)', category: 'government', subcategory: 'Regulatory Body', location: 'Dar es Salaam', description: 'Regulatory body that registers and licenses professional architects in Tanzania.', website: 'https://arb.or.tz', slug: 'aqrb' },
  { id: 'gov-004', name: 'National Environment Management Council (NEMC)', category: 'government', subcategory: 'Regulatory Body', location: 'Dar es Salaam', description: 'Government agency responsible for environmental management and impact assessments for construction projects.', website: 'https://nemc.or.tz', slug: 'nemc' },
  { id: 'gov-005', name: 'Occupational Safety and Health Authority (OSHA)', category: 'government', subcategory: 'Regulatory Body', location: 'Dar es Salaam', description: 'Government agency responsible for workplace safety and health regulations in construction.', website: 'https://osha.go.tz', slug: 'osha' },
  { id: 'gov-006', name: 'Tanzania Bureau of Standards (TBS)', category: 'government', subcategory: 'Standards Body', location: 'Dar es Salaam', description: 'National standards body responsible for product quality standards and certification.', website: 'https://tbs.go.tz', slug: 'tbs' },
  { id: 'gov-007', name: 'Tanzania Revenue Authority (TRA)', category: 'government', subcategory: 'Government Agency', location: 'Dar es Salaam', description: 'Government tax authority. Handles VAT, customs and tax compliance for construction businesses.', website: 'https://tra.go.tz', slug: 'tra' },
  { id: 'gov-008', name: 'Business Registrations and Licensing Agency (BRELA)', category: 'government', subcategory: 'Government Agency', location: 'Dar es Salaam', description: 'Government agency responsible for business registration and licensing in Tanzania.', website: 'https://brela.go.tz', slug: 'brela' },
  { id: 'gov-009', name: 'Tanzania Investment Centre (TIC)', category: 'government', subcategory: 'Government Agency', location: 'Dar es Salaam', description: 'Government agency that promotes and facilitates investment in Tanzania including construction sector.', website: 'https://tic.go.tz', slug: 'tic' },
  { id: 'gov-010', name: 'Zanzibar Investment Promotion Authority (ZIPA)', category: 'government', subcategory: 'Government Agency', location: 'Zanzibar', description: 'Government agency responsible for investment promotion and facilitation in Zanzibar.', website: 'https://zipa.go.tz', slug: 'zipa' },
];

export function getListingsByCategory(categorySlug: string): DirectoryListing[] {
  return listings.filter(l => l.category === categorySlug);
}

export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  listings.forEach(l => {
    counts[l.category] = (counts[l.category] || 0) + 1;
  });
  return counts;
}

export function getListingBySlug(slug: string): DirectoryListing | undefined {
  return listings.find(l => l.slug === slug);
}

export function searchListings(query: string): DirectoryListing[] {
  const q = query.toLowerCase();
  return listings.filter(l =>
    l.name.toLowerCase().includes(q) ||
    l.description.toLowerCase().includes(q) ||
    l.location.toLowerCase().includes(q) ||
    l.subcategory.toLowerCase().includes(q)
  );
}
