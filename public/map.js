// Initialize the map with zoom control options
var map = L.map('map', {
  center: [13.18332, 74.93355], // Set initial center coordinates
  zoom: 16, // Set initial zoom level
  maxBounds: L.latLngBounds([13.15, 74.9], [13.25, 75]), // Set movement boundary
  maxZoom: 20, // Set maximum zoom level
  minZoom: 15 // Set minimum zoom level
});

// Default OpenStreetMap tile layer
var defaultLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Satellite layer from Google Maps
var satelliteLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Base layer control
var baseLayers = {
  "OpenStreetMap": defaultLayer,
  "Satellite": satelliteLayer
};

// Add the base layer control to the map
L.control.layers(baseLayers).addTo(map);

// Define marker icons
var buildingIcon = L.icon({
  iconUrl: 'College-M.png',
  iconSize: [60, 60],
});
var buildingIcon2 = L.icon({
  iconUrl: 'Food-M.png',
  iconSize: [60, 60],
});
var buildingIcon3 = L.icon({
  iconUrl: 'Bus-M.png',
  iconSize: [60, 60],
});
var buildingIcon4 = L.icon({
  iconUrl: 'Stationary-M.png',
  iconSize: [60, 60],
});
var buildingIcon5 = L.icon({
  iconUrl: 'Temple-M.png',
  iconSize: [60, 60],
});
var buildingIcon6 = L.icon({
  iconUrl: 'Clinic-M.png',
  iconSize: [60, 60],
});
var buildingIcon7 = L.icon({
  iconUrl: 'College-M.png',
  iconSize: [60, 60],
});
var buildingIcon8 = L.icon({
  iconUrl: 'College-M.png',
  iconSize: [60, 60],
});
var buildingIcon9 = L.icon({
  iconUrl: 'Hostel-M.png',
  iconSize: [60, 60],
});
var buildingIcon10 = L.icon({
  iconUrl: 'Sports-M.png',
  iconSize: [60, 60],
});
var buildingIcon11 = L.icon({
  iconUrl: 'Post-M.png',
  iconSize: [60, 60],
});
var buildingIcon12 = L.icon({
  iconUrl: 'Bank-M.png',
  iconSize: [60, 60],
});

