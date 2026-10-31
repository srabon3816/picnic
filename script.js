const places = [
  { id: 1, name: 'Swapnopuri Dreamland', district: 'Dinajpur', experience: 'Adventure + rides', icon: '🎡', desc: 'Dinajpur’s iconic day-out destination with gardens, rides, lakeside views, and space for everyone', tags: ['Swapnopuri pick', 'Scenic', 'Food nearby'], filter: ['food'], votes: 0, featured: true, distanceKm: [50, 55], busMinutes: [90, 110], photo: { src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Artificial_Dolphin.jpg/960px-Artificial_Dolphin.jpg', alt: 'Artificial dolphin sculpture at Swapnopuri', artist: 'Sumon.akram', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Artificial_Dolphin.jpg' } },
  { id: 2, name: 'Ramsagar National Park', district: 'Dinajpur', experience: 'Lakeside nature', icon: '🌊', desc: 'A peaceful historic lake surrounded by trees, open lawns, and calm picnic corners', tags: ['Quiet', 'Nature'], filter: ['quiet'], votes: 0, distanceKm: [12, 14], busMinutes: [25, 40], photo: { src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Ramsagar_National_Park_Dinajpur_3656.jpg/960px-Ramsagar_National_Park_Dinajpur_3656.jpg', alt: 'Aerial view of Ramsagar National Park and lake', artist: 'Abdul Momin', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Ramsagar_National_Park_Dinajpur_3656.jpg' } },
  { id: 3, name: 'Kantajew Temple', district: 'Dinajpur', experience: 'Heritage + photos', icon: '🛕', desc: 'Terracotta architecture and a memorable cultural stop near Kantanagar', tags: ['Heritage', 'Scenic'], filter: [], votes: 0, distanceKm: [20, 23], busMinutes: [40, 55], photo: { src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/1._%E0%A6%95%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%A8%E0%A6%97%E0%A6%B0_%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0.jpg/960px-1._%E0%A6%95%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%A8%E0%A6%97%E0%A6%B0_%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%b0.jpg', alt: 'Aerial view of Kantanagar Temple', artist: 'Pinu Rahman', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:1._%E0%A6%95%E0%A6%be%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%A8%E0%A6%97%E0%A6%b0_%E0%A6%ae%E0%A6%A8%E0%A7%8d%E0%A6%A6%E0%A6%bf%E0%A6%b0.jpg' } },
  { id: 4, name: 'Nayabad Mosque', district: 'Dinajpur', experience: 'Heritage trail', icon: '🏛️', desc: 'A beautiful historic landmark to pair with a relaxed day around Kantanagar', tags: ['Quiet', 'Heritage'], filter: ['quiet'], votes: 0, distanceKm: [19, 22], busMinutes: [40, 55], photo: { src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Noyabaad_Mosque_%285%29.jpg/960px-Noyabaad_Mosque_%285%29.jpg', alt: 'Historic Nayabad Mosque in Dinajpur', artist: 'Nasir Khan Saikat', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Noyabaad_Mosque_(5).jpg' } },
  { id: 5, name: 'Dinajpur Rajbari', district: 'Dinajpur', experience: 'History + gardens', icon: '🏰', desc: 'Explore local history, architecture, and spacious surroundings close to town', tags: ['Heritage', 'Spacious'], filter: [], votes: 0, distanceKm: [3, 5], busMinutes: [10, 20], photo: { src: 'https://upload.wikimedia.org/wikipedia/commons/8/86/%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%9C%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%B0%E0%A6%BE%E0%A6%9C%E0%A6%AC%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BF_Dinajpur_Rajbari_02.jpg', alt: 'Historic Dinajpur Rajbari', artist: 'Sushantay', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:%E0%A6%A6%E0%A6%bf%E0%A6%A8%E0%A6%be%E0%A6%9c%E0%A6%aa%E0%A7%81%E0%A6%B0_%E0%A6%B0%E0%A6%be%E0%A6%9c%E0%A6%ac%E0%A6%be%E0%A6%A1%E0%A6%BC%E0%A6%BF_Dinajpur_Rajbari_02.jpg' } },
  { id: 6, name: 'Singra Forest', district: 'Dinajpur', experience: 'Forest escape', icon: '🌳', desc: 'Green trails and fresh air for a slower, nature-filled group afternoon', tags: ['Quiet', 'Nature'], filter: ['quiet'], votes: 0, distanceKm: [45, 55], busMinutes: [80, 105], photo: { src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Trees_from_singra_forest.jpg/960px-Trees_from_singra_forest.jpg', alt: 'Green trees inside Singra Forest', artist: 'Subrotakumar02', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Trees_from_singra_forest.jpg' } },
  { id: 7, name: 'Tajhat Palace', district: 'Rangpur', experience: 'Palace + gardens', icon: '🏛️', desc: 'A grand historic palace with lawns, galleries, and a beautiful group-photo backdrop', tags: ['Heritage', 'Spacious'], filter: [], votes: 0, distanceKm: [80, 90], busMinutes: [120, 155], photo: { src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Tajhat_Palace_Rangpur_City.jpg/960px-Tajhat_Palace_Rangpur_City.jpg', alt: 'Front view of Tajhat Palace in Rangpur', artist: 'Cerium4B', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Tajhat_Palace_Rangpur_City.jpg' } },
  { id: 8, name: 'Nilsagar', district: 'Nilphamari', experience: 'Lake + open sky', icon: '🦢', desc: 'A peaceful waterbody with wide open views for a relaxed division-wide day trip', tags: ['Quiet', 'Scenic'], filter: ['quiet'], votes: 0, distanceKm: [65, 75], busMinutes: [105, 140], photo: { src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Nilsagar.jpg/960px-Nilsagar.jpg', alt: 'Nilsagar lake in Nilphamari', artist: 'Mrinal.eee', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Nilsagar.jpg' } },
  { id: 9, name: 'Banglabandha Zero Point', district: 'Panchagarh', experience: 'Borderland adventure', icon: '🧭', desc: 'A memorable northern journey with dramatic landscapes and a once-in-a-lifetime group photo', tags: ['Adventure', 'Scenic'], filter: [], votes: 0, distanceKm: [135, 150], busMinutes: [210, 270], photo: { src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Banglabandha_Zero_Point%2C_Panchagharh.jpg/960px-Banglabandha_Zero_Point%2C_Panchagharh.jpg', alt: 'Banglabandha Zero Point in Panchagarh', artist: 'Rafsanahmed', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Banglabandha_Zero_Point,_Panchagharh.jpg' } },
  { id: 10, name: 'Teesta Barrage', district: 'Lalmonirhat', experience: 'River views + breeze', icon: '🌅', desc: 'Fresh river air, open views, and a spacious setting for games and snacks', tags: ['Scenic', 'Spacious'], filter: [], votes: 0, distanceKm: [115, 130], busMinutes: [190, 245], photo: { src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Teesta_Barrage_Bangladesh.jpg/960px-Teesta_Barrage_Bangladesh.jpg', alt: 'Teesta Barrage and its surrounding water', artist: 'Shafiul Islam Shaikot', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Teesta_Barrage_Bangladesh.jpg' } }
];

const messages = {
  en: {
    siteTitle: 'Picnic Selection', picnicSticker: 'CST<br>DAY OUT',
    language: 'Language', theme: 'Theme', themeLiquid: 'Liquid Glass', themeNeon: 'Neon Night', themeDawn: 'Soft Dawn',
    realVotes: 'Real votes only', welcomeEyebrow: 'DPI · CST picnic 2026',
    welcomeTitle: 'Good times are <em>calling.</em>', welcomeDescription: 'A day with your classmates, fresh air, great food, and memories worth keeping starts with one choice. Help pick our picnic destination!',
    picnicDate: 'November 10, 2026', schoolName: 'Dinajpur Polytechnic Institute', placeVote: 'Place my vote',
    verified: 'CST 2026 · VERIFIED', footerProgram: 'CST · 1st + 2nd + 4th + 6th semester picnic',
    developerLabel: 'Built by', developerBio: 'CST · 4th-semester student at Dinajpur Polytechnic Institute',
    footerTagline: 'A little planning today, a lifetime of picnic memories tomorrow.',
    footerMadeFor: 'Made with care for DPI CST students', footerBackTop: 'Back to top',
    whatsappLabel: 'WhatsApp', emailLabel: 'Gmail', footerContact: 'Say hello',
    notNow: 'Not now', welcomeHint: 'Choose your spot and cast your CST vote.', heroTitle: 'Pick our<br><em>Dinajpur day out.</em>',
    heroIntro: 'CST students from 1st, 2nd, 4th, and 6th semester are choosing one unforgettable picnic destination together. Cast your vote and let the best local adventure win.',
    browseSpots: 'Explore destinations', liveBoard: 'Live vote board', pollTitle: 'CST picnic poll',
    destinationCount: '10 handpicked places', heroPhotoEyebrow: 'Your next great day out',
    participantAccess: 'YOUR PICNIC VOTE STARTS HERE · এখান থেকেই শুরু হোক আপনার ভোট',
    semesterList: 'CST • 1st + 2nd + 4th + 6th semester', totalVotes: 'Total votes', untilDate: 'Until November 10, 2026',
    participation: 'Participation', participationNote: 'CST 1st + 2nd + 4th + 6th semester are voting live',
    participantAccess: 'CAST YOUR VOTE · DPI CST PICNIC 2026', votingPassTitle: 'Your futuristic voting pass',
    votingPassIntro: 'Enter your CST details once, then choose a Rangpur Division destination to unlock your vote.',
    passLabel: 'VOTING PASS · ভোটিং পাস', semesterLabel: 'Semester / সেমিস্টার', selectSemester: 'Select semester / নির্বাচন করুন',
    semesterHelp: 'Choose your current CST semester · বর্তমান সেমিস্টার বাছাই করুন', shiftLabel: 'Shift / শিফট',
    selectShift: 'Select shift / নির্বাচন করুন', firstShift: '1st Shift', secondShift: '2nd Shift',
    rollLabel: 'Roll / রোল', rollHelp: '1–6 digits · ১–৬ সংখ্যা', rollPlaceholder: 'e.g. 1204', phoneLabel: 'Phone / ফোন নম্বর',
    phonePlaceholder: '01XXXXXXXXX',
    phoneHelp: '11 digit Bangladesh number · ১১ সংখ্যার নম্বর', destinationLabel: 'Destination / গন্তব্য',
    selectDestination: 'Select a Rangpur Division spot / গন্তব্য বাছাই করুন',
    destinationHelp: 'Only destinations within Rangpur Division are eligible · শুধু রংপুর বিভাগের গন্তব্যগুলোই গ্রহণযোগ্য।',
    generatePass: 'Generate my voting pass', passStatus: 'Pass status · পাসের অবস্থা', ready: 'Ready when you are',
    readyIntro: 'Submit your details to receive a unique token and lock in your destination.',
    ledgerEyebrow: 'Student voting ledger · শিক্ষার্থীদের তালিকা', ledgerTitle: 'Who has voted?',
    ledgerIntro: 'Every completed voting pass appears here on this device. Download the list as an Excel-compatible CSV for the picnic coordinator.',
    exportCsv: '⇩ Download Excel list / এক্সেল তালিকা', studentsSubmitted: 'Students submitted · শিক্ষার্থী',
    localView: 'Local coordinator view · স্থানীয় তালিকা', token: 'Token / টোকেন', semesterHeader: 'Semester',
    shiftHeader: 'Shift', rollHeader: 'Roll / রোল', phoneHeader: 'Phone / ফোন', destinationHeader: 'Destination / গন্তব্য',
    submitted: 'Submitted', emptyRoster: 'No student pass yet · এখনও কোনো পাস জমা হয়নি',
    shortlistEyebrow: 'DPI CST shortlist · November 10, 2026', placesTitle: 'Where should we spread the blanket?',
    placesIntro: 'Swapnopuri leads the way, with memorable places across Dinajpur division.',
    suggestPlace: '＋ Suggest a place', searchPlaceholder: 'Search places or tags', filterPlaces: 'Filter places',
    allSpots: 'All spots', quiet: 'Quiet', foodNearby: 'Food nearby',
    routeDistance: 'Approx. road distance from DPI', busDuration: 'Estimated bus time',
    openDirections: 'Open road directions', photoCredit: 'Photo',
    estimatesNote: 'Road distance and one-way bus times are rough planning estimates from Dinajpur Polytechnic Institute. Actual route, traffic, and bus pickup can change them. Open the live map directions before planning. Photos: Wikimedia Commons contributors; tap a photo credit for its license.',
    noResults: 'No spots match that search. Try another word or suggest one!',
    routeDistance: 'Approx. road distance from DPI', busDuration: 'Estimated bus time',
    openDirections: 'Open road directions', photoCredit: 'Photo', routeUnavailable: 'Estimate unavailable',
    photoUnavailable: 'Photo unavailable', previousPhoto: 'Previous destination photo',
    nextPhoto: 'Next destination photo', destinationPhotos: 'Picnic destination photos',
    estimatesNote: 'Road distance and one-way bus times are rough planning estimates from Dinajpur Polytechnic Institute. Actual route, traffic, and bus pickup can change them. Open the live map directions before planning. Photos: Wikimedia Commons contributors; tap a photo credit for its license.',
    addShortlist: 'Add to the shortlist', suggestTitle: 'Know a perfect spot?',
    suggestIntro: 'Drop in a name and a quick vibe. Your suggestion will appear for everyone.',
    placeName: 'Place name', placeNamePlaceholder: 'e.g. The Sculpture Garden',
    whyGood: 'Why it’s good', whyGoodPlaceholder: 'e.g. Shady, spacious, snacks nearby', addPlace: 'Add place',
    leading: '✦ Leading', swapnopuriPick: 'Swapnopuri pick', vote: '♡ Vote', voted: '✓ Voted',
    passConfirmed: 'Pass confirmed · পাস নিশ্চিত', ticketSaved: 'Ticket saved locally · টিকিট সংরক্ষিত হয়েছে।',
    noRecords: 'No student records to export yet · এখনও কোনো রেকর্ড নেই',
    exportComplete: 'Excel-compatible student list downloaded', formIncomplete: 'Please complete every required field · সব ঘর পূরণ করুন',
    chooseDestination: 'Choose a destination first · গন্তব্য নির্বাচন করুন',
    destinationSelected: 'Destination selected. Complete your voting pass.',
    voteRemoved: 'Vote removed · ভোট বাতিল হয়েছে', themeSelected: 'theme selected',
    participantPoll: 'participation selected'
  },
  bn: {
    siteTitle: 'Picnic Selection', picnicSticker: 'সিএসটি<br>পিকনিক',
    language: 'ভাষা', theme: 'থিম', themeLiquid: 'লিকুইড গ্লাস', themeNeon: 'নিয়ন রাত', themeDawn: 'কোমল ভোর',
    realVotes: 'শুধু আসল ভোট', welcomeEyebrow: 'ডিপিআই · সিএসটি পিকনিক ২০২৬',
    welcomeTitle: 'আনন্দের দিন <em>হাতছানি দিচ্ছে!</em>', welcomeDescription: 'সহপাঠীদের সঙ্গে খোলা হাওয়ায়, মজার খাবার আর সুন্দর স্মৃতিতে ভরা একটি দিন শুরু হোক আপনার পছন্দ দিয়ে। আমাদের পিকনিকের জায়গা বেছে নিতে ভোট দিন!',
    picnicDate: '১০ নভেম্বর, ২০২৬', schoolName: 'দিনাজপুর পলিটেকনিক ইনস্টিটিউট', placeVote: 'আমার ভোট দিন',
    verified: 'সিএসটি ২০২৬ · যাচাইকৃত', footerProgram: 'সিএসটি · ১ম + ২য় + ৪র্থ + ৬ষ্ঠ পর্বের পিকনিক',
    developerLabel: 'নির্মাতা', developerBio: 'দিনাজপুর পলিটেকনিক ইনস্টিটিউটে সিএসটি বিভাগের ৪র্থ পর্বের শিক্ষার্থী',
    footerTagline: 'আজকের একটু পরিকল্পনা, আগামীকালের সারাজীবনের পিকনিক স্মৃতি।',
    footerMadeFor: 'ডিপিআই সিএসটি শিক্ষার্থীদের জন্য ভালোবাসায় তৈরি', footerBackTop: 'উপরে ফিরুন',
    whatsappLabel: 'হোয়াটসঅ্যাপ', emailLabel: 'জিমেইল', footerContact: 'যোগাযোগ করুন',
    notNow: 'এখন নয়', welcomeHint: 'আপনার পছন্দের জায়গা বেছে নিয়ে সিএসটি ভোট দিন।',
    heroTitle: 'চলো বেছে নিই<br><em>দিনাজপুরের সেরা ভ্রমণ!</em>',
    heroIntro: 'সিএসটি বিভাগের ১ম, ২য়, ৪র্থ ও ৬ষ্ঠ পর্বের শিক্ষার্থীরা একসঙ্গে বেছে নিচ্ছে পিকনিকের গন্তব্য। আপনার ভোট দিন, আর জিতুক সবার পছন্দের জায়গা!',
    browseSpots: 'গন্তব্যগুলো ঘুরে দেখুন', liveBoard: 'লাইভ ভোট বোর্ড', pollTitle: 'সিএসটি পিকনিক ভোট',
    destinationCount: 'বেছে নেওয়া ১০টি জায়গা', heroPhotoEyebrow: 'সামনে অপেক্ষা করছে দারুণ একটা দিন',
    semesterList: 'সিএসটি • ১ম + ২য় + ৪র্থ + ৬ষ্ঠ পর্ব', totalVotes: 'মোট ভোট',
    untilDate: '১০ নভেম্বর, ২০২৬ পর্যন্ত', participation: 'অংশগ্রহণ',
    participationNote: 'সিএসটি ১ম, ২য়, ৪র্থ ও ৬ষ্ঠ পর্বের শিক্ষার্থীরা ভোট দিচ্ছেন',
    participantAccess: 'আপনার ভোট দিন · ডিপিআই সিএসটি পিকনিক ২০২৬', votingPassTitle: 'আপনার ফিউচারিস্টিক ভোটিং পাস',
    votingPassIntro: 'আপনার সিএসটি তথ্য দিন, তারপর ভোট দিতে রংপুর বিভাগের একটি গন্তব্য বেছে নিন।',
    passLabel: 'ভোটিং পাস', semesterLabel: 'পর্ব', selectSemester: 'পর্ব নির্বাচন করুন',
    semesterHelp: 'আপনার বর্তমান সিএসটি পর্ব বেছে নিন', shiftLabel: 'শিফট',
    selectShift: 'শিফট নির্বাচন করুন', firstShift: '১ম শিফট', secondShift: '২য় শিফট',
    rollLabel: 'রোল', rollHelp: '১–৬ সংখ্যা · যেমন: 1204', rollPlaceholder: 'যেমন: 1204', phoneLabel: 'ফোন নম্বর',
    phonePlaceholder: '01XXXXXXXXX',
    phoneHelp: 'বাংলাদেশের ১১ সংখ্যার ফোন নম্বর', destinationLabel: 'গন্তব্য',
    selectDestination: 'রংপুর বিভাগের একটি জায়গা বেছে নিন',
    destinationHelp: 'শুধু রংপুর বিভাগের গন্তব্যগুলোই ভোটের জন্য গ্রহণযোগ্য।',
    generatePass: 'আমার ভোটিং পাস তৈরি করুন', passStatus: 'পাসের অবস্থা', ready: 'আপনার অপেক্ষায়',
    readyIntro: 'আপনার তথ্য জমা দিয়ে ইউনিক টোকেন নিন এবং গন্তব্যে ভোট নিশ্চিত করুন।',
    ledgerEyebrow: 'শিক্ষার্থীদের ভোটের তালিকা', ledgerTitle: 'কারা ভোট দিয়েছেন?',
    ledgerIntro: 'এই ডিভাইসে জমা দেওয়া ভোটিং পাসগুলো এখানে দেখা যাবে। পিকনিক সমন্বয়কের জন্য এক্সেল-উপযোগী তালিকা ডাউনলোড করুন।',
    exportCsv: '⇩ এক্সেল তালিকা ডাউনলোড', studentsSubmitted: 'জন শিক্ষার্থী জমা দিয়েছেন',
    localView: 'স্থানীয় সমন্বয়কের তালিকা', token: 'টোকেন', semesterHeader: 'পর্ব',
    shiftHeader: 'শিফট', rollHeader: 'রোল', phoneHeader: 'ফোন', destinationHeader: 'গন্তব্য',
    submitted: 'জমার তারিখ', emptyRoster: 'এখনও কোনো শিক্ষার্থীর পাস জমা হয়নি',
    shortlistEyebrow: 'ডিপিআই সিএসটি পছন্দের তালিকা · ১০ নভেম্বর, ২০২৬',
    placesTitle: 'পিকনিকের চাদর কোথায় বিছাবো?', placesIntro: 'দিনাজপুরের স্মরণীয় জায়গাগুলোর মধ্যে স্বপ্নপুরী সবার আগে।',
    suggestPlace: '＋ জায়গার প্রস্তাব দিন', searchPlaceholder: 'জায়গা বা বৈশিষ্ট্য খুঁজুন', filterPlaces: 'জায়গা বাছাই',
    allSpots: 'সব জায়গা', quiet: 'নিরিবিলি', foodNearby: 'কাছেই খাবার',
    routeDistance: 'ডিপিআই থেকে আনুমানিক সড়কপথ', busDuration: 'বাসে যেতে আনুমানিক সময়',
    openDirections: 'লাইভ ম্যাপ রুট দেখুন', photoCredit: 'ছবি', routeUnavailable: 'আনুমানিক তথ্য নেই',
    photoUnavailable: 'ছবি পাওয়া যায়নি', previousPhoto: 'আগের গন্তব্যের ছবি',
    nextPhoto: 'পরের গন্তব্যের ছবি', destinationPhotos: 'পিকনিকের গন্তব্যের ছবি',
    estimatesNote: 'দিনাজপুর পলিটেকনিক ইনস্টিটিউট থেকে একমুখী বাসযাত্রার সময় ও সড়ক দূরত্ব পরিকল্পনার সুবিধার জন্য আনুমানিক দেওয়া হয়েছে। আসল রুট, যানজট ও বাসের পিকআপ অনুযায়ী সময় বদলাতে পারে। পরিকল্পনার আগে লাইভ ম্যাপ রুট দেখে নিন। ছবিগুলো উইকিমিডিয়া কমন্সের অবদানকারীদের; ছবির ক্রেডিটে ট্যাপ করে লাইসেন্স দেখুন।',
    routeDistance: 'ডিপিআই থেকে আনুমানিক সড়কপথ', busDuration: 'বাসে যেতে আনুমানিক সময়',
    openDirections: 'লাইভ ম্যাপ রুট দেখুন', photoCredit: 'ছবি',
    estimatesNote: 'দিনাজপুর পলিটেকনিক ইনস্টিটিউট থেকে একমুখী বাসযাত্রার সময় ও সড়ক দূরত্ব পরিকল্পনার সুবিধার জন্য আনুমানিক দেওয়া হয়েছে। আসল রুট, যানজট ও বাসের পিকআপ অনুযায়ী সময় বদলাতে পারে। পরিকল্পনার আগে লাইভ ম্যাপ রুট দেখে নিন। ছবিগুলো উইকিমিডিয়া কমন্সের অবদানকারীদের; ছবির ক্রেডিটে ট্যাপ করে লাইসেন্স দেখুন।',
    noResults: 'এই খোঁজে কোনো জায়গা মেলেনি। অন্য শব্দ লিখুন বা নতুন জায়গার প্রস্তাব দিন!',
    addShortlist: 'পছন্দের তালিকায় যোগ করুন', suggestTitle: 'চেনা কোনো সুন্দর জায়গা আছে?',
    suggestIntro: 'জায়গার নাম আর কেন ভালো লাগে লিখুন। আপনার প্রস্তাব সবাই দেখতে পাবে।',
    placeName: 'জায়গার নাম', placeNamePlaceholder: 'যেমন: ভাওয়াল উদ্যান',
    whyGood: 'কেন জায়গাটি ভালো', whyGoodPlaceholder: 'যেমন: ছায়াঘেরা, খোলামেলা, পাশে খাবার আছে', addPlace: 'জায়গা যোগ করুন',
    leading: '✦ এগিয়ে আছে', swapnopuriPick: 'স্বপ্নপুরী পছন্দ', vote: '♡ ভোট দিন', voted: '✓ ভোট দিয়েছেন',
    passConfirmed: 'পাস নিশ্চিত', ticketSaved: 'টিকিট এই ডিভাইসে সংরক্ষিত হয়েছে।',
    noRecords: 'ডাউনলোড করার মতো কোনো শিক্ষার্থী রেকর্ড নেই',
    exportComplete: 'এক্সেল-উপযোগী শিক্ষার্থী তালিকা ডাউনলোড হয়েছে',
    formIncomplete: 'অনুগ্রহ করে সব প্রয়োজনীয় ঘর পূরণ করুন',
    chooseDestination: 'আগে একটি গন্তব্য বেছে নিন',
    destinationSelected: 'গন্তব্য বেছে নেওয়া হয়েছে। ভোটিং পাস পূরণ করুন।',
    voteRemoved: 'ভোট বাতিল করা হয়েছে', themeSelected: 'থিম নির্বাচন করা হয়েছে',
    participantPoll: 'অংশগ্রহণ নির্বাচন করা হয়েছে'
  }
};
const mixedOverrides = {
  siteTitle: 'Picnic Selection',
  picnicSticker: 'CST<br>DAY OUT<br>পিকনিক',
  welcomeEyebrow: 'DPI · CST Picnic 2026 / সিএসটি পিকনিক ২০২৬',
  welcomeTitle: 'Good times are <em>calling!</em><br><span class="bn-line">আনন্দের দিন হাতছানি দিচ্ছে!</span>',
  welcomeDescription: 'Fresh air, fun, food আর friends-এর সঙ্গে unforgettable memories! Help choose our picnic spot.',
  welcomeHint: 'Choose your spot, vote দিন, and make it count!',
  heroTitle: 'Pick our<br><em>Dinajpur day out!</em><br><span class="bn-line">দিনাজপুরে হোক সেরা outing!</span>',
  heroIntro: 'CST students, চলো একসাথে choose করি picnic destination! ১ম, ২য়, ৪র্থ ও ৬ষ্ঠ পর্বের সবার vote welcome.',
  pollTitle: 'CST Picnic Poll / পিকনিক ভোট',
  semesterList: 'CST · 1st + 2nd + 4th + 6th semester / ১ম + ২য় + ৪র্থ + ৬ষ্ঠ পর্ব',
  participationNote: 'Your CST friends are voting live / বন্ধুরা দিচ্ছে লাইভ ভোট',
  votingPassTitle: 'Your voting pass / আপনার ভোটিং পাস',
  votingPassIntro: 'Add your CST details, choose a Rangpur Division spot, and make your vote count.',
  readyIntro: 'Submit your details to get a unique token / তথ্য জমা দিয়ে ইউনিক টোকেন নিন।',
  ledgerIntro: 'See submitted passes on this device / এই ডিভাইসে জমা দেওয়া পাস দেখুন। Download the Excel-compatible list for your picnic coordinator.',
  placesTitle: 'Where should we spread the picnic blanket? / পিকনিকের চাদর কোথায় বিছাবো?',
  placesIntro: 'Swapnopuri is a favorite! Explore memorable Dinajpur Division spots / ঘুরে দেখুন দিনাজপুরের সেরা জায়গাগুলো।',
  suggestIntro: 'Share a place name and why you love it / জায়গার নাম ও কেন ভালো লাগে লিখুন—সবাই দেখতে পাবে।',
  developerBio: 'CST 4th-semester student at DPI / ডিপিআইতে সিএসটি ৪র্থ পর্বে পড়ছি',
  footerTagline: 'Plan a little today, make picnic memories for life / আজকের পরিকল্পনা, সারাজীবনের পিকনিক স্মৃতি।',
  footerMadeFor: 'Made for DPI CST students / ডিপিআই সিএসটি শিক্ষার্থীদের জন্য',
  footerBackTop: 'Back to top / উপরে ফিরুন',
  estimatesNote: 'One-way bus time / একমুখী বাস-সময় এবং road distance / সড়ক দূরত্ব are estimates from DPI. Traffic বা pickup point বদলাতে পারে—যাত্রার আগে live map দেখে নিন। Photos: Wikimedia Commons (credit-এ tap করে license দেখুন)।',
  developerLabel: 'Built by / নির্মাতা',
  footerContact: 'Say hello / যোগাযোগ করুন'
};
messages.mix = Object.fromEntries(Object.keys(messages.en).map(key => {
  const english = messages.en[key];
  const bangla = messages.bn[key];
  const combined = english === bangla || english.includes(bangla)
    ? english
    : `${english} / ${bangla}`;
  return [key, mixedOverrides[key] || combined];
}));
const placeTranslations = {
  1: { name: 'স্বপ্নপুরী', district: 'দিনাজপুর', experience: 'বিনোদন ও রাইড', desc: 'বাগান, রাইড, লেকের দৃশ্য আর সবার জন্য খোলা জায়গাসহ দিনাজপুরের জনপ্রিয় বিনোদনকেন্দ্র', tags: ['স্বপ্নপুরী পছন্দ', 'মনোরম', 'কাছেই খাবার'] },
  2: { name: 'রামসাগর জাতীয় উদ্যান', district: 'দিনাজপুর', experience: 'লেক ও প্রকৃতি', desc: 'গাছপালা, খোলা মাঠ আর নিরিবিলি পিকনিকের জায়গা ঘেরা ঐতিহাসিক লেক', tags: ['নিরিবিলি', 'প্রকৃতি'] },
  3: { name: 'কান্তজিউ মন্দির', district: 'দিনাজপুর', experience: 'ঐতিহ্য ও ছবি', desc: 'কান্তনগরের কাছে টেরাকোটার নকশা ও সংস্কৃতির এক অসাধারণ নিদর্শন', tags: ['ঐতিহ্য', 'মনোরম'] },
  4: { name: 'নয়াবাদ মসজিদ', district: 'দিনাজপুর', experience: 'ঐতিহ্য ভ্রমণ', desc: 'কান্তনগরের আশপাশে ঘোরার জন্য সুন্দর ঐতিহাসিক স্থাপনা', tags: ['নিরিবিলি', 'ঐতিহ্য'] },
  5: { name: 'দিনাজপুর রাজবাড়ি', district: 'দিনাজপুর', experience: 'ইতিহাস ও বাগান', desc: 'শহরের কাছেই স্থানীয় ইতিহাস, স্থাপত্য আর খোলামেলা পরিবেশ উপভোগ করুন', tags: ['ঐতিহ্য', 'খোলামেলা'] },
  6: { name: 'সিংড়া বন', district: 'দিনাজপুর', experience: 'বনের নিরিবিলি পরিবেশ', desc: 'সবুজ পথ আর সতেজ বাতাসে প্রকৃতির মাঝে কাটুক শান্ত বিকেল', tags: ['নিরিবিলি', 'প্রকৃতি'] },
  7: { name: 'তাজহাট জমিদারবাড়ি', district: 'রংপুর', experience: 'প্রাসাদ ও বাগান', desc: 'সুন্দর দলীয় ছবির জন্য লন ও গ্যালারিসহ ঐতিহাসিক প্রাসাদ', tags: ['ঐতিহ্য', 'খোলামেলা'] },
  8: { name: 'নীলসাগর', district: 'নীলফামারী', experience: 'লেক ও খোলা আকাশ', desc: 'বিভাগজুড়ে একদিনের ভ্রমণে খোলা দৃশ্যসহ শান্ত জলাশয়', tags: ['নিরিবিলি', 'মনোরম'] },
  9: { name: 'বাংলাবান্ধা জিরো পয়েন্ট', district: 'পঞ্চগড়', experience: 'সীমান্ত ভ্রমণ', desc: 'উত্তরের মনোরম প্রাকৃতিক দৃশ্য আর স্মরণীয় দলীয় ছবির জায়গা', tags: ['অ্যাডভেঞ্চার', 'মনোরম'] },
  10: { name: 'তিস্তা ব্যারাজ', district: 'লালমনিরহাট', experience: 'নদীর দৃশ্য ও বাতাস', desc: 'খেলা আর নাশতার জন্য খোলা জায়গায় নদীর সতেজ বাতাস ও সুন্দর দৃশ্য', tags: ['মনোরম', 'খোলামেলা'] }
};
const placeFunLines = {
  1: { en: 'One bus, one playlist, and a whole day of dreamland memories!', bn: 'বাসভর্তি গান, স্বপ্নপুরীতে নামলেই—সবাই পিকনিকের তারকা!' },
  2: { en: 'Lake breeze, best friends, and a group photo with everyone looking!', bn: 'লেকের হাওয়া, বন্ধুদের আড্ডা—গ্রুপ ছবিতে সবার চোখ খোলা তো?' },
  3: { en: 'Admire the terracotta, then strike your most historic pose!', bn: 'টেরাকোটার নকশা দেখো, তারপর দাও একখানা ঐতিহাসিক পোজ!' },
  4: { en: 'A peaceful place… until the whole class starts taking selfies!', bn: 'জায়গাটা শান্ত, কিন্তু পুরো ক্লাসের সেলফি সেশনটা?' },
  5: { en: 'No king required—today, the CST crew rules the palace!', bn: 'রাজা না থাকলেও সমস্যা কী? আজ রাজবাড়ির রাজা তো CST বন্ধুরাই!' },
  6: { en: 'Fresh forest air, shady trails, and stories for the ride home.', bn: 'বনের ছায়া, টাটকা হাওয়া—ফেরার পথে গল্পের ঝুড়ি ভরা!' },
  7: { en: 'Palace-level poses, best-friend-level fun!', bn: 'রাজকীয় জায়গা, বন্ধুত্বের আড্ডা—ছবিতে সবাই নবাব!' },
  8: { en: 'Blue water, open sky, and a brain finally off assignment mode.', bn: 'নীল জল, খোলা আকাশ—আজ মাথা থেকে অ্যাসাইনমেন্ট উধাও!' },
  9: { en: 'A long ride, a northern view, and one legendary location-tag selfie.', bn: 'উত্তরের পথে লম্বা বাস-জার্নি—লোকেশন ট্যাগসহ সেলফি চাই!' },
  10: { en: 'River breeze, picnic snacks, and sleepy smiles on the bus back.', bn: 'নদীর হাওয়া, পিকনিকের নাশতা—ফেরার বাসে ঘুম একদম পাকা!' }
};

let currentLanguage = 'en';
function t(key) { return messages[currentLanguage][key] || messages.en[key] || key; }
function renderHeroGallery() {
  const gallery = document.querySelector('#heroDestinationGallery');
  if (!gallery) return;
  const highlights = [places[1], places[0], places[2]].filter(place => place?.photo);
  const [feature, ...supporting] = highlights;
  gallery.setAttribute('aria-label', t('destinationPhotos'));
  gallery.innerHTML = `
    <span class="hero-gallery-badge"><span aria-hidden="true">✦</span> ${escapeHtml(t('destinationCount'))}</span>
    <figure class="hero-photo-main">
      <img src="${escapeHtml(feature.photo.src)}" alt="${escapeHtml(feature.photo.alt)}" fetchpriority="high" decoding="async">
      <figcaption>
        <span>${escapeHtml(t('heroPhotoEyebrow'))}</span>
        <strong>${escapeHtml(placeText(feature, 'name'))}</strong>
        <a href="${escapeHtml(feature.photo.page)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('photoCredit'))}: ${escapeHtml(feature.photo.artist)} · ${escapeHtml(feature.photo.license)}</a>
      </figcaption>
    </figure>
    <div class="hero-photo-stack">${supporting.map(place => `
      <figure class="hero-photo-small">
        <img src="${escapeHtml(place.photo.src)}" alt="${escapeHtml(place.photo.alt)}" loading="lazy" decoding="async">
        <figcaption><strong>${escapeHtml(placeText(place, 'name'))}</strong><a href="${escapeHtml(place.photo.page)}" target="_blank" rel="noopener noreferrer">${escapeHtml(place.photo.artist)} · ${escapeHtml(place.photo.license)}</a></figcaption>
      </figure>`).join('')}
    </div>`;
  gallery.querySelectorAll('img').forEach(image => image.addEventListener('error', () => {
    image.closest('figure').classList.add('hero-image-unavailable');
    image.remove();
  }));
}
function placeFunLine(id) {
  const line = placeFunLines[id];
  if (!line) return '';
  if (currentLanguage === 'bn') return line.bn;
  return currentLanguage === 'mix' ? `${line.en} / ${line.bn}` : line.en;
}
function placeText(place, key) {
  const bangla = placeTranslations[place.id]?.[key];
  if (currentLanguage === 'bn') return bangla || place[key];
  if (currentLanguage === 'mix' && bangla) return `${place[key]} / ${bangla}`;
  return place[key];
}
function displayPlaceName(id, fallback) { const place = places.find(item => String(item.id) === String(id)); return place ? placeText(place, 'name') : fallback; }

const storage = {
  get(key, fallback = null) { try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* private browsing can block storage */ } },
  remove(key) { try { localStorage.removeItem(key); } catch { /* ignore unavailable storage */ } }
};
function readJson(key, fallback) { try { return JSON.parse(storage.get(key, 'null')) || fallback; } catch { return fallback; } }
function escapeHtml(value) { return String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character])); }
function escapeCsv(value) { return `"${String(value ?? '').replace(/"/g, '""')}"`; }

