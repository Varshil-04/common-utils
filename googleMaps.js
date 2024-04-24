export const initMap = (lat, lng) => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: lat, lng: lng },
      zoom: 8
    });
  
    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      title: 'Hello World!'
    });
  };
  