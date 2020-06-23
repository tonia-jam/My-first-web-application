
/* let data = {
    picture: 'photos/csillagjazmin.jpg',
    title: 'Trachelospermum jasminoides - Star jasmine',
    description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'
  };

$('#picture').attr('src', data.picture);
$('#title').text(data.title);
$('#description').text(data.description); */

  let currentPhoto = 0;
  let imagesData = [
      {picture: 'photos/csillagjazmin.jpg', title: 'Trachelospermum jasminoides - Star jasmine', description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'},
      {picture: 'photos/foetida.jpg', title: 'Passiflora foetida - Stinking passionflower', description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'},
      {picture: 'photos/harangvirag.jpg', title: 'Campanula cochleariifolia - Fairy thimble', description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'},
      {picture: 'photos/helleborus2.jpg', title: 'Helleborus orientalis - Lenten rose', description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'},
      {picture: 'photos/hepatica.jpg', title: 'Hepatica nobilis - Liverwort', description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'},
      {picture: 'photos/jazmin.jpg', title: 'Jasminum polyanthum - White jasmine', description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'},
      {picture: 'photos/kakukkfu.jpg', title: 'Thymus citriodorus - Lemon thyme', description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'},
      {picture: 'photos/passiflora.jpg', title: 'Passiflora - Passionflower', description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'},
      {picture: 'photos/pillango.jpg', title: 'Rotheca myricoides - Butterfly bush', description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'},
      {picture: 'photos/rangpur.jpg', title: 'Citrus × limonia - Rangpur', description: 'Star jasmine is a vine that produces highly fragrant, white blossoms that attract bees. A valuable perfume oil is extracted from the steam distilled or tinctured flowers and used in high end perfumery.'},
  ];
  
$('#picture').attr('src', imagesData[currentPhoto].picture);
$('#title').text(imagesData[currentPhoto].title);
$('#description').text(imagesData[currentPhoto].description);