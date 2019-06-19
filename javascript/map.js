            // Initialize and add the map
            function initMap() {
                // The location of Uluru
                var uluru = {lat: 51.513683, lng: -0.092861};
                // The map, centered at Uluru
                var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 20, center: uluru});
                // The marker, positioned at Uluru
                var marker = new google.maps.Marker({position: uluru, map: map});
            }