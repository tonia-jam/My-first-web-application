let currentPhoto = 0;
let data = {
    picture: 'photos/csillagjazmin.jpg',
    title: 'Trachelospermum jasminoides - Star jasmine',
    description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'
  };
  
  $('#picture').attr('src', data.picture);
  $('#title').text(data.title);
  $('#description').text(data.description);