function applyLanguage(language) {
  currentLanguage = ['en', 'bn', 'mix'].includes(language) ? language : 'mix';
  document.documentElement.lang = currentLanguage === 'bn' ? 'bn' : 'en';
  document.documentElement.dataset.language = currentLanguage;
  document.title = t('siteTitle');
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (['heroTitle', 'welcomeTitle', 'picnicSticker'].includes(key)) element.innerHTML = t(key);
    else element.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => { element.setAttribute('aria-label', t(element.dataset.i18nAria)); });
  document.querySelector('#themeSelect').setAttribute('aria-label', currentLanguage === 'bn' ? 'থিম বেছে নিন' : currentLanguage === 'mix' ? 'Choose theme / থিম বেছে নিন' : 'Choose theme');
  document.querySelector('#languageSelect').setAttribute('aria-label', currentLanguage === 'bn' ? 'ভাষা বেছে নিন' : currentLanguage === 'mix' ? 'Choose language / ভাষা বেছে নিন' : 'Choose language');
  document.querySelector('#roll').placeholder = t('rollPlaceholder');
  document.querySelector('#phone').placeholder = t('phonePlaceholder');
  document.querySelector('#welcomeClose').setAttribute('aria-label', currentLanguage === 'bn' ? 'স্বাগতম বার্তা বন্ধ করুন' : currentLanguage === 'mix' ? 'Close welcome message / স্বাগতম বার্তা বন্ধ করুন' : 'Close welcome message');
  document.querySelector('#welcomeCarousel').setAttribute('aria-label', t('destinationPhotos'));
  document.querySelector('#welcomePrevious').setAttribute('aria-label', t('previousPhoto'));
  document.querySelector('#welcomeNext').setAttribute('aria-label', t('nextPhoto'));
  document.querySelector('.avatar-stack').setAttribute('aria-label', t('semesterList'));
  document.querySelector('#suggestForm .close-btn').setAttribute('aria-label', currentLanguage === 'bn' ? 'বন্ধ করুন' : currentLanguage === 'mix' ? 'Close / বন্ধ করুন' : 'Close');
  document.querySelector('.footer-contact').setAttribute('aria-label', t('footerContact'));
  document.querySelectorAll('.dept-pill[data-semester]').forEach(button => {
    const semester = button.dataset.semester;
    const banglaSemester = { '1st': '১ম', '2nd': '২য়', '4th': '৪র্থ', '6th': '৬ষ্ঠ' }[semester];
    button.textContent = currentLanguage === 'bn'
      ? `${banglaSemester} পর্ব`
      : currentLanguage === 'mix'
        ? `${semester} semester / ${banglaSemester} পর্ব`
        : `${semester} semester`;
  });
  document.querySelectorAll('#semester option[value], #shift option[value]').forEach(option => {
    if (option.dataset.i18n) return;
    const value = option.value;
    const banglaSemester = { '1st': '১ম', '2nd': '২য়', '4th': '৪র্থ', '6th': '৬ষ্ঠ' }[value];
    option.textContent = currentLanguage === 'bn'
      ? banglaSemester || value
      : currentLanguage === 'mix' && banglaSemester
        ? `${value} / ${banglaSemester}`
        : value;
  });
  destination.querySelectorAll('option[data-place-id]').forEach(option => {
    const place = places.find(item => String(item.id) === option.dataset.placeId);
    if (place) option.textContent = `${placeText(place, 'name')} · ${placeText(place, 'district')}`;
  });
  renderRoster();
  if (participants.length) showTicket(participants[participants.length - 1], false);
  renderHeroGallery();
  render();
}