// Sample markers data
var markers = [
  {
    category: 'College',
    name: 'Sambhram',
    lat: 13.18314093111328,
    lng: 74.93419587328431,
    description: 'College hall providing a versatile space for events, gatherings, and student activities right on campus',
    image: 'sambhram.jpg',
    icon: buildingIcon
  },
  {
    category: 'Bus Stops',
    name: 'NITTE Stop',
    lat: 13.184124167229331,
    lng: 74.93487715440702,
    description: 'Convenient bus stand on campus for college students transportation needs.',
    image: 'nittebusstop.jpg',
    icon: buildingIcon3
  },
  {
    category: 'Stationary',
    name: 'NITTE Co-op Store',
    lat: 13.18244757098781,
    lng: 74.93461563902046,
    description: 'Stock up on essential stationery items at our on-campus store.',
    image: 'COPS.jpg',
    icon: buildingIcon4
  },
  {
    category: 'Temple',
    name: 'Ganapathi Temple',
    lat: 13.183592724034062, 
    lng: 74.93398263768636,
    description: 'Temple',
    image: 'temple.jpg',
    icon: buildingIcon5
  },
  {
    category: 'Clinic',
    name: 'Nitte Clinic',
    lat: 13.18312691942942,
    lng: 74.93464421154084,
    description: 'Stay healthy with our campus clinic, providing convenient healthcare services for college students.',
    image: 'nitteclinic.jpg',
    icon: buildingIcon6
  },
  {
    category: 'College',
    name: 'Library',
    lat: 13.18299,
    lng: 74.93435,
    description: 'On-campus library offering a quiet study space and access to resources for college students',
    image: 'Library.jpg',
    icon: buildingIcon7
  },
  {
    category: 'College',
    name: 'Sadananda Open Air Auditorium',
    lat: 13.182788375369636,
    lng: 74.93530228448908,
    description: 'College hall providing a versatile space for events, gatherings, and student activities right on campus',
    image: 'sadananda.jpg',
    icon: buildingIcon8
  },
  {
    category: 'Food',
    name: 'Ashkik',
    lat: 13.1842535,
    lng: 74.9329487,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'ashkik.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Cape of Good Vibes',
    lat: 13.1851212,
    lng: 74.9361708,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'capeofgoodvibes.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Harshita',
    lat: 13.1834529,
    lng: 74.936554,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'harshita.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Maggi Point',
    lat: 13.1826998,
    lng: 74.9350202,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'maggi.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Oven Fresh',
    lat: 13.1841642,
    lng: 74.9331648,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'ovenfresh.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Red Dish',
    lat: 13.1851961,
    lng: 74.9319131,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'reddish.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Salt & Pepper',
    lat: 13.1854902,
    lng: 74.9369645,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'salt&pepper.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Sanmathi',
    lat: 13.1821719,
    lng: 74.9380027,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'sanmathi.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Shabari',
    lat: 13.1832453,
    lng: 74.9366396,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'shabari.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Wild Wings',
    lat: 13.1844425,
    lng: 74.932662,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'wildwings.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Foodland',
    lat: 13.1846979,
    lng: 74.9324033,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'Foodland.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Shisha',
    lat: 13.1842386,
    lng: 74.9345423,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'shisha.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Hotel Durga',
    lat: 13.1842386,
    lng: 74.9345423,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'hoteldurga.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Cafe Bohemia',
    lat: 13.1844651,
    lng: 74.9362351,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'cafebohemia.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Maddys Katti Cafe',
    lat: 13.1835119,
    lng: 74.9364903,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'maddyskatticafe.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Shetty S Lunch',
    lat: 13.1820117,
    lng: 74.9354871,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'shettyslunch.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Rohan S',
    lat: 13.1816133,
    lng: 74.934226,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'rohan.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Kitchen Bell',
    lat: 13.1825216,
    lng: 74.9355596,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'kitchenbell.jpg',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Fresh & Honest',
    lat: 13.1827015,
    lng: 74.9346376,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'Food-M.png',
    icon: buildingIcon2
  },
  {
    category: 'Food',
    name: 'Sri Durga Canteen',
    lat: 13.1822832,
    lng: 74.9341845,
    description: 'This is your go-to spot for budget-friendly eats near campus, perfect for college students.',
    image: 'Food-M.png',
    icon: buildingIcon2
  },
  {
    category: 'Bus Stops',
    name: 'College Bus Stand',
    lat: 13.1822590,
    lng: 74.9326886,
    description: 'Convenient bus stand on campus for college students transportation needs.',
    image: 'bus.jpg',
    icon: buildingIcon3
  },
  {
    category: 'Stationary',
    name: 'Xerox Center',
    lat: 13.18287,
    lng: 74.93319,
    description: 'Get your printing and copying done hassle-free at our on-campus Xerox center',
    image: 'xerox.jpg',
    icon: buildingIcon4
  },
  {
    category: 'College',
    name: 'Main Girls Hostel ',
    lat: 13.18384,
    lng: 74.93550,
    description: 'Hostel with comfy rooms, ideal for college students seeking a convenient and relaxed living space.',
    image: 'girlshostel.jpg',
    icon: buildingIcon9
  },
  {
    category: 'College',
    name: 'Main Boys Hostel',
    lat: 13.18369,
    lng: 74.93866,
    description: 'Hostel with comfy rooms, ideal for college students seeking a convenient and relaxed living space.',
    image: 'malehostel.jpg',
    icon: buildingIcon9
  },
  {
    category: 'Sports',
    name: 'Volley Ball Court',
    lat: 13.18209,
    lng: 74.93854,
    description: 'A place where students play and stay active, right on campus.',
    image: 'volleyball.jpg',
    icon: buildingIcon10
  },
  {
    category: 'Sports',
    name: 'Outdoor BasketBall Court',
    lat: 13.18209,
    lng: 74.93874,
    description: 'A place where students play and stay active, right on campus.',
    image: 'basketball.jpg',
    icon: buildingIcon10
  },
  {
    category: 'Sports',
    name: 'Indoor BasketBall Court',
    lat: 13.18251,
    lng: 74.93874,
    description: 'A place where students play and stay active, right on campus.',
    image: 'indoorbasketball.jpg',
    icon: buildingIcon10
  },
  {
    category: 'Sports',
    name: 'B C Alva Sports Complex',
    lat: 13.180194547417011,
    lng: 74.93528238952439,
    description: 'A place where students play and stay active, right on campus.',
    image: 'bcalavasportscomplex.jpg',
    icon: buildingIcon10
  },
  {
    category: 'College',
    name: 'PG Boys Hostel',
    lat: 13.180913383403622,
    lng: 74.93593473314854,
    description: 'Hostel with comfy rooms, ideal for college students seeking a convenient and relaxed living space.',
    image: 'PGBoysHostel.jpg',
    icon: buildingIcon9
  },
  {
    category: 'College',
    name: 'Justice K S Hegde Institute of Management',
    lat: 13.182004410029123,
    lng: 74.93602086267292,
    description: 'Justice K S Hegde Institute of Management',
    image: 'jkshifm.jpg',
    icon: buildingIcon
  },
  {
    category: 'College',
    name: 'Phalguni',
    lat: 13.182790917943988,
    lng: 74.93440079601324,
    description: 'College hall providing a versatile space for events, gatherings, and student activities right on campus',
    image: 'phalguni-hall.jpg',
    icon: buildingIcon
  },
  {
    category: 'College',
    name: 'Shambhavi',
    lat: 13.183318910082424,
    lng: 74.93356619421327,
    description: 'College hall providing a versatile space for events, gatherings, and student activities right on campus',
    image: 'shambhavi-hall.jpg',
    icon: buildingIcon
  },
  {
    category: 'Post-Office',
    name: 'Post Office',
    lat: 13.183495936356284,
    lng: 74.9331817014163,
    description: 'Conveniently located post office within the campus for all college related work.',
    image: 'post.jpg',
    icon: buildingIcon11
  },
  {
    category: 'Stationary',
    name: 'No.1 Xerox and Stationary',
    lat: 13.184276311833596,
    lng: 74.93292013601348,
    description: 'Grab your stationery essentials items from stores conveniently close to our campus.',
    image: 'no1xerox.jpg',
    icon: buildingIcon4
  },
  {
    category: 'Clinic',
    name: 'A.R.S MEDICAL',
    lat: 13.185068677014435,
    lng: 74.9323504131315,
    description: 'Find all your medical needs here that is conveniently close to campus.',
    image: 'arsmedical.jpg',
    icon: buildingIcon6
  },
  {
    category: 'Stationary',
    name: 'Radha Cyber centre',
    lat: 13.184275814948064,
    lng: 74.9343679300106,
    description: 'Grab your stationery essentials items from stores conveniently close to our campus.',
    image: 'radha.jpg',
    icon: buildingIcon4
  },
  {
    category: 'Bank & ATM',
    name: 'Canara Bank & ATM',
    lat: 13.183774260627276,
    lng: 74.93347546473521,
    description: 'A convenient ATM on campus for all your cash needs as a college student.',
    image: 'canarabank.jpg',
    icon: buildingIcon12
  },
  {
    category: 'Bank & ATM',
    name: 'Bank of Baroda',
    lat: 13.184292104541917,
    lng: 74.93451033034084,
    description: 'A convenient ATM on campus for all your cash needs as a college student.',
    image: 'bankbaroda.jpg',
    icon: buildingIcon12
  },
  {
    category: 'Bank & ATM',
    name: 'Canara ATM',
    lat: 13.184962363103935,
    lng: 74.93248092273774,
    description: 'A convenient ATM on campus for all your cash needs as a college student.',
    image: 'atm.jpg',
    icon: buildingIcon12
  },
];