let myVote = null;
let activeFilter = 'all';
let participants = readJson('picnicParticipants', []);
const legacyParticipant = readJson('picnicParticipant', null);
if (!participants.length && legacyParticipant?.token) participants = [legacyParticipant];
participants.forEach(record => { const place = places.find(item => String(item.id) === String(record.destinationId)); if (place) place.votes += 1; });
if (!participants.length) storage.remove('picnicVote');

const list = document.querySelector('#placeList');
const toast = document.querySelector('#toast');
const totalVotes = document.querySelector('#totalVotes');
const destination = document.querySelector('#destination');
const passResult = document.querySelector('#passResult');
const participantList = document.querySelector('#participantList');
const participantCount = document.querySelector('#participantCount');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}
function visiblePlaces() {
  const query = document.querySelector('#searchInput').value.toLowerCase().trim();
  return places.filter(place => {
    const matchesFilter = activeFilter === 'all' || place.filter.includes(activeFilter) || place.tags.some(tag => tag.toLowerCase().includes(activeFilter));
    const searchable = `${place.name} ${place.desc} ${place.district} ${place.experience} ${place.tags.join(' ')} ${placeText(place, 'name')} ${placeText(place, 'desc')} ${placeText(place, 'district')} ${placeText(place, 'experience')} ${(placeTranslations[place.id]?.tags || []).join(' ')} ${placeFunLines[place.id]?.en || ''} ${placeFunLines[place.id]?.bn || ''}`.toLowerCase();
    return matchesFilter && (!query || searchable.includes(query));
  });
}
function formatDistance(place) {
  if (!place.distanceKm) return t('routeUnavailable');
  const [minimum, maximum] = place.distanceKm;
  const english = `${minimum}–${maximum} km`;
  const bangla = `${minimum.toLocaleString('bn-BD')}–${maximum.toLocaleString('bn-BD')} কিমি`;
  return currentLanguage === 'bn' ? bangla : currentLanguage === 'mix' ? `${english} / ${bangla}` : english;
}
function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  const english = hours ? `${hours}h${remaining ? ` ${remaining}m` : ''}` : `${remaining} min`;
  const bangla = hours
    ? `${hours.toLocaleString('bn-BD')} ঘণ্টা${remaining ? ` ${remaining.toLocaleString('bn-BD')} মিনিট` : ''}`
    : `${remaining.toLocaleString('bn-BD')} মিনিট`;
  return currentLanguage === 'bn' ? bangla : currentLanguage === 'mix' ? `${english} / ${bangla}` : english;
}
function formatBusDuration(place) {
  if (!place.busMinutes) return t('routeUnavailable');
  const [minimum, maximum] = place.busMinutes;
  return `${formatDuration(minimum)}–${formatDuration(maximum)}`;
}
function createDirectionsUrl(place) {
  const url = new URL('https://www.google.com/maps/dir/');
  url.searchParams.set('api', '1');
  url.searchParams.set('origin', 'Dinajpur Polytechnic Institute, Dinajpur, Bangladesh');
  url.searchParams.set('destination', `${place.name}, ${place.district}, Bangladesh`);
  url.searchParams.set('travelmode', 'driving');
  return url.href;
}
function render() {
  const maxVotes = Math.max(...places.map(place => place.votes), 1);
  const leader = places.reduce((current, place) => current.votes >= place.votes ? current : place);
  const shown = visiblePlaces();
  list.innerHTML = shown.map(place => `
    <article class="place-card ${place.id === leader.id ? 'leading' : ''} ${myVote === place.id ? 'selected-card' : ''}" data-destination-card="${place.id}">
      ${place.id === leader.id ? `<span class="leading-label">${escapeHtml(t('leading'))}</span>` : ''}
      ${place.featured ? `<span class="pick-label">${escapeHtml(t('swapnopuriPick'))}</span>` : ''}
      ${place.photo
        ? `<figure class="destination-photo"><img src="${escapeHtml(place.photo.src)}" alt="${escapeHtml(place.photo.alt)}" loading="lazy" decoding="async"><figcaption><a href="${escapeHtml(place.photo.page)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('photoCredit'))}: ${escapeHtml(place.photo.artist)} · ${escapeHtml(place.photo.license)}</a></figcaption></figure>`
        : `<div class="destination-photo photo-placeholder" aria-hidden="true"><span>${place.icon}</span><small>${escapeHtml(t('photoUnavailable'))}</small></div>`}
      <div class="place-head"><span class="place-icon">${place.icon}</span><div><h3 class="place-name">${escapeHtml(placeText(place, 'name'))}</h3><p class="place-desc">${escapeHtml(placeText(place, 'desc'))}</p></div></div>
      ${placeFunLine(place.id) ? `<p class="place-fun"><span aria-hidden="true">✦</span> ${escapeHtml(placeFunLine(place.id))}</p>` : ''}
      <div class="place-meta"><span>📍 ${escapeHtml(placeText(place, 'district'))}</span><span>✦ ${escapeHtml(placeText(place, 'experience'))}</span></div>
      <div class="travel-info">
        <div><span class="travel-icon" aria-hidden="true">↗</span><span class="travel-copy"><small>${escapeHtml(t('routeDistance'))}</small><strong>${escapeHtml(formatDistance(place))}</strong></span></div>
        <div><span class="travel-icon bus-icon" aria-hidden="true">🚌</span><span class="travel-copy"><small>${escapeHtml(t('busDuration'))}</small><strong>${escapeHtml(formatBusDuration(place))}</strong></span></div>
      </div>
      <a class="directions-link" href="${escapeHtml(createDirectionsUrl(place))}" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">↗</span> ${escapeHtml(t('openDirections'))}</a>
      <div class="tags">${place.tags.map((tag, index) => {
        const banglaTag = placeTranslations[place.id]?.tags[index];
        const label = currentLanguage === 'bn' ? banglaTag || tag : currentLanguage === 'mix' && banglaTag ? `${tag} / ${banglaTag}` : tag;
        return `<span class="tag">${escapeHtml(label)}</span>`;
      }).join('')}</div>
      <div class="vote-row"><button class="vote-btn ${myVote === place.id ? 'voted' : ''}" data-vote="${place.id}" aria-pressed="${myVote === place.id}">${myVote === place.id ? escapeHtml(t('voted')) : escapeHtml(t('vote'))}</button><span class="vote-count">${currentLanguage === 'bn' ? `${place.votes.toLocaleString('bn-BD')} ভোট` : currentLanguage === 'mix' ? `${place.votes} vote${place.votes === 1 ? '' : 's'} / ${place.votes.toLocaleString('bn-BD')} ভোট` : `${place.votes} vote${place.votes === 1 ? '' : 's'}`}</span><div class="card-bar"><span style="width:${Math.round(place.votes / maxVotes * 100)}%"></span></div></div>
    </article>`).join('');
  list.querySelectorAll('.destination-photo img').forEach(image => image.addEventListener('error', () => {
    const figure = image.closest('.destination-photo');
    figure.classList.add('photo-unavailable');
    image.remove();
    const label = document.createElement('span');
    label.className = 'photo-error-label';
    label.textContent = t('photoUnavailable');
    figure.prepend(label);
  }));
  document.querySelector('#noResults').hidden = shown.length > 0;
  totalVotes.textContent = places.reduce((sum, place) => sum + place.votes, 0);
  const participation = Math.min(100, Math.round((5 + (myVote ? 1 : 0)) / 6 * 100));
  document.querySelector('#participation').textContent = `${participation}%`;
  document.querySelector('#participationBar').style.width = `${participation}%`;
  list.querySelectorAll('[data-vote]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); vote(Number(button.dataset.vote)); }));
  list.querySelectorAll('[data-destination-card]').forEach(card => card.addEventListener('click', event => {
    if (!event.target.closest('[data-vote], a')) {
      destination.value = card.dataset.destinationCard;
      document.querySelector('#votingPass').scrollIntoView({ behavior: 'smooth' });
      showToast(t('destinationSelected'));
    }
  }));
}
function vote(id) {
  const selected = places.find(place => place.id === id);
  if (!selected) return;
  if (myVote === id) { selected.votes--; myVote = null; storage.remove('picnicVote'); showToast(t('voteRemoved')); }
  else {
    if (myVote) places.find(place => place.id === myVote).votes--;
    selected.votes++;
    myVote = id;
    storage.set('picnicVote', id);
    showToast(currentLanguage === 'bn'
      ? `${placeText(selected, 'name')}–এ ভোট দেওয়া হয়েছে`
      : currentLanguage === 'mix'
        ? `Vote added for ${placeText(selected, 'name')} / ভোট দেওয়া হয়েছে`
        : `Vote added for ${selected.name}`);
  }
  render();
}
function renderRoster() {
  participantCount.textContent = participants.length;
  if (!participants.length) {
    participantList.innerHTML = `<tr><td class="empty-roster" colspan="7">${escapeHtml(t('emptyRoster'))}</td></tr>`;
    return;
  }
  participantList.innerHTML = participants.slice().reverse().map(record => {
    const banglaSemester = { '1st': '১ম', '2nd': '২য়', '4th': '৪র্থ', '6th': '৬ষ্ঠ' }[record.semester] || record.semester;
    const semester = currentLanguage === 'bn' ? banglaSemester : currentLanguage === 'mix' ? `${record.semester} / ${banglaSemester}` : record.semester;
    const banglaShift = { '1st Shift': '১ম শিফট', '2nd Shift': '২য় শিফট' }[record.shift] || record.shift;
    const shift = currentLanguage === 'bn' ? banglaShift : currentLanguage === 'mix' ? `${record.shift} / ${banglaShift}` : record.shift;
    const date = new Date(record.createdAt);
    const submitted = currentLanguage === 'bn'
      ? date.toLocaleDateString('bn-BD')
      : currentLanguage === 'mix'
        ? `${date.toLocaleDateString('en')} / ${date.toLocaleDateString('bn-BD')}`
        : date.toLocaleDateString('en');
    return `<tr><td class="token-cell">${escapeHtml(record.token)}</td><td>${escapeHtml(semester)}</td><td>${escapeHtml(shift)}</td><td>${escapeHtml(record.roll)}</td><td>${escapeHtml(record.phone)}</td><td>${escapeHtml(displayPlaceName(record.destinationId, record.destinationName))}</td><td>${escapeHtml(submitted)}</td></tr>`;
  }).join('');
}
function triggerCelebration() {
  const confetti = document.querySelector('#confetti');
  confetti.innerHTML = '';
  const colors = ['#ee765c', '#6e6acb', '#35a878', '#ffd38b', '#74d9ff'];
  for (let index = 0; index < 28; index++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty('--drift', `${(Math.random() - .5) * 240}px`);
    piece.style.animationDelay = `${Math.random() * .25}s`;
    confetti.appendChild(piece);
  }
  setTimeout(() => { confetti.innerHTML = ''; }, 1800);
}
function showTicket(record, celebrate = true) {
  const banglaSemester = { '1st': '১ম', '2nd': '২য়', '4th': '৪র্থ', '6th': '৬ষ্ঠ' }[record.semester] || record.semester;
  const semester = currentLanguage === 'bn' ? banglaSemester : currentLanguage === 'mix' ? `${record.semester} / ${banglaSemester}` : record.semester;
  const banglaShift = { '1st Shift': '১ম শিফট', '2nd Shift': '২য় শিফট' }[record.shift] || record.shift;
  const shift = currentLanguage === 'bn' ? banglaShift : currentLanguage === 'mix' ? `${record.shift} / ${banglaShift}` : record.shift;
  const rollLabel = currentLanguage === 'bn' ? 'রোল' : currentLanguage === 'mix' ? 'Roll / রোল' : 'Roll';
  passResult.innerHTML = `<span class="result-icon">✓</span><p class="eyebrow">${escapeHtml(t('passConfirmed'))}</p><h3>${escapeHtml(record.token)}</h3><p><strong>${escapeHtml(displayPlaceName(record.destinationId, record.destinationName))}</strong><br>${escapeHtml(semester)} · ${escapeHtml(shift)} · ${rollLabel} ${escapeHtml(record.roll)}<br>${escapeHtml(t('ticketSaved'))}</p>`;
  passResult.classList.remove('ticket-issued');
  void passResult.offsetWidth;
  passResult.classList.add('ticket-issued');
  if (celebrate) triggerCelebration();
}
function generateToken() { return `DPI-CST-26-${Math.random().toString(36).slice(2, 6).toUpperCase()}`; }
function downloadCsv() {
  if (!participants.length) { showToast(t('noRecords')); return; }
  const rows = [['Token', 'Semester', 'Shift', 'Roll', 'Phone', 'Destination', 'Submitted']];
  participants.forEach(record => rows.push([record.token, record.semester, record.shift, record.roll, record.phone, record.destinationName, new Date(record.createdAt).toLocaleString()]));
  const csv = `\uFEFF${rows.map(row => row.map(escapeCsv).join(',')).join('\r\n')}`;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
  link.download = 'dpi-cst-picnic-student-votes.csv';
  document.body.appendChild(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  showToast(t('exportComplete'));
}

places.forEach(place => { const option = document.createElement('option'); option.value = place.id; option.dataset.placeId = place.id; option.textContent = `${place.name} · ${place.district}`; destination.appendChild(option); });
const savedParticipant = participants[participants.length - 1];
if (savedParticipant) {
  myVote = Number(savedParticipant.destinationId) || null;
  ['semester', 'shift', 'roll', 'phone'].forEach(id => { document.querySelector(`#${id}`).value = savedParticipant[id] || ''; });
  destination.value = savedParticipant.destinationId || '';
  showTicket(savedParticipant, false);
}

document.querySelector('#participantForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) { form.reportValidity(); showToast(t('formIncomplete')); return; }
  const selected = places.find(place => String(place.id) === destination.value);
  if (!selected) { showToast(t('chooseDestination')); return; }
  const identity = `${document.querySelector('#semester').value}|${document.querySelector('#shift').value}|${document.querySelector('#roll').value.trim()}`;
  const existing = participants.find(record => record.identity === identity);
  const record = { identity, semester: document.querySelector('#semester').value, shift: document.querySelector('#shift').value, roll: document.querySelector('#roll').value.trim(), phone: document.querySelector('#phone').value.trim(), destinationId: selected.id, destinationName: selected.name, token: existing?.token || generateToken(), createdAt: existing?.createdAt || new Date().toISOString() };
  const index = participants.findIndex(item => item.identity === identity);
  if (index >= 0) participants[index] = record; else participants.push(record);
  storage.set('picnicParticipants', JSON.stringify(participants));
  storage.set('picnicParticipant', JSON.stringify(record));
  if (myVote && myVote !== selected.id) places.find(place => place.id === myVote).votes--;
  if (myVote !== selected.id) selected.votes++;
  myVote = selected.id; storage.set('picnicVote', selected.id);
  showTicket(record); renderRoster(); render(); showToast(currentLanguage === 'bn'
    ? `${placeText(selected, 'name')}–এর জন্য টিকিট তৈরি হয়েছে · ${record.token}`
    : currentLanguage === 'mix'
      ? `Ticket ready for ${placeText(selected, 'name')} / টিকিট তৈরি হয়েছে · ${record.token}`
      : `Ticket ready for ${selected.name} · ${record.token}`);
});