// Markers to the map
markers.forEach(function(marker) {
  L.marker([marker.lat, marker.lng], { icon: marker.icon })
    .addTo(map)
    .bindPopup('<b>' + marker.name + '</b><br>' + marker.description + '<br><img src="' + marker.image + '" width="100">');
});
// Function to update map markers based on selected category
function updateMapMarkers(selectedCategory) {
  // Clear existing markers on the map
  map.eachLayer(function(layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  // Add markers based on selected category
  if (selectedCategory === 'All') {
    markers.forEach(function(marker) {
      L.marker([marker.lat, marker.lng], { icon: marker.icon })
        .addTo(map)
        .bindPopup('<b>' + marker.name + '</b><br>' + marker.description + '<br><img src="' + marker.image + '" width="100">');
    });
  } else {
    markers.forEach(function(marker) {
      if (marker.category === selectedCategory) {
        L.marker([marker.lat, marker.lng], { icon: marker.icon })
          .addTo(map)
          .bindPopup('<b>' + marker.name + '</b><br>' + marker.description + '<br><img src="' + marker.image + '" width="100">');
      }
    });
  }
}

// Dropdown A with categories and an "All" option
var dropdownA = document.getElementById('dropdownA');
var optionAll = document.createElement('option');
optionAll.text = 'All';
dropdownA.add(optionAll);

var categories = [...new Set(markers.map(marker => marker.category))];
categories.forEach(function(category) {
  var option = document.createElement('option');
  option.text = category;
  dropdownA.add(option);
});

/// Dropdown B based on dropdown A selection
var dropdownB = document.getElementById('dropdownB');

// Function to populate dropdown B based on selected category
function populateDropdownB(selectedCategory) {
  dropdownB.innerHTML = ''; // Clear dropdown B
  var filteredMarkers = markers.filter(function(marker) {
    return selectedCategory === 'All' || marker.category === selectedCategory;
  });
  // Populate dropdown B with markers filtered by selected category
  filteredMarkers.forEach(function(marker) {
    var option = document.createElement('option');
    option.text = marker.name;
    dropdownB.add(option);
  });
}

// Event listener for dropdown A change
dropdownA.addEventListener('change', function() {
  var selectedCategory = dropdownA.value;
  populateDropdownB(selectedCategory); // Update dropdown B options based on selection
  updateMapMarkers(selectedCategory); // Update map markers based on selection
});

// Event listener for dropdown B change
dropdownB.addEventListener('change', function() {
  var selectedCategory = dropdownA.value; // Get selected category from dropdown A
  var selectedMarkerName = dropdownB.value; // Get selected marker name from dropdown B
  updateMapMarkers(selectedCategory, selectedMarkerName); // Update map markers based on selection


// Check if dropdown B has no selected value
if (selectedMarkerName === '') {
  showAllCardsIfSearchEmpty(); // Show all cards if dropdown B has no selected value
}
});

// Initial population of dropdown B based on the initial selection of dropdown A
populateDropdownB(dropdownA.value);


// Zoom to selected marker on button click
var zoomToMarkerButton = document.getElementById('zoomToMarker');
zoomToMarkerButton.addEventListener('click', function() {
  var selectedMarkerName = dropdownB.value;
  var selectedMarker = markers.find(marker => marker.name === selectedMarkerName);
  if (selectedMarker) {
    $("#search-box").val(""); 
    createCards(selectedMarker); 
    map.flyTo([selectedMarker.lat, selectedMarker.lng], 20); // Adjust zoom level as needed
    L.marker([selectedMarker.lat, selectedMarker.lng], { icon: selectedMarker.icon })
      .addTo(map)
      .bindPopup('<b>' + selectedMarker.name + '</b><br>' + selectedMarker.description + '<br><img src="' + selectedMarker.image + '" width="100">')
      .openPopup();

  }
});

// Function to create and display all cards
function createAllCards() {
  var cardsContainer = document.getElementById('cardsContainer');
  cardsContainer.innerHTML = ''; // Clear previous content

  // Loop through all markers and create cards
  markers.forEach(function(marker) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${marker.image}" alt="Image">
      <div class="cardContent" >
        <h3><b>${marker.name}</b></h3>
        <p>${truncateDescription(marker.description)}</p> <!-- Display truncated description -->
      </div>
    `;
    card.addEventListener('click', function() {
      showPopup(marker);
    });
    cardsContainer.appendChild(card);
  });
}

// Select the button element
var showAllCardsButton = document.getElementById('showAllCardsButton');

// Add event listener to the button
showAllCardsButton.addEventListener('click', function() {
  $("#search-box").val(""); // clears the search box
  createAllCards(); // Call the function to create and display all cards
});

// Function to truncate description text
function truncateDescription(description) {
  const maxLength = 50; // Maximum length of truncated description
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...'; // Truncate and add ellipsis
  } else {
    return description; // Return full description if length is within limit
  }
}

// Function to create and display cards based on selected marker
function createCards(selectedMarker) {
  var cardsContainer = document.getElementById('cardsContainer');
  cardsContainer.innerHTML = ''; // Clear previous content

  // Create card for the selected marker
  var card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <img src="${selectedMarker.image}" alt="Image">
  <div class="cardContent">
  <h3 style="margin: 0;"><b>${selectedMarker.name}</b></h3>
    <p style="margin: 0;">${truncateDescription(selectedMarker.description)}</p>
  </div>
`;

  card.addEventListener('click', function() {
    showPopup(selectedMarker);
  });
  cardsContainer.appendChild(card);
}

// Function to show all cards when search input is empty
function handleEmptySearchInput() {
  var searchBoxValue = $("#search-box").val().trim();
  if (searchBoxValue === '') {
    createAllCards(); // Create and display all cards
  }
}

// Function to show popup with full description and image
function showPopup(selectedMarker) {
  var popupTitleElement = document.getElementById('popupTitle');
  popupTitleElement.innerHTML = `<b>${selectedMarker.name}</b>`;


  var popupDescriptionElement = document.getElementById('popupDescription');
  popupDescriptionElement.textContent = selectedMarker.description;

  var popupImageElement = document.getElementById('popupImage');
  popupImageElement.src = selectedMarker.image; // Set image source

  document.getElementById('popup').style.display = 'flex';
}

// Close popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Create and display all cards by default
createAllCards();

// Autocomplete
$(function() {
  var availableTags = markers.map(function(marker) {
    return marker.name;
  });

  $("#search-box").autocomplete({
    source: availableTags,
    select: function(event, ui) {
        var selectedMarker = markers.find(marker => marker.name === ui.item.value);
        if (selectedMarker) {
            // Set the value of the search box to the selected marker's name
            $("#search-box").val(ui.item.value);

            // Create and display the card for the selected marker
            createCards(selectedMarker);

            // Fly to the selected marker's location
            map.flyTo([selectedMarker.lat, selectedMarker.lng], 20);
            L.marker([selectedMarker.lat, selectedMarker.lng], { icon: selectedMarker.icon })
                .addTo(map)
                .bindPopup('<b>' + selectedMarker.name + '</b><br>' + selectedMarker.description + '<br><img src="' + selectedMarker.image + '" width="100">')
                .openPopup();
        }

        // Check if a marker already exists at the selected location
        var existingMarker = markersLayer.getLayers().find(function(layer) {
            var markerLatLng = layer.getLatLng();
            return markerLatLng.lat === selectedMarker.lat && markerLatLng.lng === selectedMarker.lng;
        });

        // If the marker doesn't exist, add it and open the popup
        if (!existingMarker) {
            L.marker([selectedMarker.lat, selectedMarker.lng]).addTo(map)
                .bindPopup('<b>' + selectedMarker.name + '</b><br>' + selectedMarker.description + '<br><img src="' + selectedMarker.image + '" width="100">')
                .openPopup();
        }
    },
    change: function(event, ui) {
        if (!ui.item) { // If no item is selected (i.e., input is cleared)
            handleEmptySearchInput(); // Call handleEmptySearchInput function
        }
    }
});
});