document.querySelector('#exportCsv').addEventListener('click', downloadCsv);
const themeSelect = document.querySelector('#themeSelect');
const savedTheme = storage.get('picnicTheme', 'liquid');
themeSelect.value = ['liquid', 'neon', 'dawn'].includes(savedTheme) ? savedTheme : 'liquid';
document.documentElement.dataset.theme = themeSelect.value;
themeSelect.addEventListener('change', () => { document.documentElement.dataset.theme = themeSelect.value; storage.set('picnicTheme', themeSelect.value); showToast(`${themeSelect.options[themeSelect.selectedIndex].text} ${t('themeSelected')}`); });

function updatePollHeading(button) {
  const semester = button.dataset.semester;
  const banglaSemester = semester ? ({ '1st': '১ম', '2nd': '২য়', '4th': '৪র্থ', '6th': '৬ষ্ঠ' }[semester]) : '';
  document.querySelector('.community-strip strong').textContent = semester
    ? (currentLanguage === 'bn'
      ? `${banglaSemester} পর্বের ভোট`
      : currentLanguage === 'mix'
        ? `${semester} semester poll / ${banglaSemester} পর্বের ভোট`
        : `${semester} semester poll`)
    : t('pollTitle');
}
document.querySelectorAll('.dept-pill').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.dept-pill').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  updatePollHeading(button);
  const semester = button.dataset.semester;
  showToast(semester
    ? (currentLanguage === 'bn' ? `${button.textContent} ${t('participantPoll')}` : `${button.textContent} ${t('participantPoll')}`)
    : t('pollTitle'));
}));
const savedLanguage = storage.get('picnicLanguage', 'mix');
document.querySelector('#languageSelect').value = ['en', 'bn', 'mix'].includes(savedLanguage) ? savedLanguage : 'mix';
document.querySelector('#languageSelect').addEventListener('change', event => {
  applyLanguage(event.currentTarget.value);
  renderWelcomeCarousel();
  storage.set('picnicLanguage', currentLanguage);
  const activeSemester = document.querySelector('.dept-pill.active')?.dataset.semester;
  if (activeSemester) updatePollHeading(document.querySelector('.dept-pill.active'));
});
applyLanguage(document.querySelector('#languageSelect').value);
document.querySelector('#searchInput').addEventListener('input', render);
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(item => item.classList.remove('active')); button.classList.add('active'); activeFilter = button.dataset.filter; render(); }));
document.querySelector('#jumpToPlaces').addEventListener('click', () => document.querySelector('#places').scrollIntoView({ behavior: 'smooth' }));
document.querySelector('#heroVote').addEventListener('click', () => {
  document.querySelector('#votingPass').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('#semester').focus({ preventScroll: true });
});
const welcomeDialog = document.querySelector('#welcomeDialog');
const welcomeCarousel = document.querySelector('#welcomeCarousel');
const welcomeSlides = document.querySelector('#welcomeSlides');
const welcomePhotoPlaces = places.filter(place => place.photo);
let activeWelcomeSlide = 0;
function renderWelcomeCarousel() {
  const total = welcomePhotoPlaces.length;
  activeWelcomeSlide %= total;
  welcomeSlides.innerHTML = welcomePhotoPlaces.map((place, index) => `
    <figure class="welcome-slide ${index === activeWelcomeSlide ? 'active' : ''}" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${total}" aria-hidden="${index !== activeWelcomeSlide}">
      <img class="welcome-photo" src="${escapeHtml(place.photo.src)}" alt="${escapeHtml(place.photo.alt)}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
      <figcaption class="welcome-photo-caption">
        <span class="welcome-photo-location">${escapeHtml(placeText(place, 'district'))} · BANGLADESH</span>
        <a href="${escapeHtml(place.photo.page)}" target="_blank" rel="noopener noreferrer">${escapeHtml(placeText(place, 'name'))} · ${escapeHtml(t('photoCredit'))}: ${escapeHtml(place.photo.artist)} · ${escapeHtml(place.photo.license)}</a>
      </figcaption>
    </figure>`).join('');
  welcomeSlides.querySelectorAll('.welcome-photo').forEach(image => image.addEventListener('error', () => {
    image.closest('.welcome-slide').classList.add('image-unavailable');
    image.remove();
  }));
  const number = activeWelcomeSlide + 1;
  const localize = value => currentLanguage === 'en' ? String(value) : value.toLocaleString('bn-BD');
  document.querySelector('#welcomeSlidePosition').textContent = `${localize(number)} / ${localize(total)}`;
}
function setWelcomeSlide(index) {
  if (!welcomePhotoPlaces.length) return;
  activeWelcomeSlide = (index + welcomePhotoPlaces.length) % welcomePhotoPlaces.length;
  welcomeSlides.querySelectorAll('.welcome-slide').forEach((slide, slideIndex) => {
    const active = slideIndex === activeWelcomeSlide;
    slide.classList.toggle('active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  const number = activeWelcomeSlide + 1;
  const localize = value => currentLanguage === 'en' ? String(value) : value.toLocaleString('bn-BD');
  document.querySelector('#welcomeSlidePosition').textContent = `${localize(number)} / ${localize(welcomePhotoPlaces.length)}`;
}
renderWelcomeCarousel();
document.querySelector('#welcomePrevious').addEventListener('click', () => setWelcomeSlide(activeWelcomeSlide - 1));
document.querySelector('#welcomeNext').addEventListener('click', () => setWelcomeSlide(activeWelcomeSlide + 1));
window.setInterval(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!welcomeDialog.open || prefersReducedMotion || document.visibilityState !== 'visible'
    || welcomeCarousel.matches(':hover') || welcomeCarousel.contains(document.activeElement)) return;
  setWelcomeSlide(activeWelcomeSlide + 1);
}, 4800);
document.querySelector('#welcomeVote').addEventListener('click', () => {
  welcomeDialog.close();
  document.querySelector('#votingPass').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('#semester').focus({ preventScroll: true });
});
document.querySelector('#welcomeLater').addEventListener('click', () => welcomeDialog.close());
document.querySelector('#welcomeClose').addEventListener('click', () => welcomeDialog.close());
window.setTimeout(() => welcomeDialog.showModal(), 300);
const dialog = document.querySelector('#suggestDialog');
document.querySelector('#openSuggest').addEventListener('click', () => dialog.showModal());
document.querySelector('#suggestForm').addEventListener('submit', event => { event.preventDefault(); const name = document.querySelector('#placeName').value.trim(); const reason = document.querySelector('#placeReason').value.trim(); if (!name || !reason) return; const suggestedBy = currentLanguage === 'bn' ? 'সিএসটি শিক্ষার্থীর প্রস্তাব' : currentLanguage === 'mix' ? 'Suggested by CST / সিএসটি শিক্ষার্থীর প্রস্তাব' : 'Suggested by CST'; const idea = currentLanguage === 'bn' ? 'নতুন প্রস্তাব' : currentLanguage === 'mix' ? 'New idea / নতুন প্রস্তাব' : 'New idea'; places.push({ id: Date.now(), name, district: suggestedBy, experience: idea, icon: '📍', desc: reason, tags: [idea], filter: [], votes: 0 }); dialog.close(); event.target.reset(); render(); showToast(currentLanguage === 'bn' ? `${name} পছন্দের তালিকায় যোগ হয়েছে` : currentLanguage === 'mix' ? `${name} added to the shortlist / পছন্দের তালিকায় যোগ হয়েছে` : `${name} added to the shortlist`); });
function updateCountdown() {
  const difference = new Date('2026-11-10T00:00:00+06:00') - new Date();
  const target = document.querySelector('#countdown');
  if (difference <= 0) { target.textContent = currentLanguage === 'bn' ? 'পিকনিকের দিন!' : currentLanguage === 'mix' ? 'Picnic day! / পিকনিকের দিন!' : 'Picnic day!'; return; }
  const days = Math.floor(difference / 86400000);
  const hours = String(Math.floor(difference / 3600000) % 24).padStart(2, '0');
  const minutes = String(Math.floor(difference / 60000) % 60).padStart(2, '0');
  const seconds = String(Math.floor(difference / 1000) % 60).padStart(2, '0');
  const banglaCountdown = `${days.toLocaleString('bn-BD')} দিন ${hours.toLocaleString('bn-BD')} ঘণ্টা ${minutes.toLocaleString('bn-BD')} মিনিট ${seconds.toLocaleString('bn-BD')} সেকেন্ড`;
  const englishCountdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  target.textContent = currentLanguage === 'bn' ? banglaCountdown : currentLanguage === 'mix' ? `${englishCountdown} / ${banglaCountdown}` : englishCountdown;
}
updateCountdown(); setInterval(updateCountdown, 1000); renderRoster(); render();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  document.querySelectorAll('.community-strip, .summary-card, .pass-section, .roster-section, .places-section').forEach(element => {
    element.classList.add('scroll-reveal');
    revealObserver.observe(element);
  });
  document.documentElement.classList.add('motion-ready');
}
